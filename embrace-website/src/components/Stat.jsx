import React from 'react'

const Stat = () => {
  return (
    <section className='py-xl-5 py-lg-4 py-3'>
        <div className="container-lg">        
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className='fs-1 fxv-linkw-semibold'>245%</h3>
                            <p className='fs-6 fw-normal'>More revenues for the brand</p>
                        </div>
                        <div className="col-md-6">
                            <h3 className='fs-1 fw-semibold'>130k+</h3>
                            <p className='fs-6 fw-normal'>Audiences reached</p>
                        </div>
                        <div className="col-md-6">
                            <h3 className='fs-1 fw-semibold'>50+</h3>
                            <p className='fs-6 fw-normal'>brands trust us</p>
                        </div>
                        <div className="col-md-6">
                            <h3 className='fs-1 fw-semibold'>24+</h3>
                            <p className='fs-6 fw-normal'>Worldwide awards</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div>
                        <h2 className='display-6 fw-semibold'>Commitments</h2>
                        <p className='fs-6 fw-normal'>We are committed to working with you collaboratively to understand your goals and create a strategy that will achieve them.</p>
                        <a href="#" className='nav-link link-type-2'>Learn More <img src="public/images/right-arrow-icon.png" alt="icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stat
