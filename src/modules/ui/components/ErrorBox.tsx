import styled from 'styled-components'
import Button from '@ui/components/Button'

export interface ErrorBoxProps {
  error?: Error
  retry?: () => unknown
}

export function ErrorBox({ error, retry, ...props }: ErrorBoxProps) {
  return (
    <StyledWrapper {...props}>
      <p>Error has occurred 😭</p>
      <StyledSerializedError>{JSON.stringify(String(error), null, 4)}</StyledSerializedError>
      {error?.stack && (
        <StyledSerializedError>{JSON.stringify(error.stack, null, 4)}</StyledSerializedError>
      )}
      {retry && <Button buttonProps={{ onClick: retry }}>Retry the action</Button>}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.errorBg};
  color: ${({ theme }) => theme.colors.error};
  flex: 0;
  width: auto;
  padding: 1rem 2rem;
`

const StyledSerializedError = styled.pre`
  border: 1px solid ${({ theme }) => theme.colors.errorCodeBorder};
  padding: 0.25rem;
  word-break: break-word;
  white-space: inherit;
`
