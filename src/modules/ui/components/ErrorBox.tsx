import styled from 'styled-components'
import Button from '@ui/components/Button'
import { Paragraph } from '@ui/components/Paragraph'

export interface ErrorBoxProps {
  error?: Error | string
  retry?: () => unknown
}

export function ErrorBox({ error, retry, ...props }: ErrorBoxProps) {
  return (
    <StyledWrapper {...props}>
      <Paragraph>Error has occurred 😭</Paragraph>
      {error && (
        <StyledSerializedError>
          {JSON.stringify(typeof error === 'string' ? error : error.stack, null, 4)}
        </StyledSerializedError>
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
