import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Overview from './pages/Overview';
import Amenities from './pages/Amenities';
import Gallery from './pages/Gallery';
import FloorPlan from './pages/FloorPlan';
import Location from './pages/Location';
// import Contact from './pages/Contact';
import Contact from './components/Contact';
import Header from './components/Header';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';



function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Overview />}/>
    <Route path="/amenities" element={<Amenities />}/>
    <Route path="/gallery" element={<Gallery />}/>
    <Route path="/floor-plan" element={<FloorPlan />}/>
    <Route path="/location" element={<Location/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path='/search' element={<Search/>} />
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/listing/:listingId" element={<Listing/>}/>

    <Route element={<PrivateRoute/>}>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/create-listing" element={<CreateListing/>}/>
    <Route path="/update-listing/:listingId" element={<UpdateListing/>}/>
    
    </Route>
    </Routes>
 
    </BrowserRouter>
  )
}

export default App