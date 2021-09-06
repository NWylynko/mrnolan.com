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

  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='80' patternTransform='scale(3) rotate(170)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(120,1.9%,20.4%,1)'/><path d='M-4.798 13.573C-3.149 12.533-1.446 11.306 0 10c2.812-2.758 6.18-4.974 10-5 4.183.336 7.193 2.456 10 5 2.86 2.687 6.216 4.952 10 5 4.185-.315 7.35-2.48 10-5 1.452-1.386 3.107-3.085 4.793-4.176'  stroke-width='1' stroke='hsla(60,1.4%,13.9%,1)' fill='none'/><path d='M-4.798 33.573C-3.149 32.533-1.446 31.306 0 30c2.812-2.758 6.18-4.974 10-5 4.183.336 7.193 2.456 10 5 2.86 2.687 6.216 4.952 10 5 4.185-.315 7.35-2.48 10-5 1.452-1.386 3.107-3.085 4.793-4.176'  stroke-width='1' stroke='hsla(150,14.3%,83.5%,1)' fill='none'/><path d='M-4.798 53.573C-3.149 52.533-1.446 51.306 0 50c2.812-2.758 6.18-4.974 10-5 4.183.336 7.193 2.456 10 5 2.86 2.687 6.216 4.952 10 5 4.185-.315 7.35-2.48 10-5 1.452-1.386 3.107-3.085 4.793-4.176'  stroke-width='1' stroke='hsla(44,88.4%,66.1%,1)' fill='none'/><path d='M-4.798 73.573C-3.149 72.533-1.446 71.306 0 70c2.812-2.758 6.18-4.974 10-5 4.183.336 7.193 2.456 10 5 2.86 2.687 6.216 4.952 10 5 4.185-.315 7.35-2.48 10-5 1.452-1.386 3.107-3.085 4.793-4.176'  stroke-width='1' stroke='hsla(81,28%,90.2%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");


`

const Title = styled.h1`
  font-family: cursive;
  color: #f7f4f4;
  font-size: 10vw;
`;