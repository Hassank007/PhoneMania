import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Phones from "./components/Phones";
import Testimonial from "./components/Testimonial";

import ContactForm from "./components/MyForm";


export default function Home() {
  return (
    <>
      <div >
        <div>
          <Navbar />
        </div>
        <div className=" py-72 px-36 h-[34rem]">
          <Hero />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Phones />
        </div>
        <div>
          <Testimonial/>
        </div>
        <div><ContactForm/></div>
        
      </div>
      
    </>
  );
}
