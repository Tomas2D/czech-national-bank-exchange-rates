import styled from 'styled-components'

export const Input = styled.input`
  font-size: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  line-height: 1.5;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.colors.input};
  background: ${({ theme }) => theme.colors.inputBg};
  text-align: right;

  &:disabled {
    opacity: 0.85;
    outline: 0;
  }

  &:read-only {
    cursor: not-allowed;
    outline: 0;
  }
`
