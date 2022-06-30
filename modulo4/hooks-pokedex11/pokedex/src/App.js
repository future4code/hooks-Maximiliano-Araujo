import Router from "./routes/Routes";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
   box-sizing: border-box;
  }
  `

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  )
}

export default App;
