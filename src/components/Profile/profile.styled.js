import styled from 'styled-components';

export const UserCard = styled.div`
margin-top: 50px;
margin-right: auto;
margin-left: auto;
margin-bottom: 100px;
width: 300px;

background-color: #fff;
`
export const UserDescription = styled.div`
padding-top: 40px;
padding-bottom: 40px;

display: flex;
flex-direction: column;
justify-content: center;
`

export const UserImg = styled.img`
margin-left: auto;
margin-right: auto;
margin-bottom: 30px;

border-radius: 50%;
border: 1px solid black;
`

export const UserName = styled.p`
margin-right: auto;
margin-left: auto;

font-size: 14px;
`

export const UserTag = styled.p`
margin-right: auto;
margin-left: auto;

font-size: 12px;
color: grey;
`

export const UserLocation = styled.p`
margin-right: auto;
margin-left: auto;

font-size: 12px;
color: grey;
`

export const UserStats = styled.ul`
display: flex;
justify-content: space-around;
background-color: gray;
`

export const UserStatsItem = styled.li`
padding-top: 20px;
padding-bottom: 20px;

display: flex;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;

width: 100px;
border: 1px solid black;
`

export const StatsName = styled.span`
margin-right: auto;
margin-left: auto;
font-size: 12px;
`

export const StatsNum = styled.span`
font-weight: 700;
margin-right: auto;
margin-left: auto;
font-size: 14px;
`