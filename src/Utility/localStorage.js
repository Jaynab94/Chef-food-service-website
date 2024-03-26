const getStoredBooks = () => {
    const storedBook = localStorage.getItem('Book-store');
    if (storedBook) {
        return JSON.parse(storedBook)
    }
    return []
}






const savedBooks = (id) => {
    const storedBooks = getStoredBooks();
    const exist = storedBooks.find(bookId => bookId === id);
    if (!exist) {
        storedBooks.push(id);
        localStorage.setItem('Book-store', JSON.stringify(storedBooks));
    }

}


export { savedBooks, getStoredBooks }