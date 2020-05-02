import React, {useContext} from 'react';
import Carousel from '../Carousel';
import CarouselContext from '../CarouselContext';

const BooksCarousel = (props) => {
    const booksData = useContext(CarouselContext);

    return <Carousel data = {booksData.data.getBooks} {...props} />
}

export default BooksCarousel;




