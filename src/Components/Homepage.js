import React, { useEffect, useState } from 'react'
import Title from './Title'
import Card from './Card';


//import { fetchData } from '../store/action'

const Homepage = () => {
    const [post, setpost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchData();

    }, []);

    function fetchData() {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)

                if (data.error) {
                    setError(true);
                    setLoading(false);
                } else {
                    setLoading(false);
                    setpost(data)
                }
            })
            .catch((error) => {

                console.log(error);
                setError(true);
                setLoading(false);
            });
    };


    return (
        <div className='container'>
            <div>  <Title /></div>
            <div className='post'>
                {post.map((item, index) => <Card item={item} />)

                }
            </div>




        </div>

    )
}

export default Homepage