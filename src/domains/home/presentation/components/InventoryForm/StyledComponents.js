import styled from "styled-components";

// separator
export const TaskIcon = styled.div`
>svg{
  >path{
    fill:${(props) => props.bgItemColor};
  }
}
`;

export default TaskIcon