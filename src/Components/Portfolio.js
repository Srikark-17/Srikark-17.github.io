import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return <img alt={projects.title} src={projectImage} />;
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <section id="projects">
            <div className="user-projects">
              <div className="images-left">
                <a target="_blank" href="https://netflix-clone-ee61a.web.app">
                  <div className="project-imageLeft">
                    <img
                      alt="Netflix Clone"
                      src="images/portfolio/Netflix-Clone.png"
                    />
                    <div className="overlay">
                      <i className="fa fa-link"></i>
                    </div>
                  </div>
                </a>
              </div>
              <div className="contents-right">
                <h3>Netflix Clone</h3>
                <div>
                  <img
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt="react"
                    width="32"
                    height="32"
                  />
                  <img
                    src="https://raw.githubusercontent.com/detain/svg-logos/master/svg/redux.svg"
                    alt="redux"
                    width="28"
                    height="28"
                  />
                  <img
                    src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                    alt="firebase"
                    width="32"
                    height="32"
                  />
                  <img
                    src="https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg"
                    width="60"
                  />
                  &nbsp;
                </div>
                <p>
                  I created a web application that imitates Netflix with
                  subscription logic and Facebook login. It uses React for the
                  front-end, Firebase for the back-end, and Stripe as the
                  payment system.
                </p>
                <a
                  className="project-link"
                  target="_blank"
                  href="https://netflix-clone-ee61a.web.app"
                >
                  Check it out!
                </a>
              </div>
            </div>

            <div className="user-projects">
              <div className="images-right">
                <a target="_blank" href="https://slack-clone-dd458.web.app/">
                  <div className="project-image">
                    <img
                      alt="Slack Clone"
                      src="images/portfolio/Slack-Clone.png"
                    />
                    <div>
                      <i className="fa fa-link"></i>
                    </div>
                  </div>
                </a>
              </div>
              <div className="contents">
                <h3>Slack Clone</h3>
                <div>
                  <img
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt="react"
                    width="32"
                    height="32"
                  />
                  <img
                    src="https://raw.githubusercontent.com/detain/svg-logos/master/svg/redux.svg"
                    alt="redux"
                    width="28"
                    height="28"
                  />
                  <img
                    src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                    alt="firebase"
                    width="32"
                    height="32"
                  />
                  &nbsp;
                </div>
                <p>
                  I created a web application that mimcs Slack with real-time
                  messaging functionality, powered by Firebase's Firestore. It
                  uses React for the front-end, Redux for State Management, and
                  Firebase for backend.
                </p>
                <a
                  className="project-link"
                  target="_blank"
                  href="https://slack-clone-dd458.web.app/"
                >
                  Check it out!
                </a>
              </div>
            </div>
            <div className="user-projects">
              <div className="images-left">
                <a
                  target="_blank"
                  href="https://github.com/Srikark-17/SudokuSolver"
                >
                  <div className="project-imageLeft">
                    <img
                      alt="Sudoku Game & Solver"
                      src="images/portfolio/Sudoku-GUI.png"
                    />
                    <div className="overlay">
                      <i className="fa fa-link"></i>
                    </div>
                  </div>
                </a>
              </div>
              <div className="contents-right">
                <h3>Sudoku Game & Solver</h3>
                <div>
                  <img
                    src="https://www.vectorlogo.zone/logos/python/python-icon.svg"
                    alt="python"
                    width="32"
                    height="32"
                  />
                  &nbsp;
                </div>
                <p>
                  I developed a CLI system for solving a Sudoku Board using a
                  backtracking algorithm to find a solution to any solvable
                  game. I also developed a GUI to play a game of Sudoku using a
                  Python Library called Pygame.
                </p>
                <a
                  className="project-link"
                  target="_blank"
                  href="https://github.com/Srikark-17/SudokuSolver"
                >
                  Check it out!
                </a>
              </div>
            </div>

            <div className="user-projects">
              <div className="images-right">
                <a
                  target="_blank"
                  href="https://github.com/Srikark-17/NEAT-Flappy-Bird"
                >
                  <div className="project-image">
                    <img
                      alt="AI Learns to Play Flappy Bird"
                      src="images/portfolio/AI-Flappy-Bird.png"
                    />
                    <div>
                      <i className="fa fa-link"></i>
                    </div>
                  </div>
                </a>
              </div>
              <div className="contents">
                <h3>AI Learns to Play Flappy Bird</h3>
                <div>
                  <img
                    src="https://www.vectorlogo.zone/logos/python/python-icon.svg"
                    alt="python"
                    width="32"
                    height="32"
                  />
                  &nbsp;
                </div>
                <p>
                  Using neuroevolution of augmenting topologies (NEAT), trained
                  an agent to play a clone of the game Flappy Bird. I
                  programmend both the game environment and the AI using Python.
                </p>
                <a
                  className="project-link"
                  target="_blank"
                  href="https://github.com/Srikark-17/NEAT-Flappy-Bird"
                >
                  Check it out!
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
