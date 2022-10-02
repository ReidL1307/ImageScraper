import { useState } from 'react'
import { Container, Box, Button, Pagination, CircularProgress, CssBaseline, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css' 

let data = "";

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
        <ThemeProvider theme={theme}>

            <div className="App">
                <CssBaseline />
                  <h1>Image Scraper</h1>

                  <div>
                    <input placeholder="Enter URL" type="text" className="text" onChange={ handleChange } />
                    <br />
                    <button className="button" onClick={getData} >Submit</button>
                  </div>
                  
                      {loading
                          ? <CircularProgress className="links"/> 

                          : <Container className="links">
								<ol>
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
								</Container>
                      }
            </div>
        </ThemeProvider>
  )
}

export default App
