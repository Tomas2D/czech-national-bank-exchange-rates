import { render, screen, userEvent } from '@app/test/testUtils'
import { PriceInput } from '@ui/components/PriceInput'

describe('PriceInput', async () => {
  it('should render the input', () => {
    render(<PriceInput />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should not allow invalid values', async () => {
    render(<PriceInput />)
    const el = screen.getByRole('textbox') as HTMLInputElement
    expect(el).toBeInTheDocument()

    await userEvent.type(el, 'This is not a number!')
    expect(el.value).toBe('')

    await userEvent.type(el, '1')
    expect(el.value).toBe('1')
  })

  it('should format the value', async () => {
    render(<PriceInput />)
    const el = screen.getByRole('textbox') as HTMLInputElement
    expect(el).toBeInTheDocument()

    await userEvent.type(el, '150500900')
    expect(el.value).toBe('150 500 900')

    await userEvent.clear(el)
    expect(el.value).toBe('')

    await userEvent.type(el, '7859')
    expect(el.value).toBe('7 859')
  })
})
