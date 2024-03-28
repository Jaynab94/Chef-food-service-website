import toast from "react-hot-toast";

export const getWishlist = () => {
    let books = [];
    const storedBooks = localStorage.getItem('wish-list')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books
}

export const saveWishlist = (book) => {
    let books = getWishlist();
    const exist = books.find(b => b.id === books.bookId)
    if (exist) {
        return toast.error('Book has been added to your wishlist!')
    }
    books.push(book)
    localStorage.setItem('wish-list', JSON.stringify(books))
    toast.success('Add to Wishlist successfully')
}

