import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Container, Row } from "react-bootstrap";
import "../app.css"

const Car = () => {
  return (
    <div>
      <div>
      <Carousel fade>
        <Carousel.Item>
        <img
                src="https://source.unsplash.com/1400x400/?solar energy"
                className="d-block w-100"
                alt="..."
              />
          <Carousel.Caption>
            <h3>What?</h3>
            <p>The sustainability radar is an interactive asset for business
                  domains to explore the applications of the 17 sustainable
                  development goals (SDGs)from internal and external sources and
                  potential areas of contribution for NOW-NEW-NEXT of the
                  organisation to create a long-term positive impact on the
                  environment.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
                      className="d-block w-100"
                src="https://source.unsplash.com/1400x400/?sustainability"
                alt="..."
              />

          <Carousel.Caption>
            <h3>Why?</h3>
            <p>The sustainability radar aims to provide a holistic view of
                  sustainability practices across various processes and to guide
                  the organisations to plan the next steps for actions to be taken
                  according to the upcoming horizons.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
                src="https://source.unsplash.com/1400x400/?windmill"
                className="d-block w-100"
              />

          <Carousel.Caption>
            <h3>How?</h3>
            <p>
            The radar is designed with the idea of providing useful
                  information to the senior leaders of the organisations.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <hr></hr>
    <div>
    <Container fluid className="App py-2 overflow-hidden">
      <Row className="card-example d-flex flex-row flex-nowrap overflow-auto">
    <Card border="primary" class="card" style={{ width: '32rem',height: '22rem',marginLeft: '15rem',marginRight:"1rem",marginTop:"0.8rem" }}>
      <Card.Body>
        <Card.Title>Explore</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
          Read about the various innovative measures that have been taken by businesses, startups from various industries and get inspired to create your own sustainability journey roadmap.
        </Card.Text>
      </Card.Body>
    </Card>
    <div class="card" style={{width: "18rem",marginBottom: "5rem",marginRight:"1rem"}}>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">
    <Card border="primary" style={{ width: '12rem',height: '10rem' }}>
      <Card.Body>
        <Card.Title>My Radar</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
    </li>
    <li class="list-group-item">
    <Card border="primary" style={{ width: '12rem',height: '10rem' }}>
      <Card.Body>
        <Card.Title>Concepts and frame work</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
    </li>
    </ul>
    </div>
    <div class="card" style={{width: "18rem",marginBottom: "5rem"}}>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">
    <Card border="primary" style={{ width: '12rem',height: '10rem' }}>
      <Card.Body>
        <Card.Title>About SDG</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
    </li>
    <li class="list-group-item">
    <Card border="primary" style={{ width: '12rem',height: '10rem' }}>
      <Card.Body>
        <Card.Title>Workshops</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
           
        </Card.Text>
      </Card.Body>
    </Card>
    </li>
    </ul>
    </div>
    </Row>
    </Container> 
    </div>
    <hr style={{ marginTop:"-3.5rem" }}></hr>
    
          <div class="container my-5">
        <div class="row" style={{ marginTop:"-4.5rem" }}>
          <div class="col-lg-6" style={{ marginTop:"3.5rem" }}>
            <img class="shadow"  style={{ width:"25rem" }} src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          </div>
          <div class="col-lg-6">
            <div class="p-5 mt-4">
                <h1 class="display-4">About SDGs</h1>
                <p class="lead">The Sustainable Development Goals are the blueprints to achieve a better and more sustainable future for all. They address the global challenges we face, including poverty, inequality, climate change, environmental degradation, peace and justice. </p>
                <a href="#" class="btn btn-outline-dark">Read More</a>
              </div>
          </div>
      </div>
      <hr></hr>
      </div>
      <footer>
               <div class="content-wrapper-sm display-flex-between">
                    <small>&copy; Copyright by Raj,<br></br>
                        Since 2022</small>
                    <div class="social-links">
                         <ul>
                              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i class="fa fa-snapchat-square" aria-hidden="true"></i></a></li>
                              <li><a href="https://www.linkedin.com/company/team-volta" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                         </ul>
                    </div>
               </div>
          </footer>
    </div>

    
    
    
  )
}

export default Car