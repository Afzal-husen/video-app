import React from 'react'
import styled from 'styled-components'
import { Comment } from "./utils/allComponents"
 
const Container = styled.div`

`
const NewComment = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0;
`
const Input = styled.input`
width: 100%;
background-color: ${({theme}) => theme.wrapperBg};
border-radius: 5px;
outline: none;
border: none;
border-bottom: 0.5px solid ${({theme}) => theme.hrLine};
caret-color: ${({theme}) => theme.textColor};
color: ${({theme}) => theme.textColor};
`

const Image = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
`





const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Image src='https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
            <Input placeholder='Add a comment...' />
        </NewComment>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </Container>
  )
}

export default Comments