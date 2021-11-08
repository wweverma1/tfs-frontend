import React from 'react'
import styled from 'styled-components'
import CondensedMovieDetails from './condensed_movie_details/condensed_movie_details'
import ScreeningDetails from './screening_details/screening_details'
import SeatChart from './seat_chart/seat_chart'
import {
    Link
} from "react-router-dom";

function booking() {
    return (
        <Container>
            <BookingSection>
                <CondensedMovieDetails />
                <ScreeningDetails />
                <SeatChart />
                <Link to="/ticket" style={{"text-decoration":"none"}}>
                    <BookTicket>
                        <img src="/images/ticket.png" alt="" />
                        <span>BOOK TICKETS</span>
                    </BookTicket>
                </Link>
            </BookingSection>
        </Container>
    )
}

export default booking

const Container = styled.main`
    min-height: calc(100vh - 140px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
`

const BookingSection = styled.div`
    margin-top: 40px;
    height: 100%;
    width: 100%;
    background: #0c111b;
    border-radius: 10px;
    padding: 10px 30px;

    @media (max-width: 900px) {
        padding: 10px 20px;
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

    @media (max-width: 900px) {
        margin-left:10px;
    } 
`