// Creating a book list

import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const Booklist = () => {
	return (
		<section className='booklist'>
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
};

const Book = () => {
	return (
		<article className='book'>
			<Image />
			<Title />
			<Author />
		</article>
	);
};

const Image = () => {
	return (
		<img
			src='https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg'
			alt='Cover of the Book'
		/>
	);
};

const Title = () => <h3> If Animals Kissed Good Night </h3>;

// JSX CSS Syntax
const Author = () => (
	<h4 style={{ fontSize: '1.2em', color: '#888888' }}>Ann Whitford Paul</h4>
);

ReactDom.render(<Booklist />, document.getElementById('root'));
