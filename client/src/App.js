import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://footapi7.p.rapidapi.com/api/rankings/uefa/countries',
            headers: {
                'X-RapidAPI-Key': '056d2999cemshb3444f3c853b8a3p1ed62cjsn076f8982e203',
                'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
            }
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
        <div>
            {/* Render your data here */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default App;
