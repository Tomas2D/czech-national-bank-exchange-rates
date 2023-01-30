import { render, screen, userEvent } from '@app/test/testUtils'
import { Select } from '@ui/components/Select'
import { vi } from 'vitest'

describe('Select', async () => {
  it('should render the select', () => {
    render(<Select options={[]} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('should show the placeholder', () => {
    render(
      <Select
        options={[]}
        wrapperProps={{
          placeholder: 'Select desired currency',
        }}
      />,
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toHaveTextContent('Select desired currency')
  })

  it('should render select with options', async () => {
    const handleChange = vi.fn()
    const options = [
      {
        value: 'CZK',
        label: 'Česká koruna',
        item: {
          id: 'CZK',
          rate: 22.15,
        },
      },
      {
        value: 'USD',
        label: 'American Dollar',
        item: {
          id: 'USD',
          rate: 22.15,
        },
      },
    ]

    render(<Select onChange={handleChange} options={options} />)

    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(2)

    expect(handleChange).toBeCalledTimes(0)
    await userEvent.selectOptions(select, 'USD')
    expect(handleChange).toHaveBeenNthCalledWith(1, options[1])
  })
})
