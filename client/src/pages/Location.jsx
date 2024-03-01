import '../../src/index.css'


function Location() {
  return (
    <div className="gap-4 items-start  max-w-8xl mx-auto mt-auto min-w-fit bg-amber-950">
      <h1 className='text-center text-yellow-500 text-5xl font-bold'>LOCATION</h1><br/>
      <div className="flex  gap-4 items-start  max-w-8xl mx-auto min-w-fit bg-amber-950">
      
      <br/>
      <br/>
    <div>
      <h1 className="text-white text-5xl ">
        Book Free Site Visit
      </h1>
      <br />
      <br />
      <p className="text-yellow-500 text-xl">
      Sri Vathsa Homes’ Sterling Abode<br/>
      GH44+523, Bank Colony, Shivaji Nagar, Sainikpuri,<br/>
      Secunderabad, Telangana 500094<br/>
    <span className='text-yellow-200'>Call: +91 8142713429</span><br/>
    <span className='text-yellow-200'>Mail: hamilpurrohit7@gmail.com</span>
      </p>
    </div>
    <div className='map-section'>
      <div className='gmap-frame'>
      
        <iframe id='gmap-canvas'
        width="620" height="380"  frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" 
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Hyderabad+(Rohit%20business)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a href="https://www.gps.ie/">gps systems</a></iframe>
      </div>


    </div>

  </div>
    </div>
    
  )
}

export default Location