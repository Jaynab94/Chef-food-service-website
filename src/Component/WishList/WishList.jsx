import { useEffect, useState } from "react";
import { getWishlist } from "../..";

import Book from "../Book/Book";



const WishList = () => {
    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
        const storedWishlist = getWishlist();
        setWishlist(storedWishlist);
    }, [])

    return (

        <div className="grid md:grid-cols-3 gap-6">
            {
                wishlist.map(book => <Book key={book.bookId} book={book} />)
            }


        </div>
    );
};

export default WishList;