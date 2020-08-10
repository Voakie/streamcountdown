import styled from "@emotion/styled"

export const QuestionDot = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background: lightgrey;
  color: white;
  font-size: 15px;
  display: flex;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  user-select: none;
  --moz-user-select: none;
  --ms-user-select: none;
  --webkit-user-sele: none;

  &:hover {
    background: grey;
  }

  .dark & {
    background: #333333;
    color: #dedede;
  }

  .dark &:hover {
    background: #5d5d5d;
  }
`
