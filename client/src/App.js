import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Render from './Components/Render';

const App = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://footapi7.p.rapidapi.com/api/rankings/uefa/clubs',
            headers: {
                'X-RapidAPI-Key': '056d2999cemshb3444f3c853b8a3p1ed62cjsn076f8982e203',
                'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'            }
        };

        axios.request(options)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <Div>
            <div>
                <Render data = {data}/>
                {/* Render your data here */}
            </div>

            <div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </Div>
    );
}

export default App;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  & > div {
    border: 1px solid red;
    width: 100%;
    height: calc(50vh);
    display: flex;

    // First child: Render Component
    &:first-child {
      overflow-x: auto; // Horizontal scroll only for Render component
    }

    // Second child: the JSON pre
    &:last-child {
      overflow-x: hidden; // Ensures no horizontal scroll for this div
    }
  }
`;
