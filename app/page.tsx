import Image from "next/image";
import Navbar from "../src/components/navbar";
import Hero from "../src/components/hero";
import Footer from "@/src/components/footer";

export default function Home() {
    return (
      <>
      <Navbar />
      <Hero/> 
      <Footer/>
      </>
  );
}
