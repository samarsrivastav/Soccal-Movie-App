import { IoTicketSharp } from "react-icons/io5";
import icon1 from '/favicon1.svg'
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-300 md:hidden flex justify-around py-3">
      <button className="flex flex-col items-center text-gray-700 hover:text-blue-600">
        {/* <AiFillHome size={24} /> */}
        <img src={icon1} alt="" />
        <span className="text-xs">Home</span>
      </button>
      <button className="flex flex-col items-center text-gray-700 hover:text-blue-600">
        <BiSolidCameraMovie size={24} />
        <span className="text-xs">Movies</span>
      </button>
      <button className="flex flex-col items-center text-gray-700 hover:text-blue-600">
        <IoTicketSharp size={24} />
        <span className="text-xs">Live Events</span>
      </button>
      <button className="flex flex-col items-center text-gray-700 hover:text-blue-600">
        <FaUser size={24} />
        <span className="text-xs">Profile</span>
      </button>
    </div>
  );
};

export default Footer;
