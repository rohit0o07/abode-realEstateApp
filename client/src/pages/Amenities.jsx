import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../assets/carousels/part6.png'
import img2 from '../assets/carousels/part7.png'
import img3 from '../assets/carousels/part6.png'
import img4 from '../assets/logo.png'
export default function Amenities() {
    const settings = {
      dots:true,
      infinite:true,
      speed:500,
      slidesToShow:1,
      slidesToScroll:1,
      
    }
  return (
    <Slider {...settings}>
      <div className="flex bg-amber-950 shadow">
        <div>
          <img src={img4} alt="Logo" />
          <br />
          <h1 className="text-amber-300">Luxury Gated Apartments</h1>
          <br />
          <br />
          <h2 className="text-amber-300">
            Living spaces in sainikpuri,
            <br />
            Hyderabad.
          </h2>
          <br />
          <br />
          <h2 className="text-amber-300">Ready to Move-In</h2>
          <br />
          <br />
          <button className="text-amber-300">Download Brochure</button>
          <img src={img1} alt="Slide 1" className="w-4/12 h-6/12" />
          <img src={img2} alt="Slide 1" className="w-4/12 h-6/12" />
          <img src={img3} alt="Slide 3" className="w-4/12 h-6/12" />
        </div> 
      </div>
    </Slider>
  );
}
