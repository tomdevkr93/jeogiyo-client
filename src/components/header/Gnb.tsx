import React, { memo } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

function Gnb() {
  return (
    <GnbContainer>
      <GnbWrapper>
        <Link href="/">
          <h1>
            <img
              src="https://www.yogiyo.co.kr/mobile/image/logo-yogiyo.png?v=2153b4b2a5e1164e22be91592c22a1368aaf6115"
              alt="BI"
            />
          </h1>
        </Link>
        <Link href="/login">
          <Login>로그인</Login>
        </Link>
      </GnbWrapper>
    </GnbContainer>
  )
}

export default memo(Gnb)

const GnbContainer = styled.div`
  width: 100%;
  height: 78px;
  background-color: #fa0050;
`
const GnbWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1020px;
  min-width: 320px;
  height: 100%;

  h1 {
    position: absolute;
    left: 0;
    top: 50%;
    width: 90px;
    transform: translateY(-50%);
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }
`

const Login = styled.a`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  max-height: 40px;
  padding: 7px 0;
  text-align: center;
  font-size: 18px;

  color: #fff;
  border-radius: 2px;
  background: #fa0050;
  border: 1px solid #ea7266;

  cursor: pointer;
`
