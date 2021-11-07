import styled from '@emotion/styled'

export const ErrorPageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem;
text-align: center;
`
export const ErrorSpanTitle = styled.span`
font-size: 5rem;
padding: 1.5rem;
font-weight: bold;
font-family: var(--font-primary);
`
export const ErrorMsg = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;
  font-family: var(--font-primary);
  color: var(--brand-color_3);
`

export const ErrorGif = styled.img`
  transition: all .3s ease;
  margin: 1rem auto;
  width: 300px;
  height: 300px;
  object-fit: contain;
  :hover {
    transform: scale(1.1);
  }
`