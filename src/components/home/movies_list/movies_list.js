import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { movieData } from "./../../../data/data.js";

function movies_list() {
    return (
        <Container>
            <h4>Now Showing</h4>
            <Content>
                {movieData.map((movie, key) => {
                    return (
                        <Link to={'/movie/'+movie.id}>
                            <Wrap>
                                <img src={movie.poster} alt={movie.name} />
                            </Wrap>
                        </Link>
                    );
                })}
            </Content>
        </Container>
    )
}

export default movies_list


const Container = styled.div`
    margin-top: 10px;
    padding: 30px 0px 26px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr)); 
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
        rgba(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`