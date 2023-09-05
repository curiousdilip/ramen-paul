import { experience } from '@/data/about'
import React from 'react'

const Experience = () => {
    return (
        <>

            {experience.map((item, index) => (
                <div className="experience" key={index} data-aos="fade-right">
                    <h4 className="title">{item.title}</h4>
                    <h5 className="company-name">{item.companyName}</h5>
                    <p className="duration">{item.duration}</p>
                    <p className="location">{item.location}</p>
                    <p className="description">{item.description}</p>
                </div>
            ))}
        </>
    )
}

export default Experience
