import React from "react";

const libraria = () => {

    const [isbn, setIsbn] = useState("");

    const addBook = async () => {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
            console.log(response.data);
        }
        catch(error){
            console.log(error);
        }
    }

    return (<>
        <form onSubmit={addBook}>
            <input type='text' name='isbn' />
            <button type='submit'> Sumbit </button>
        </form>
    </>)

};

export default libraria;