import React from 'react';
import { Link } from 'react-router-dom';
import background from '../Assets/background.mp4';
import videoGameImage from '../Assets/videoGame3.png';
import ContactUs from '../Assets/unch.jpg';
import './main.css'; 




const Hero = () => {
  return (
    <>
      <div class="banner">
        <div className="bg">
          <div className="content">
            <h2>A new Home for <br /> Game Lovers</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis voluptate officia, eos iusto adipisci repellat voluptatem assumenda incidunt animi</p>
            <Link to="#" className="btn">Join Now</Link>
          </div>
          <video id="myVideo" src={background} autoPlay loop muted/>
        </div>
      </div>

      <div className="about">
        <div className="contentBx">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error beatae laborum, animi rem pariatur dicta et nihil, magni maxime voluptatem accusamus ad! Officia tenetur, necessitatibus magnam dicta dolorum incidunt.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error beatae laborum, animi rem pariatur dicta et nihil, magni maxime voluptatem accusamus ad! Officia tenetur, necessitatibus magnam dicta dolorum incidunt.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error beatae laborum, animi rem pariatur dicta et nihil, magni maxime voluptatem accusamus ad! Officia tenetur, necessitatibus magnam dicta dolorum incidunt.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error beatae laborum, animi rem pariatur dicta et nihil, magni maxime voluptatem accusamus ad! Officia tenetur, necessitatibus magnam dicta dolorum incidunt.
          </p>
          <Link to="#">Read More...</Link>
        </div>
        <img id="myImage" src={videoGameImage}/>
      </div>

      {/* Contact us */}
      <div className="contact">
        <img src={ContactUs} />
        <div className="form">
          <h1>Contact Us</h1>
          <div className="inputBx">
            <p>Enter Name</p>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="inputBx">
            <p>Enter Email</p>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="inputBx">
            <p>Message</p>
            <textarea placeholder="Type Here..." defaultValue={""} />
          </div>
          <div className="inputBx">
            <input type="submit" name="Submit" />
          </div>
        </div>
      </div>

    </>
  );
};

export default Hero;
