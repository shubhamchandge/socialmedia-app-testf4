import React from 'react'
import "../App.css"
import { Navigate, useNavigate } from 'react-router-dom'

const Card = ({ item }) => {
  const Navigate = useNavigate();


  const handleclick = () => {
    localStorage.setItem("userid", item.userId,);
    localStorage.setItem("title", item.title);
    localStorage.setItem("body", item.body)
    Navigate(`/item/:${item.id}`)
  }

  const src = `https://picsum.photos/200?random=${item.id}`
  return (
    <div className='mainbox'>
      <div className='box'>
        <div className='imgbox'>
          <img src={src} alt='img' />
        </div>
        <div className='texts'>
          <ul>
            <li className='userid'>UserID:{item.userId}</li>
            <li>Title:{item.title}</li>
          </ul>
        </div>
        <div className='read'>
          <button className='like-btn' onClick={handleclick}> Read More..</button>
        </div>
      </div>
    </div>

  )
}

export default Card