import styled from "styled-components";

// separator
 const CheckoutNav = styled.div`
box-shadow: none;
  clear: none;
  display: block;
  width: 100%;
  margin-bottom: 40px;


  .step-nav {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    display: inline-block;
    position: relative;

    > .selected {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      > .step {
        background: ${(props) => props.backgroundColor};
        width: 5rem;
        height: 5rem;
        border: 1px solid #6d6e70;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        >.border {
         
          width: 4rem;
          height: 4rem;
          border: 1px solid #6d6e70;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: black;
        }
            >.active{
          background: ${(props) => props.activeColor};
          color: white;
        }
      }
    }

    &:before {
      content: "";
      border-top: 1px solid #6d6e70;
      margin-top: -13px;
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      z-index: -1;
    }
    & li {
      text-align: center;
      display: inline-block;
      float: left;
      position: relative;
      z-index: 2;
    }
    &.quarters {
      width: 80%;
    }
    &.quarters:before {
      margin-right: 12.5%;
      margin-left: 12.5%;
    }
    &.quarters li {
      width: 25%;
    }
  }

  .step-nav li a {

  }

  li a {
    padding: 0;
    display: inline-block;
    line-height: 1.4285714286em;
  }
  a {
    font-size: 1.125em;
    line-height: 1.3333333333;
    font-weight: bold;
    color: #6d6e70;
    padding-top: 72px;
    display: inline-block;
  }
`;
// menu

export default CheckoutNav