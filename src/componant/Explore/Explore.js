import React from 'react'
import { Button } from 'react-bootstrap'
import "./explore.css"
import explore1 from "../assets/explore1.jpg"
import explore2 from "../assets/explore2.jpg"
import  explore3  from "../assets/explore3.jpg"


function Explore() {
  return (
    <div className='container explore' id="explore">
          <h1>Explore Our Foods</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
          <div>
            <div className='cards'>
              <div className='card'>
                    <img src={explore1} />
                    <h4>Rainbow Vegetable Sandwich</h4>
                    <p>Time: 30 - 45 Minutes | Serves: 1</p>
                    <div className='price'>
                        $10.50 <span>$11.70</span>
                        <hr />
                        <Button>order now</Button>
            </div>
            </div>

                  <div className='card'>
                      <img src={explore2}/>
                      <h4>Vegetarian Burger</h4>
                      <p>Time: 30 - 45 Minutes | Serves: 1</p>
                      <div className='price'>
                          $9.20 <span>$10.50</span>
                          <hr />
                <Button>order now</Button>
                </div>
                  </div>

                  <div className='card'>
                      <img src={explore3}/>
                      <h4>Raspberry Stuffed French Toast</h4>
                      <p>Time: 10 - 15 Minutes | Serves: 1</p>
                      <div className='price'>
                          $12.50 <span>$13.20</span>
                          <hr />
                          <Button>order now</Button>
                      </div>
                </div>
              </div>
          </div>
          </div>
  )
}

export default Explore