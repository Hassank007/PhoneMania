
function Hero() {
  return (
    <>
      <div className="flex flex-row justify-between  space-y-4 h-[14rem]">
        <div className="flex flex-col px-7 " >
        <div>
          <h1 className=" font-mono text-7xl underline underline-offset-8">
            The Best Phones.
          </h1>
        </div>
        <div className="px-3 py-3">
          <p className="text-2xl ">
            the most amazing phone you can find on the market.
          </p>
        </div>
        <div className="space-x-4 space-y-7">
            <button className="border-gray-950 bg-black text-white px-12 py-3 outline hover:bg-gray-900 rounded-2xl">Buy Now</button>
            <button className="border-gray-950 bg-black text-white px-12 py-3  hover:bg-gray-900 rounded-2xl">Click Me</button>
        </div>
        </div>
        <div className=" flex justify-end relative bottom-44 h-[40rem]">
          <img src="assests/mobile1.png" alt="mobile"/>
        </div>
      </div>
      
    </>
  );
}
export default Hero;
