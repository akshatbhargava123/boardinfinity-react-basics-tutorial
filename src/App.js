import React from 'react';
import Todo from './components/Todo';

function App() {  
  return (
    <div style={{ padding: '50px'}}>
      <Todo />
    </div>
  );
};

const styles = {
  padding: '50px',
  color: 'red'
};

export default App;
