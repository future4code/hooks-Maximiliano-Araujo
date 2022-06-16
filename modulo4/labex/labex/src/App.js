import HomePage from "./pages/HomePage"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <HomePage />
    </div>
  )
}


export default App;
