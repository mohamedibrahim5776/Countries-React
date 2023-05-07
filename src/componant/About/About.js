import React from 'react'
import "./about.css"
import Button from 'react-bootstrap/Button';
import about1 from "../assets/about-1.png"
import about2 from "../assets/state.png"

function About() {
  return (
    <div className='container about' id="about">
      <div className='part1' >
        <div className='img'>
          <img src={about2} />
        </div>
        <div className='info'>
              <h3>
              We pride ourselves on making real food from the best ingredients.</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <Button>learn more</Button>
      </div>
      </div>
      <div className='part2' >
        <div className='info'>
              <h3>
              We make everything by hand with the best possible ingredients.
              </h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <ul>
                  <li><i class="fa-solid fa-check"></i> Etiam sed dolor ac diam volutpa</li>
                  <li><i class="fa-solid fa-check"></i> Erat volutpat aliquet imperdiet.</li>
                  <li><i class="fa-solid fa-check"></i> purus a odio finibus bibendum</li>
              </ul>
              <Button>learn more</Button>
        </div>
        <div className='img'>
          <img src={about1} />
        </div>
      </div>
      <div className='part3'>
        <h2>When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
        <Button>watch our story</Button>
      </div>
    </div>
  )
}

export default About