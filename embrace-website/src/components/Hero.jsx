import React from 'react'

const Hero = () => {
  return (
    <section>
        <div className="container-lg">
            <div className="row flex-md-row-reverse justify-content-md-between">
                <div className="col-xl-7 col-lg-6 col-md-6">
                    <div className='heroImage'></div>
                    {/* <img src="/public/images/hero-image.png" className='w-full heroImage' alt="" /> */}
                </div>
                <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className='py-lg-5 my-5'>
                        <h2 className='fw-bold font-93'>We Take Care of Your Brand</h2>
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
    </section>
  )
}

export default Hero
