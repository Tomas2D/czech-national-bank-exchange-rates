import { render, screen, userEvent } from '@app/test/testUtils'
import { SourceCurrency } from '@module/currency-convertor/components/SourceCurrency'
import { vi } from 'vitest'
import { noop } from '@app/utils/helpers'

describe('SourceCurrency', async () => {
  it('should render the sub-components', () => {
    render(<SourceCurrency isDisabled={false} onChange={noop} />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByText(',- Kč')).toBeInTheDocument()
  })

  it('should react to input change', async () => {
    const handleChange = vi.fn()
    const { container } = render(<SourceCurrency isDisabled={false} onChange={handleChange} />)

    expect(container).toBeInTheDocument()

    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(handleChange).toBeCalledTimes(0)
    expect(input.value).toBe('')
    await userEvent.type(input, '100')
    expect(input.value).toBe('100')
    expect(handleChange).toBeCalledTimes(3)
  })

  it('cannot type if disabled', async () => {
    const handleChange = vi.fn()
    const { container } = render(<SourceCurrency isDisabled={true} onChange={handleChange} />)

    expect(container).toBeInTheDocument()
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('')
    expect(handleChange).toBeCalledTimes(0)
    await userEvent.type(input, '100')
    expect(handleChange).toBeCalledTimes(0)
  })
})
