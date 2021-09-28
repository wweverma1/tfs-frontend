import React from 'react'
import styled from 'styled-components'
import MovieDetails from '../movie_details/movie_details'
import ScreeningDetails from '../screening_details/screening_details'

function movie() {
    return (
        <Container>
            <MovieDetails />
            <ScreeningDetails /> 
        </Container>
    )
}

export default movie

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
`