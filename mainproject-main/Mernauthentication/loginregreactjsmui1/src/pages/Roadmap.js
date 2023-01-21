import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Roadmap = () => {
  return (
    
    <div>
    <div class="container9">
         <span class="text">Roadmap</span>
    </div>
    <hr></hr>
   <div style={{ width: '30rem',height: '17rem',marginLeft: '12rem',marginRight:"1rem",marginTop:"0.6rem" }}>
     <iframe title="ITONICS Cloud"  xml="lang" src="https://teaser.itonics.io/roadmap/fullscreen" width="250%" height="500" name="iFrame" data-service="teaser.itonics"></iframe>
     
   </div>
   <br></br>
   <hr style={{marginTop:"15.5rem" }}></hr>
   <div style={{marginRight:"1rem"}}>
   <footer>
              <div class="content-wrapper-sm display-flex-between">
                   <small>&copy; Copyright by Raj,<br></br>
                       Since 2022</small>
                   <div class="social-links">
                        <ul>
                             <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                             <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                             <li><a href="#"><i class="fa fa-snapchat-square" aria-hidden="true"></i></a></li>
                             <li><a href="#" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                        </ul>
                   </div>
              </div>
         </footer>
   </div>
   </div>


  )
}

export default Roadmap