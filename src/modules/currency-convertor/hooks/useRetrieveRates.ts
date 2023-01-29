import { useQuery } from 'react-query'
import { ExchangeRateEntry } from '@module/currency-convertor/types'

const API_ENDPOINT = 'https://summer-snow-e787.geoscan.workers.dev/'

async function fetchRates(): Promise<ExchangeRateEntry[]> {
  const response = await fetch(API_ENDPOINT)

  if (!response.ok) {
    throw new Error(`Failed to retrieve exchange rates!`)
  }

  const content = await response.text()
  return (
    content
      .split('\n')
      // First row -> Date info
      // Second row -> header
      .slice(2)
      .filter(Boolean)
      .map((row) => {
        const [country, currency, amount, code, rate] = row.trim().split('|')

        return {
          country,
          currency,
          code,
          amount: Number.parseInt(amount),
          rate: Number.parseFloat(rate),
        }
      })
  )
}

export function useRetrieveRates() {
  return useQuery('exchangeRates', fetchRates, {
    retry: false,
    refetchInterval: 60 * 1000,
  })
}
