import React from 'react';
import './App.css';
import image  from './images/avater.png';
import image1  from './images/slide.jpg';


function App() {
  return (

    <div className="body">
      <div className="div-h4">
        <h4 >WELLCOME</h4>
      </div>

      <div className="navbar">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">SERVICE</a>
        <a href="#">CONTACT</a>
      </div>

      <div className="header">
        <h1>My Website</h1>
        <p>With a <b>flexible</b> layout.</p>
      </div>

      <div className="row">
        <div className="side">
          <h2>About Me</h2>
          <h5>Photo of me:</h5>
          <div className="fakeimg img1">
            <img src={image} />
          </div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3>More Text</h3>
          <p>Lorem ipsum dolor sit ame.</p>
          <div className="fakeimg">
          <img src={image1} />
            </div><br />
          <div className="fakeimg">
          <img src={image1} />
            
            </div><br />
          <div className="fakeimg">
          <img src={image1} />
            
          </div>
        </div>
        <div className="main">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <div className="fakeimg img1" >
          <img src={image1} />
          </div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <br />
          <h2>TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2017</h5>
          <div className="fakeimg img1">
          <img src={image1} />

          </div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
      </div>

      <div className="footer">
        <h2>Footer</h2>
      </div>

    </div>
  );
}


export default App;
