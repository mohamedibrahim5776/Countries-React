import React from 'react'
import "./reviews.css"
import { Carousel, Image } from 'react-bootstrap'
import review1 from "../assets/review1.jpg"
import review2 from "../assets/review2.jpg"
import review3 from "../assets/review3.jpg"
function Reviews() {
  return (
    <div className='container review' id="review">
          <h2>Testimonials</h2>
          <Carousel>
              <Carousel.Item>
                  
        <Image
            className="d-block w-100"
            src={review1}
            alt="First slide"
            roundedCircle
            />
            <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
            <h2>Simab Dave - Web Designer</h2>
      </Carousel.Item>
      <Carousel.Item>
        <Image
            className="d-block w-100"
            src={review2}
            alt="Second slide"
            roundedCircle

        />
        <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
                  <h2>Johnthan Doe - UX Designer</h2>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={review3}
          roundedCircle
          alt="Third slide"
        />
        <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
                  <h2>Mohamed Ibrahim - Front End</h2>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Reviews