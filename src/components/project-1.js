import React from 'react'

import PropTypes from 'prop-types'

import './project-1.css'

const Project1 = (props) => {
  return (
    <div className={`project-1-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="project-1-image"
      />
      <div className="project-1-container">
        <div className="project-1-container1">
          <span className="project-1-text">{props.label}</span>
          <span className="project-1-text1">{props.when}</span>
        </div>
        <h1 className="project-1-text2">{props.title}</h1>
        <span className="project-1-text3">{props.textblock}</span>
      </div>
    </div>
  )
}

Project1.defaultProps = {
  rootClassName: '',
  author: 'Jane Doe',
  profileAlt: 'profile',
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  label: 'Personal Project',
  title: 'Project 1',
  profileSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=200',
  textblock: 'This is a quick description of the project',
  when: 'March 2023',
}

Project1.propTypes = {
  rootClassName: PropTypes.string,
  author: PropTypes.string,
  profileAlt: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  profileSrc: PropTypes.string,
  textblock: PropTypes.string,
  when: PropTypes.string,
}

export default Project1
