import styled from "styled-components";

const InputContainer = styled.div`
  background: transparent;

  position: relative;
  width: 100%;

  >.input__password__eyes{
    position: absolute;
    top: 43px;
    right: 10px;
    font-size: 20px;
  }

 >.input{

  >.title{
    width: 100%;
    color:${(props) => props.textColor};
    text-align: left;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  >input{
    box-shadow: 0px 4px 12px rgb(0 0 0 / 10%);
    width: 100%;
    padding: 0 10px;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.borderColor};
    display: flex;
    min-height: 45px;
    position: relative;
    -webkit-transition: all 100ms;
    transition: all 100ms;
    box-sizing: border-box;
    font-size: 20px;

    ::placeholder {
    font-size:1.7rem;
    margin-bottom: 15px ;
}

   
 }
}
 
`;

export default InputContainer;
