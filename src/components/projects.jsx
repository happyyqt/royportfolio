import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects" id = "projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
						<a href="https://github.com/happyyqt/MSEC" target="_blank" rel="noopener noreferrer">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/sports1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Master Thesis</h3>
											<span>We designed a deep-learning based multitask-system for Exercise Recognition and Counting. 
												TensorFlow framework is applied and a new dataset Rep-Penn is created. To know more about this paper, please click!
											</span>
										</div>
									</div>
								</div>
							</div>
						</a>
						<a href="https://salty-fortress-74552.herokuapp.com" target="_blank" rel="noopener noreferrer">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/camp1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>RoyCamp</h3>
											{/* <h3><a className="btn btn-primary" href="https://salty-fortress-74552.herokuapp.com" target="_blank" rel="noopener noreferrer">RoyCamp </a></h3> */}
											<span>In this project, I designed a website for booking campsites around Canada. A blog application is created from scratch using Node, Express, and MongoDB. Please feel free to have a look at this website!</span>
											<p className="icon">
												{/* <span><a href="#"><i className="icon-share3" /></a></span> */}
												{/* <span><a href="https://salty-fortress-74552.herokuapp.com/"><i className="icon-eye" /></a></span> */}
												{/* <span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
						</a>
						<a href="https://githubfinder4qingtianyu.netlify.app" target="_blank" rel="noopener noreferrer">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/github1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Github Finder</h3>
											<span>In this project, I designed a React app to search Github users and his/her profiles. This app applies the Context API including useContext and useReducer hooks for state management.
												Please feel free to explore this website!</span>
				
										</div>
									</div>
								</div>
							</div>
						</a>
						<a href="https://github.com/happyyqt/ContactKeeper" target="_blank" rel="noopener noreferrer">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBotton">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>ContactKeeper</h3>
											<span>In Progress at present!</span>
											<span>I am building an application for managing contacts. Frontend is based on React, and 
												backend used Express framework and MongoDB. Unit Test and Docker will be added in the end.
											</span>
				
										</div>
									</div>
								</div>
							</div>
						</a>
						
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 04</a></h3>
											<span>Application</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Graphic, Logo</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div> */}
						</div>
						{/* <div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div> */}
					</div>
				</section>
      </div>
    )
  }
}
