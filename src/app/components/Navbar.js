

function Navbar() {
    return(
        <header >
      <nav class=" bg-black  text-white  flex justify-between h-16 w-10/12 rounded-3xl absolute left-36 top-7 ">
		<span class="text-white text-2xl flex  items-center mx-8 font-extrabold font-mono ">MOBILE MANIA</span>
		<ul class="flex space-x-24 px-28 py-5 justify-end font-semibold">
			
			<li class="cursor-pointer  hover:text-gray-300 hover:underline hover:underline-offset-8 ">Home</li>
			<li class="cursor-pointer  hover:text-gray-300 hover:underline hover:underline-offset-8  ">Phone</li>
			<li class="cursor-pointer hover:text-gray-300 hover:underline hover:underline-offset-8 ">Categories</li>
			<li class="cursor-pointer hover:text-gray-300 hover:underline hover:underline-offset-8 ">Devices</li>
            <div class="hamburger inline-block cursor-pointer  ">
          <div class="line bg-white h-0.5 w-6 my-1"></div>
          <div class="line bg-white h-0.5 w-6 my-1"></div>
          <div class="line bg-white h-0.5 w-6 my-1"></div>
        </div>
		</ul>
	</nav>
      </header>
    )
}
export default Navbar;