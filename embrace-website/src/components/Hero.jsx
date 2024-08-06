import React from 'react'

const Hero = () => {
  return (
    <section>
        <div className="container-lg">
            <div className="row flex-lg-row-reverse justify-content-between border">
                <div className="col-lg-7">
                    <div></div>
                </div>
                <div className="col-lg-5">
                    <div className='py-5 my-5'>
                    <h3 className='fw-bold display-1'>We Take Care of Your Brand</h3>
                    <p>We care about our work and we care about our clients.</p>
                    <form action="">
                        <div className='d-flex'>
                            <input type='email' placeholder='Enter Your Email'/>
                            <button>Lets Talk</button>
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
