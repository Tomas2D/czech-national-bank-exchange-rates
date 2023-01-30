import { render, screen, userEvent } from '@app/test/testUtils'
import { TargetCurrency } from '@module/currency-convertor/components/TargetCurrency'

describe('TargetCurrency', async () => {
  it('should render the sub-components', () => {
    render(<TargetCurrency sourceAmount={0} exchangeRates={[]} />)

    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should calculate the target amount', async () => {
    const exchangeRates = [
      {
        currency: 'USD',
        code: 'USD',
        amount: 1,
        rate: 22,
        country: 'USD',
      },
      {
        currency: 'GBP',
        code: 'GBP',
        amount: 1,
        rate: 30,
        country: 'GBP',
      },
    ]

    render(<TargetCurrency sourceAmount={1000} exchangeRates={exchangeRates} />)

    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.readOnly).toBe(true)

    expect(input.value).toBe('1000')

    const select = screen.getByRole('combobox') as HTMLSelectElement
    await userEvent.selectOptions(
      select,
      screen.getByRole('option', {
        name: 'USD',
      }),
      {
        delay: 10,
      },
    )
    await expect(input.value).toMatchInlineSnapshot('"45.45"')
    await userEvent.selectOptions(select, exchangeRates[1].code)
    expect(input.value).toMatchInlineSnapshot('"33.33"')
  })
})
