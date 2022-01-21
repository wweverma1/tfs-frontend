import React from 'react'
import styled from 'styled-components'

function condensed_movie_details() {
    return (
        <Container>
            <img src="/images/cinema.png" alt="cinema icon" />
            <Details>
                <h1>
                    YOUR NAME
                </h1>
                <SubTitle>
                    English • 116m • Animated
                </SubTitle>
            </Details>
        </Container>
    )
}

export default condensed_movie_details

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
    text-align: center;
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249, 0.6);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`



