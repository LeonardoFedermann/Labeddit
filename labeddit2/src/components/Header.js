import React from 'react'
import { HeaderContainer } from '../style/style'

export default function Header(props) {
    return (
        <HeaderContainer>
            <h1>Labeddit</h1>
            <div>{props.children}</div>
        </HeaderContainer>
    )
}