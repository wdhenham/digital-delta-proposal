import React from 'react'
import styled from 'styled-components'
import Video from '../assets/videos/herovid.mp4'
import GlobalStyle from './styles/GlobalStyles'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInLine/>
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Proposal Title</HeroH1>
                    <HeroP>Proposal Subtitle</HeroP>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 60vh;
    position: relative;
    margin-top: -80px;
    padding: 0 1rem;

    :before{
        content: "";
        position: absolute;
        top:0;
        bottom : 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(
            180deg,
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100%
        ),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    }
`

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

const HeroContent = styled.div`
    z-index: 3;
    //width: 100vw;
    height: calc(80vh-80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
    width: 100vw
`

const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
    height: 60vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
`

const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    //padding: 0 1rem;
`

const HeroP = styled.p`
    font-size: clamp(1rem, 3vw, 3rem);
    font-weight: 400;
    margin-bottom: 2rem;
`