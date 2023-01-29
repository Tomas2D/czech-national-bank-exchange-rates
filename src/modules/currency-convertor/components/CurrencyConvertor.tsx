import styled from 'styled-components'
import { SourceCurrency } from '@module/currency-convertor/components/SourceCurrency'
import { TargetCurrency } from '@module/currency-convertor/components/TargetCurrency'
import { useCurrencyConvertor } from '@module/currency-convertor/hooks/useCurrencyConvertor'
import Title from '@ui/components/Title'
import { ErrorBox } from '@ui/components/ErrorBox'
import { Paragraph } from '@ui/components/Paragraph'

export function CurrencyConvertor() {
  const {
    exchangeRates: { isDisabled, data, refetch, error, dataUpdatedAt, isLoading },
    onSourceAmountChange,
    sourceAmount,
  } = useCurrencyConvertor()

  return (
    <>
      {error ? <StyledErrorBox error={error as Error} retry={refetch} /> : null}
      <StyledWrapper>
        <StyledInnerWrapper>
          <Title level={'h2'}>FROM</Title>
          <SourceCurrency isDisabled={isDisabled} onChange={onSourceAmountChange} />
        </StyledInnerWrapper>
        <StyledMiddleWrapper>
          <span>➡️️</span>
          <StyledSmallParagraph>
            {isLoading
              ? 'Loading...'
              : `Updated at: ${new Date(dataUpdatedAt).toLocaleTimeString()}`}
          </StyledSmallParagraph>
        </StyledMiddleWrapper>
        <StyledInnerWrapper>
          <Title level={'h2'}>TO</Title>
          <TargetCurrency sourceAmount={sourceAmount} exchangeRates={data} />
        </StyledInnerWrapper>
      </StyledWrapper>
    </>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`

const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
`

const StyledMiddleWrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 1;
  font-size: 3rem;
  cursor: default;
  justify-items: center;
  text-align: center;
  min-width: 7.5rem;
`

const StyledErrorBox = styled(ErrorBox)`
  max-width: 48rem;
  margin: 2rem auto;
`

const StyledSmallParagraph = styled(Paragraph)`
  font-size: 0.75rem;
`
