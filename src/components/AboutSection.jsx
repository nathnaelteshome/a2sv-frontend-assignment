import React from 'react'
import './AboutSection.css'
import Button from '@mui/material/Button';

export const AboutSection = () => {
  return (
        
<div className="about-section">
  <div className="col ">
    
    <h1> <div className="blue-word">Africa </div> to Silicon Valley</h1>
    <p>A2SV is a social enterprise that enables high-potential university students to create digital solutions to Africa’s most pressing problems. A2SV is a social enterprise that enables high-potential university students to create digital solutions to Africa’s most pressing problems.</p>
    <Button variant="contained" size='large'>Meet Our team</Button>
    <p>A2SV is a social enterprise that enables high-potential university students to create digital solutions to Africa’s most pressing problems. A2SV is a social enterprise that enables high-potential university students to create digital solutions to Africa’s most pressing problems.</p>
  </div>
  
  <div className="col img-col">
    <div class="container img1">
    <img src="/public/images/Rectangle 1.png" alt="img1"/>
    <div class="overlayed-word">education process Name</div>
  </div>

  <div class="container img2">
    <img src="/public/images/Rectangle 2.png" alt="img2"/>
    <div class="overlayed-word">Dev phase Name</div>
  </div>

  <div class="container img3">
    <img src="/public/images/Rectangle 3.png" alt="img3"/>
    <div class="overlayed-word">20% groue Name</div>
  </div>

  </div>  
</div>

  )
}
