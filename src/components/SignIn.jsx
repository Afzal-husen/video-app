import React from 'react'
import styled from "styled-components"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 0.2px solid ${({theme}) => theme.hrLine};
padding: 20px 40px;
margin-top: 40px;
border-radius: 10px;
background-color: ${({theme}) => theme.bg};
`

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


const SignUpWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const SignInHeader = styled.h2`
  font-weight: bold;
  margin: 0;
  color: ${({theme}) => theme.textColor};

`

const SignInPara = styled.p`
  font-size: 20px;
  margin: 10px 0;
  color: ${({theme}) => theme.textColor};
`
const Or = styled.h2`
  margin: 15px 0;
  color: ${({theme}) => theme.textColor};
`
const UserName = styled.input`
  width: 200px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.bg};
  border:  0.2px solid ${({theme}) => theme.hrLine};
  color: ${({theme}) => theme.textColor};
  
`
const Password = styled.input`
width: 200px;
padding: 10px;
margin-bottom: 10px;
border-radius: 5px;
background-color: ${({theme}) => theme.bg};
border:  0.2px solid ${({theme}) => theme.hrLine};
color: ${({theme}) => theme.textColor};
`
const Email = styled.input`
width: 200px;
padding: 10px;
margin-bottom: 10px;
border-radius: 5px;
background-color: ${({theme}) => theme.bg};
border:  0.2px solid ${({theme}) => theme.hrLine};
color: ${({theme}) => theme.textColor};
`
const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.hover};
  border: none;
  color: ${({theme}) => theme.softText};
  cursor: pointer;
`

const Extras = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin-top: 7px;
  color: ${({theme}) => theme.softText};
`
const Span = styled.div`
  font-size: 12px;
  display: flex;
  gap: 10px;
`




const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <SignInWrapper>
          <SignInHeader>Sign In</SignInHeader>
          <SignInPara>to continue to BestTube</SignInPara>
          <UserName placeholder='username'  />
          <Password placeholder='password' type={"password"}/>
          <Button>Sign In</Button>
        </SignInWrapper>
        <Or>Or</Or>
        <SignUpWrapper>
          <UserName placeholder='username' />
          <Email placeholder='email' type={"email"} />
          <Password placeholder='password' type={"password"} />
          <Button>Sign up</Button>
        </SignUpWrapper>
      </Wrapper>
      <Extras>
        <Span>English(USA)</Span>
        <Span>
          <span>Help </span> 
          <span>Privacy </span>
          <span>Terms </span>
        </Span>
        
      </Extras>
    </Container>
  )
}

export default SignIn