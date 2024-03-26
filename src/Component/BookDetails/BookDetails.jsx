import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savedBooks } from "../../Utility/localStorage";




const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const booksId = parseInt(bookId);

    const book = books.find(book => book.bookId === booksId);

    console.log(book);








    const handleReadButon = () => {
        savedBooks(booksId);

        toast('Read this book successfully!')
    };

    const handleWishlistButton = () => {
        toast('Added to Wishlist successful')
    }


    return (
        <div className="grid md:grid-cols-2 gap-12">
            <div className="border col-span-1">
                <img className="h-[600px] rounded-3xl" src={book.image} alt="" />
            </div>

            <div className="border p-6 space-y-4">
                <h2 className="font-bold text-4xl">{book.bookName}</h2>
                <p className="font-medium text-[16px] text-[#131313CC]">{book.author}</p>

                <hr />

                <h2 className="font-medium text-[16px] text-[#131313CC]">{book.category}</h2>

                <hr />

                <p className="-tracking-2 capitalize text-[#131313B3] font-medium text-[16px]"> <span className="font-bold text-[#131313] text-[16px]">Review:</span> {book.review}</p>

                <p >
                    <h4 className="space-x-8">
                        <span className="font-bold text-[16px]">Tag</span>
                        {book.tags.map((tag, idx) =>
                            <span className=" rounded-full p-2 text-green-500 bg-base-100 shadow-xl mr- font-medium text-[16px] " key={idx}>#{tag}</span>)}
                    </h4>

                    <hr className="mt-8" />

                </p>





                <div className="flex  ">
                    <div className="space-y-4">
                        <h2 className="text-[#131313B3] font-medium text-[16px]">Number of Pages:</h2>
                        <h2 className="text-[#131313B3] font-medium text-[16px]">Publisher:</h2>
                        <h2 className="text-[#131313B3] font-medium text-[16px]">Year of Publishing:</h2>

                        <h2 className="text-[#131313B3] font-medium text-[16px]">Rating:</h2>

                    </div>

                    <div className="ml-20 space-y-4">
                        <h2 className="font-bold text-[#131313] text-[16px]">{book.totalPages}</h2>
                        <h2 className="font-bold text-[#131313] text-[16px]">{book.publisher}</h2>
                        <h2 className="font-bold text-[#131313] text-[16px]">{book.yearOfPublishing}</h2>
                        <h2 className="font-bold text-[#131313] text-[16px]">{book.rating}</h2>

                    </div>


                </div>

                <div className="flex gap-10">
                    <button onClick={handleReadButon} className="px-6 py-4 border font-semibold border-gray-400 rounded-xl">Read</button>


                    <button onClick={handleWishlistButton} className="px-6 py-4 border rounded-xl text-white font-semibold  bg-[#50B1C9]">Wishlist</button>
                </div>

                <ToastContainer />


            </div>


        </div>
    )
};

export default BookDetails;