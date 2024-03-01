import { gallaryList } from "./gallary";


export default function Gallery() {
  return (
    <div>
      <h1 className="  text-center  bg-amber-950 text-yellow-500  font-bold text-3xl">Gallery</h1>
      <main className="container mx-auto py-36 px-8 bg-amber-950">
      
      <div className="grid lg:grid-cols-3  md:grid-cols-2  grid-cols-1 gap-6">
        
      {gallaryList.map((card,index) => (
        <div key={index}
        className='shadow-lg rounded-lg'>
        <img className='rounded-t-lg attachment-full w-full h-[300px]' src={card.img} alt="" />        
        </div>
      ))}
      <button className="bg-orange-400 w-[100px] text-slate-300 p-1">Load More</button>
      </div>
      </main>
    </div>
    
  )
}
