import styled from '@emotion/styled'
import React, { memo } from 'react'
import Gnb from '../header/Gnb'
import Snb from '../header/Snb'

function Header() {
  return (
    <NavContainer>
      <Gnb />
      <Snb />
    </NavContainer>
  )
}

export default memo(Header)

const NavContainer = styled.nav`
  width: 100%;
`
