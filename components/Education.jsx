import { education } from '@/data/about'
import React from 'react'

const Education = () => {
    return (
        <>

            {education.map((item, index) => (
                <div className="education" key={index}>
                    <h4 className="institute">{item.institute}</h4>
                    <h5 className="course">{item.course}</h5>
                    <p className="duration">{item.duration}</p>
                    <p className="description">{item.description}</p>
                </div>
            ))}
        </>
    )
}

export default Education
