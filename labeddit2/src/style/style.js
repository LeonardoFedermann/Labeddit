import { TextField } from '@material-ui/core'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

// ERROR PAGE

export const ErrorContainer = styled.main`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Arial';
background-image: url('https://static.vecteezy.com/ti/vetor-gratis/p1/1866145-papel-de-parede-de-azul-claro-gradiente-poligono-vetor.jpg');
@keyframes entrance{
    0%{
        transform: translatey(10px);
    }   
}
h1{
    font-family: 'Arial Black';
    font-size: 125%;
    animation: entrance 1s;
}
p{
    font-family: 'Arial';
    font-size: 20px;
    width: 80%;
    text-align: center;
    animation: entrance 1s;
}
div{
    display:flex;
    align-item: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 20em;
    animation: entrance 1s;
}
`

//LOADING

export const LoadingContainer = styled.div`
border: 20px solid #dfe3ee;
border-radius: 50%;
border-top-color: #2c387e;
width: 50px;
height: 50px;
margin-top: 60px;
@keyframes rotation{
    to{
        transform: rotate(360deg);
    }
}
animation: rotation 3s linear infinite;
`

//LANGUAGES MENU

export const Menu = styled.section`
width: 200px;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-color: #6573c3;
Button{
    margin: 1em;
}
`

// LOGIN AND REGISTER PAGES

export const LoginAndRegisterContainer = styled.main`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-image: url('https://static.vecteezy.com/ti/vetor-gratis/p1/1866145-papel-de-parede-de-azul-claro-gradiente-poligono-vetor.jpg');
@media (max-height: 450px){
    height: 200vh;
}
`

export const LogoContainer = styled.section`
height: 10vh;
font-family: 'Arial Black';
font-size: 150%;
@keyframes entrance{
    0%{
        transform: translatey(10px);
    }   
}
animation: entrance 1s;
`

export const LoginAndRegisterForm = styled.form`
display: flex;
width: 30%;
margin:1.5em 10%;
flex-direction: column;
align-items: center;
justify-content: flex-start;
height: 40vh;
@keyframes entrance{
    0%{
        transform: translatey(10px);
    }   
}
animation: entrance 1s;
div{
    margin: 1em;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
@media (max-width: 1100px){
    width: 80%;
    div{
        flex-direction: column;
        align-items: center;
    }
    Button{
        margin-bottom: 2em;
    }
}
`

export const StyledTextField = styled(TextField)`
width: 100%;
`

// HEADER

export const HeaderContainer = styled.header`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
color: white;
background-color: #2c387e;
h1{
    font-family: 'Arial Black';
    font-size: 150%;
}
div{
    height: 5vh;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: space-around;
}
p{
    font-family: 'Arial';
    margin: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    :hover{
        cursor: pointer;
        background-color: white;
        color: #2c387e;
    }
}
`

// FEED AND POST PAGES

export const FeedAndPostContainer = styled.main`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
`

export const ShowAndHideButtonContainer = styled.div`
width:30%;
height: 7em;
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: 1100px){
    width: 90%;
}
`

export const ShowAndHideButton = styled(Button)`
width:100%;
`

export const FeedFormsContainer = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
`

export const CreatePostForm = styled.form`
width: 40%;
height: 35vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding-bottom: 1em;
h3{
    font-family: 'Arial Black';
    color: #2c387e;
    margin-bottom: 0;
}
@media (max-width: 1100px){
    width: 90%;
    Button{
        margin-top: 1em;
    }
}
`

export const SearchForm = styled.form`
width: 40%;
height: 15vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding-bottom: 1em;
h3{
    font-family: 'Arial Black';
    color: #2c387e;
    margin-bottom: 0;
}
@media (max-width: 1100px){
    width: 90%;
    height: 15vh;
    margin-top: 4.5em;
    margin-bottom: 2em;
}
`

export const PostsContainer = styled.section`
width: 100%;
height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
overflow-y: auto;
h3{
    font-family: 'Arial Black';
    color: #2c387e;
    margin-bottom: 0;
    width: 90%;
    text-align: center;
}
`

export const CommentsContainer = styled.section`
width: 50%;
height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
overflow-y: auto;
@media (max-width:1100px){
    width: 100%;
}
`

export const CreateCommentForm = styled.form`
width: 95%; 
height: 0.5em;
margin: 2em 0;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 1100px){
    width: 91%;
}
`

export const CreateCommentField = styled(TextField)`
width: 95%;
`

//POST AND COMMENT CARDS

export const LikesContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
margin: 0;
`

export const Text = styled.p`
overflow-y: auto;
width: 100%;
align-self: right;
margin-top: 0.5em;
margin-bottom: 0;
`

export const PostCard = styled.div`
position: relative;
margin-top: 2em;
max-height: 18em;
width: 50%;
border: 1.5px solid #2c387e;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
@media (max-width: 1100px){
    width: 90%;
    max-height: 25em;
}
strong{
    width: 100%;
    text-align: left;
}
h3{
    border-radius: 10px 10px 0 0;
    background-color: #2c387e;
    color: white;
    height: 4em;
    width: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media (max-width: 1100px){
        height: 6em;
    }
}
section{
    border-radius: 0 0 10px 10px;
    width: 100%;
    height: 3em;
    background-color: #2c387e;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        font-size: 1em;
        text-align: center;
        background: none;
        border: none;
        color: ${props => props.buttonColor};
        cursor: pointer;
        p{
            margin-left:500px;
            transform: scale(1.5);
        }
    }
    b{
        margin-right:0.5em;
        cursor: pointer;
    }
}
`

export const CommentCard = styled.div`
position: relative;
margin-top: 1em;
max-height: 18em;
width: 95%;
border: 1.5px solid #2c387e;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
strong{
    width: 100%;
    text-align: left;
}
h3{
    border-radius: 10px 10px 0 0;
    background-color: #2c387e;
    color: white;
    height: 4em;
    width: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
section{
    width: 100%;
    margin-top: 0.5em;
    height: 2em;
    background-color: #6573c3;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    button{
        font-size: 1em;
        text-align: center;
        background: none;
        border: none;
        color: ${props => props.buttonColor};
        cursor: pointer;
        p{
            margin-left:500px;
            transform: scale(1.5);
        }
    }
    b{
        margin-right:0.5em;
        cursor: pointer;
    }
}
@media (max-width: 1100px){
    width: 90%;
}
`