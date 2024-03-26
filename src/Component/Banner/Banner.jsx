import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero mt-10 h-[555px] bg-base-200 rounded-2xl p-20">
            <div className="hero-content  flex-col lg:flex-row-reverse ">
                <img src="https://i.ibb.co/wzx6jkn/banner.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold ">Books to freshen up your bookshelf</h1>

                    <Link to={'/listedbooks'}><button className=" text-white font-bold btn mt-12  bg-[#23BE0A]">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;