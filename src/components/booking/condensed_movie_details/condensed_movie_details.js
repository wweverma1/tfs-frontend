import React from 'react'
import styled from 'styled-components'

const CondensedMovieDetails = (props) => {
    return (
        <Container>
            <img src="/images/cinema.png" alt="cinema icon" />
            <Details>
                <h1>
                    {props.movie.name}
                </h1>
                <SubTitle>
                    {props.movie.lang} • {props.movie.duration}m • Animated
                </SubTitle>
            </Details>
        </Container>
    )
}

export default CondensedMovieDetails

const Container = styled.div`
    padding: 30px 0px 0px;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex: 1;
    align-items: center;

    img {
        padding: 0px 20px 0px 5px;
    }
`

const Details = styled.div`
    line-height: 3px;
    padding: 10px;
    text-align: left;

    @media (max-width: 900px) {
        h1 {
            font-size: 22px;
        }
    }
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249, 0.6);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`



