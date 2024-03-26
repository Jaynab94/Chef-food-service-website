
import { VscStarHalf } from "react-icons/vsc";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
    const { image, tags, bookName, author, category, rating, bookId } = book;
    return (

        <Link to={`/book/${bookId}`} className="p-6 border w-96 ">

            <div className="card   card-compact ">
                <figure>< img className="h-[230px] rounded-2xl " src={image} alt="Shoes" /></figure>

                <p className="text-[#23BE0A] ml-4 mt-6">
                    {
                        tags.map((tag, idx) => <span key={idx} className="mr-6 px-2 py-2  rounded-full bg-base-100 shadow-xl font-medium text-[16px]"><a href="">{tag}</a></span>)
                    }
                </p>
                <div className="card-body space-y-6">
                    <h2 className="font-bold text-2xl">{bookName}</h2>
                    <p className="font-medium text-[#131313CC]"> By: {author}</p>

                    <hr className="border-b-2 border-dashed" />

                    <div className="card-actions flex justify-between font-medium text-[16px] text-[#131313CC]">
                        <h2>{category}</h2>

                        <h2 className="flex items-center justify-center gap-2"><VscStarHalf />{rating}</h2>

                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Book;