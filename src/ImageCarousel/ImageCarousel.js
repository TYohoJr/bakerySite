import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import "./ImageCarousel.css";

const items = [
    {
        src: require('../cake-images-top/baby.jpg'),
        altText: 'Slide 1',
        caption: 'Baby Boy'
    },
    {
        src: require('../cake-images-top/jedi.jpg'),
        altText: 'Slide 1',
        caption: 'Death Star'
    },
    {
        src: require('../cake-images-top/lego.jpg'),
        altText: 'Slide 1',
        caption: 'Lego'
    },
    {
        src: require('../cake-images-top/bulldog.jpg'),
        altText: 'Slide 1',
        caption: 'Bulldog'
    },
    {
        src: require('../cake-images-top/jesus.jpg'),
        altText: 'Slide 1',
        caption: 'Jesus'
    },
    {
        src: require('../cake-images-top/sand-castle.jpg'),
        altText: 'Slide 1',
        caption: 'Sand Castle'
    },
    {
        src: require('../cake-images/chocolate-frosting.jpg'),
        altText: 'Slide 1',
        caption: 'Chocolate!'
    },
    {
        src: require('../cake-images/cupcakes1.jpg'),
        altText: 'Slide 1',
        caption: 'Cupcakes'
    },
    {
        src: require('../cake-images/fairy-castle.jpg'),
        altText: 'Slide 1',
        caption: 'Fairy Castle'
    },
    {
        src: require('../cake-images/graduation-golf.jpg'),
        altText: 'Slide 1',
        caption: 'Graduation'
    },
    {
        src: require('../cake-images/overflow-chocolate.jpg'),
        altText: 'Slide 1',
        caption: 'Overflow Chocolate'
    },
    {
        src: require('../cake-images/pink-pig.jpg'),
        altText: 'Slide 1',
        caption: 'Piggie'
    },
    {
        src: require('../cake-images/pokemon.jpg'),
        altText: 'Slide 1',
        caption: 'Pokemon'
    },
    {
        src: require('../cake-images/superhero.jpg'),
        altText: 'Slide 1',
        caption: 'Superhero'
    },
    {
        src: require('../cake-images/treasure-chest.jpg'),
        altText: 'Slide 1',
        caption: 'Treasure Chest'
    },
    {
        src: require('../cake-images/wedding2.jpg'),
        altText: 'Slide 1',
        caption: 'Wedding Cake'
    }
];

const ImageCarousel = () => <UncontrolledCarousel className="entire-carousel" items={items} />;

export default ImageCarousel;