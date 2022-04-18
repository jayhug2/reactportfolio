import styled from "styled-components";
import Banner from "../components/Banner";
import PortfolioData from "../portfolioData";
import { NavLink, useParams } from "react-router-dom";

const PortfolioPage = styled.div`
    width: 100%;
    height: auto;
    background-color: #222;
    display: flex;
    flex-wrap : no-wrap;
    padding: 30px 0;
    @media screen and (max-width:1000px){
      height: 100vh;
    }
`

const PortfolioMenu = styled.dl`
  width: 300px;
  list-style : none;
  color: #fff;
  position: relative;
  padding-left: 30px;
  box-sizing: border-box;
  @media screen and (max-width: 1000px){
    width: 100%;
    padding-right: 30px;
  }
  & dt{
    font-weight: bold;
    height: 40px;
    text-align: center;
    font-size: 18px;
    border-bottom: 3px solid #6373ff;
    margin-bottom: 20px;
  }

  & dd{
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    & span {
      font-weight: bold;
    }
    & .links {
      position: absolute;
      right: 10%;
      display: none;
      @media screen and (max-width:1000px){
        display: inline;
      }
    }
  }
`

export const PortfolioContainer = styled.div`
  width: 80%;
  height: 600px;
  margin: 0 auto;
  background : url(${props => props.Bgimg}) no-repeat top/cover;
  & div{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    padding: 50px;
    font-weight: bold;
    box-sizing: border-box;
    & h3{
      margin-top: 50px 50px;
      font-size: 2rem;
      padding: 20px;
    }
    & p{
      padding: 30px 50px;
      white-space: pre-line;
      font-size:20px;
    }
    & span{
      padding: 50px;
      color: red;
      font-size: 18px;
    }
    
  }
  @media screen and (max-width:1000px){
    display: none;
  }
`



const Portfolio = () => {
  const { id } = useParams();
  const pageLink = (e) => {
    let linkNo = e.target.attributes[1].value;
    window.open(PortfolioData[linkNo].page)
  }

    return (
      <>
      <Banner />
      
      <PortfolioPage>
        <PortfolioMenu>
          <dt>Portfolio</dt>
          {
            PortfolioData.map((data) => {
              return (
                <NavLink 
                  to={data.id} 
                  key={data.id}
                  style={({isActive}) => (isActive ? {color:"#6373ff"} : {color: "#aaa"})}
                >
                  <dd>
                    {data.title}
                    <span style={data.code==='독학' ? { color:"orange"} : { color : "green"}}> - {data.code}</span>
                    <span className="links" data-link={data.id} onClick={pageLink}>Link</span>
                  </dd>
                </NavLink>
              )
            })
          }
        </PortfolioMenu>
          <PortfolioContainer Bgimg={PortfolioData[id].url}>
        <a href={PortfolioData[id].page} target="_blank" rel="noreferrer">
            <div>
              <h3>{PortfolioData[id].title}</h3>
              <p>{PortfolioData[id].info}</p>
              <p>제작기간 : {PortfolioData[id].day}</p>
              <p>기여도 : {PortfolioData[id].contri}</p>
              <span>{PortfolioData[id].message}</span>
            </div>
        </a>  
          </PortfolioContainer>
      </PortfolioPage>
      </>
    )
}

export default Portfolio;