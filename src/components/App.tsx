import { atom, useRecoilState } from "recoil";
import styled from "styled-components";
import Button from "./1-Atoms/Button";
import Paragraph from "./1-Atoms/Paragraph";
import Title from "./1-Atoms/Title";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const clickCounter = atom({
  key: "clickCounter",
  default: [2],
});

function App() {
  const [counter, setCounter] = useRecoilState(clickCounter);

  const onClick = () => {
    let newCounter = [...counter];
    newCounter[0]++;
    setCounter(newCounter);
  };

  return (
    <StyledDiv>
      <Title>Slang Interview Enviroment</Title>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem
        libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem
        libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem
        libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at?
      </Paragraph>
      <Button onClick={()=> onClick()}>You have clicked me <span>{counter[0]}</span> times</Button>
      
      <Title size={5}>Scond Title</Title>
      <Paragraph size={1.5}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem
        libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem
        libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem
        libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at?
      </Paragraph>
      <Paragraph size={1.5}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem
        libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem
        libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem
        libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at?
      </Paragraph>
    </StyledDiv>
  );
}

export default App;
