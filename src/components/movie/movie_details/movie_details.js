import React, { useState } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import 'font-awesome/css/font-awesome.min.css'
import { Link } from "react-router-dom";

const MovieDetails = (props) => {
    const [mute, setMute] = useState(true);

    return (
        <Container>
            <Details>
                <h1>
                    {props.movie.name}
                </h1>
                <SubTitle>
                    {props.movie.lang} • {props.movie.duration}m • Animated
                </SubTitle>
                <Description>
                    {props.movie.desc}
                </Description>
                <Link to={'/booking/'+props.movie.id} style={{"text-decoration":"none"}}>
                    <BookTicket>
                        <img src="/images/ticket.png" alt="" />
                        <span>BOOK TICKETS</span>
                    </BookTicket>
                </Link>
            </Details>
            <Trailer>
                <MovieTrailerPlayer>
                    <ReactPlayer id='MovieTrailer' url={props.movie.trailer} playing={true} loop={true} muted={mute} controls={false} width='100%' height='100%' />
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
    width: 40%;
    padding: 0px 36px 0px;

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

    @media (max-width: 900px) {
        width: 100%;
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

const Trailer = styled.div`
    width: 60%;

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