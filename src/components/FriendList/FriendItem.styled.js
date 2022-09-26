import styled, { createGlobalStyle } from "styled-components";

export const FriendListItem = styled.li`
display: flex;
align-items: center;
width: 200px;
padding: 20px;
background-color: grey;
`
export const ItemStatus = styled.span`
display: block;
width: 10px;
height: 10px;
margin-right: 10px;

border-radius: 50%;

background-color: ${( {status} ) => {
    if (status) {
        console.log(status)
      return 'green';
    } else {
        
        return 'red';
        
    }
  }};
`

export const ItemAvatar = styled.img`
margin-right: 30px;
border: 1px solid black;
border-radius: 10%;
`

export const ItemName = styled.p`
font-weight: 700;
`
