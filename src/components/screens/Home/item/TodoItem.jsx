import React from 'react';
import Check from './Check';

export default function TodoItem({ todo, changeTodo }) {
  return (
    <button className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full' onClick={() => changeTodo(todo._id)}>

      <Check isCompleted={todo.isCompleted} />
      {todo.title}
    </button>
  )
};
