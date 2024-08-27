import React from 'react'

const Hero = () => {
  return (
    <section className='py-xl-5 py-lg-4 py-3'>
        <div className="container-lg">
            <div className="row flex-md-row-reverse justify-content-md-between g-2">
                <div className="col-xl-7 col-lg-6 col-md-6">
                    <div className='heroImage'></div>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className='d-flex flex-column justify-content-center h-100'>
                        <div>
                            <h2 className='fw-bold font-93'>We Take Care Of Your Brand</h2>
                            <p className='fs-5'>We care about our work and we care about our clients.</p>
                            <form action="">
                                <div className='d-flex flex-column flex-md-row gap-2'>
                                    <input type='email' placeholder='Enter Your Email' className='form-control rounded-pill bg-light py-3'/>
                                    <button className='btn btn-primary rounded-pill widthControl py-3 px-3'>Lets Talk</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
