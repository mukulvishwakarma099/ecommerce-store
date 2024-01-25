import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative">
      <div className="w-full rounded-md overflow-hidden brightness-[70%]">
        <img className="object-cover w-full h-full" src={banner} alt="" />
      </div>
      <div className="w-full h-full flex flex-col justify-center gap-2 absolute top-0 text-gray-200 p-7">
        <h3 className="text-xl md:text-3xl text-center md:text-left ">
          New Seasons Arrivals
        </h3>
        <p className="hidden md:block lg:text-lg">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  );
};

export default Banner;
