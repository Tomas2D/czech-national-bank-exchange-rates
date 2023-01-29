import type { ComponentProps, ReactNode } from 'react'
import styled from 'styled-components'

const baseStyle = styled.button`
  color: ${(props) => props.theme.colors.text};
  line-height: 1;
  font-weight: 800;
  border-radius: 8px;
  border: 1px solid black;
`

const ButtonComponents = {
  primary: styled(baseStyle)`
    font-size: 1.25rem;
    line-height: 1.5;
    text-align: center;
  `,
  secondary: styled(baseStyle)`
    font-size: 1rem;
    line-height: 1.35rem;
  `,
} as const

export interface ButtonProps {
  children: ReactNode
  level?: keyof typeof ButtonComponents
  buttonProps?: ComponentProps<typeof baseStyle>
}

const Button = ({ level = 'primary', children, buttonProps }: ButtonProps) => {
  const Component = ButtonComponents[level]

  return (
    <Component type={'button'} {...buttonProps}>
      {children}
    </Component>
  )
}

export default Button
