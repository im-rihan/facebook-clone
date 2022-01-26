function HeaderIcon({ Icon, active }) {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 hover:bg-gray-100 active:border-b-2 active:border-blue-500 rounded-xl group">
      <Icon
        className={`h-5 text-gray-500 group-hover:text-blue-500 text-center sm:h-7 md:mx-auto ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
