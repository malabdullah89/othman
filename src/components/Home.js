import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Presonal from './Personal'

function Home() {
    return (
        <Container>
            <Header />
            <Presonal />
            
        </Container>
    )
}

export default Home


const Container = styled.main`

  

    &:before {
        // background: url("/images/bg-ef.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
    


`
