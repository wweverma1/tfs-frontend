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
            <BookTicket>
                <img src="/images/ticket.png" alt="" />
                <span>BOOK TICKETS</span>
            </BookTicket>
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

const BookTicket = styled.button`
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px; 
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249, 0.8);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(249, 249, 249);
    }
`