import { vi } from 'vitest'
import { SpyInstance } from '@vitest/spy'
import { renderHook, waitFor } from '@testing-library/react'
import { useRetrieveRates } from '@module/currency-convertor/hooks/useRetrieveRates'
import { Core } from '@module/core/components/Core'

describe('useRetrieveRates', () => {
  let fetchMock: SpyInstance

  beforeAll(() => {
    fetchMock = vi.spyOn(global, 'fetch').mockImplementationOnce(async () => {
      return {
        ok: true,
        text: () =>
          Promise.resolve(`27 Jan 2023 #20
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|15.582
Brazil|real|1|BRL|4.325
Bulgaria|lev|1|BGN|12.182
Canada|dollar|1|CAD|16.455
Philippines|peso|100|PHP|40.407
Denmark|krone|1|DKK|3.203
EMU|euro|1|EUR|23.825`),
      } as Response
    })
  })

  afterAll(() => {
    fetchMock.mockReset()
  })

  it('should correctly parse data', async () => {
    const { result } = renderHook(() => useRetrieveRates(), {
      wrapper: Core,
    })

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
      expect(result.current.isSuccess).toBe(true)
      expect(result.current.data).toMatchInlineSnapshot(`
        [
          {
            "amount": 1,
            "code": "AUD",
            "country": "Australia",
            "currency": "dollar",
            "rate": 15.582,
          },
          {
            "amount": 1,
            "code": "BRL",
            "country": "Brazil",
            "currency": "real",
            "rate": 4.325,
          },
          {
            "amount": 1,
            "code": "BGN",
            "country": "Bulgaria",
            "currency": "lev",
            "rate": 12.182,
          },
          {
            "amount": 1,
            "code": "CAD",
            "country": "Canada",
            "currency": "dollar",
            "rate": 16.455,
          },
          {
            "amount": 100,
            "code": "PHP",
            "country": "Philippines",
            "currency": "peso",
            "rate": 40.407,
          },
          {
            "amount": 1,
            "code": "DKK",
            "country": "Denmark",
            "currency": "krone",
            "rate": 3.203,
          },
          {
            "amount": 1,
            "code": "EUR",
            "country": "EMU",
            "currency": "euro",
            "rate": 23.825,
          },
        ]
      `)
    })
  })
})
