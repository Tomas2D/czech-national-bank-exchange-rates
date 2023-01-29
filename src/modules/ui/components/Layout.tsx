import styled from 'styled-components'

export const Layout = styled.main`
  background-color: ${({ theme }) => theme.colors.layoutBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 2rem 4rem;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
`
