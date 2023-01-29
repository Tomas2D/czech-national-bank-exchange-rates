import { Input } from './Input'
import { ChangeEvent, ComponentProps, useState } from 'react'

function parseValue(value: string): number | null {
  const trimmed = (value || '').trim().replace(/[., , ]/g, '')
  const parsed = parseInt(trimmed)

  return Number.isNaN(parsed) ? null : parsed
}

export function formatPrice(value: number | null): string {
  if (value === undefined || value === null) {
    return ''
  }

  const intl = new Intl.NumberFormat('cs-CZ')
  return intl.format(value)
}

export interface PriceInputProps {
  inputProps: Omit<ComponentProps<typeof Input>, 'type' | 'onChange' | 'value' | 'defaultValue'>
  onChange?: (value: null | number) => void
}

export function PriceInput({ onChange, inputProps }: PriceInputProps) {
  const [value, setValue] = useState<number | null>(null)

  const handleChange = (el: ChangeEvent<HTMLInputElement>) => {
    const value = parseValue(el.target.value)
    setValue(value)
    onChange?.(value)
  }

  return (
    <Input
      {...(inputProps?.autoFocus && {
        ref: (el) => el?.focus?.(),
      })}
      {...inputProps}
      type={'text'}
      onChange={handleChange}
      value={formatPrice(value)}
    />
  )
}
