import styled from 'styled-components'

export const CompleteOrderContainer = styled.form`
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const SectionBase = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
