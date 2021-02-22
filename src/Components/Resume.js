import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="skills">
          <div className="languages">
            <h3>
              <span>Languages</span>
            </h3>
            <div className="icons">
              <div>
                <img
                  src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
                  alt="typescript"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <img
                  src="https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg"
                  alt="javascript"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <img
                  src="https://www.vectorlogo.zone/logos/python/python-icon.svg"
                  alt="python"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="Git"
                  width="40"
                  height="40"
                />
              </div>
              <div style={{ marginTop: 8 + "px" }}>
                <img
                  src="https://www.vectorlogo.zone/logos/golang/golang-official.svg"
                  alt="Golang"
                  width="70"
                  height="70"
                />
              </div>
            </div>
          </div>
          <div className="languages">
            <h3>
              <span>Web/Mobile Dev</span>
            </h3>
            <div className="icons">
              <div>
                <img
                  src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                  alt="react"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/detain/svg-logos/master/svg/redux.svg"
                  alt="redux"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/material-ui.svg"
                  alt="material-ui"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <img
                  src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                  alt="HTML"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <img
                  src="https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg"
                  alt="Expo"
                  width="40"
                  height="40"
                />
              </div>
            </div>
          </div>
          <div className="languages">
            <h3>
              <span>Back-End</span>
            </h3>
            <div className="icons">
              <div>
                <img
                  src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                  alt="firebase"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <img
                  src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
                  alt="heroku"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <img
                  src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
                  alt="Google Cloud"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <img
                  src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                  alt="NodeJS"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt="Postman"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <img
                  src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                  alt="MongoDB"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <img
                  src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                  alt="express"
                  width="40"
                  height="40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
