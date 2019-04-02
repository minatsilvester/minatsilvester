import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import ms from './ms.png'
import linked from './linked.png'
import gitlab from './gitlab.png'
import edu from './education.png'
import mysql from './mysql.png'
import cplus from './c++.png'
import html from './html.png'
import css from './css.png'
import boot from './boot.png'
import python from './python.jpeg'
import postgre from './postgresql.png'
import elixir from './elixir.png'
import phx from './phx.png'
import baby from './baby.png'
import linux from './linux.png'
import windows from './windows.png'
import react from './react.png'
import js from './js.png'
import c from './c.png'
import minat from './minat.jpg'
import age from './20.svg'
import tamil from './tamil.png'
import english from './english.jpg'
import hindi from './hindi.png'
import marathi from './marathi.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class Navigation extends React.Component{
    render(){
      return(
        <div>
        <Router>
        <Navbar bg = "dark" variant = "variant">
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className = "mr-auto">
            <Navbar.Brand>
              <Link to = "/"><img src = {ms} alt = "" height = "100" width = "100" /></Link>
            </Navbar.Brand>
        </Nav>
        <Nav>
              <Nav.Link href="/aboutme"><h3>About Me</h3></Nav.Link>
              <Nav.Link href="/portfolio"><h3>Portfolio</h3></Nav.Link>
        </Nav>
         </Navbar.Collapse>
        </Navbar>
        <Route exact path = "/" component = {Banner} />
        <Route path = "/aboutme" component = {Resume} />
        <Route path = "/portfolio" component = {Portfolio} />
        </Router>
        </div>
      )
    }
}

class Resume extends React.Component{
  render(){
    return(
      <div className = "container-fluid">
          <div className = "container">
            <h1 className = "title"><img src={edu} alt="" height="80" width="50"/> Education </h1>
            <h3 >St. Joesph's Institute of Technology.</h3>
            <div className="content">
            <p>Bacheloer of Technology(B.Tech) in Informataion Technology.</p>
            <p>Duration: 2016 - 2020.</p>
            </div>
            <h3>St. Xavier's Matric Higher Secondary School.</h3>
            <div className="content">
            <p>Higher Secondary Certificate.</p>
            <p>Duration: 2016 - 2015.</p>
            </div>
            <h3>Holy Family High School.</h3>
            <div className="content">
            <p>Secondary School Certificate.</p>
            <p>2013 - 2014.</p>
            </div>
          </div>
          <div className="container">
          <h1 className = "title"><img src={edu} alt="" height="80" width="50"/> Skills</h1>
          <div className = "container">
            <div className = "row">
              <div className = "col-md-6">
                <center><img src={mysql} alt="" width="50%"/></center>
              </div>
              <div className = "col-md-6">
                <center><img src={postgre} alt="" width="50%" height="300"/></center>
              </div>
          </div>
          <div className = "row">
            <div className = "col-md-3">
              <center><img src={c} alt="" height = "230px"/></center>
            </div>
            <div className = "col-md-3">
              <center><img src={cplus} alt="" /></center>
            </div>
            <div className = "col-md-3">
              <center><img src={elixir} alt="" height = "200px"/></center>
            </div>
            <div className = "col-md-3">
              <center><img src={python} alt="" /></center>
            </div>
          </div>
          <div className = "row">
            <div className = "col-md-4">
              <center><img src={html} alt=""/></center>
            </div>
            <div className = "col-md-4">
              <center><img src={css} alt="" /></center>
            </div>
            <div className = "col-md-4">
              <center><img src={js} alt="" height = "200px" /></center>
            </div>
          </div>
          <div className = "row">
            <div className = "col-md-4">
              <center><img src={boot} alt="" /></center>
            </div>
            <div className = "col-md-4">
              <center><img src={phx} alt="" height = "200"/></center>
            </div>
            <div className = "col-md-4">
              <center><img src={react} alt="" height = "200"/></center>
            </div>
          </div>
          <div className = "row">
            <div className = "col-md-6">
              <center><img src={linux} alt="" /></center>
            </div>
            <div className = "col-md-6">
              <center><img src={windows} alt="" height = "200"/></center>
            </div>
          </div>
          </div>
          </div>
          <div className = "container">
          <h1 className = "title"><img src={edu} alt="" height="80" width="50"/> Area of Interest </h1>
          <br />
          <br />
            <div className="row">
              <div className="col-md-6">
                <center><h1>Database Management Systems</h1></center>
              </div>
              <div className="col-md-6">
                <center><h1>Web Development</h1></center>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col-md-6">
                <center><h1>Computer Networks</h1></center>
              </div>
              <div className="col-md-6">
                <center><h1>Front end Web Design</h1></center>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row">
            <div className="col-md-12">
              <center><h1>Full Stack Web Development</h1></center>
            </div>
            </div>
            <br />
            <br />
          </div>
          <div className="container">
              <h1 className = "title"><img src={edu} alt="" height="80" width="50"/>Projects</h1>
              <h3 >Website for department of Information Technology of St.Joseph's Institute of Technology.</h3>
              <div className="content">
              <p>2nd Year.</p>
              </div>
              <br/>
              <h3 >Website for department of Enterprenuership Development Cell of St.Joseph's Institute
              of Technology.</h3>
              <div className="content">
              <p>3rd Year.</p>
              </div>
              <h3 >Project Status and Completion Validation using Elixir, Phoenix framework and ReactJs.</h3>
              <div className="content">
              <p>Final Year (Ongoing).</p>
              </div>
        </div>
        <div className="container">
          <h1 className = "title"><img src={edu} alt="" height="80" width="50"/>Career Objective</h1>
        <h4>Application of acquired knowledge to solve problems technically and to add
        to the technical age my contribution for the development and betterment of society.</h4>
        </div>
        <br/>
        <center><img src = {ms} alt = "" height = "100" width = "100" /></center>
      </div>
    )
  }
}

class Portfolio extends React.Component{
  render(){
    return(
      <div className="container-fluid">
      <br/>
        <div className="container">
          <center><img src={minat} alt="" height= "200px" width="200px"/></center>
        </div>
        <br/>
        <div className="container">
        <center><h1 className="title">Hello There! I am Minat Silvester.</h1></center>
        <center><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am Currently pursuing B.Tech
        Information Technology and I am in my final year.</h3></center><br/>
        <center><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am Looking for Companies with innovative
        ideas and challenging environment to work for.</h3></center>
        </div>
        <div className="container">
          <center><h1 className="title">Here is a look at my Bio</h1></center>
        </div><br/>
        <div className="container">
        <center>
          <h2>Born on</h2>
          <img src={baby} alt="" height="300" width="300" />
          <h1 className="title">27 May 1999</h1>
          <h3>Which Means</h3>
          <h1>I am <img src={age} alt="" height="200" weight="200"/></h1>
          </center>
        </div>
        <div className="container">
        <center>
          <h1 className="title">I have lived in different places</h1>
          <h3>Bargur, Krishnagiri, Mumbai, Tirunelveli, Bengaluru</h3>
          <h3>So i can speak ......</h3>
        </center><br/><br/>
        <div className="row">
          <div className="col-md-6">
              <center><img src={tamil} alt="" width="200" /></center>
          </div>
          <div className="col-md-6">
              <center><img src={english} alt="" width="200" /></center>
          </div>
        </div><br/><br/>
        <div className="row">
          <div className="col-md-6">
              <center><img src={hindi} alt="" width="200" /></center>
          </div>
          <div className="col-md-6">
              <center><img src={marathi} alt="" width="200" /></center>
          </div>
        </div>
        </div><br/>
        <br/>
        <br/>
        <div className="container">
          <center>
          <h1 className="title">Now, why you should hire me?</h1>
          </center>
          <br/>
          <br/>
          <ul>
          <li> Well firstly, I am a elixir-phoenix developer. You don't have many out there</li><br/><br/>
          <li> I have experience working in ReactJs, which is also a reputed technology.</li><br/><br/>
          <li> I am full focused and dedicated when i takeup a work, so you can expect your work delivered when you want it.</li><br/><br/>
          <li> I am very interested when it comes to web development and machine learning.</li><br/><br/>
          <li> I am good in mathematic, So i also chose to learn the basics of machine learning and can work in it if situations arise.</li><br/><br/>
          </ul>
        </div><br/><br/>
        <div className="container">
        <center>
          <h1 className="title">Well that's it about me. It's for you to decide now</h1><br/><br/>
          <h3>If you hire me, I can gurantee you my full fletched work, focus and dedication</h3><br/>
          <h3>Hope You make a good decision.....</h3>
        </center>
        </div><br/><br/>
        <div className="container">
          <center>
            <h1 className="title">See Ya! </h1>
          </center>
        </div>
      </div>
    )
  }
}

class Banner extends React.Component{
  render(){
    return(
      <div>
      <div className = "mainBanner">
      <div className = "hero-text">
        <h1>Hello there, I'm Minat Silvester!</h1>
        <p>Full Stack Phoenix developer | FOSS Enthusiasist</p>
        <a href = "https://www.linkedin.com/in/minat-silvester-80a2a8148/">
        <img src = {linked} alt = "" height = "50" width = "50" />
        </a>&nbsp;&nbsp;&nbsp;
        <a href = "https://gitlab.com/infinity_seeker">
        <img src = {gitlab} alt = "" height = "50" width = "50" />
        </a>&nbsp;&nbsp;&nbsp;
      </div>
      </div>
      </div>
    )
  }
}


ReactDOM.render(
  <Navigation />,
  document.getElementById('root')
);
