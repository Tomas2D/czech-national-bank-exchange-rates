import { act, renderHook } from '@testing-library/react'
import { useCurrencyConvertor } from './useCurrencyConvertor'
import { vi } from 'vitest'
import { ExchangeRateEntry } from '@module/currency-convertor/types'

describe('useCurrencyConvertor', () => {
  beforeAll(() => {
    vi.mock('./useRetrieveRates', () => ({
      useRetrieveRates: vi.fn().mockImplementation(() => {
        return Promise.resolve<ExchangeRateEntry[]>([
          {
            currency: 'CZK',
            code: 'CZK',
            amount: 1,
            rate: 1,
            country: 'CZK',
          },
        ])
      }),
    }))
  })

  it('should increment counter', () => {
    const { result } = renderHook(() => useCurrencyConvertor())
    act(() => {
      result.current.onSourceAmountChange(100)
    })
    expect(result.current.sourceAmount).toBe(100)
  })
})
