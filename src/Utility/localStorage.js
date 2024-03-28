
import toast from "react-hot-toast";

const getStoredBooks = () => {
    const storedBook = localStorage.getItem('Book-store');
    if (storedBook) {
        return JSON.parse(storedBook)

    }
    return []
}






const savedBooks = (id) => {
    const storedBooks = getStoredBooks();
    const exist = storedBooks.find(book => book.id === id);
    if (!exist) {
        storedBooks.push(id);
        localStorage.setItem('Book-store', JSON.stringify(storedBooks));
        return toast.success('read book successful')
    } 
    


}



export { savedBooks, getStoredBooks }