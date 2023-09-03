import React from 'react'

const Breadcrumbs = ({ pageName }) => {
    return (
        <>
            <div className="breadcrumbs">
                <div className={pageName}>
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
