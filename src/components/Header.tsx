import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="h-[60px] px-[11px] bg-[#00453e] flex items-center">
        <Link
          href="/"
          className="h-[50px] px-[5px] border border-transparent hover:border-white rounded-sm flex items-center"
        >
          <i
            style={{ backgroundPosition: "-237px -227px" }}
            className="asset w-[97px] h-[30px] mt-[10px]"
          />
        </Link>

        <div className="mx-0.5">
          <button className="h-[50px] px-2 border border-transparent hover:border-white rounded-sm flex items-center gap-1">
            <i
              style={{ backgroundPosition: "-71px -378px" }}
              className="asset w-[15px] h-[18px] mt-2"
            />
            <span className="flex flex-col items-start gap-0.5">
              <span className="text-[#ccc] text-[12px] font-ember leading-none">
                Deliver to
              </span>
              <span className="text-white text-[14px] font-ember font-bold leading-none">
                United States Min...
              </span>
            </span>
          </button>
        </div>

        <form className="w-[815.15px] h-10 mx-3 bg-white rounded flex items-center [&:has(input:focus)]:shadow-[0_0_0_2px_#fc68aa,_0_0_0_3px_rgba(252,104,170,.5)]">
          <button className="h-full px-2 bg-[#e6e6e6] border-r-[#cdcdcd] rounded-l flex items-center gap-2 focus:shadow-[0_0_0_2px_#fc68aa,_0_0_0_3px_rgba(252,104,170,.5)] z-10">
            <span className="text-[#555] text-[12px] font-ember">All</span>
            <i className="mt-1 border-4 border-transparent border-t-[#666]" />
          </button>
          <input
            type="search"
            placeholder="Search Amazon"
            className="text-[#111] text-[15px] font-ember border-none outline-none flex-1 h-[38px] pt-[7px] pr-[10px] pb-[10px] pl-2"
          />
          <button
            style={{ backgroundPosition: "2px -280px" }}
            className="asset w-[45px] h-full bg-[#ffdfd7] hover:bg-[#ffcabd] rounded-r focus:shadow-[0_0_0_2px_#fc68aa,_0_0_0_3px_rgba(252,104,170,.5)]"
          />
        </form>

        <div className="mx-0.5">
          <button className="h-[50px] px-[9px] pt-[10px] border border-transparent hover:border-white rounded-sm flex items-center gap-0.5">
            <i
              style={{ backgroundPosition: "0 -130px" }}
              className="flag w-6 h-[18px]"
            />
            <span className="text-white text-[14px] font-ember font-bold">
              EN
            </span>
            <i className="mt-1 border-4 border-transparent border-t-[#a7acb2]" />
          </button>
        </div>

        <div>
          <button className="h-[50px] px-[9px] border border-transparent hover:border-white rounded-sm flex flex-col justify-center gap-0.5">
            <span className="text-white text-[12px] font-ember leading-none">
              Hello, sign in
            </span>
            <span className="flex items-center gap-1">
              <span className="text-white text-[14px] font-ember font-bold leading-none">
                Account & List
              </span>
              <i className="mt-1 border-4 border-transparent border-t-[#a7acb2] block" />
            </span>
          </button>
        </div>

        <button className="h-[50px] px-[9px] mx-0.5 flex flex-col gap-0.5 justify-center border border-transparent hover:border-white rounded-sm">
          <span className="text-white text-[12px] font-ember leading-none">
            Returns
          </span>
          <span className="text-white text-[14px] font-ember font-bold leading-none">
            & Orders
          </span>
        </button>

        <button className="h-[50px] pb-[10px] px-[9px] border border-transparent hover:border-white rounded-sm flex items-end">
          <span className="flex flex-col relative">
            <span className="text-[#ffdfd7] text-[16px] font-ember font-bold w-[19px] absolute left-3 bottom-3">
              0
            </span>
            <i
              style={{ backgroundPosition: "-10px -340px" }}
              className="asset w-[38px] h-[26px]"
            />
          </span>
          <span className="text-white text-[14px] font-ember font-bold leading-none">
            Cart
          </span>
        </button>
      </div>
      <div className="h-[39px] pl-[11px] pr-[32px] bg-[#195851] flex items-center justify-between">
        <nav className="flex items-center">
          <button className="py-2 px-[9px] border border-transparent hover:border-white rounded-sm flex items-center gap-1">
            <i
              style={{ backgroundPosition: "-172px -255px" }}
              className="asset w-[17px] h-[14px]"
            />
            <span className="text-white text-[14px] font-ember font-bold">All</span>
          </button>

          <Link href="hot-deals" className="text-[#ffdfd7] text-[14px] font-ember font-bold py-2 px-[9px] border border-transparent hover:border-white rounded-sm">Last Minute Deals</Link>
          <Link href="gift-cards" className="text-white text-[14px] font-ember py-2 px-[9px] border border-transparent hover:border-white rounded-sm flex items-center gap-1">
            <span>Gift Cards</span>
            <i className="mt-1 border-4 border-transparent border-t-[#a7acb2]" />
          </Link>
          <Link href="medical-care" className="text-white text-[14px] font-ember py-2 px-[9px] border border-transparent hover:border-white rounded-sm  flex items-center gap-1">
            <span>Medical Care</span>
            <i className="mt-1 border-4 border-transparent border-t-[#a7acb2]" />
          </Link>
          <Link href="best-sellers" className="text-white text-[14px] font-ember py-2 px-[9px] border border-transparent hover:border-white rounded-sm">Best Sellers</Link>
          <Link href="amazon-basics" className="text-white text-[14px] font-ember py-2 px-[9px] border border-transparent hover:border-white rounded-sm">Amazon Basics</Link>
          <Link href="registry" className="text-white text-[14px] font-ember py-2 px-[9px] border border-transparent hover:border-white rounded-sm">Registry</Link>
          <Link href="todays-deals" className="text-white text-[14px] font-ember py-2 px-[9px] border border-transparent hover:border-white rounded-sm">Today's Deals</Link>
          <Link href="new-releases" className="text-white text-[14px] font-ember py-2 px-[9px] border border-transparent hover:border-white rounded-sm">New Releases</Link>
          <Link href="prime" className="text-white text-[14px] font-ember py-2 px-[9px] border border-transparent hover:border-white rounded-sm  flex items-center gap-1">
            <span>Prime</span>
            <i className="mt-1 border-4 border-transparent border-t-[#a7acb2]" />
          </Link>
          <Link href="customer" className="text-white text-[14px] font-ember py-2 px-[9px] border border-transparent hover:border-white rounded-sm">Customer</Link>
          <Link href="service" className="text-white text-[14px] font-ember py-2 px-[9px] border border-transparent hover:border-white rounded-sm">Service</Link>
          <Link href="music" className="text-white text-[14px] font-ember py-2 px-[9px] border border-transparent hover:border-white rounded-sm">Music</Link>
          <Link href="books" className="text-white text-[14px] font-ember py-2 px-[9px] border border-transparent hover:border-white rounded-sm">Books</Link>
          <Link href="pharmacy" className="text-white text-[14px] font-ember py-2 px-[9px] border border-transparent hover:border-white rounded-sm">Pharmacy</Link>
        </nav>

        <a href="last-minute-deals" className="text-white text-[14px] font-ember font-bold border border-transparent hover:border-white pt-[5px] px-2 pb-[6px] rounded-sm">Last minute deals</a>
      </div>
    </header>
  );
};

export default Header;
