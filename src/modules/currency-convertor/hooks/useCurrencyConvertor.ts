import { useRetrieveRates } from '@module/currency-convertor/hooks/useRetrieveRates'
import { useState } from 'react'

export function useCurrencyConvertor() {
  const { data = [], isLoading, error, ...query } = useRetrieveRates()
  const isDisabled = Boolean(isLoading || error)

  const [sourceAmount, setSourceAmount] = useState<number | null>(null)
  const onSourceAmountChange = (value: number | null) => {
    setSourceAmount(value)
  }

  return {
    exchangeRates: {
      data,
      isLoading,
      error,
      isDisabled,
      ...query,
    },

    sourceAmount,
    onSourceAmountChange,
  }
}
