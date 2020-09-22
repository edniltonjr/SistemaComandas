import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  width: 100%;
  height: 51px;
  background: #121214;
  flex: 1;
  fill: solid;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: absolute;
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px;
  height: 100%;
  nav {
    display: flex;
    ul {
      display: flex;
      list-style: none;
    }
    li, a {
      display: flex;
      align-items: center;
      margin-left: 30px;
      cursor: pointer;
      text-decoration: none;
      font-size: 16px;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;
        &:hover {
          color: ${shade(0.2, '#fff')}
        }
    }
  }
`;