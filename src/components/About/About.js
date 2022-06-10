import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import shimul from '../../img/Shimul.png';

const About = () => {
  return (
    <main id="about">
      <h1 className="lg-heading">
        About <span className="secondary-color">Me</span>
      </h1>
      <h2 className="sm-heading">
        Let me introduce...
      </h2>
      <div className="about-info">
        <img src={shimul} alt="shimul" className="bio-image" />

        <div className="bio">
          <p>
            Passionate web app developer. Always try to grab the new features of technology. Last few years made myself skilled in the field of web application development. Acquired to maintain strong interpersonal relationships with teammates. I am passionate about providing care to my work, which keeps me motivated and excited about doing my best work
          </p>
        </div>

        <div className="job job-1">
          <h3>Skills</h3>
          <p>
            • <strong>Programming :</strong> Javascript, ES6, React <br />
            • <strong>Databases :</strong> MongoDB, Firebase, MySQL <br />
            • <strong>Tools :</strong> Git, Webpack, VSCode, Chrome Dev Tool<br />
            • <strong>OS :</strong> Windows
          </p>
        </div>

        <div className="job job-2">
          <h3>Personal Info</h3>
          <p>
            <strong>Name</strong>          :   Shimul Chandra Das<br />
            <strong>DoB</strong>           :   20th Aug 1996 <br />
            <strong>Nationality</strong>   :   Bangladeshi <br />
            <strong>Blood Group</strong>   :   O+<br />
            <strong>Religion</strong>      :   Sanatan <br />

          </p>
        </div>

        <div className="job job-3">
          <h3>Education</h3>
          <p>
            <strong>Bachelor of Business Studies (Honours)</strong><br />
            <strong>Institute:</strong>   National University <br />
            <strong>Subject:</strong>    Accounting
          </p>
        </div>
      </div>
      <div className="cv">
        <button class="btn btn-secondary mx-10"><a href='https://drive.google.com/u/0/uc?id=1HVoO54EMPKV0Y_t4cbiVozNsZ8uRNTvx&export=download' target='_blank' download='resume.pdf' rel="noopener noreferrer"  > Download Resume</a></button>
      </div>
    </main>
  );
};

export default About;