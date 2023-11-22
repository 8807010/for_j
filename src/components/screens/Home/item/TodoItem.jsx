import React from 'react';
import Check from './Check';

export default function TodoItem({ todo }) {
  return (
    <div>
      <Check />
      {todo.title}</div>
  )
};
