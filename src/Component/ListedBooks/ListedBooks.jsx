
import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { getStoredBooks } from "../../Utility/localStorage";
import PagesBook from "../pagesBook/PagesBook";
import { MdLocationPin, MdContactPage } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import '../loader/Loder'
import Loder from "../loader/Loder";



const ListedBooks = () => {

    const navigation = useNavigation();
    const books = useLoaderData();







    const [displayBooks, setDisplayBooks] = useState([]);



    const [tabIndex, setTabIndex] = useState(0);

    const [shorts, setShorts] = useState([]);

    const handleBooksFilter = filter => {
        if (filter === 'all') {
            setShorts(displayBooks)
        }
        else if (filter === 'fiction') {
            const fic = displayBooks.filter(book => book.category === 'fiction');
            setShorts(fic);
        }
        else if (filter === 'Science Fiction') {
            const sci = displayBooks.filter(book => book.category === 'Science Fiction');
            setShorts(sci);
        }
        else if (filter === 'Mystery') {
            const mis = displayBooks.filter(book => book.category === 'Mystery');
            setShorts(mis);
        }
    }



    useEffect(() => {
        const storedBooks = getStoredBooks();
        if (books.length > 0) {
            const booksAll = books.filter(book => storedBooks.includes(book.bookId));
            console.log(booksAll, storedBooks, books)
            setDisplayBooks(booksAll);
            setShorts(booksAll);
        }
    }, [books, setShorts])







    if (navigation.state === 'loading') {
        return <Loder></Loder>
    }


    return (
        <div>

            <PagesBook></PagesBook>



            <div className="flex justify-center mt-8 mb-14">

                <details className="dropdown ">
                    <summary className="m-1 btn bg-[#23BE0A] rounded-xl px-5 py-2 text-white font-semibold">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleBooksFilter('all')}><a>all</a></li>
                        <li onClick={() => handleBooksFilter('Fiction')}><a>Fiction</a></li>
                        <li onClick={() => handleBooksFilter('Science Fiction')}><a>Science Fiction</a></li>
                        <li onClick={() => handleBooksFilter('Mystery')}><a>Mystery</a></li>
                    </ul>
                </details>
            </div>


            {/* Tab */}

            <div className="flex items-center  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 mb-6 dark:text-gray-800">

                <Link

                    to=''

                    onClick={() => setTabIndex(0)}
                    rel="noopener noreferrer" href="#"
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex
                        === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>

                <Link
                    to={'wishlist'}

                    onClick={() => setTabIndex(1)}

                    rel="noopener noreferrer" href="#"
                    className={`flex items-center flex-shrink-0 px-5 py-3  space-x-2 ${tabIndex
                        === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>

                </Link>


            </div>
            <Outlet></Outlet>




            <p>
                {
                    shorts.map(book => <div key={book.bookId}>
                        <div className="card   card-side p-4 mb-4 bg-base-100 border shadow-xl">

                            <figure><img className="w-[230px] rounded-2xl h-[230px]" src={book.image} /></figure>

                            <div className="card-body space-y-3">
                                <h2 className="card-title font-bold text-2xl">{book.bookName}</h2>
                                <p className="font-medium text-[#131313CC]">By: {book.author}</p>

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


                                <div className="flex gap-4  ">
                                    <h3 className=" px-5 py-2 rounded-full text-[#328EFF] bg-[#328EFF26]">Category: {book.category}</h3>
                                    <h3 className=" px-5 text-[#FFAC33] py-2 rounded-full bg-[#FFAC3326]">Rating:{book.rating}</h3>

                                    <Link to={'/'}> <button className="bg-[#23BE0A] rounded-full px-5 py-2 text-white font-bold">View Details</button></Link>

                                </div>
                            </div>
                        </div>
                    </div>)




                }
            </p >





        </div >
    );
};

export default ListedBooks;