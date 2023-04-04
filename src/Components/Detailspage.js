import React, { useState } from 'react'
import Title from './Title'
import { useParams } from "react-router-dom";
import "../App.css"

const Detailspage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    let cardid = localStorage.getItem("userid");
    let body = localStorage.getItem("body");
    let title = localStorage.getItem("title");

    const src = `https://picsum.photos/200?random=${id}`

    return (
        <div className='details'>
            <div><Title /></div>
            <div className='heading'>
                <h1>Details Page For Post With ID {id}</h1>
            </div>
            <div className='main'>
                <div className='box1'>
                    <div className='imgbox'>
                        <img src={src} alt='img' />
                    </div>
                    <div className='texts1'>
                        <ul>
                            <p className='userid'>UserID:{cardid}</p>
                            <p>Title:{title}</p>
                            <h2> Body :{body}</h2>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detailspage