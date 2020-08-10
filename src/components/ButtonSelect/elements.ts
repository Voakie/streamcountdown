import styled from "@emotion/styled"

export const Wrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Button = styled.button`
  margin: 0;
  border: 1px solid lightgrey;
  background: none;
  padding: 12px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  border-right: none;
  outline: none;
  cursor: pointer;
  flex-grow: 1;

  &.first {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &.last {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-right: 1px solid lightgrey;
  }

  &:hover {
    background: whitesmoke;
  }

  &.active {
    background: lightgrey;
  }

  .dark & {
    color: #dedede;
    border: 1px solid #333333;
    border-right: none;

    &.last {
      border-right: 1px solid #333333;
    }
  }

  .dark &:hover {
    background: #191919;
  }

  .dark &.active {
    background: #333333;
  }
`
