import { cleanup, render } from '@testing-library/react'
import { afterEach } from 'vitest'
import React, { ReactElement } from 'react'
import { Core } from '@module/core/components/Core'

afterEach(() => {
  cleanup()
})

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => <Core>{children}</Core>,
    ...options,
  })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
