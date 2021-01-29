import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackGround'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

// const BackgroundImage = styled.div`
//   Background-Image: URL(${db.bg});
//   flex: 1;
//   background-size:cover;
//   background-position: center;
// `;

const Title = styled.h1`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const QuizContainer = styled.div`
  width:100%;
  max-width: 360px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width:500px) {
    margin: auto;
    padding:15px;
  }
 `;


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget> 
          <Widget.Header>
          <h1>Final Fantasy 14 Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Descrição
            </p>

          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz geral</h1>
            <p>
              Descrição loren ipsun
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>

  );
}
