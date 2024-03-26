

const PagesBook = () => {
    return (
        <div>
            <div className="bg-[#1313130D] rounded-2xl mt-9 mb-8">
                <h2 className="font-bold p-4 text-center text-[28px]">Books</h2>
            </div>


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
        </div>

    );
};

export default PagesBook;