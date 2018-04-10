import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import "./ImageCarousel.css";

const items = [
    {
        src: require('../cake-images-top/baby.jpg'),
        altText: 'Slide 1',
        caption: 'Butterfly'
    },
    {
        src: require('../cake-images-top/jedi.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../cake-images-top/lego.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../cake-images-top/bulldog.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../cake-images-top/jesus.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../cake-images-top/sand-castle.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../cake-images/chocolate-frosting.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../cake-images/cupcakes1.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../cake-images/fairy-castle.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../cake-images/graduation-golf.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../cake-images/overflow-chocolate.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../cake-images/pink-pig.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../cake-images/pokemon.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../cake-images/superhero.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../cake-images/treasure-chest.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../cake-images/wedding2.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    }
];

const ImageCarousel = () => <UncontrolledCarousel className="entire-carousel" items={items} />;

export default ImageCarousel;