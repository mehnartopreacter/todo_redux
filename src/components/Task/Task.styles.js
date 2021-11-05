import styled from "styled-components";

export const TaskWrapper = styled.div`
  background-color: ${props => props.isCompleted ? "teal" : "lightpink"};
  text-align: left;
  max-width: 500px;
  margin: auto;
  padding-left: 10px;
  display: flex;
  align-items: center;
  min-height: 40px;
`

export const TaskText = styled.div`
  margin: 0 20px;
`

export const DelButton = styled.button`
  background-color: darkred;
  color: white;
  border-radius: 25%;
`

export const Date = styled.div`
  padding-left: 20px;
`