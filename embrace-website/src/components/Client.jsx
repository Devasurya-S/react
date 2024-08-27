import React from 'react'
import ClientCrousel from './ClientCarousel'

const Client = () => {
  return (
    <section className='py-xl-5 py-lg-4 py-3 bg-secondary'>
        <div className="container-lg">
            <h2 className='text-center mb-5 hd-type-1 fw-medium'>Companies We Work With</h2>
            <ClientCrousel/>
        </div>
    </section>
  )
}

export default Client
