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
                <h1 className="text-center text-5xl font-bold mt-20">Books{books.length}</h1>
            </div>



            <div className="grid md:grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>


    );
};

export default Books;