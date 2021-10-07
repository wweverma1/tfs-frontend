import React from 'react'
import styled from 'styled-components'
import CondensedMovieDetails from './condensed_movie_details/condensed_movie_details'
import ScreeningDetails from './screening_details/screening_details'
import SeatChart from './seat_chart/seat_chart'

function booking() {
    return (
        <Container>
            <CondensedMovieDetails />
            <ScreeningDetails />
            <SeatChart />
        </Container>
    )
}

export default booking

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