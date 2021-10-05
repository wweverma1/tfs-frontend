import React, { useState } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

function MovieDetails() {
    const [mute, setMute] = useState(true);

    return (
        <Container>
            <Details>
                <h1>
                    YOUR NAME
                </h1>
                <SubTitle>
                    2016 • 116m • Animated
                </SubTitle>
                <Description>
                    Your Name (Japanese: 君の名は。, Hepburn: Kimi no Na wa) is a 2016 Japanese animated romantic fantasy film produced by CoMix Wave Films and released by Toho. It depicts a high school boy in Tokyo and a high school girl in the Japanese countryside who suddenly and inexplicably begin to swap bodies.
                </Description>
                <BookTicket>
                    <img src="/images/ticket.png" alt="" />
                    <span>BOOK TICKETS</span>
                </BookTicket>
            </Details>
            <Trailer>
                <MovieTrailerPlayer>
                    {/* <iframe id="MovieTrailer" title="Trailer" src="https://www.youtube.com/embed/3KR8_igDs1Y?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" frameborder="0" allow="autoplay"></iframe> */}
                    <ReactPlayer id='MovieTrailer' url='https://www.youtube.com/watch?v=3KR8_igDs1Y' playing={true} loop={true} muted={mute} controls={false} width='100%' height='100%' />
                    <UnMute onClick={() => setMute(!mute)}>
                        <img src={mute ? "/images/muted.png" : "/images/unmuted.png"} alt="Unmute" />
                    </UnMute>
                </MovieTrailerPlayer>
            </Trailer>
        </Container>
    )
}

export default MovieDetails

const Container = styled.div`
    display: flex;
    margin-top: 20px;
    height: 100%;
    width: 100%;
    background: #0c111b;
    border-radius: 10px;
    overflow: hidden;

    @media (max-width: 900px) {
        flex-direction: column-reverse;
    }
`

const Details = styled.div`
    width: 50%;
    padding: 30px 36px 26px;

    @media (max-width: 900px) {
        width: 100%;
    }
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249, 0.6);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    width: 80%;
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249, 0.8);
`

const BookTicket = styled.button`
    margin-top: 50px;
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

const Trailer = styled.div`
    width: 50%;

    @media (max-width: 900px) {
        width: 100%;
    }
`

const MovieTrailerPlayer = styled.div`
    
    position: relative;
    padding-top: 56.25%;
    
    #MovieTrailer {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    }
`

const UnMute = styled.button`
    border-radius: 50%;
    padding: 8px 8px;
    background: rgb(249, 249, 249, 0.6);
    position: absolute;
    left:5px;
    bottom:5px;

    &: hover {
        background: rgb(249, 249, 249);
    }
`