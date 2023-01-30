import { render, screen } from '@app/test/testUtils'
import { ErrorBox } from '@ui/components/ErrorBox'

describe('ErrorBox', async () => {
  it('should render intro message', () => {
    render(<ErrorBox />)
    expect(screen.getByText('Error has occurred 😭')).toBeInTheDocument()
  })

  it('should render a error stack', () => {
    const err = new Error('Internal error!')
    err.stack = 'stack content'

    render(<ErrorBox error={err} />)

    expect(screen.getByText('Error has occurred 😭')).toBeInTheDocument()
    expect(screen.getByText(JSON.stringify(err.stack, null, 4))).toBeInTheDocument()
  })

  it('should render a plain error', () => {
    const err = 'We have a problem'

    render(<ErrorBox error={err} />)
    expect(screen.getByText('Error has occurred 😭')).toBeInTheDocument()
    expect(screen.getByText(JSON.stringify(err, null, 4))).toBeInTheDocument()
  })
})
