import { Carousel } from 'react-bootstrap';

const ImageCarousel = ({ allImages }) => {
    const images = allImages.map((image, index) => (
        <Carousel.Item interval={5000} key={index}>
            <img style={{ height: '25em' }} src={image} alt={image} />
        </Carousel.Item>
    ));

    return (
            <Carousel className='align-items-center'>
                {images}
            </Carousel>
    );
};

export default ImageCarousel;