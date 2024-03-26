import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/localStorage";
import PagesBook from "../pagesBook/PagesBook";


const Pages = () => {

    const books = useLoaderData();
    const [displayBooks, setDisplayBooks] = useState([]);

    useEffect(() => {
        const storedBooks = getStoredBooks();
        if (books.length > 0) {
            const booksAll = books.filter(book => storedBooks.includes(book.bookId));
            // console.log(booksAll, storedBooks, books)
            setDisplayBooks(booksAll);
        }
    }, [])
    return (
        <div>
            <PagesBook></PagesBook>
            <div className="card card-side  bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!:{displayBooks.length}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pages;