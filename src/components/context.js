import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Question from '../assets/svg/undraw_Questions_re_1fy7.svg'
import Credit from '../assets/svg/undraw_Credit_card_payments_re_qboh.svg'

const Context = () => {
    return (
        <ContextContainer id="context">
            <Title>
                <TopLine>
                    Context
                </TopLine>
                <Description>
                    Brief Description
                </Description>
            </Title>
            <ContentWrapper>
                <ColumnOne>
                    <Content>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                    </Content>
                    <Content>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                    </Content>
                    <Content>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                    </Content>
                </ColumnOne>
                <ColumnTwo>
                    <SVGWrapper>
                        <Question />
                    </SVGWrapper>
                </ColumnTwo>
            </ContentWrapper>
            <br></br>
            <ContentWrapper>
                <ColumnTwo>
                    <SVGWrapper>
                        <Credit />
                    </SVGWrapper>
                </ColumnTwo>
                <ColumnOne>
                    <Content>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                    </Content>
                    <Content>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                    </Content>
                    <Content>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                    </Content>
                </ColumnOne>
            </ContentWrapper>
        </ContextContainer>
    )
}

export default Context

const ContextContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 100%;
    justify-content: center;
    padding: 0.5rem calc((100vw - 1300px) / 2);
`
const Title = styled.div`
    max-height: 100%;
    font-weight: bold;
    padding-top: 0.5rem;
    padding: 0 1rem;
`

const TopLine = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 0.5rem;
    letter-spacing: 3px;
    color: #122C7B;
`


const Description = styled.p`
        font-size: 1.5rem;
        margin-bottom: 1rem;
`


const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-height: 100%;
    padding: 0 1rem;
    grid-gap: 10px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;

`

const ColumnTwo  = styled.div`
    align-content: center;
`

const Content = styled.p``

const SVGWrapper = styled.div`
    svg{
        height: 100%;
        width: 100%;
    }
`