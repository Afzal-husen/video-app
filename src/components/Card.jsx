import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
    width: display:  ${(props) => props.type === "sm" ? "100%" : "400px"};
    height: ${(props) => props.type === "sm" ? "100px" : "300px"};;
    // background-color: ${({theme}) => theme.wrapperBg}; 
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: ${(props) => props.type === "sm" && "10px"};
    `
    
    const CardImg = styled.img`
    width: ${(props) => props.type === "sm" ? "150px" : "100%"};
    height:  ${(props) => props.type === "sm" ? "100px" : "202px"};
    background-color: gray;
`

const ChannelDetail = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 10px;
`
const ChannelImg = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display:  ${(props) => props.type === "sm" && "none"};
`

const Text = styled.div``
const Title = styled.p`
    margin: 0;
    color: ${({theme}) => theme.textColor};
`
const ChannelName = styled.h1`
    font-size: 15px;
    margin: 0;
    color: #696969;
`
const Info = styled.div`
    color: #696969;
    font-size: 12px;
    font-weight: 500;
`




const Card = ({type}) => {
  return (
    <Link to={"/video/test"}>    
    <Container type={type} >
        <CardImg src='https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' type={type} />

        <ChannelDetail>
            <ChannelImg src='https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'  type={type}/>
            <Text>
                <Title>
                    Test video
                </Title>
                <ChannelName>
                    Lama dev
                </ChannelName>
                <Info>
                    600,000 Views 
                </Info>
            </Text>
        </ChannelDetail>
    </Container>
    </Link>
  )
}

export default Card