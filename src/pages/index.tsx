import React from "react"
import styled from "styled-components"

export default function IndexPage() {
  return (
    <Container>
      <Title>Hello Mr Nolan</Title>
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
`;

const Title = styled.h1`
  font-family: cursive;
  text-shadow: 3px 3px 20px #3e3e3e4a;
`;