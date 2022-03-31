import styled,{ keyframes } from "styled-components";
import Skill from "../components/Skill"

const Container = styled.div`
    width: 100%;
    height: 80vh;
    background:url("https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80") no-repeat center/cover;
    display: flex;
    justify-content:center;
`
const TitleBox = styled.div`
    width: 80%;
    max-width: 1200px;
    display: flex;
    align-items:center;
    color: white;
    position: relative;
    
`
const Title = styled.h1`
    font-size: 5rem;
    color: #fff;
    p{ font-size:0.3em; }
    transition: 0.1s ease-in;
    @media screen and (max-width:900px){
      font-size: 3.5rem;
    }
    margin-top:100px;
`
const arrAni = keyframes`
  0%{
    bottom:10px;
  }
  50%{
    bottom: 20px;
  }
  100%{
    bottom: 10px;
  }
`



const Morebtn = styled.span`
    width: 120px;
    height: 40px;
    position: absolute;
    bottom: 10px;
    left: 0; right: 0;
    margin: auto;
    background : url('http://jayhug2.dothome.co.kr/myimg/bottomarr.png') no-repeat center/cover;
    cursor: pointer;
    animation: ${arrAni} 1s ease-in infinite;
`


const Mainpage = () => {
    
    return (
        <>
          <Container>
            <TitleBox>
              <Title>const Jayhyuk = <br/>"FrontEnd Developer"
                <p>지나간 시간을 되돌릴 순 없지만, 앞으로의 시간은 잘 만들어 나갈 수 있습니다.<br/>
                    공부하는게 즐거운, 발전에 목마른 저는 장재혁입니다.<br/>
                    프론트엔드 개발자를 목표로 하고 있습니다.
                </p>
              </Title>
              <Morebtn onClick={() => { window.scrollTo({top:"700",behavior: 'smooth'})}}></Morebtn>
            </TitleBox>
          </Container>
          <Skill/>
          
        </>
    )
}
export default Mainpage;