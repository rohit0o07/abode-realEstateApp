import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaWhatsapp } from "react-icons/fa";
import img from "../assets/logonew.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-amber-950 shadow-md">
      <div className="flex justify-between items-center max-width-6xl mx-auto p-3">
        <Link to="/">
          <img src={img} alt="logo" className="flex flex-wrap h-16 w-20" />
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-zinc-50 hover:underline">
              OVERVIEW
            </li>
          </Link>
          <Link to="/amenities">
            <li className="hidden sm:inline text-zinc-50 hover:underline">
              AMENITIES
            </li>
          </Link>
          <Link to="/gallery">
            <li className="hidden sm:inline text-zinc-50 hover:underline">
              GALLERY
            </li>
          </Link>
          <Link to="/floor-plan">
            <li className="hidden sm:inline text-zinc-50 hover:underline">
              FLOOR PLAN
            </li>
          </Link>
          <Link to="/location">
            <li className="hidden sm:inline text-zinc-50 hover:underline">
              LOCATION
            </li>
          </Link>
          <Link to="/contact">
            <li className="sm:inline text-zinc-50 hover:underline">CONTACT</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="sm:inline text-zinc-50 hover:underline">
                Sign in
              </li>
            )}
          </Link>
        </ul>

        <div className="p-3 rounded-lg flex items-center">
          <FaWhatsapp className="text-green-800" />
          <h3 className="text-zinc-50">+918790878787</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
