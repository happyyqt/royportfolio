import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a highly skilled software developer with 3 years of experience in developing and implementing software solutions using React, Node.js, JavaScript, TypeScript, Python, and SQL.
                      At <a href = "https://axonify.com/">Axonify</a>, I played a key role in two pivotal projects, Flex-Admin and Recognition Pins, which facilitated the company's expansion into new markets. 
                      While at <a href = "https://www.caseiq.com/">Case IQ</a>, I contributed significantly to the development of a comprehensive case management system, delivering multiple critical features and maintaining several mission-critical microservices. 
                      Additionally, I hold a Master's degree in Electrical and Computer Engineering from the <a href = 'https://www.uottawa.ca/en'>University of Ottawa</a> and have published two research papers in the field of machine learning.
                      During my tenure at the university, I served as a research assistant in the <a href = 'https://mcrlab.net/'>MCRlab</a>, where I gained valuable experience and expertise.</p>
                    <p>
                        I would describe my personality as approachable, light-hearted and positive. I am passionate about my work and learning new things. In my spare time, I enjoy participating in all kinds of sports activities like badminton, tennis, and snowboarding. 
                        My favourite sport is basketball and I am a big fan of Chris Paul and Kobe Bryant.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I have?</span>
                <h2 className="colorlib-heading">Here are some of my skills</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Full Stack Web Development</h3>
                    <p>Experienced in tools like React, JavaScript, TypeScript, NodeJS, Redux, Python, SQL, HTML/CSS and Restful API</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>Deeply passionate about software engineering, actively pursuing related courses in my spare time to enhance my knowledge </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Strong Research and Problem-Solving Abilities</h3>
                    <p>Master of Applied Science with two research papers in Machine Learning field. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
