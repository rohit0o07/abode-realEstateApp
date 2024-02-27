import {MdLocationOn} from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function ListingItem({listing}) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to ={`/listings/${listing._id}`}>
        <img 
        src={listing.imageUrls[0] || "https://i3.au.reastatic.net/800x600/216d4fab2ff7242a569d43d84ec364705bdb95c4162cb1eb1bdaad27837ec1e1/image.jpg"} 
        alt='listing cover' 
        className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'/>
      </Link>
      <div className='p-3 flex flex-col gap-2 w-full'>
        <p className='truncate text-lg font-semibold text-slate-700'>
            {listing.name}
        </p>
        <div className='flex items-center gap-1'>
        <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-600 truncate w-full'>
              {listing.address}
            </p>
        </div>
        <p className='text-sm text-gray-600 line-clamp-2'>
            {listing.description}
          </p>
          <p className='text-slate-500 mt-2 font-semibold '>
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString('en-US')
              : listing.regularPrice.toLocaleString('en-US')}
            {listing.type === 'rent' && ' / month'}
          </p>
          <div className='text-slate-700 flex gap-4'>
          <div className='font-bold text-xs'>
          {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
          </div>
          <div className='font-bold text-xs'>
          {listing.bathrooms > 1
                ? `${listing.bathrooms} beds `
                : `${listing.bathrooms} bed `}
          </div>
          </div>
      </div>
    </div>
  )
}
