import React from 'react'
import styled from 'styled-components'

import './spinner.css'

const LoadingWrapper = styled.div`
  height: calc(100vh - 6.5rem);
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const index = () => {
  return (
    <LoadingWrapper>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingWrapper>
  )
}

export default index
