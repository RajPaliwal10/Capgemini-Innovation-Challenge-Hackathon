import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Car = () => {
  return (
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
    
    
  )
}

export default Car