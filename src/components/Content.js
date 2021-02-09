import React from 'react';

const Content = ({name}) => {
	console.log(name)

	if (name === '') {
	return <div></div>
    }

    return (
    <div>Hello {name}</div>
    )
}

export default Content;