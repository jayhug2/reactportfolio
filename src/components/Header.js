import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState,useEffect } from "react";




    
const MenuContainer = styled.ul`
    display: flex;
    justify-content: center;
    width:100%;
    position: fixed;
    background-color:${props => props.bgColor};
    z-index:10;
    list-style: none;
`
const Menus = styled.li`
    font-size: 1.3rem;
    color: #fff;
    cursor:pointer;
    height:10vh;
    font-weight: bold;
    line-height:10vh;
    box-sizing:border-box;
    transition: 0.1s ease-in;
    a{ padding: 2.5vh; }
    &:hover{ border-bottom: 5px solid #6373ff; }
    @media screen and (max-width:900px){
      font-size: 1rem;
    }
`

const Category = [
  { path: "/", name : "HOME"},
  { path: "/profile", name : "PROFILE"},
  { path: "/portfolio/0", name :"PORTFOLIO"}];



const Header = () => {
    const [scOn, setScOn] = useState(false);
    const handleScroll = () => {
      if(window.scrollY > 90 && !scOn) {
        setScOn(true);
        return
      }
      if(window.scrollY <= 90 && scOn) {
        setScOn(false);
        return
      } 
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },[scOn]);
    return (
          <MenuContainer bgColor={scOn? "rgba(0,0,0,0.9)" : undefined}>
            {Category.map((c) => (
              <Menus key={c.name}>
                  <NavLink 
                    to={c.path}
                    style={({isActive}) => (isActive ? {color:"#6373ff"}: undefined) }
                  >{c.name}</NavLink>
              </Menus>
            ))}
          </MenuContainer>
    )
}

export default Header;