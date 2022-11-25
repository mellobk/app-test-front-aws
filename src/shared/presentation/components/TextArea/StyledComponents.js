import styled from "styled-components";

// separator
 const TextArea = styled.textarea`
border-radius: 5px;
font-size:20px;
width:100% ;
border: 1px solid hsl(0, 0%, 80%);
border-color: ${(props) => props.borderColor};
padding:10px 10px;
::placeholder{
    font-size:1.7rem;
}
`;
// menu

export default TextArea