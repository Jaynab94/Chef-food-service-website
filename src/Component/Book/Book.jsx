

const Book = ({ book }) => {
    const { image, category } = book;
    return (
        <div className="p-6 border w-96 ">

            <div className="card   card-compact ">
                <figure>< img className="h-[230px] rounded-2xl " src={image} alt="Shoes" /></figure>
                <p className="text-[#23BE0A]">
                    {
                        category.map((cat, idx) => <span key={idx} className="mr-4 font-medium text-[16px]"><a href="">{cat}</a></span>)
                    }
                </p>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;