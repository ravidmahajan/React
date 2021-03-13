import { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons : [
            { name: 'Ravi', surname: 'Mahajan' },
            { name: 'Raj', surname: 'Mahajan' }
        ]
    }

    render(){
        return ( <div className = "App">
        <h1> Hi I am React app </h1>  
        <Person name = { this.state.persons[0].name }
        surname = { this.state.persons[0].surname }>Hey hiii! </Person>
        <Person name = { this.state.persons[1].name }
        surname = { this.state.persons[1].surname }/> 
        </div>
    );
    }
    
}

export default App;