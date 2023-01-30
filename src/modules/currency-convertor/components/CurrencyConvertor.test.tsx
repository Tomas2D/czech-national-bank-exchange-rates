import { render, screen } from '@app/test/testUtils'
import { CurrencyConvertor } from '@module/currency-convertor/components/CurrencyConvertor'

describe('CurrencyConvertor', async () => {
  it('should render two inputs and one select', () => {
    render(<CurrencyConvertor />)

    expect(screen.getAllByRole('combobox')).toHaveLength(1)
    expect(screen.getAllByRole('textbox')).toHaveLength(2)
  })
})
