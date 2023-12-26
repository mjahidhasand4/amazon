"use client";
import { useContext } from "react";
import { UserContext } from "@/context";
import { A, Button } from ".";
import Link from "next/link";

const Footer = () => {
  const user = useContext(UserContext);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <footer>
      {!user.name && (
        <div className="w-full mt-4 pt-8 pb-4 bg-white">
          <div className="pt-4 pb-2 border rounded flex flex-col items-center justify-center">
            <p className="text-[#0f1111] text-[13px] font-ember">
              See personalized recommendations
            </p>
            <Button variant="gradient">Sign in</Button>
            <p className="text-[#0f1111] text-[12px] font-ember">
              New customer? <A href="register">Start here.</A>
            </p>
          </div>
        </div>
      )}

      <button
        className="text-white text-[13px] font-ember leading-[19px] w-full py-[15px] bg-[#37475A] hover:bg-[#485769] hover:underline"
        onClick={backToTop}
      >
        Back to top
      </button>
      <div className="pt-[30px] bg-[#232F3E] px-16">
        <div className="flex items-start justify-between">
          <nav className="flex flex-col items-start">
            <span className="mb-[14px] text-white text-[16px] font-ember font-bold">
              Get to Know Us
            </span>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Careers
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Blog
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              About Amazon
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Investor Relations
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Amazon Devices
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Amazon Science
            </Link>
          </nav>
          <nav className="flex flex-col items-start">
            <span className="mb-[14px] text-white text-[16px] font-ember font-bold">
              Make Money with Us
            </span>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Sell products on Amazon
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Sell on Amazon Business
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Sell apps on Amazon
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Become an Affiliate
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Advertise Your Products
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Self-Publish with Us
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Host an Amazon Hub
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              › See More Make Money with Us
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            ></Link>
          </nav>
          <nav className="flex flex-col items-start">
            <span className="mb-[14px] text-white text-[16px] font-ember font-bold">
              Amazon Payment Products
            </span>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Amazon Business Card
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Shop with Points
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Reload Your Balance
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Amazon Currency Converter
            </Link>
          </nav>
          <nav className="flex flex-col items-start">
            <span className="mb-[14px] text-white text-[16px] font-ember font-bold">
              Let Us Help You
            </span>

            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Amazon and COVID-19
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Your Account
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Your Orders
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Shipping Rates & Policies
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Returns & Replacements
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Manage Your Content and Devices
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Amazon Assistant
            </Link>
            <Link
              href=""
              className="text-[#ddd] text-[14px] font-ember hover:underline"
            >
              Help
            </Link>
          </nav>
        </div>
        <hr className="h-[1px] mt-8 mx-[-64px] bg-[#3a4553] " />
        <div className="py-8 flex items-center justify-center gap-8">
          <Link
            href="/"
            style={{ backgroundPosition: "-10px -90px" }}
            className="asset w-[76px] h-[23px]"
          />
          <div className="flex items-center gap-2">
            <button className="py-[6px] px-2 rounded-[3px] border border-[848688] flex items-center gap-2">
              <i
                style={{ backgroundPosition: "-77px -24px" }}
                className="flag w-[15px] h-[15px] "
              />
              <span className="text-[#ccc] text-[13px] font-ember mt-[1px] mr-4">
                English
              </span>
              <i
                style={{ backgroundPosition: "-77px -80px" }}
                className="flag w-3 h-3"
              />
            </button>
            <button className="py-[6px] pr-[18px] pl-2 rounded-[3px] border border-[848688] flex items-center gap-2">
              <i
                style={{ backgroundPosition: "-54px -108px" }}
                className="flag w-[18px] h-[12px] "
              />
              <span className="text-[#ccc] text-[13px] font-ember mt-[1px]">
                United States
              </span>
            </button>
          </div>
        </div>
      </div>
      <nav className="py-[30px] px-16 bg-[#131A22] grid grid-cols-7 gap-4">
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Amazon Music</span>

          <span className="text-[#999] leading-none">
            Stream millions <br /> of songs
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Amazon Ads</span>
          <span className="text-[#999] leading-none">
            Reach customers <br /> wherever they <br /> spend their time
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>6pm</span>
          <span className="text-[#999] leading-none">
            Score deals <br /> on fashion brands
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>AbeBooks</span>
          <span className="text-[#999] leading-none">
            Books, art <br />& collectibles
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>ACX</span>
          <span className="text-[#999] leading-none">
            Audiobook Publishing <br />
            Made Easy
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Sell on Amazon</span>
          <span className="text-[#999] leading-none">
            Start a Selling Account
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Amazon Business</span>
          <span className="text-[#999] leading-none">
            Everything For <br />
            Your Business
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Amazon Fresh</span>
          <span className="text-[#999] leading-none">
            Groceries & More <br />
            Right To Your Door
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>AmazonGlobal</span>
          <span className="text-[#999] leading-none">
            Ship Orders <br />
            Internationally
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Home Services</span>
          <span className="text-[#999] leading-none">
            Experienced Pros <br />
            Happiness Guarantee
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Amazon Web Services</span>
          <span className="text-[#999] leading-none">
            Scalable Cloud <br />
            Computing Services
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Audible</span>
          <span className="text-[#999] leading-none">
            Listen to Books & Original <br />
            Audio Performances
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Box Office Mojo</span>
          <span className="text-[#999] leading-none">
            Find Movie <br />
            Box Office Data
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Goodreads</span>
          <span className="text-[#999] leading-none">
            Book reviews <br />& recommendations
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>IMDb</span>
          <span className="text-[#999] leading-none">
            Movies, TV <br />& Celebrities
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>IMDbPro</span>
          <span className="text-[#999] leading-none">
            Get Info Entertainment <br />
            Professionals Need
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Kindle Direct Publishing</span>
          <span className="text-[#999] leading-none">
            Indie Digital & Print Publishing <br />
            Made Easy
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Amazon Photos</span>
          <span className="text-[#999] leading-none">
            Unlimited Photo Storage <br />
            Free With Prime
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Prime Video Direct</span>
          <span className="text-[#999] leading-none">
            Video Distribution <br />
            Made Easy
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Shopbop</span>
          <span className="text-[#999] leading-none">
            Designer <br />
            Fashion Brands
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Amazon Warehouse</span>
          <span className="text-[#999] leading-none">
            Great Deals on <br />
            Quality Used Products
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Whole Foods Market</span>
          <span className="text-[#999] leading-none">
            America’s Healthiest <br />
            Grocery Store
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Woot!</span>
          <span className="text-[#999] leading-none">
            Deals and <br />
            Shenanigans
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Zappos</span>
          <span className="text-[#999] leading-none">
            Shoes & <br />
            Clothing
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Ring</span>
          <span className="text-[#999] leading-none">
            Smart Home <br />
            Security Systems
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>eero WiFi</span>
          <span className="text-[#999] leading-none">
            Stream 4K Video <br />
            in Every Room
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Blink</span>
          <span className="text-[#999] leading-none">
            Smart Security <br />
            for Every Home
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Neighbors App</span>
          <span className="text-[#999] leading-none">
            Real-Time Crime <br />& Safety Alerts
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col col-start-3 col-end-4"
        >
          <span>Amazon Subscription Boxes</span>
          <span className="text-[#999] leading-none">
            Top subscription boxes –<br /> right to your door
          </span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>PillPack</span>
          <span className="text-[#999] leading-none">Pharmacy Simplified</span>
        </Link>
        <Link
          href=""
          className="text-[#ddd] text-[12px] font-ember leading-none hover:underline flex flex-col"
        >
          <span>Amazon Renewed</span>
          <span className="text-[#999] leading-none">
            Like-new products <br />
            you can trust
          </span>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
