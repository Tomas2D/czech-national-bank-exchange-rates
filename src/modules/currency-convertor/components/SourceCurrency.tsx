import { PriceInput, PriceInputProps } from '@ui/components/PriceInput'
import styled from 'styled-components'

export interface SourceCurrencyProps {
  isDisabled?: boolean
  onChange: PriceInputProps['onChange']
}

export function SourceCurrency({ onChange, isDisabled }: SourceCurrencyProps) {
  return (
    <StyledWrapper>
      <PriceInput
        onChange={onChange}
        inputProps={{
          id: 'source-amount',
          autoFocus: true,
          placeholder: 'enter amount',
          disabled: Boolean(isDisabled),
        }}
      />
      <StyledInputLikeText as={'span'}>,- Kč</StyledInputLikeText>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
`

export const StyledInputLikeText = styled.span`
  font-size: 1rem;
  border-radius: 4px;
  padding: 0.5rem 0 0.5rem 0.25rem;
  color: ${({ theme }) => theme.colors.input};
  background: ${({ theme }) => theme.colors.inputBg};
`
