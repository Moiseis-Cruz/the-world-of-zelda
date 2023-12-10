import styled from "styled-components";

export const CardContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`

export const GameCard = styled.div`
  padding: 40px 20px;
  border: 3px solid #f9f9f9;
  height: 500px;
`

export const Title = styled.h2`
  margin-top: 20px;
  width: 500px;
`

export const SubTitle = styled.h3`
  margin-top: 20px;
`

export const TextDescription = styled.p`
  margin-top: 20px;
  width: 500px;
  overflow-y: scroll;
  height: 200px;
  padding: 10px;
  border: 3px solid #f9f9f9;
`