import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import "./ImageCarousel.css";

const items = [
    {
        src: require('../images/cake1.jpg'),
        altText: 'Slide 1',
        caption: 'Butterfly'
    },
    {
        src: require('../images/cake2.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake3.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake4.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake5.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake6.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake7.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake8.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake9.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake10.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake11.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake12.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake13.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake14.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake15.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake16.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake17.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake18.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake19.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake20.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake21.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake22.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake23.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake24.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake25.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake26.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake27.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake28.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake29.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/cake30.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    }
];

const ImageCarousel = () => <UncontrolledCarousel className="entire-carousel" items={items} />;

export default ImageCarousel;