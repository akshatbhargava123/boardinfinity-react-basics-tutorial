import React, { useState } from 'react';

function Todo() {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');

	const addTodo = () => {
		const newTodos = [...todos];
		newTodos.push(inputValue);
		setTodos(newTodos);
		setInputValue('');
	};

	const handleUserInput = (event) => {
		setInputValue(event.target.value);
	};

	const inputKeyDown = (event) => {
		if (event.which === 13) {
			addTodo();
		}
	}

	return (
		<div>
			<h1>Your TODO for today:</h1>

			<div>
				<ul>
					{todos.map((todo, index) => (
						<li key={index}>{todo}</li>
					))}
				</ul>
			</div>

			<br />

			<input
				value={inputValue}
				onChange={handleUserInput}
				onKeyDown={inputKeyDown}
				style={{ fontSize: '24px', padding: '6px', marginRight: 4 }}
				placeholder="Enter your TODO item"
			/>
			<button
				style={{ fontSize: '24px', padding: '6px' }}
				onClick={addTodo}
			>
				Add
			</button>
		</div>
	);
};

export default Todo;