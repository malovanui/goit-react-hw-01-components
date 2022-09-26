import styled from "styled-components";


export const StatisticsCard = styled.section`
margin-right: auto;
margin-left: auto;
margin-bottom: 100px;
width: 400px;
background-color: #ffffff;
padding-top: 20px;
`

export const StatisticsTitle = styled.h2`
text-align: center;
color: grey;

margin-bottom: 20px;
`

export const StatisticsList = styled.ul`
display: flex;
`
export const StatisticsItem = styled.li`
width: 100px;
display: flex;
flex-direction: column;
justify-content: center;

background-color: ${(id) => {
    if (id) {
            return `#${Math.floor(Math.random()*16777215).toString(16)}`
        }}};
`

export const StatisticsLabel = styled.span`
text-align: center;
color: white;
font-size: 11px;
`

export const StatisticsPercent = styled.span`
text-align: center;
color: white;
font-size: 16px;
font-weight: 700;
`