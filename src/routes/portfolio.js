import styled from "styled-components";
import Banner from "../components/Banner";
import PortfolioData from "../portfolioData";
import { NavLink, useParams } from "react-router-dom";
import { useState } from 'react';

const PortfolioPage = styled.div`
    width: 100%;
    height: 130vh;
    background-color: #222;
`

const PortfolioMenu = styled.ul`
  width: 100%;
  margin: 0 auto;
  margin-top 80px;
  list-style : none;
  color: #fff;
  display: flex;
  justify-content:center;
  position: relative;
  

  & li{
    display: table-cell;
    vertical-align: middle;
    font-weight: bold;
    height: 70px;
    text-align: center;
    padding: 0 30px;
    border-left: 1px solid #222;
    @media screen and (max-width:1200px){
      font-size: 12px;
    }
    @media screen and (max-width: 900px){
      padding: 0 10px;
    }
    
  }
`

export const PortfolioContainer = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 100px;
  background : url(${props => props.Bgimg}) no-repeat top/cover;
  position: relative;
  & div{
    position: absolute;
    width: 500px;
    height: inherit;
    background-color: rgba(0,0,0,0.7);
    top : 0; left: 10%;
    transition: all 0.1s ease;
    color: #fff;
    & h3{
      margin-top: 30px 50px;
      font-size: 2rem;
      padding: 50px;
    }
    & p{
      padding: 30px 50px;
      white-space: pre-line;
      font-size:18px;
    }
    & span{
      padding: 50px;
      color: #6373ff;
      font-size: 14px;
    }

    @media screen and (max-width:1200px){
      width: 80%;
    }
  }
`



const Portfolio = () => {
  const { id } = useParams();

    return (
      <PortfolioPage>
        <Banner/>
        <PortfolioMenu>
          {
            PortfolioData.map((data) => {
              return (
                <NavLink 
                  to={data.id} 
                  key={data.id}
                  style={({isActive}) => (isActive ? {backgroundColor:"#6373ff"} : {backgroundColor: "#aaa"})}
                >
                  <li>{data.title}</li>
                </NavLink>
              )
            })
          }
        </PortfolioMenu>
        <a href={PortfolioData[id].page} target="_blank" rel="noreferrer">
          <PortfolioContainer Bgimg={PortfolioData[id].url}>
            <div>
              <h3>{PortfolioData[id].title}</h3>
              <p>{PortfolioData[id].info}</p>
              <p>제작기간 : {PortfolioData[id].day}</p>
              <p>기여도 : {PortfolioData[id].contri}</p>
              <span>{PortfolioData[id].message}</span>
            </div>
          </PortfolioContainer>
        </a>  
      </PortfolioPage>
    )
}

export default Portfolio;