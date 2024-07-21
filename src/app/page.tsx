import Navbar from "./components/Navbar";
import Step from "./components/Step";
import Footer from "./components/Footer";
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
      <div className=" ClashDisplay-Medium w-full flex flex-col relative -top-10 text-center justify-center items-center container mx-auto sm:px-14 px-7 ">
      <img src="/ai-img-1.svg" alt=" " className="blur-[50px] absolute 2xl:-top-36 xl:-top-8   -z-10 "  />
      <img src="/ai-img-1.svg" alt=" " className="blur-[50px] absolute -top-36  -z-10 "  />
      <img src="/ai-img-1.svg" alt=" " className="blur-[50px] absolute -bottom-10  -z-10 "  />
      <img src="/ai-img-1.svg" alt=" " className="blur-[50px] absolute top-[25%]  -z-10 "  />
      <img src="/ai-img-1.svg" alt=" " className="blur-[50px] absolute top-[55%]  -z-10 "  />
        <h1 className="2xl:text-6xl text-4xl relative 2xl:-top-14 -top-6">How It work</h1>
        <div className="w-full h-full flex-col flex justify-center items-center sm:space-y-10 space-y-7">
          <Step
            number="1"
            text="Simply Search or select the type of email you want to write"
            imgSrc="/home.png"
            altText="home"
          />
          <Step
            number="2"
            text="Fill out the necessary details for better response from AI"
            imgSrc="/emailGeneration.png"
            altText="emailGeneration"
          />
          <Step
            number="3"
            text="Choose the best response according to your requirements"
            imgSrc="/emailGenerationOutput.png"
            altText="emailGenerationOutput"
          />
        </div>
      </div>

      <Footer/>

    </>
  );
}
