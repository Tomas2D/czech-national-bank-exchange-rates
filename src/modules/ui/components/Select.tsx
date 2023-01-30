import { ChangeEventHandler, DetailedHTMLProps, SelectHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Input } from '@ui/components/Input'
import { noop } from '@app/utils/helpers'

export interface Option<T> {
  value: string
  label: string
  item: T
}

export interface SelectProps<T> {
  selectedValue?: Option<unknown>['value']
  options: Option<T>[]
  wrapperProps?: Omit<
    DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
    'ref'
  >
  onChange?: (option?: Option<T>) => void
}

export function Select<T = undefined>({
  selectedValue,
  options,
  wrapperProps,
  onChange = noop,
}: SelectProps<T>) {
  const showPlaceholder = Boolean(wrapperProps?.placeholder)
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (select) => {
    const selectedOption = options[select.target.selectedIndex - Number(showPlaceholder)]
    onChange(selectedOption)
  }

  return (
    <StyledSelect {...wrapperProps} onChange={handleChange} value={selectedValue ?? ''}>
      {showPlaceholder && (
        <option value='' disabled hidden>
          {wrapperProps!.placeholder}
        </option>
      )}
      {options.map((option) => (
        <StyledOption key={option.value} value={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  )
}

export const StyledSelect = styled.select`
  margin: 0;
  line-height: 1.5;
  font-size: 100%;
`
export const StyledOption = styled.option(Input)
