import { Link } from "react-router-dom";

export default function CategoryBar() {
    return (
      <div className="bg-[rgb(245,245,245)] py-2 px-4">
        <div className="flex flex-wrap justify-around space-y-2 md:space-y-0 md:flex-nowrap">
          <div className="flex flex-wrap md:flex-nowrap items-center mx-2 space-x-3 w-full md:w-[50%] justify-center md:justify-start">
           <Link to="/movie"> <p>Movies</p></Link>
           <Link to="/series"><p>Stream</p></Link>
           <Link to="/episode"><p>Events</p></Link>
            <p>Plays</p>
            <p>Sports</p>
            <p>Activities</p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-center mx-2 space-x-3 justify-center md:justify-start">
            <p>List Your Shows</p>
            <p>Corporates</p>
            <p>Offers</p>
            <p>Gift Cards</p>
          </div>
        </div>
      </div>
    );
  }
  