import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';
import Service from './components/service';
import Error from './components/errorpage';
import Contact from './components/contact';


function App() {
  
  return (
    
      <Router>
        <Navbar/>

        <Routes>

          <Route path='/' element={<Home></Home>}/>

          <Route path='/about' element={<About/>}/>

          <Route path='/service' element={<Service></Service>}/>

          <Route path='/contact' element={<Contact/>}/>

          <Route path='*' element={<Error/>}/>

        </Routes>
        {/* <button onClick={() => navigate('/')}>Go Home</button> */}
      </Router>

    // </>
  );
  
}

export default App;

      /* 
      
      <About/>
      <p>{i}</p>
      <p style={{color:'red'}} >{2+2}</p>
      <Counter/>
      <div>
        {joke}
      </div>
      <button type="submit" onClick={getJoke}>get Joke</button> */
        // const [joke, setjoke] =  useState('paris');
  // var i = 'hello';

  // const getJoke = () =>{
  //   axios.get("https://www.breakingbadapi.com/api/character/random").then(
  //   // axios.get("https://catfact.ninja/fact").then(
  //     (response) => {
  //       console.log(response.data[0])
  //       // console.log(response.data[0].img)
  //       setjoke(response.data[0])
  //     }
  //   )
  // }
