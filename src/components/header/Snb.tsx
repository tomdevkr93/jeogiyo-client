import styled from '@emotion/styled'
import React from 'react'

function Snb() {
  return (
    <SnbContainer>
      <Form>
        <input type="text" placeholder="건물명, 도로명, 지번으로 검색하세요." />
        <button type="reset" />
        <button type="submit">검색</button>
      </Form>
    </SnbContainer>
  )
}

export default Snb

const SnbContainer = styled.div``

const Form = styled.form``
