import React from 'react';
import TodoItem from './item/TodoItem';

const todos = [
  {
    _id: "wef23",
    title: "Finish the essay collaboration",
    isCompleted: false,
  },
  {
    _id: "wef23233",
    title: "Read next chapter of the book",
    isCompleted: false,
  },
  {
    _id: "wef23jyt",
    title: "Send the finished assignment",
    isCompleted: false,
  },
]

const Home = () => {
  return (
    <div className='text-white w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-10'>Todo for junior</h1>
      {todos.map(todo =>
        <TodoItem key={todo._id} todo={todo}
        />)}
    </div>
  )
};

export default Home;