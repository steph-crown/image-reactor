import React from 'react';
import ImageCard from './ImageCard'
import im1 from './image_from_ios.jpg'
import im2 from './pexels-photo-125510.jpeg'
import im3 from './Gabriel.jpg'
import im4 from "./IMG_20200712_221338.jpg"
function ImageSection() {
  var imageText = [
    {
      link:im3,
      text:"Gabriel Jesus in Manchester City's new jersey "
    },
    {
      link: im4,
      text:"Brunnnooooo! We can't hear you !!!"
    },
    {                                                   link:im1,                      
      text:"Time to coddddeee"
    },
    {
      link:im2,
      text:"Rainy days"
    }
  ]
  var image = imageText.map(i => 
      (
        <ImageCard link={i.link} text={i.text} key={i.text} />
      )
    )
  return (
    <div className="container">
      <div className="row">
	{image}
      </div>
    </div>
  )
}

export default ImageSection
