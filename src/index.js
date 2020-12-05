// First thing is we are going to import React and React Dom
import React from 'react';
import ReactDom from 'react-dom';

// Componet name 'Greetings' must be capital. We can use both function or ES6

const Greetings = () => {
	return (
		<>
			<h1>Hi, This is my first React Component</h1>
		</>
	);
};

// Now we will render it to the root of index.html

ReactDom.render(<Greetings />, document.getElementById('root'));
