import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  SearchIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

// const myLoader = ({ src, width, quality }) => {
//   return `https://ibb.co/zJtmKwQ/${src}?w=${width}&q=${quality || 75}`;
// };

function Header() {
  return (
    <div className="flex sticky top-0 p-2 items-center lg:px-5 shadow-md  bg-white">
      {/* header left */}
      <div className="flex ml-2 items-center ">
        <Image
          src="/fb.png"
          alt="fb_logo"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex items-center rounded-full ml-2 bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex items-center ml-2 bg-transparent outline-none flex-shrink
            "
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* header center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* header right */}
      <div className="flex sm:space-x-2 items-center justify-end">
        {/* Profile Pic */}
        <p className="whitespace-nowrap pr-3 font-semibold">Rihan Mohammed</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
