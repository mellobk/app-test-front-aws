import styled from "styled-components";

// separator
 const Button = styled.button`
background: ${(props) => props.bgColor};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
padding: 10px 20px;
color: ${(props) => props.textColor};
cursor: pointer;
display: flex;
`;
// menu

export default Button