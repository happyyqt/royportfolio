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
                        <h2>Software Developer at <a href = "https://www.i-sight.com/">i-Sight </a><span>03/2022-present</span></h2>
                        <p>
                          I participate in Full-stack JavaScript development of Case Management Systems with a Node.js background. 
                          My daily work consists of adding customized features, importing user information via API integration, migrating data from the old platform to the upgraded platform etc.
                          This is my first full-time job, which helps me become an efficient time manager and communicator.
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
                           I also participated in the full-stack design of the 'Digital Coaching' application which interacts with athletes and coaches.
                           The research experience improved my self-learning and problem-solving abilities. 
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
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Part-time Bell Authorized Agent <span>05/2019-05/2020</span></h2>
                        <p>
                            As a Bell agent, I took initiative to meet with customers, identify their needs and
                            come up with suitable plans. It's a great oppotunity to meet with different people and
                            help customers.
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
