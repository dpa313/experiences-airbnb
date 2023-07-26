import React from 'react'
// import cardStatesImg from '../assets/image 12.png/'
import ratingStar from '../assets/Star 1.png'
// 
const Card = ({img,ratings,reviewCount,title,price,location,openSpot}) => {

    let badgeText;
    if(openSpot === 0){
      badgeText = "SOLD OUT"
    } else if(location === "Online"){
      badgeText = "Online"
    }
  return (
    <>
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={img} alt="" className='card--img' />
            <div className='card--states'>
                <img src={ratingStar} alt="" className='card--star' />
                <span>{ratings}</span>
                <span className='gray'>({reviewCount}) • </span>
                <span className='gray'>{location}</span>
            </div>
            <p className='card-title'>{title}</p>
            <p><span className='bold'>from ${price} </span> / person</p>
        </div>
    </>
  )
}

export default Card