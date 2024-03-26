import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/localStorage";
import PagesBook from "../pagesBook/PagesBook";
import { MdLocationPin, MdContactPage } from "react-icons/md";
import { GrGroup } from "react-icons/gr";


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

            <div className="flex justify-center mt-8 mb-14">

                <details className="dropdown">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <p>
                {
                    displayBooks.map(book => <div key={book.bookId}>
                        <div className="card   card-side p-4 mb-4 bg-base-100 border shadow-xl">

                            <figure><img className="w-[230px] rounded-2xl h-[230px]" src={book.image} /></figure>

                            <div className="card-body">
                                <h2 className="card-title font-bold text-2xl">{book.bookName}</h2>
                                <p className="font-medium text-[#131313CC]">{book.author}</p>

                                <p className="text-[#23BE0A] ml-4  flex items-center">

                                    <span className="font-bold text-[16px] text-black ">Tag</span>
                                    {

                                        book.tags.map((tag, idx) => <span className="mr-6 px-2   rounded-full bg-base-100 shadow-xl ml-6 font-medium text-[16px]" key={idx}>#{tag}</span>)
                                    }


                                    <h4 className="flex gap-2 text-[#131313CC] items-center font-medium text-[16px]"><MdLocationPin className="text-2xl" /> Year of Publishing: {book.yearOfPublishing}</h4>
                                </p>

                                <div className="flex gap-4 text-[#13131399]">
                                    <h2 className="flex gap-2"> <GrGroup className="text-2xl" />{book.publisher}</h2>
                                    <h2 className="flex gap-2"><MdContactPage className="text-2xl" />{book.totalPages}</h2>
                                </div>

                                <hr />


                                <div className="card-actions ">
                                    <button></button>
                                    <button></button>
                                    <button className="btn btn-primary">View Ditails</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </p>




        </div>
    );
};

export default Pages;