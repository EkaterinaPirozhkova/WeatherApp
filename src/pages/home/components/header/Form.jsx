import React from "react";
import classes from "./Form.module.css";
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    height: 100%;
    margin: 0;
    color: rgb(85, 85, 85)
  }
`
const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
`
const StyledInput = styled.input`
  display: block;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  
`
const StyledButton = styled.button`
  display: block;
  background-color: #ddf7fd;
  color: #000000;
  font-size: .9rem;
  border: 0;
  border-radius: 5px;
  height: 22px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
`

const Form = props => (
    <>
        <GlobalStyle/>
        <StyledForm className={classes.form} onSubmit={props.weather} >
            <StyledInput type="text" name="city" placeholder="Город"/>
            <StyledButton>Найти</StyledButton>
        </StyledForm>
    </>

);

export default Form;