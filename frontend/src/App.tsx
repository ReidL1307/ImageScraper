import { useState } from 'react'
import { List, Container, Box, Button, Pagination, LinearProgress } from '@mui/material';

import './App.css'

let data = "";

async function getRequest(url) {
    let response = await fetch("http://127.0.0.1:8080/?site="+url);
    data = await response.json();
}

function App() {
    const [reqData, setReqData] = useState('');
    const [resData, setResData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = event => {
        setReqData(event.target.value);
    };

    const getData = async () => {
        await setLoading(true);
        await getRequest(reqData);
        await setResData(data);
        await setLoading(false);
    }

    
  return (
    <div className="App">
          <h1>Image Scraper</h1>
          <input type="text" onChange={ handleChange } />
          <br/>
          <button onClick={getData} >Submit</button>
          <h2>Links</h2>
          <div className="links">
              {loading
                  ? <h3>Loading...</h3>

                  : <ol>
                      {resData.map(dt => {
                          return (
                              <li>
                                  <a href={dt}>
                                      <img src={ dt }/>
                                  </a>
                              </li>
                          )
                      })}
                      </ol>
              }
          </div>
    </div>
  )
}

export default App
