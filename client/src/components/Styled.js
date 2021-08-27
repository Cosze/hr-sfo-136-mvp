import styled from 'styled-components';

export const SubMain = styled.div`
  position: relative;
  height: 450px;
  width: 80%;
  margin: 1em auto;
  padding: 1em;
  border: 1px solid red;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Status = styled.div`
  background-color: #8e8;
  padding: 0.3em;
  text-align: center;
  border-radius: 5px;
  margin: 0 1em;
  width: 70px;
  height: max-content;
`;

export const Tab = styled.button`
  padding: 1em;
  background-color: #ddd;
  cursor: pointer;
`;

export const Taskbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ddd;
  width: 100%;
  border-radius: 5px;
  border: 1px solid grey;
  height: 50px;
  margin: 0 auto 1em;
  cursor: pointer;
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1em auto;
`;

export const Input = styled.input`
  margin-bottom: 1em;
`;