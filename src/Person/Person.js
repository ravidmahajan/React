import React from 'react';
import './Person.css'

const person = (props) => { 
    return (
    <div className="Person"><p> { props.name } </p>
    <p onClick={props.click}> { props.surname } </p>
    <p> { props.children } </p>
    <input type="text"  onChange={props.changedName} value={props.name}/>
    </div>);

};

export default person;