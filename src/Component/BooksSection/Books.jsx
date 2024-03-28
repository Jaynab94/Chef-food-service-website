import { useEffect, useState } from "react";
import Book from "../Book/Book";



const Books = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])



    return (
        <div>
            <div >
                <h1 className="text-center mb-9 text-5xl font-bold mt-16">Books</h1>
            </div>


            

                <div className="grid md:grid-cols-3 gap-6">
                    {
                        books.map((book,idx) => <Book key={idx} book={book}></Book>)
                    }
                </div>
                
        </div>


    );
};

export default Books;