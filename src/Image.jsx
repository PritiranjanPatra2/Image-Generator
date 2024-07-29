import React, { useEffect, useState } from 'react';
import './Image.css';

const clientId = 'f-XPPJVcRt9M_IIz0hl1LJHigj1qzqUoJZKhEAn30gM';

function Image() {
    const [query, setQuery] = useState('');
    const [imgArr, setImgArr] = useState([]);
    
    async function fetchData(query) {
        if(query==''){
            alert('Bro For Image You have to Add Some Text 😁 ')
            return
        }
        let fetched = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${clientId}&per_page=16`);
        let data = await fetched.json();
        console.log(data.results);
        setImgArr(data.results);
    }

    useEffect(() => {
        // fetchData();
    }, []);

    return (
        <div className="image-search-container">
            <h1>Image Search</h1>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Enter image to search" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} 
                />
                <button onClick={() => fetchData(query)}>Search</button>
            </div>
            <div className="image-grid">
                {imgArr.map((item, index) => (
                    <div key={index} className="image-item">
                        <img src={item.urls.regular} alt={item.alt_description} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Image;
