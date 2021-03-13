import React from 'react';

const person = (props) => { 
    return (
    <div><p> { props.name } </p>
    <p onClick={props.click}> { props.surname } </p>
    <p> { props.children } </p>
    </div>);

};

export default person;