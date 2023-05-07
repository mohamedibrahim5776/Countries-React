import React from 'react'
import "./faq.css"
import { Button, Form } from 'react-bootstrap'

function Faq() {
  return (
    <div  className='container faq' id="faq">
          <h2>Frequently Asked Questions</h2>
          <p className='paragraph'>
            <p className='p'>
                <h4> Is Foodera Bread really baked fresh each day?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
            </p>
            <p className='p'>
                <h4>Do you bake breads containing animal fats or products?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
            </p>
            <p className='p'>
                <h4>Can I order your products online?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
            </p>
            <p className='p'>
                <h4>When are you opening a shop near me?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
            </p>
          </p>
          <div className='baked'>
            <h2>Baked fresh daily by bakers with passion.</h2>
            <Button >learn more</Button>
          </div>
          <div className='hurry'>
              <h2>Hurry up! Subscribe our newsletter and get 25% Off</h2>
              <p>Limited time offer for this month. No credit card required.</p>
              <div className='form'>
              <Form.Control type="text" placeholder="Email Address Here" />
              <Button >Subscribe</Button>
              </div>
        </div>
    </div>
      
  )
}

export default Faq