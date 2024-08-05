import React from 'react'

const Hero = () => {
  return (
    <section>
        <div className="container-lg">
            <div className="row flex-lg-row-reverse">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                    <div>
                    <h3>We Take Care of Your Brand</h3>
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
