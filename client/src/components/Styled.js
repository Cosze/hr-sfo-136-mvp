import styled from 'styled-components';

export const MainHeader = styled.header`
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  width: 70%;
  padding-top: 0.5em;
`;

export const Header = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid black;
`;

export const SubMain = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 80%;
  max-width: 277px;
  margin: 1em 0 0;
  padding: 1em;
  background-color: #eee;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Status = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  background-color: #8e8;
  ${props => props.status === 'open' ? `background-color: #8ee;` : null}
  ${props => props.status === 'accepted' ? `background-color: #ee8;` : null}
  ${props => props.status === 'started' ? `background-color: #88e;` : null}
  ${props => props.status === 'completed' ? `background-color: #8e8;` : null}
  padding: 0.3em;
  text-align: center;
  border-radius: 5px;
  margin: 0 1em;
  width: 73px;
  height: max-content;
  ${props => props.modal ? `
  position: relative;
  left: 26%;
  ` : null}


  ${props => props.isButton ? `&:hover {
    background-color: #7d7;
  }` : null}
`;

export const Tab = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  padding: 1em;
  text-align: center;
  width: 100%;
  border: none;
  background-color: #fff;
  cursor: pointer;
  ${props => props.disabled ? 'box-shadow: inset 0 0 3px rgba(100,100,100,0.1);' : null}

  &:hover {
    background-color: ${props => props.disabled ? 'transparent': '#ddd'};
  }
`;

export const Taskbox = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #888;
  height: 50px;
  margin: 0 auto 1em;
  cursor: pointer;
`;

export const Forms = styled.form`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Select = styled.select`
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1em;
  height: 34px;
  border: 1px solid black;
  display: block;
  align-self: center;
  width: 227.59px;
  margin: 0 auto 1.5em;
  ${props => props.login ? `&:first-child {
    margin-top: 1em;
  }` : null }
`;

export const Input = styled.input`
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1em;
  border: ${props => props.login ? '1px solid black' : 'none'};

  ${props => props.login ? `height: 30px;
  display: block;
  align-self: center;
  width: 80%;
  margin: 0 auto 1.5em;
  ` : null}

  ${props => props.login ? `&:first-child {
    margin-top: 1em;
  }` : null }
`;

export const SignInButton = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  width: 80%;
  margin: 0 auto 1.5em;
`;

export const ButtonContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  background-color: #fff;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  height: 50px;
  position: absolute;
  bottom: 0;
`;

export const Splitter = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 1px;
  background-color: #888;
  height: 50%;
  align-self: center;
`;

export const Filler = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: max-content;
  height: max-content;
  margin: 10em auto;
`;

export const ModalView = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em auto;
  width: 230px;
  // border: 1px solid red;
`;

export const InfoTitle = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 0.3em;
  width: 100%;
`;

export const InfoText = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  text-align: center;
  width: 100%;
  max-height: 140px;
  overflow-y: auto;
  overflow-wrap: break-word;
  margin-bottom: 0.7em;

  &::-webkit-scrollbar {
    display: none;
  }

  // ${props => props.preferences ? `border: 1px solid #eee;
  // padding: 0.5em;
  // ` : null}
  `;

export const ButtonHolder = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  // border: 1px solid red;
`;

export const Close = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: 2%;
  right: 5%;
  width: 15px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CloseImage = styled.img`
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
`;

export const StyledButton = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5px;
  border: none;
  background-color: ${props => props.cancel ? '#eee' : '#ddf'};
  padding: 0.5em 1em;
  &:hover {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  }
`;

export const FormConfirmTitle = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1em;
`;

export const FormConfirmText = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-bottom: 1em;
`;