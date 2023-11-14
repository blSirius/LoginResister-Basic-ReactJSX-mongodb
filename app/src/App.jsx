import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [updatedTodo, setUpdatedTodo] = useState('');

  return (
    <div>
      Hello
    </div>
  );
}
export default App;