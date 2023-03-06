import React from 'react'
import styled from 'styled-components'
import { SignInBtn, Button } from "./Menu"
import { AccountCircleOutlined, SearchOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"




const Container =  styled.div`
  background-color: ${({theme}) => theme.bg};
  padding: 15px 20px;
  position: sticky;
  top: 0;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20%;

  justify-content: end;
`

const SearchContainer = styled.div`
  display: flex;
  width: 400px;
  align-items: center;
  border: 0.2px solid ${({theme}) => theme.textColor};  
  border-radius: 5px;
  color: ${({theme}) => theme.textColor};
  `
  
  const InputField = styled.input`
  padding: 10px;
  width: 100%;
  background-color: ${({theme}) => theme.bg};
  border-radius: 5px;
  outline: none;
  border: none;
  caret-color: ${({theme}) => theme.textColor};
  color: ${({theme}) => theme.textColor};
`


const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <SearchContainer>
            <InputField
             type="text"
            placeholder="Search..." 
            />
            <SearchOutlined />
        </SearchContainer>
        <SignInBtn>
          <Link
            to={"/Signin"}
          >
            <Button>
              <AccountCircleOutlined /> SIGN IN
            </Button>
          </Link>
        </SignInBtn>
      </Wrapper>
    </Container>
  )
}

export default NavBar