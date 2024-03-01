
import { cardList } from './data.js'
export default function Amenities() {
    
  return (
    <main className="container mx-auto py-36 px-8 bg-amber-950">
      <div className="grid lg:grid-cols-4  md:grid-cols-2  grid-cols-1 gap-6">
      {cardList.map((card,index) => (
        <div key={index}
        className='shadow-lg rounded-lg'>
        <img className='rounded-t-lg items-center attachment-full w-[350px] h-[300px] ' src={card.img} alt="" />
        <div className='p-5'>
        <h3 className='text-3xl font-bold  mb-3 text-yellow-500'>{card.title}</h3>
        <p className='text-lg font-normal text-gray-600 mb-2 text-yellow-100'>{card.text}</p>
        </div>
        </div>
      ))}
      </div>
      </main>
   
  )
}
