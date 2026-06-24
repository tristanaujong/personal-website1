import React from 'react'

const Card = ({ title, description, img }) => {
  return (
    <div>
        <img>{img}</img>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Card