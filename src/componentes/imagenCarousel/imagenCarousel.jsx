// ImageCarousel.js
// import React from 'react';
// import Slider from 'react-slick';
// import Image from 'next/image';

// const ImageCarousel = ({ images }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   const NextArrow = ({ onClick }) => (
//     <div className='arrow next' onClick={onClick}>
//       Next
//     </div>
//   );

//   const PrevArrow = ({ onClick }) => (
//     <div className='arrow prev' onClick={onClick}>
//       Prev
//     </div>
//   );

//   return (
//     <Slider {...settings}>
//       {images.map((image, index) => (
//         <div key={index}>
//           <Image
//             src={image}
//             width={500}
//             height={300}
//             alt={`Imagen ${index + 1}`}
//           />
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default ImageCarousel;
