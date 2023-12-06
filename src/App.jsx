import "./App.css";
import { Main } from "./components/main";
import { createGlobalStyle } from "styled-components";

function App() {
  return(
    <>
      <GlobalStyles />
      <Main />
    </>
  )
}

export default App;

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
`