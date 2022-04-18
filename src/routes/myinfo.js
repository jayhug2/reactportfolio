import styled from "styled-components";
import Banner from "../components/Banner";

const Info = styled.div`
    width: 100%;
    height: auto;
    background-color: #222;
    padding-top:1px;
`
const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
`

const Myname = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  margin: 20px;
  margin-top: 30px;
  padding:50px;
  border-bottom: 1px solid #6373ff;
`
const Mystory = styled.h4`
  color: #ccc;
  font-size: 14px;
  text-align: center;
  line-height: 22px;
  padding: 0 5px;
`
const Profile = styled.ul`
  width:100%;
  list-style: none;
  color: white;
  display: flex;
  flex-wrap : wrap;
  padding-bottom: 50px;
  & li{
    width: 33%;
    margin-top: 20px;
    @media screen and (max-width:1200px){
      width: 50%;
    }
    & h4{
      color: #6373ff;
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
    }
    & span{
      display: block;
      text-align: center;
    }
  }
`


const Myinfo = () => {
  return (
    <Info>
      <Banner/>
      <Container>
        <Myname>Jang Jae Hyuk</Myname>
        <Mystory>
          커피, 요리 등 외식산업에서 종사해왔으나 지난 해 6월 결혼 이후 직업에 대한 고민이 많았습니다.<br/>
          30대 중반, 지금도 많이 늦었지만 더 늦는다면 정말로 기회가 없을거란 생각에 과감하게 개발자로의 이직을 도전하게 되었습니다.<br/>
          몇 살만 어렸으면 좋겠다는 생각을 지금도 자주 합니다만 지나간 시간은 되돌릴 수는 없습니다.<br/>
          그러나 앞으로의 시간은 충분히 잘 만들어나갈 수 있다고 생각합니다.<br/>
          저의 장점인 성실함과 빠른 습득력을 바탕으로 꾸준하고 빠르게 발전해 나갈 것을 자신합니다.
        </Mystory>
        <Myname>Profile</Myname>
        <Profile>
          <li>
            <h4>Name</h4>
            <span>장재혁</span>
          </li>
          <li>
            <h4>Birth</h4>
            <span>1988.03.13</span>
          </li>
          <li>
            <h4>Contact</h4>
            <span>010.6212.0308</span>
          </li>
          <li>
            <h4>E-Mail</h4>
            <span>jayhug2@daum.net</span>
          </li>
          <li>
            <h4>Address</h4>
            <span>경기도 고양시 덕양구</span>
          </li>
          <li>
            <h4>MBTI</h4>
            <span>ESTJ</span>
          </li>
          <li>
            <h4>Specialty</h4>
            <span>요리</span>
          </li>
          <li>
            <h4>Hobby</h4>
            <span>해외축구시청</span>
            <span>콘솔게임</span>
            <span>요즘은 공부</span>
          </li>
          
          
        </Profile>
      </Container>
    </Info>
  )
}

export default Myinfo;