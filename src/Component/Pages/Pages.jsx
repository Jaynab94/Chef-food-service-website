import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';







const Pages = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


    const book = useLoaderData();
    console.log(book)

    const [showChart, setShowChart] = useState([]);




    useEffect(() => {

        const charts = JSON.parse(localStorage.getItem('Book-store'));
        console.log(charts);
        setShowChart(charts);
    }, []);



    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };



    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    const data = [
        {
            name: 'The Great Gatsby',
            uv: 128,
            pv: 200,
            amt: 128,
        },
        {
            name: 'To Kill a Mockingbird',
            uv: 300,
            pv: 138,
            amt: 380,
        },
        {
            name: '1984s Day',
            uv: 320,
            pv: 900,
            amt: 220,
        },
        {
            name: 'The Catcher in the Rye',
            uv: 370,
            pv: 38,
            amt: 450,
        },
        {
            name: 'Pride and Prejudice',
            uv: 180,
            pv: 40,
            amt: 224,
        },
        {
            name: 'The Hobbit',
            uv: 250,
            pv: 380,
            amt: 279,
        }];


    return (
        <div>
            <Helmet>
                <title>
                    Book | Pages
                </title>
            </Helmet>

            <BarChart
                width={1200}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>



    );

};

export default Pages;