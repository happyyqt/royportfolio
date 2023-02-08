import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">My Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer at <a href = "https://www.i-sight.com/">i-Sight </a><span>03/2022-01/2023 (11 months)</span></h2>
                        <p>
                        In my previous position at i-Sight, I developed and maintained web applications utilizing HTML, CSS, JavaScript, and PostgreSQL. 
                        I honed my front-end skills by adding custom UI elements, creating dynamic interfaces, and integrating with RESTful APIs. 
                        In the aspect of backend, I was involved in data integration, which required me to design APIs to fetch data from external platforms. Additionally, I collaborated with the team in implementing business logic to meet clients' needs.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Research Assistant at University of Ottawa <span>09/2019-08/2021</span></h2>
                        <p>
                           I worked in a group on the 'Digital Coaching' project led by Prof. El Saddik. 
                           My main responsibility included conducting the literature review, developing the methodology, 
                           building Tensorflow-based machine learning models, and collecting data for our dataset. 
                        </p>
                        <p>
                           I also developed and maintained a coaching platform that streamlines communication between sports coaches and users. 
                           To ensure a seamless user experience, I utilized React and Context API on the frontend, and employed NodeJS and Express framework for the backend implementation. 
                           The app received positive feedback from users. Both the research and developing experience improved my self-learning and problem-solving abilities. 
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Teaching Assistant at University of Ottawa <span>09/2019-12/2020</span></h2>
                        <p>
                           I worked as a Teaching Assistant for four terms. My duty covered presenting pre-lab talks,
                           giving lab demonstrations, tutoring students with course projects and marking exams. This
                           experience developed my communication skills and conflict-resolution abilities.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Information Volunteer for ICMR 2019 <span>06/2019-06/2019</span></h2>
                        <p>
                           ICMR 2019 is an ACM Internation Conference held at University of Ottawa. I volunteered to
                           welcome attendees and distribute registration materials. I also provided participants with
                           necessary information like classroom locations etc.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
