import Button from '@ui/components/Button'
import { render, screen } from '@app/test/testUtils'

describe('Button', async () => {
  it('should render a button', () => {
    render(<Button level='primary'>Click on me!</Button>)
    expect(screen.getByText('Click on me!')).toBeInTheDocument()

    const el = screen.getByRole('button', {
      name: /click on me/i,
    })
    expect(el).toBeInTheDocument()
    expect(el.getAttribute('type')).toBe('button')
  })
})
