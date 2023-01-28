import React, { Component } from 'react';
class Service extends Component {
    state = {  } 
    render() { 
        function demo(){
            alert('hello')
          }
        return (
           <>
             <h1>Service Page</h1>
             <p>{this.state.word}</p>
                <p>{this.state.count}</p>
                <p>This is from the COUNTER file</p>
                <button type="submit" onClick={()=>demo()}>Click me</button>
           </>
        );
    }
}
 
export default Service;