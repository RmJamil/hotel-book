import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Roomcarousel() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    // Replace this URL with your real backend endpoint
    fetch('http://localhost:3000/rooms')
      .then(response => response.json())
      .then(data => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching testimonials:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading testimonials...</p>;

  return (
    <Slider {...settings}>
      {testimonials.map((t, i) => (
        <div key={i}>
          <p>"{t.text}"</p>
          <h4>- {t.author}</h4>
        </div>
      ))}
    </Slider>
  );
}

export default Roomcarousel;
