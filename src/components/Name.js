import React from 'react';

const Name = (props) => {
	const name = props.name
	console.log(name)
	return <div>{name}</div>
}

export default Name;