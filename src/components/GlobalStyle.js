import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        /* scroll-behavior: smooth; */
    }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    
    
    body{
        background:#1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x:hidden;
    }

    button{
        font-weight:bold;
        font-size:1.1rem;
        cursor: pointer;
        padding:1rem 2rem;
        border:3px solid #23d997;
        color:white;
        transition:all 0.5s ease;
        background: transparent;
        font-family: 'Inter', sans-serif;
        &:hover{
            background-color:#23d997;
            color:white;
        }
       
    }
     h2{
        font-weight:lighter;
        font-size:4rem;
        width: max-content;
        @media (max-width: 500px) {
            width: 100%; 
            font-size: 3rem;
            display: flex;
            span{
            margin: 0 .85rem;
            }
            justify-content: space-between;
        }
        }
    h3{
        color:white;
    }
    h4{
        font-weight:bold;
        font-size:2rem;
    }
    a{
        font-size:1.1rem;
    }
    span{
        font-weight:bold;
        color:#23d997;
    }
    p{
        padding:3rem 0rem;
        color:#ccc;
        font-size:1.4rem;
        line-height:150%;
    }
    .collapse {
    /* height: 10rem; */
  }
`;

export default GlobalStyle;
