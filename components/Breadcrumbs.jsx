import Image from 'next/image'
import React from 'react'

const Breadcrumbs = ({ pageName }) => {
    return (
        <>
            <div className="breadcrumbs">
                <div className={pageName}>
                    {/* <Image
                        className='bg-image'
                        src="/about-breadcrumb.jpg"
                        alt="About Breadcrumbs photos"
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center top'
                        style={{ zIndex: "0" }}
                    /> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3>{pageName}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumbs
