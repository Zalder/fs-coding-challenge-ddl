import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  #root {
    width: 100%;
    height: 100%;
  }
  
  html {
    box-sizing: border-box;
    height: 100%;
  }

body {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    background-color: #FAF9F6;
    height: 100%;
    margin: 0
}

*, *:before, *:after {
    box-sizing: inherit;
    font-family: "Nunito Sans", sans-serif;
    color: darkslategrey;
}

ul
{
list-style: none;
padding: 0;
margin: 0;
}

`;
