import React from 'react'
import styled from 'styled-components'
import Slider from '../slider/slider'
import Movies from '../movies/movies' 

function home() {
    return (
        <Container>
            <Slider />
            <Movies />
        </Container>
    )
}

export default home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
`