import styled from "styled-components";

// separator
export const Item = styled.div`
	padding-bottom: 10px;
		display: flex;
		align-items: center;
    border-width: medium;
    border-top-color: transparent;
    border-style: solid;
    border-bottom-color:${(props) => props.borderColor};
    font-weight: ${(props) => props.fontWeight}; 
    border-left-color: transparent;
    border-right-color: transparent;
    cursor: pointer;
`;

export default Item