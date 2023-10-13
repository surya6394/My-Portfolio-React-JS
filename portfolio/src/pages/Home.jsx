import React from "react";
import SocialIcons from "../component/SocialIcons";
import Surya from "../images/surya.png";
import FileSaver from "file-saver";
import BarChart from "../component/Comp/BarChart";


function Home (){
  const saveFile = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resource/Surya-resume.pdf",
      "Surya-Pratap-CV.pdf"
    );
  };

  const dataPoints = [
    { label: 'Apple', y: 10 },
    { label: 'Banana', y: 5 },
    { label: 'Cherry', y: 15 },
    { label: 'Date', y: 7 },
    { label: 'Elderberry', y: 20 },
  ];
    

  return (
    <>
    <section>
      <div className="md:flex md:bg-home-background2 items-center justify-center h-screen bg-cover">
        <div className="md:w-2/3 md:pl-28 p-10 md:bg-none bg-home-background2 bg-cover">
          <div className="pb-4 md:text-5xl text-3xl mt-20">
            <p className="flex text-txt-clr2  font-bold">
              I'm<span className="text-btnclr1 pl-3">Surya</span>, a
            </p>
            <p className="flex text-txt-clr2 items-center font-bold md:pt-4">Developer from UP.</p>
          </div>
          <div className="text-txt-clr2 md:text-2xl text-xl pb-4 font-mono">
            <p>
              I'm a passionate frontend developer with a keen eye for design and
              a knack for crafting seamless user experiences. My journey into
              the world of web development began with a fascination for turning
              ideas into interactive digital realities.
            </p>
          </div>
          <div>
            <SocialIcons />
          </div>
          <div>
            <button className="mt-6 font-bold bg-btnclr1 hover:bg-txt-clr text-txt-clr hover:text-btnclr1 px-4 py-2 rounded-full" onClick={saveFile}>
              Download CV
            </button>
          </div>
        </div>


        <div className="md:mt-0 mt-5">
          <img src={Surya} alt="" />
        </div>
      </div>
      </section>

      <div className="md:mt-0 mt-72">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold py-10 mt-5">About Me</h1>
        </div>
        <div className="flex justify-center items-center">
          <p className="md:text-2xl font-mono text-center pb-10 md:w-2/3">I'm a passionate frontend developer with a keen eye for design and
              a knack for crafting seamless user experiences. My journey into
              the world of web development began with a fascination for turning
              ideas into interactive digital realities.I'm a passionate frontend developer with a keen eye for design and
              a knack for crafting seamless user experiences. My journey into
              the world of web development began with a fascination for turning
              ideas into interactive digital realities.</p>
        </div>
      </div>

<div className="flex items-center justify-center">
<hr className="w-5/6 border-1 border-gray-700" />
</div>

      <div className="md:flex mt-16">
      <div className="flex justify-center items-center w-1/3">
        <div className="font-bold">
        <h1>Hii</h1>
        </div>
      </div>
      <div className="md:w-7/12">
      <BarChart />
      </div>
      
    </div>

    </>
  );
};

export default Home