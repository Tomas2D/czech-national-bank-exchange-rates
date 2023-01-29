import { Component, ErrorInfo, ReactNode } from 'react'

/**
 * Source: https://reactjs.org/docs/error-boundaries.html
 */
export class ErrorBoundary extends Component<
  { children: ReactNode },
  {
    errorInfo: ErrorInfo | null
    error: unknown | null
  }
> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </>
          </details>
        </div>
      )
    }
    // Normally, just render children
    return this.props.children
  }
}
