import React, { Component } from 'react'
import styled from 'styled-components'
class TestOne extends Component {

    render() {

        return (
            <div>
                <Button>Normal Button</Button>
                <Button as="a" href="/">Link with Button styles</Button>
                <TomatoButton href="/">Link with Tomato Button styles</TomatoButton>
                <Atag as="button"> Hello </Atag>
            </div>
        )
    }
}

export default TestOne

const Button = styled.button`
display: inline-block;
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
display: block;
`;

const TomatoButton = styled(Button)`
color: tomato;
border-color: tomato;
`;
const Atag = styled.a`
display: inline-block;
border: 1px solid black
display: block;
`;