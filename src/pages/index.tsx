import React from "react"
import styled from "styled-components"

export default function IndexPage() {
  return (
    <Container>
      <h1>Hello Mr Nolan</h1>
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
`;