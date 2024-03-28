const getWishlistdBooks = () => {
    const wishListBook = localStorage.getItem('wish-list');
    if (wishListBook) {
        return JSON.parse(wishListBook)
    }
    return []
}






const savedWishListBooks = (id) => {
    const storedWishlistBooks = getWishlistdBooks();
    const exist = storedWishlistBooks.find(bookId => bookId === id);
    if (!exist) {
        storedWishlistBooks.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishlistBooks));
    }

}


export { savedWishListBooks, getWishlistdBooks }




