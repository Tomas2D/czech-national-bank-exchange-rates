import { Core } from '@module/core/components/Core'
import { Layout } from '@ui/components/Layout'
import { Content } from '@ui/components/Content'
import Title from '@ui/components/Title'
import { CurrencyConvertor } from '@module/currency-convertor/components/CurrencyConvertor'
import { ErrorBoundary } from '@module/core/components/ErrorBoundary'
import { Paragraph } from '@ui/components/Paragraph'
import styled from 'styled-components'

export function App() {
  return (
    <Core>
      <Layout>
        <Content>
          <Title>💰 Currency Exchange Rates App 💰</Title>
          <StyledParagraph>
            Welcome to my fun and playful 🎉 currency exchange rates web app!
          </StyledParagraph>

          <ErrorBoundary>
            <CurrencyConvertor />
          </ErrorBoundary>
        </Content>
      </Layout>
    </Core>
  )
}

const StyledParagraph = styled(Paragraph)`
  margin-top: 0.75rem;
  text-align: center;
`
