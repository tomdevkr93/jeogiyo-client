import React from 'react'
import { memo } from 'react'
import Header from './Header'

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default memo(Layout)
