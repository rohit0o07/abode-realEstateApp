import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper,SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from "swiper/modules";
import ListingItem from "../components/ListingItem";
import 'swiper/css/bundle';
import ContactUs from "./ContactUs";
import FloorPlan from "./FloorPlan";
import Amenities from "./Amenities";
import Gallery from "./Gallery";
import Location from "./Location";

export default function Overview() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  
  useEffect(()=> {
    const fetchOfferListings = async() => {
      try{
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      }catch(error){
        console.log(error);
      }
    }
    const fetchRentListings = async() => {
      try{
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();

      }catch(error){
        console.log(error);
      }
    }
    const fetchSaleListings =async () =>{
      try{
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      }catch(error){
        console.log(error);
      }
    }
    fetchOfferListings();
  },[]);

    
  return (
    <div className="bg-amber-950">
      {/*top*/}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-amber-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-yellow-500">perfect</span> <br />
          place with ease
        </h1>
        <div className="text-yellow-600 text-xs sm:text-sm">
          sterling adobe Estate is the best place to find your next perfect
          place to live.
          <br />
          we have a wide range of properties for you to choose from
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Lets get Started...
        </Link>
      </div>

      {/*swiper*/}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[700px]"
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/*listing results for offer,sale and rent*/}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* projectoverview */}
      <div className="flex flex-wrap  p-28 px-3 max-w-6xl mx-auto">
        <div className="text-2xl font-semibold  text-center">
          <h2 className="text-amber-700">Project Overview</h2>
          <br />
          <h3 className="text-yellow-600">
            Premium 2 & 3 BHK Gated community Apartments
          </h3>
          <br />
          <p className="text-yellow-500 text-xs sm:text-sm">
            SRI VATHSAS STERLING ABODE Gated Community Complex with 3 towers has
            2 and 3 BHK apartments for sale featuring judiciously utilized super
            built-up areas to suit every family's preferences. The expertise and
            experience of the promoters and builders come into play in this
            prized and premium property, integration of space, luxury, and
            quality with well thought out convenience and utilities.{" "}
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="flex  gap-4 items-start   max-w-8xl mx-auto min-w-fit">
        <div>
          <h1 className="text-orange-500 font-bold text-3xl lg:text-5xl ">
            Approximately 12600/- Sq.ft of Exclusivity
          </h1>
          <br />
          <br />
          <h4 className="text-yellow-200 text-3xl italic ...">Dreams Come Alive</h4>
          <br />
          <br />
          <p className="text-yellow-500 text-xs sm:text-sm">
            The 12600 Sft Club House with 6 levels, Club VIVA occupies the pride
            of place in the community. With amazing waterfall mounts, the
            ambiance is indeed grand. Each of the 6 levels is earmarked for a
            different purpose and importantly Club VIVA is absolutely private
            and residents use only. Club VIVA is rejoicing, adding years to
            life. Whether you are burnt out or want to burn it off, Club VIVA is
            the place for the family for a buzz of activities and is a promise
            to keep all your weekends and occasions bright with friends in the
            company too.
          </p>
        </div>
        <img
          src="https://sterlingabode.in/wp-content/uploads/2021/08/9.jpg"
          alt=""
          className="w-[480px] h-[400px]"
        />
      </div>
      <br/><br/>
      <div className="flex  gap-4 items-start   max-w-8xl mx-auto min-w-fit">
      <img
          src="https://sterlingabode.in/wp-content/uploads/2021/08/9.jpg"
          alt=""
          className="w-[480px] h-[400px]"
        />
        <div>
          <h1 className="text-orange-500 font-bold text-3xl lg:text-5xl">Exult in Joy & Celebration</h1>
          <br />
          <br />
          <h4 className="text-yellow-200 text-3xl italic ...">
            Welcome to 'SRI VATHSA'S STERLING ABODE'
          </h4>
          <br/>
          
          <p className="text-yellow-500 text-xs sm:text-sm">
            Welcome to ‘SRI VATHSA’S STERLING ABODE’, the most anticipated
            project from ‘SRI VATHSA HOMES PVT.LTD’, a name that has a tradition
            of delivering premium quality homes in Hyderabad. A place of beauty
            and quiet contemplation, “SRI VATHSA’S STERLING ABODE” offers a
            tranquil oasis amid the livelier setting of an exotic ambiance and
            cherubic atmosphere. A magnum opus in the making, ‘SRI VATHSA’S
            STERLING ABODE” offers a tranquil oasis amid the livelier setting of
            an exotic ambiance and cherubic atmosphere. A magnum opus in the
            making,’ SRI VATHSA’S STERLING ABODE’ draws from the serenity and
            lure of Yapral, punctuating the natural landscape it occupies,
            creating a unique and unforgettable lifestyle.
          </p>
        </div>
       
      </div>
      <br/>
      <br/>
      <FloorPlan/>
      <Amenities/>
      <Gallery/>
      <Location/>
      <ContactUs className='bg-amber-950'/>
      
    </div>
  );
}
