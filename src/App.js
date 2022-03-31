import Header from "./components/Header";
import Router from "./Router";
import { createGlobalStyle } from "styled-components"



const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  html, body, ul, ol, li, dl, dt, dd, table, thead, tbody, tfoot, h1, h2, h3, h4, h5, h6
  a, img, div, span, p{
    padding: 0;
    margin: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
  }

  table {
    border-collapse : collapse;
    border_spacing: 0;
  }
  body{
    font-family: 'Source Sans Pro', sans-serif;
  }
  a{
    text-decoration: none;
    color: inherit;
  }


`

function App() {
  
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router />
    </>
  );
}

export default App;
