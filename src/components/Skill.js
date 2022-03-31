import styled from "styled-components"
import Skills from "../skilldata"

const SkillPage = styled.div`
  width: 100%;
  height: auto;
  background-color: #222;
  padding: 30px 0;
`
const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  padding:30px 0;
`
const Title = styled.div`
  width: 100%;
  text-align : center;
  & h3{
    color: #fff;
    font-size:22px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  & p{
    font-size: 14px;
    color: #999;
  }
`
const Learning = styled.div`
  margin-top: 30px;
  color: white;
  & h3 {
    background-color: #6373ff;
    font-weight: bold;
    padding: 10px;
  }
  & p {
    background-color: #6373ff;
    font-size: 14px;
    padding: 0 10px 10px 10px;
  }
  & ul {
    padding: 20px;
    & li{
      margin 10px 5px;
    }
  }
`


const Skill = () => {

    return (
        <SkillPage>
          <Container>
            <Title>
              <h3 id="gasd">교육과정 및 스킬</h3>
              <p>2021년 9월 1일 ~ 현재까지</p>
            </Title>
            { Skills.map((data,i) => 
              ( <Learning key={i}>
                  <h3>{data.title}</h3>
                  <p>{data.date}</p>
                  <ul>
                    {data.info.map((infos,j) => <li key={j}>{infos}</li>)}
                  </ul>
                </Learning> )
            )}
          </Container>
        </SkillPage>
    )
}

export default Skill