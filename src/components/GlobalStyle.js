import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}


body{
    background-color: #1b1b1b;
}

button{
    font-weight:bold;
    font-size:1,1rem;
    cursor: pointer;
    padding:1rem 2rem;
    border:3px solid #23d997;
    background: transparent;
    color:#fff;
    transition: all 0.5s ease;
    &:hover{
        background-color:#23d997;
        color:#fff
    }
}

h2{
    font-weight:lighter;
    font-size:4rem;
}
h3{
    color:#fff;
}
h4{
    font-weight:bold;
}
span{
   color:#23d997;
   font-weight:bold;
}
a{
   font-size:1.1rem; 
}
p{
    padding: 3rem 0rem;
    color:#ccc;
    font-size:1.4rem;
    line-height:150%;
}
`

export default GlobalStyle;