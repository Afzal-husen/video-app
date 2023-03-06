import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { Menu, NavBar, Home, Video, SignIn } from "./components/utils/allComponents"
import { darkMode, lightMode } from './components/utils/theme'
import { useState } from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"


const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 7;
`

const Wrapper = styled.div`
background-color: ${({ theme }) => theme.wrapperBg};
height: 100vh;
overflow-y: scroll;
::-webkit-scrollbar {
  display: none;
}
`

const App = () => {

const [ darkTheme, setDarkTheme ] = useState(true)

  return (
    <ThemeProvider theme={darkTheme ? darkMode : lightMode}>
      <Container>
        <BrowserRouter>
          <Menu darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
          <Main>
            <NavBar />
            <Wrapper>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/video/:id" element={<Video />} />
                <Route path="/signin" element={<SignIn />} />
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>  
  )
}

export default App