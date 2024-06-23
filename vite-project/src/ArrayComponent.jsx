import React, { useState } from 'react';
import { ListContainer, List, ListItem, Message } from './styles';

const ArrayComponent = () => {
  const [items, setItems] = useState(['Van gogh', 'Claude Monet', 'Pablo Picasso']);

  return (
    <ListContainer>
      {items.length > 0 ? (
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </List>
      ) : (
        <Message>No items in the list</Message>
      )}
    </ListContainer>
  );
};

export default ArrayComponent;
