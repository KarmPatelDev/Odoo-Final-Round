import React, { useEffect, useState } from 'react';

const addBook = () => {

    const [api, setApi] = useState();


    return (<>
    <div className="container">
        <input type="text" value={api} onChange={(e) => setApi(e.target.value)} />
        <button onClick={() => addBooked(api)}>Add Book</button>
    </div>
    
    </>)
}

export default addBook;