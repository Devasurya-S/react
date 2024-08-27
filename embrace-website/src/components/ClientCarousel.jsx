import React, { useEffect } from 'react';

const ClientCrousel = () => {
    // Array of image sources
    const images = [
        '/images/company-logo-1.svg',
        '/images/company-logo-2.svg',
        '/images/company-logo-3.svg',
        '/images/company-logo-4.svg',
        '/images/company-logo-5.svg',
        '/images/company-logo-6.svg',
        '/images/company-logo-7.svg',
        '/images/company-logo-8.svg',
        '/images/company-logo-9.svg',
        '/images/company-logo-10.svg'
    ];

    useEffect(() => {
        // Initialize Owl Carousel
        window.$('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                0: {
                    items:2,
                },
                576: {
                    items: 4,
                },
                992: {
                    items: 5,
                }
            },
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',  
        });
        }, []);

    const items = [];

    for (let i = 0; i < (images.length/2); i++) {
        items.push(
            <div className="item d-flex flex-column gap-5" key={i}>
                <img src={images[i]} alt={`company logo ${i + 1}`} className='company-logo' />
                {i + 5 < images.length && (
                    <img src={images[i + 5]} alt={`company logo ${i + 6}`} className='company-logo' />
                )}
            </div>
        );
    }

    return (
        <div className="owl-carousel owl-theme">
            {items}
        </div>
    );
};

export default ClientCrousel;
