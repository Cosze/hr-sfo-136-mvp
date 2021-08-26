import styled from 'styled-components';

export const SubMain = styled.div`
  position: relative;
  max-height: 500px;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Status = styled.div`
  background-color: #8e8;
  padding: 0.5em;
  text-align: center;
  width: 70px;
`;

export const Tab = styled.button`
  padding: 1em;
  background-color: #ddd;
  cursor: pointer;
`;

export const Taskbox = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  background-color: #ddd;
  width: 70%;
  margin: 0 auto 0.3em;
  cursor: pointer;
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 1em auto;
`;

export const Input = styled.input`
  margin-bottom: 1em;
`;