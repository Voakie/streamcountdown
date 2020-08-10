import styled from "@emotion/styled"
import InputMask from "react-input-mask"

export const Form = styled.div`
  margin: 20px;
  margin-top: 12px;
  margin-bottom: 12px;
  padding: 20px;
  border-radius: 3px;
  box-shadow: lightgrey 0 0 20px;
  border: 1px solid lightgrey;
  width: 400px;

  .dark & {
    background: #101010;
    border: 1px solid #1d1d1d;
    box-shadow: none;
    color: #dedede;
  }
`

export const Heading = styled.h2`
  text-align: center;
  margin-bottom: 8px;
`

export const Subtext = styled.div`
  text-align: center;
`

export const BoldLink = styled.a`
  font-weight: 700;
  color: #5353e2;
  cursor: pointer;
  text-decoration: none;

  .dark & {
    color: #6767f3;
  }
`

export const Segment = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Label = styled.div`
  font-weight: 600;
  padding: 5px;
  padding-left: 0;
  font-size: 18px;
  margin-top: 15px;
  display: flex;
  align-items: center;

  &:first-of-type {
    margin-top: 0;
  }
`

export const MaskedInput = styled(InputMask)`
  margin: 0;
  border: 1px solid lightgrey;
  background: none;
  padding: 12px;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  width: calc(100% - 26px);
  cursor: text;

  &.short {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .dark & {
    border: 1px solid #333333;
    color: #dedede;
  }
`

export const Input = styled.input`
  margin: 0;
  border: 1px solid lightgrey;
  background: none;
  padding: 12px;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  width: calc(100% - 26px);
  cursor: text;

  &.short {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .dark & {
    border: 1px solid #333333;
    color: #dedede;
  }
`

export const InputWithExit = styled.div`
  display: flex;
`

export const ExitCustom = styled.button`
  background: none;
  border: 1px solid lightgrey;
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;

  .dark & {
    border: 1px solid #333333;
    border-left: none;
    color: #dedede;
  }

  &:hover {
    background: whitesmoke;
  }

  .dark &:hover {
    background: #191919;
  }
`

export const CreateButton = styled.button`
  width: 100%;
  padding: 15px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  margin-top: 30px;
  background: #5353e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  .dark & {
    background: #6767f3;
  }

  &:hover {
    background: #4f4fca;
  }

  .dark &:hover {
    background: #4f4fca;
  }
`
