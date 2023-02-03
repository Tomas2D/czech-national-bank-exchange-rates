import { Select } from '@ui/components/Select'
import styled from 'styled-components'
import { ExchangeRateEntry } from '@module/currency-convertor/types'
import { useState } from 'react'
import { Input } from '@ui/components/Input'
import { roundTo } from '@app/utils/helpers'

export interface TargetCurrencyProps {
  exchangeRates: ExchangeRateEntry[]
  sourceAmount: number | null
}

function calculateTargetAmount(
  sourceAmount: TargetCurrencyProps['sourceAmount'],
  target: ExchangeRateEntry | null,
) {
  if (target) {
    const amount = target.rate / target.amount
    const result = (sourceAmount || 0) / amount
    return roundTo(result, 2)
  }
  return ''
}

const DefaultExchange: ExchangeRateEntry = {
  currency: 'CZK',
  code: 'CZK',
  amount: 1,
  rate: 1,
  country: 'CZK',
}

export function TargetCurrency({ exchangeRates, sourceAmount }: TargetCurrencyProps) {
  const [targetCurrency, setTargetCurrency] = useState<ExchangeRateEntry | null>(null)
  const targetAmount = calculateTargetAmount(sourceAmount, targetCurrency || DefaultExchange)

  return (
    <StyledWrapper>
      <Input value={targetAmount} readOnly />
      <Select
        selectedValue={targetCurrency?.code}
        onChange={(el) => el && setTargetCurrency(el.item)}
        options={exchangeRates.map((entry) => ({
          label: entry.code,
          value: entry.code,
          item: entry,
        }))}
        wrapperProps={{
          placeholder: DefaultExchange?.country,
          disabled: exchangeRates.length === 0,
        }}
      />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
`
