import React from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
// class Home extends Component {
const Home = () => {   
    let navigate = useNavigate(); 
    // const [joke, setjoke] =  useState('paris');
    const getJoke = () =>{
          axios.get("https://www.breakingbadapi.com/api/characters").then(
            (response) => {
            console.log(response.data[0])
            }
          )
        }
      getJoke()
        
        return (
            <>
            <h1>Home page</h1>
            <button onClick={() => navigate('/about')}>Change to About</button>
            <div>
            <button onClick={() => navigate('/service')}>Change to Service page</button>
            </div>
            </>
        );
}
 
export default Home;