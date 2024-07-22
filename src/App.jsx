import logo from "./assets/logo.png";
import logo2 from "./assets/logo2.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import { FaTwitter } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-between px-24 bg-[#3A4026] pb-4 pt-8">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex text-white font-semibold gap-12 text-lg work-sans">
          <div className="hover:font-bold pt-4">Home</div>
          <div className="hover:font-bold pt-4">About Us</div>
          <div className="hover:font-bold pt-4">Our Services</div>
          <div className="hover:font-bold pt-4">Blog</div>
          <div className="hover:font-bold pt-4">Contact</div>
          <div className="ml-8 border border-[#C6FF00] rounded-full pt-3 px-6">
            Get Started
          </div>
        </div>
      </div>

      <div className="flex justify-between px-24 bg-[#3A4026] py-24">
        <div className="w-2/3">
          <div className="text-white font-semibold text-7xl work-sans">
            Bringing your
          </div>
          <div className="text-white font-semibold text-7xl pt-2  work-sans">
            <span className="text-[#C6FF00] playfair-display text-7xl italic">
              financial {""}
            </span>
            in line with
          </div>
          <div className="text-white font-semibold text-7xl  work-sans">
            your present reality
          </div>
          <div className="flex justify-center items-center ml-24 mr-48 text-justify my-8 text-white text-lg">
            Establish a foundation of trust with your customers through
            transparency, authenticity, and consistent delivery. Provide expert
            guidance, exceptional support, and a valuable product that makes a
            difference
          </div>
          <div className="flex gap-8 px-24">
            <div className=" bg-[#C6FF00] rounded-full px-6 py-2 font-semibold">
              Get Started
            </div>
            <div className=" border border-[#C6FF00] rounded-full py-2 text-white font-semibold px-6">
              Learn More
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <img src={img1} alt="" />
        </div>
      </div>

      <div className="bg-[#868C70]">
        <div className="bg-[#5F6647] mx-48 rounded-b-3xl py-20">
          <div className="text-center text-white font-semibold text-5xl work-sans">
            Enabling{" "}
            <span className="text-[#C6FF00] playfair-display text-5xl italic">
              high-growth
            </span>{" "}
            companies to{" "}
          </div>
          <div className="text-center text-white font-semibold text-5xl work-sans pb-20">
            achieve sustainable scale
          </div>
          <div className="flex justify-between text-white px-36 text-xl font-bold">
            <div>
              <FaTwitter className="text-2xl" />
            </div>
            <div className="flex gap-2">
              <div>
                <FaVideo className="pt-2 text-2xl" />
              </div>
              <div>zoom</div>
            </div>
            <div>CAIXA</div>
            <div className="font-semibold">Google</div>
            <div>CASIO</div>
          </div>
        </div>
        <div className="flex px-24 py-20 gap-14">
          <div className="w-1/3">
            <img src={img2} alt="" />
          </div>
          <div className="w-2/3">
            <div className="text-white font-semibold text-7xl pt-2  work-sans">
              Organizational {""}
              <span className="text-[#C6FF00] playfair-display text-7xl italic">
                leaders
              </span>
            </div>
            <div className="text-white font-semibold text-7xl  work-sans">
              to enhance oversight
            </div>
            <div className="flex justify-center items-center ml-24 mr-48 text-justify my-8 text-white text-lg">
              Transparency and authenticity are two key values that can help
              build trust with customers. Transparency means being open and
              honest with customers about how your business operates, the
              products and services you offer, and any potential issues that may
              arise.
            </div>
            <div className=" border border-[#C6FF00] rounded-full py-2 text-white font-semibold px-6 w-[120px] ml-24">
              About Us
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#7A8066] px-24 py-24">
        <div className="flex justify-between">
          <div>
            <div className="text-white font-semibold text-7xl pt-2 work-sans">
              <span className="text-[#C6FF00] playfair-display text-7xl italic">
                Efficiently {""}
              </span>
              manage your
            </div>
            <div className="text-white font-semibold text-7xl  work-sans">
              planning with solution
            </div>
          </div>
          <div className="pt-14">
            <div className=" border border-[#C6FF00] rounded-full py-2 text-white font-semibold px-6">
              See More
            </div>
          </div>
        </div>
        <div className="rounded-3xl my-14 border border-[#C6FF00] bg-[#3A4026] flex justify-between p-14">
          <div className="w-2/3">
            <div className="text-white text-5xl font-semibold work-sans">
              <span className="playfair-display text-5xl italic">
                Invest {""}
              </span>{" "}
              management
            </div>
            <div className="flex justify-center items-center ml-24 mr-48 text-justify my-8 text-white text-lg">
              Establish a foundation of trust with your customers through
              transparency, authenticity, and consistent delivery. Provide
              expert guidance, exceptional support, and a valuable product that
              makes a difference
            </div>
            <div className="bg-[#C6FF00] rounded-full px-6 py-2 font-semibold w-[140px] text-center ml-24">
              Learn More
            </div>
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
        </div>

        <div className="text-white font-semibold text-5xl pt-2 work-sans pb-4">
          <span className="text-[#C6FF00] playfair-display text-5xl italic">
            Financial {""}
          </span>
          plan
        </div>
        <div className="w-full h-[1px] bg-black "></div>
        <div className="text-white font-semibold text-5xl pt-8 work-sans pb-4">
          <span className="text-[#C6FF00] playfair-display text-5xl italic">
            Wealth {""}
          </span>
          management
        </div>
        <div className="w-full h-[1px] bg-black "></div>
        <div className="text-white font-semibold text-5xl pt-8 work-sans pb-4">
          <span className="text-[#C6FF00] playfair-display text-5xl italic">
            Banking {""}
          </span>
          service
        </div>
        <div className="w-full h-[1px] bg-black "></div>
      </div>

      <div className="bg-[#868C70] py-24 px-24">
        <div className="text-white font-semibold text-7xl pt-2 work-sans text-center ">
          A
          <span className="text-[#C6FF00] playfair-display text-7xl italic">
            {""} guide {""}
          </span>
          to making the most of
        </div>
        <div className="text-white font-semibold text-7xl text-center  work-sans">
          your finances
        </div>
        <div className="text-center my-8 text-white text-lg px-48">
          The key message of the guide is that by taking a proactive approach to
          managing your finances and making smart financial decisions, you can
          achieve financial stability and security, and live a comfortable life.
          Some of the specific advice provided in the guide includes creating a
          budget and tracking your expenses.
        </div>
        <div className="flex justify-center items-center">
          <div className=" border border-[#C6FF00] rounded-full py-2 text-white font-semibold px-6">
            Learn More
          </div>
        </div>
        <div className="flex justify-center items-center pt-8">
          <img src={img4} alt="" className="w-[800px] h-[400px]" />
        </div>
      </div>

      <div className="bg-[#7A8066] px-24 py-24">
        <div className="flex justify-between">
          <div>
            <div className="text-white font-semibold text-7xl pt-2 work-sans">
              Recent
              <span className="text-[#C6FF00] playfair-display text-7xl italic">
                {""} updates {""}
              </span>
              from our
            </div>
            <div className="text-white font-semibold text-7xl  work-sans">
              blog
            </div>
          </div>
          <div className="pt-14">
            <div className=" border border-[#C6FF00] rounded-full py-2 text-white font-semibold px-6">
              View More
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-24">
          <div className="rounded-3xl my-14 border border-[#C6FF00] bg-[#3A4026] p-14 w-1/2">
            <div>
              <img src={logo} alt="" className="w-[130px] h-[60px]" />
            </div>
            <div className="text-white font-semibold text-3xl pt-2 work-sans">
              How to profitable
              <span className="text-[#C6FF00] playfair-display text-3xl italic">
                {""} build out {""}
              </span>
              a sales
            </div>
            <div className="text-white font-semibold text-3xl pt-2 work-sans">
              profitable
            </div>
            <div className="pt-6 flex justify-end">
              <img src={img5} alt="" />
            </div>
          </div>

          <div className="my-14 w-1/2">
            <div className="flex gap-4 text-white text-lg pt-14">
              <div>Best practice</div>
              <div className="w-[60px] h-[1px] bg-black mt-3"></div>
              <div>Anica bertha</div>
            </div>
            <div className="pt-8 pb-20">
              <div className="text-white font-semibold text-6xl pt-2 work-sans">
                How to build out a
              </div>
              <div className="text-[#C6FF00] playfair-display text-6xl italic">
                sales team
              </div>
            </div>
            <div className="text-white font-lg pl-48 text-justify">
              Once a Sales team has identified potential customers, they can
              work to nurture those relationships and move them through the
              sales funnel
            </div>
            <div className=" bg-[#C6FF00] rounded-full px-6 py-2 font-semibold w-[160px] text-center mt-14 ml-48">
              Read More
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-black"></div>

        <div className="flex justify-between gap-14">
          <div className=" w-1/2">
            <div className="flex gap-4 text-white text-lg pt-14">
              <div>Strategy</div>
              <div className="w-[60px] h-[1px] bg-black mt-3"></div>
              <div>Martin hoxha</div>
            </div>
            <div className="pt-8 pb-20">
              <div className="text-white font-semibold text-6xl pt-2 work-sans">
                How to build out a
              </div>
              <div className="text-[#C6FF00] playfair-display text-6xl italic">
              marketing team
              </div>
            </div>
            <div className="text-white font-lg pl-48 text-justify">
            Attracting new customers requires an understanding of their needs and preferences. A marketing department can conduct research.
            </div>
            <div className=" border text-white border-[#C6FF00] rounded-full px-6 py-2 font-semibold w-[160px] text-center mt-14 ml-48">
              Read More
            </div>
          </div>
          <div className="bg-black w-[1px] h-[500px]"></div>
          <div className="w-1/2">
            <div className="flex gap-4 text-white text-lg pt-14">
              <div>Recruiting</div>
              <div className="w-[60px] h-[1px] bg-black mt-3"></div>
              <div>Diana webster</div>
            </div>
            <div className="pt-8 pb-20">
              <div className="text-white font-semibold text-6xl pt-2 work-sans">
                How to build out a
              </div>
              <div className="text-[#C6FF00] playfair-display text-6xl italic">
              recruiting team
              </div>
            </div>
            <div className="text-white font-lg pl-48 text-justify">
            Another factor to consider is the past success with founder-led hires. If the company has been successful in hiring key employees.
            </div>
            <div className=" border text-white border-[#C6FF00] rounded-full px-6 py-2 font-semibold w-[160px] text-center mt-14 ml-48">
              Read More
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#3A4026] px-24 py-24">
        <div className="text-white font-semibold text-7xl work-sans text-center">
          The cutting-edge financial
        </div>
        <div className="text-white font-semibold text-7xl work-sans text-center">
          <span className="text-[#C6FF00] playfair-display text-7xl italic">
            solution
          </span>{" "}
          empowering you to
        </div>
        <div className="text-white font-semibold text-7xl work-sans text-center">
          expand at your own pace
        </div>
        <div className="flex justify-center items-center">
          <div className=" bg-[#C6FF00] rounded-full px-6 py-2 font-semibold mt-14">
            Get Started
          </div>
        </div>
      </div>

      <div className="bg-[#5F6647] px-24 pt-24 pb-8">
        <div className="flex justify-between pb-14">
          <div>
            <img src={logo2} alt="" />
          </div>
          <div className="flex gap-24">
            <div>
              <div className="text-white font-bold text-2xl py-4">Contact</div>
              <div className="text-white text-xl">Hello@profitex.com</div>
              <div className="text-white text-xl">Kansas, USA</div>
            </div>
            <div>
              <div className="text-white font-bold text-2xl py-4">Company</div>
              <div className="text-white text-xl pb-4">Home</div>
              <div className="text-white text-xl pb-4">About</div>
              <div className="text-white text-xl pb-4">Our Services</div>
              <div className="text-white text-xl pb-4">Blog</div>
              <div className="text-white text-xl pb-4">Contact</div>
            </div>
            <div>
              <div className="text-white font-bold text-2xl py-4">
                Social Media
              </div>
              <div className="text-white text-xl pb-4">Facebook</div>
              <div className="text-white text-xl pb-4">Twitter</div>
              <div className="text-white text-xl pb-4">Instagram</div>
              <div className="text-white text-xl pb-4">LinkedIn</div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black"></div>
        <div className="flex justify-between text-white pt-8 text-lg">
          <div>Copyright 2022 Profitex</div>
          <div className="flex gap-14">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
