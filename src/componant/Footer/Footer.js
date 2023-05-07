import React from 'react'
import "./footer.css"

function Footer() {
  return (
      <div className='container footer'>
          <div className='links'>
              <div>register</div>
              <div>forum</div>
              <div>affiliate</div>
              <div>FAQ</div>
          </div>
          <div className='icons'>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-solid fa-basketball"></i>
              <i class="fa-brands fa-youtube"></i>
          </div>
          <p>© 2023. Foodera. All rights reserved.</p>
    </div>
  )
}

export default Footer