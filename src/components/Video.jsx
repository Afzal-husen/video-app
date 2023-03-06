import React from 'react'
import styled from "styled-components" 
import { ThumbUpOutlined,
   ThumbDownOutlined,
    ReplyOutlined,
     LibraryAddOutlined
     } from "@mui/icons-material"

 import { Comments, Card } from "./utils/allComponents"    


const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`

const Content = styled.div`
  flex: 7;
  height: 100vh;
  flex-direction: column;
`

const Recommendation = styled.div`
  flex: 3;
  height: 100vh;
`

const VideoWrapper = styled.div`

`

const Title  = styled.h1`
  color: ${({theme}) => theme.textColor};
  font-size: 24px;
`

const Info = styled.div`
  color: #a6a6a6;
`

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`

const Button = styled.button`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  border: none;
  background-color: ${({theme}) => theme.wrapperBg};
  color: ${({theme}) => theme.textColor};
  cursor: pointer;
`

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Hr = styled.hr`
    margin: 15px 0;
    border: 0.5px solid ${({theme}) => theme.hrLine};
`

const Channel = styled.div`
  display: flex;
`

const ChannelInfo = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
`

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`

const ChannelName = styled.span`
  color: ${({theme}) => theme.textColor};
  margin-bottom: 10px;
  font-weight: bold;
`

const SubscriberCount = styled.span`
  color: ${({theme}) => theme.softText};
  font-size: 14px;
`

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
`

const ChannelDescription = styled.p`
  color: ${({theme}) => theme.textColor};
  font-size: 14px;
`


const Subscribe = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  background-color: #cd0000;
  border-radius: 5px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
`



const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width={"100%"}
            height="400"
            src='https://www.youtube.com/embed/k3Vfj-e1Ma4'
            title="YouTube video player"
          >
            
          </iframe>
        </VideoWrapper>
        <Title>
          Test Video  
        </Title>
        <Details>
          <Info>
            7,948,154 views • Jun 22, 2022
          </Info>        
          <Buttons>
            <Button><ThumbUpOutlined />123</Button>
            <Button><ThumbDownOutlined />Dislike</Button>
            <Button><ReplyOutlined />Share</Button>
            <Button><LibraryAddOutlined />Save</Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <ChannelImage src='https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
            <ChannelDetail>
              <ChannelName>
                Test name
              </ChannelName>
              <SubscriberCount>
                200k subscribers
              </SubscriberCount>
              <ChannelDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, temporibus ut sequi a fuga earum facilis dolores tenetur non dolorem?
              </ChannelDescription>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  )
}

export default Video