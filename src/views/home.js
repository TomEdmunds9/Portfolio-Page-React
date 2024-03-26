import React from 'react'

import { Helmet } from 'react-helmet'

import Project1 from '../components/project-1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div className="home-container01">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading Section-Heading">Thomas Edmunds</h1>
            <span className="home-text">
              <span className="home-text01">
                I am a recent graduate from UCL actively looking for a graduate
                role in Data Science. To that end I have created this site to
                show off some recent projects completed outside of my degree. 
              </span>
              <br></br>
              <br></br>
              <span>
                Prior to my transition into data science I was a mechanical
                engineer. I have significant corporate soft skills as well as
                plenty of problem solving experience and strong analytical
                skills.
              </span>
              <br></br>
            </span>
            <div className="home-cta-btn-container">
              <button className="home-cta-btn Anchor button">
                <span className="home-text06">MY WORK</span>
              </button>
              <button className="home-cta-btn1 button Anchor">ABOUT ME</button>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1707327956851-30a531b70cda?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTcxMDgwMzUxMnw&amp;ixlib=rb-4.0.3&amp;w=1500"
            className="home-image"
          />
        </div>
      </div>
      <div className="home-skills">
        <div className="home-heading-container">
          <h2 className="home-text07 Section-Heading">Skills</h2>
          <span className="home-text08">
            <span>Just a little sample of my current skillset</span>
            <br></br>
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-card">
            <div className="home-icon-container">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image1"
              />
            </div>
            <div className="home-content-container">
              <span className="home-heading1 Card-Heading">Python</span>
              <span className="home-text11 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-icon-container1">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image2"
              />
            </div>
            <div className="home-content-container1">
              <span className="home-heading2 Card-Heading">SQL</span>
              <span className="home-text12 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-icon-container2">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image3"
              />
            </div>
            <div className="home-content-container2">
              <span className="home-heading3 Card-Heading">Tableau</span>
              <span className="home-text13">
                <span>I can quickly make a variety of graphs in Tableau. </span>
                <br></br>
                <span>
                  This was all self study, using Youtube, so while i have the
                  fundamentals I am excited to learn how to maximise the
                  functionality of the software.
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-blog">
        <div className="home-container02">
          <Project1
            when="April 2024"
            title="Handwritten Number Recognition"
            profileSrc="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName3"
          ></Project1>
        </div>
        <div className="home-container03">
          <Project1
            when="April 2024"
            title="Toxic Comment Classification (NLP)"
            imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName"
          ></Project1>
        </div>
        <Project1
          when="April 2024"
          title="Data Visulisation of Pew Polling Data US Election 2024"
          imageSrc="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
          profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
          rootClassName="rootClassName1"
        ></Project1>
      </div>
      <div className="home-professional-experience">
        <div className="home-max-content-width-container">
          <div className="home-heading-container1">
            <h1 className="home-text18">
              <span className="Section-Heading home-text19">
                University Data Projects 
              </span>
              <br></br>
            </h1>
          </div>
          <div className="home-content-container3">
            <div className="home-about-1">
              <div className="home-container04">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text21">
                  <span>
                    Creating a DNN to predict blackouts in the UK based on
                    weather and grid data.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container05">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text24">
                  <span>
                    Creating a time series model to predict imbalance in the UK
                    national grid.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container06">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text27 Card-Text">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
            </div>
            <div className="home-about-11">
              <div className="home-container07">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text28 Card-Text">
                  <span>
                    Lorem ipsum dolor sit amet aulla quis sem at nibh elementum
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-container08">
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text32 Card-Text">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className="home-container09">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text33 Card-Text">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
            </div>
            <div className="home-about-12">
              <div className="home-container10">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text34 Card-Text">
                  <span>
                    Lorem ipsum dolor sit amet aulla quis sem at nibh elementum
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-container11">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text38 Card-Text">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className="home-container12">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text39 Card-Text">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <div className="home-soft-skills">
        <div className="home-container13">
          <h2 className="home-text40">Soft Skills</h2>
        </div>
        <div className="home-content-container4">
          <div className="home-faq">
            <div className="home-question-container">
              <span className="home-question">Communication</span>
            </div>
            <div className="home-answer-container">
              <span className="home-answer">
                <span>Communication is only developed from </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-faq1">
            <div className="home-question-container1">
              <span className="home-question1">Critical Thinking</span>
            </div>
            <div className="home-answer-container1">
              <span className="home-answer1 Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span className="Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
              </span>
            </div>
          </div>
          <div className="home-faq2">
            <div className="home-question-container2">
              <span className="home-question2">
                <span>Teamwork</span>
                <br></br>
              </span>
            </div>
            <div className="home-answer-container2">
              <span className="home-answer3 Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span className="Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator5"></div>
      <div className="home-about-me">
        <h1 className="home-text45">About Me</h1>
        <div className="home-container14">
          <span className="home-text46">
            <span>This is some text to talk about myself</span>
            <br></br>
            <br></br>
          </span>
        </div>
      </div>
      <div className="home-section-separator6"></div>
      <div className="home-final">
        <img alt="image" src="/default-img.svg" className="home-image4" />
        <div className="home-container15">
          <div className="home-heading-container2">
            <h1 className="home-text50 Section-Heading">
              Have any more Questions? 
            </h1>
            <span className="Section-Text home-text51">
              Drop your email and I will get back to you as soon as possible.
            </span>
          </div>
          <input
            type="text"
            required="true"
            placeholder="E-mail"
            className="home-textinput Section-Text input"
          />
          <button className="home-button Anchor button">SEND</button>
        </div>
      </div>
      <div className="home-section-separator7"></div>
    </div>
  )
}

export default Home
