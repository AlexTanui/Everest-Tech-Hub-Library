import React from 'react';
import './Homepage.css'; // You may need to create a CSS file for styling
import codesidebarImage from '../images/headdesign.png'; // Import the image

function Home() {
  return (
    <div className="home">
      <div id="container-1" className="container text-center">
        <div className="row">
          <div className="col-sm-8">
            <button data-text="Awesome" className="button">
              <span className="actual-text">
                &nbsp;Everest Tech &nbsp;
                <p>Hub Academy</p>
              </span>
              <span className="hover-text" aria-hidden="true">
                &nbsp;Everest Tech&nbsp;
                <p>Hub Academy</p>
              </span>
            </button>
            <h3>
              Scaling The Heights of Technology
            </h3>
          </div>
          <div className="col-sm-4">
            <img src={codesidebarImage} alt="side-image" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <h2>Unlock Your Role in the Cutting-Edge Global Digital Workforce</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img src="placeholder-image-1.jpg" className="card-img-top" alt="Card 1" />
                <div className="card-body">
                  <h5 className="card-title">Front End Engineering</h5>
                  <p className="card-text">This is a sample card with some content. You can customize it as needed.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Learn More</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="placeholder-image-2.jpg" className="card-img-top" alt="Card 2" />
                <div className="card-body">
                  <h5 className="card-title">Backend Engineering</h5>
                  <p className="card-text">Another card with some different content. Feel free to modify it.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Learn More</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="placeholder-image-3.jpg" className="card-img-top" alt="Card 3" />
                <div className="card-body">
                  <h5 className="card-title">Full stack Engineering</h5>
                  <p className="card-text">A third card example with additional content. Customize to your needs.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Learn More</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <h2>Container 3</h2>
          <p>Content for Container 3</p>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <h2>Container 4</h2>
          <p>Content for Container 4</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
