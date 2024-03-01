import SwiperCore from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react'
import {Navigation } from "swiper/modules"
import 'swiper/css/bundle';
import { useEffect, useState } from 'react';
function FloorPlan() {
  const [offerListings, setOfferListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  
  useEffect(()=> {
    const fetchOfferListings = async() => {
      try{
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        
      }catch(error){
        console.log(error);
      }
    }
    fetchOfferListings();
  },[]);
  return (
    <footer className='w-full bg-gray-100'>
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              
              <div 
                style={{ background: `url(${listing.imageUrls[0]}) center no-repeat`,
                backgroundSize: "cover",}}
                className="h-[700px]  text-center  bg-amber-950 text-yellow-500  font-bold text-3xl lg:text-5xl"  >
                  Floor Plan
                </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </footer>
  )
}

export default FloorPlan