import React from 'react'
import styled from "styled-components"


const Container = styled.div`
    display: flex;
    gap: 10px;
`

const Image = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`

const CommentDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const UserName = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: ${({theme}) => theme.textColor}
`
const Time = styled.span`
    font-size: 12px;
    font-weight: lighter;
    color: ${({theme}) => theme.softText}
`
const CommentDescription = styled.p`
    font-size: 14px;
    color: ${({theme}) => theme.textColor}
`




const Comment = () => {
  return (
    <Container>
        <Image src='https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
        <CommentDetail>
            <UserName>
                John Doe <Time>1 day ago</Time>
            </UserName>
            <CommentDescription>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cum animi sit. Saepe, minima accusamus facilis aperiam a necessitatibus adipisci ex deserunt. Suscipit magnam autem reiciendis consequuntur mollitia veniam voluptas!
            </CommentDescription>
        </CommentDetail>
    </Container>
  )
}

export default Comment