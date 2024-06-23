import styled from 'styled-components';



export const ListContainer = styled.div`
  width: 300px;
  color: white;
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-image: url('/src/background.png');
  background-size: cover;
  background-position: center;
  padding: 10px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 8px;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

export const Message = styled.div`
  color: #999;
  text-align: center;
`;
