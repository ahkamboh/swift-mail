import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />

      <div className=" 2xl:pt-20 pt-16 space-y-5 ">
        <div className="ClashDisplay-Medium space-y-3 text-6xl text-center">
          <h1 className="gradient-text">A Fast Generation.</h1>
          <h1>Scaleable AI.</h1>
        </div>
        <div className="text-base ClashDisplay-Regular capitalize text-center">Simply input your desired Revolutionize your outreach with EmailGenie,  <br /> any relevant information, and EmailGenie does the rest. <br />go for this!</div>
        <div className="flex sm:gap-5 gap-3 justify-center items-center pt-3">
          <div className="relative-button-container">
            <button className="gradient-border-button ClashDisplay-Regular">Get Start</button>
          </div>

          <div className="relative-button-container ClashDisplay-Regular text-white">
            <button className="btn border-2 border-white text-base tracking-wider">
              <span className="btn-text-one">Sign in</span>
              <span className="btn-text-two text-white">Login</span>
              <div className="bg-btn"></div>
            </button>
          </div>

        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center relative 2xl:-top-60 -top-44 -z-20">
        <img src="/ai-img-1.svg" alt="" />
        <div className="blur-[20px] bottom-[-70px] absolute h-[100px] bg-black w-full"></div>
      </div>
      <div className="w-full">
         <h1 className="">How It work</h1>
      </div>





    </>
  );
}
