import React from 'react';
import '../App.css'
import profile from '../assets/foto.jpg'
import mayora from '../assets/mayora.png'
import hacktiv8 from '../assets/logoH8.jpeg'
import logoUsahid from '../assets/logoUsahid.jpg'
import kspsLogo from '../assets/kspslogo.png'
import npmLogo from '../assets/npm-logo.png'
import amarBank from '../assets/AmarBank_logo.svg'

function Navbar() {
  return (
    <div class="w3-light-grey">
      <div class="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
        <div class="w3-row-padding">
          <div class="w3-third">
            <div class="w3-white w3-text-grey w3-card-4">
              <div class="w3-display-container">
                <img src={profile} style={{ width: "100%" }} alt="Avatar" />
                <div class="w3-display-bottomleft w3-container w3-text-black">
                  <h2 style={{ background: "linear-gradient(to left, rgba(255,255,255,0.4), white)" }}>Marcel Maruli Pasaribu</h2>
                </div>
              </div>
              <div class="w3-container">
                <p><i class="fa fa-br/iefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Full-stack Engineer</p>
                <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Jl. Tembok No.5, Kayuputih, Pulogadung, Jakarta-Timur(13210).</p>
                <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>marcell.maruli021@gmail.com <br /> or <br /> marcel.mp1000@gmail.com</p>
                <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i> <a href="https://wa.me/+6281934109699"> 081934109699 </a> || 08121000592</p>
                <p><i class="fa fa-github fa-fw w3-margin-right w3-large w3-text-teal"></i><a href="https://github.com/marcel021maruli">https://github.com/marcel021maruli</a></p>
                <p><i class="fa fa-linkedin fa-fw w3-margin-right w3-large w3-text-teal"></i><a href="https://www.linkedin.com/in/marcel-pasaribu-1a3a4b175/">https://www.linkedin.com/in/marcel-pasaribu-1a3a4b175/</a></p>
                <hr />

                <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                <p>Javascript</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-grey" style={{ width: "100%" }}>Advance</div>
                </div>
                <p>ReactJS & React-Native (React-Redux & React-Router)</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-grey" style={{ width: "100%" }}>Advance</div>
                </div>
                <p>VueJS(VueX & Vue-Router)</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-grey" style={{ width: "100%" }}>Advance</div>
                </div>
                <p>Github</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-grey" style={{ width: "100%" }}>Advance</div>
                </div>
                <p>PostgreSQL</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-grey" style={{ width: "100%" }}>Advance</div>
                </div>
                <p>MongoDB</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-grey" style={{ width: "75%" }}>Intermediate</div>
                </div>
                <p>GraphQL</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-grey" style={{ width: "75%" }}>Intermediate</div>
                </div>
                <p>English</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-grey" style={{ width: "100%" }}>Advance</div>
                </div>
                <br />

                <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Personal Skill</b></p>
                <p>Teamwork</p>
                <div class="w3-light-grey w3-round-xlarge">
                  <div class="w3-round-xlarge w3-teal" style={{ height: '24px', width: "90%" }}></div>
                </div>
                <p>Leadership</p>
                <div class="w3-light-grey w3-round-xlarge">
                  <div class="w3-round-xlarge w3-teal" style={{ height: '24px', width: "75%" }}></div>
                </div>
                <p>Creativity</p>
                <div class="w3-light-grey w3-round-xlarge">
                  <div class="w3-round-xlarge w3-teal" style={{ height: '24px', width: "80%" }}></div>
                </div>
                <p>Communication</p>
                <div class="w3-light-grey w3-round-xlarge">
                  <div class="w3-round-xlarge w3-teal" style={{ height: '24px', width: "100%" }}></div>
                </div>
                <p>Management</p>
                <div class="w3-light-grey w3-round-xlarge">
                  <div class="w3-round-xlarge w3-teal" style={{ height: '24px', width: "80%" }}></div>
                </div>
                <br />
              </div>
            </div><br />
          </div>

          {/* PORTFOLIOS  */}
          <div class="w3-twothird">
            <div class="w3-container w3-card w3-white w3-margin-bottom">
              <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-newspaper-o fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Portfolios</h2>
              <div class="w3-container">

                <h5 class="w3-opacity"><b>Backless-Js (NPM)</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>April 2020 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
                <p>Making NPM Package to build a server less than 5 minutes. Using ODM Mongoose for MongoDB database, bcrypt for hashing a password, Jsonwebtoken to generate a token, and express in server-side, Making Graphical User Interface(GUI) using React-Js.</p>
                <p>
                  <a href="https://github.com/Backless-Js/Backless-Js"><button class="w3-button w3-black w3-round-xlarge" style={{ margin: "0 0.5vw 0 0.5vw" }}><i class="fa fa-github w3-hover-opacity" ></i> Github</button></a>
                  <a href="https://www.npmjs.com/package/backless"> <button class="w3-button w3-red w3-round-xlarge" style={{ width: "100px", margin: "0 0.5vw 0 0.5vw" }}><img src={npmLogo} alt="npm-logo" style={{ width: "30%" }} /> NPM</button></a>
                  <a href="https://backless-js.firebaseapp.com"> <button class="w3-button w3-round-xlarge" style={{ backgroundColor: "#7b4cdb", margin: "0 0.5vw 0 0.5vw" }}><i class="fa fa-file-text-o w3-hover-opacity" ></i> Documentation</button></a>
                </p>
                <hr />
              </div>

              <div class="w3-container">
                <h5 class="w3-opacity"><b>EntertainMe</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>April 2020</h6>
                <p>
                  Build a web application using React, React-Redux, GraphQL, Apollo, and Jest for client-side. Using Apollo-Server, GraphQL, Redis, ioRedis, Axios, and MongoDB for server-side.
                </p>
                <p>
                  <a href="https://github.com/Marcel021Maruli/Marcel-EntertainMe"><button class="w3-button w3-black w3-round-xlarge" style={{ margin: "0 0.5vw 0 0.5vw" }}><i class="fa fa-github w3-hover-opacity" ></i> Github</button></a>
                </p>
                <hr />
              </div>

              <div class="w3-container">
                <h5 class="w3-opacity"><b>React-YuGiOh</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>April 2020</h6>
                <p>
                  Build a web using YuGiOh API for a server-side, and using React and React-Redux for client-side.
                </p>
                <p>
                  <a href="https://github.com/Marcel021Maruli/Marcel-ReactChallenge"><button class="w3-button w3-black w3-round-xlarge" style={{ margin: "0 0.5vw 0 0.5vw" }}><i class="fa fa-github w3-hover-opacity" ></i> Github</button></a>
                  <a href="https://yugioh-react.web.app/"><button class="w3-button w3-blue w3-round-xlarge" style={{ margin: "0 0.5vw 0 0.5vw" }}><i class="fa fa-link w3-hover-opacity" ></i> Link</button></a>
                </p>
                <hr />
              </div>

              <div class="w3-container">
                <h5 class="w3-opacity"><b>Sudoku</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>April 2020</h6>
                <p>
                  Build a mobile-game-application Sudoku using API for a server-side, and using React-Native, React-Redux, Axios, and Expo for client-side.
                </p>
                <p>
                  <a href="https://github.com/Marcel021Maruli/Marcel-Sufoku"><button class="w3-button w3-black w3-round-xlarge" style={{ margin: "0 0.5vw 0 0.5vw" }}><i class="fa fa-github w3-hover-opacity" ></i> Github</button></a>
                </p>
                <hr />
              </div>

              <div class="w3-container">
                <h5 class="w3-opacity"><b>BlackJack</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>March 2020</h6>
                <p>
                  Build game web-application using vue.js (Vuex and Vue-Router) in client-side, and using socket.io, express, PostgreSQL and using CardDeck's API.
                </p>
                <p>
                  <a href="https://github.com/H8-BlackJack/BlackJack"><button class="w3-button w3-black w3-round-xlarge" style={{ margin: "0 0.5vw 0 0.5vw" }}><i class="fa fa-github w3-hover-opacity" ></i> Github</button></a>
                  <a href="https://blackjack2-e1340.firebaseapp.com/"><button class="w3-button w3-blue w3-round-xlarge" style={{ margin: "0 0.5vw 0 0.5vw" }}><i class="fa fa-link w3-hover-opacity" ></i> Link</button></a>
                </p>
                <hr />
              </div>


              <div class="w3-container">
                <h5 class="w3-opacity"><b>E-Commerce</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>March 2020</h6>
                <p>
                  Making E-commerce's Client and CMS Side using Vue.js (Vuex and Vue-Router) as a Framework in client-side, and using PostgreSQL as a database,
                </p>
                <p>
                  <a href="https://github.com/Marcel021Maruli/e-commerce-1"><button class="w3-button w3-black w3-round-xlarge" style={{ margin: "0 0.5vw 0 0.5vw" }}><i class="fa fa-github w3-hover-opacity" ></i> Github</button></a>
                  <a href="https://coffee-break-334aa.firebaseapp.com"><button class="w3-button w3-blue w3-round-xlarge" style={{ margin: "0 0.5vw 0 0.5vw" }}><i class="fa fa-link w3-hover-opacity" ></i> Link</button></a>
                </p>
                <hr />
              </div>

              <div class="w3-container">
                <h5 class="w3-opacity"><b>E-Commerce CMS</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>March 2020</h6>
                <p>
                  Making E-commerce's Client and CMS Side using Vue.js (Vuex and Vue-Router) as a Framework in client-side, and using PostgreSQL as a database,
                </p>
                <p>
                  <ul style={{ textAlign: 'left' }}>
                    <li>
                      Admin-Email= marcel.admin@gmail.com
                    </li>
                    <li>
                      Admin-Password = 12345
                    </li>
                    <li>
                      Admin-SecretCode = im admin yo!
                    </li>
                  </ul>
                </p>
                <p>
                  <a href="https://github.com/Marcel021Maruli/e-commerce-cms"><button class="w3-button w3-black w3-round-xlarge" style={{ margin: "0 0.5vw 0 0.5vw" }}><i class="fa fa-github w3-hover-opacity" ></i> Github</button></a>
                  <a href="https://e-commerce-cms-a6bed.firebaseapp.com"><button class="w3-button w3-blue w3-round-xlarge" style={{ margin: "0 0.5vw 0 0.5vw" }}><i class="fa fa-link w3-hover-opacity" ></i> Link</button></a>
                </p>
                <hr />
              </div>


              <div class="w3-container">
                <h5 class="w3-opacity"><b>Kanban</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>March 2020</h6>
                <p>
                  Making Kanban application using Vue.js (Vuex and Vue-Router) as a Framework in client-side, PostgreSQL as a database, and GoogleOauth for login and Socket.io,
                </p>
                <p>
                  <a href="https://github.com/Marcel021Maruli/kanban-1?organization=Marcel021Maruli&organization=Marcel021Maruli"><button class="w3-button w3-black w3-round-xlarge" style={{ margin: "0 0.5vw 0 0.5vw" }}><i class="fa fa-github w3-hover-opacity" ></i> Github</button></a>
                  <a href="https://kanfun-1584103939567.firebaseapp.com"><button class="w3-button w3-blue w3-round-xlarge" style={{ margin: "0 0.5vw 0 0.5vw" }}><i class="fa fa-link w3-hover-opacity" ></i> Link</button></a>
                </p>
                <hr />
              </div>


              <div class="w3-container">
                <h5 class="w3-opacity"><b>Fancy-Todo</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>March 2020</h6>
                <p>
                  Making Fancy-Todo list using Vue.js (Vuex and Vue-Router) as a Framework in client-side, PostgreSQL as a database, and GoogleOauth for login and SendGrid API,
                </p>
                <p>
                  <a href="https://github.com/Marcel021Maruli/fancy-todo?organization=Marcel021Maruli&organization=Marcel021Maruli"><button class="w3-button w3-black w3-round-xlarge" style={{ margin: "0 0.5vw 0 0.5vw" }}><i class="fa fa-github w3-hover-opacity" ></i> Github</button></a>
                  <a href="https://fancy-to-do-267406.firebaseapp.com"><button class="w3-button w3-blue w3-round-xlarge" style={{ margin: "0 0.5vw 0 0.5vw" }}><i class="fa fa-link w3-hover-opacity" ></i> Link</button></a>
                </p>
                <hr />
              </div>

            </div>

            {/* WORKING EXPERIENCE */}
            <div class="w3-container w3-card w3-white w3-margin-bottom">
              <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>

              <div class="w3-container">
                <h5 class="w3-opacity"><img src={amarBank} alt="logo-ksps" style={{ width: "80px" }} /><b>PT. Amar Bank Indonesia | Tunaiku | Senyumku</b></h5>
                <h6 class="w3-opacity"><b>Frontend Engineer</b></h6>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i> October 2020 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
                {/* <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p> */}
                <ul style={{ textAlign: 'left' }}>
                  <li>Developing web-platform such as contribute to revamp web-platform, make a clean & re-useable code and responsive web-platform.</li>
                  <li>Contribute to develop UI/UX web-platform.</li>
                  <li>Optimize CSS and SCSS.</li>
                  <li>Designing the application appropriate with product owner requested.</li>
                  <li>Ensure that code has no bugs before it merged to parent repository.</li>
                </ul>
                <hr />
              </div>

              <div class="w3-container">
                <h5 class="w3-opacity"><img src={kspsLogo} alt="logo-ksps" style={{ width: "80px" }} /><b>PT. Karya Solusi Prima Sejahtera</b></h5>
                <h6 class="w3-opacity"><b>Developer</b></h6>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>August 2020 - October 2020 </h6>
                {/* <span class="w3-tag w3-teal w3-round">Current</span> */}
                {/* <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p> */}
                <ul style={{ textAlign: 'left' }}>
                  <li>Gathering requirement to develop software in internal either external project.</li>
                  <li>Maintain and fixing bugs.</li>
                  <li>Design the system appropriate with user requested.</li>
                  <li>Gave a solution for an issues that emerge.</li>
                </ul>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><img src={mayora} alt="logo-mayora" style={{ width: "50px" }} /><b>PT. Mayora Indah, Tbk</b></h5>
                <h6 class="w3-opacity"><b>Unit Head of Quality Control</b></h6>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2019 - November 2019</h6>
                <ul style={{ textAlign: 'left' }}>
                  <li>Monitoring and Controlling Quality start from Raw Material, Packaging Material, In-line process, and Final product before it distribute.</li>
                  <li>Monitoring, preventing. and evaluating reject product and coordinate with team process to make corrective action.</li>
                  <li>Verify QC field report and analyze it to make an improvement.</li>
                  <li>Coordinates and monitoring QC field activities.</li>
                  <li>Evaluate and scored Team member of QC Field.</li>
                  <li>Monitoring and verifying Trial product.</li>
                  <li>Verifying and trace complaint product whether from internal or external complaint.</li>
                </ul>
                <hr />
              </div>
            </div>


            {/* EDUCATION */}
            <div class="w3-container w3-card w3-white">
              <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
              <div class="w3-container">
                <h5 class="w3-opacity"><img src={hacktiv8} alt="logo-hacktiv" style={{ width: "50px", borderRadius: "50%" }} /><b>Hacktiv8 Indonesia</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Nov 2019 - April 2020</h6>
                <p>Learning Javascript language, express, postgreSQL, MongoDB, Vue, ReactJs, React-Native, and GraphQL.</p>
                <a href="https://hire.hacktiv8.com/verify/fsjs/MarcelMaruliPasaribu-20200404">Click to see E-Certificate</a>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><img src={logoUsahid} alt="logo-usahidv" style={{ width: "100px", borderRadius: "50%" }} /><b>Sahid University Jakarta</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2014 - 2018</h6>
                <h5 class="w3-opacity"><b>Bachelor's Degree of Food Technology</b></h5>
                <p>Graduated with title S.Tp <h6>(GPA: 3.22/4.00)</h6></p>
                <a href="https://ibb.co/F4ztjpb">Click to see Transkrip</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="w3-container w3-teal w3-center w3-margin-top">
        <p>Find me on social media.</p>
        <a href="https://www.facebook.com/CallmeAcel">
          <i class="fa fa-facebook-official w3-hover-opacity"></i>
        </a>
        <a href="https://www.instagram.com/marcelmaruli/?hl=en">
          <i class="fa fa-instagram w3-hover-opacity"></i>
        </a>
        <a href="https://github.com/marcel021maruli">
          <i class="fa fa-github w3-hover-opacity"></i>
        </a>
        <a href="https://twitter.com/Marcel_Maruli">
          <i class="fa fa-twitter w3-hover-opacity"></i>
        </a>
        <a href="https://www.linkedin.com/in/marcel-pasaribu-1a3a4b175/">
          <i class="fa fa-linkedin w3-hover-opacity"></i>
        </a>
      </footer>

    </div>
  );
}

export default Navbar;
