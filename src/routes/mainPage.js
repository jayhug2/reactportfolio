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
                <p>35살, 조금 늦은 나이에 새로운 도전을 하는 중입니다.<br/>
                저의 도전은 당당하지만 때로는 부족한 이력이 부끄럽기도합니다.<br/>
                그래서 부끄럽지않기위해 최선을 다해 공부하며 발전에 힘쓰고 있습니다<br/>
                빠르게, 끊임없이 공부하고 성장하는 개발자가 되겠습니다.<br/>
                신입으로서 취업이 어려운 나이라는것을 스스로도 잘 아는만큼<br/>
                1,2년 경험삼아 스쳐가는 인연이 아닌 오래도록 회사의 든든한 버팀목으로 성장해보이겠습니다.
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