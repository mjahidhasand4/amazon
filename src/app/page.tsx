"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card1, Card2 } from "@/components/cards";
import { A, Button, Slider } from "@/components";

const Home = () => {
  return (
    <main className="relative">
      <Swiper
        navigation={{
          nextEl: ".customize-swiper-next-button",
          prevEl: ".customize-swiper-previous-button",
        }}
        modules={[Navigation, Autoplay]}
        rewind={true}
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <img src="/images/beauty-products.jpg" alt="Beauty products" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/for-gamers.jpg" alt="Essential for gamers" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/kitchen-favourites.jpg" alt="Kitchen favourites" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/shop-books.jpg" alt="Shop books" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/shop-holiday.jpg" alt="Shop holiday" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/shop-last-minute.jpg" alt="Shop last minute" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/toys.jpg" alt="Toys" />
        </SwiperSlide>
      </Swiper>
      <button className="customize-swiper-previous-button absolute top-0 left-0 z-10 w-20 h-[250px] flex items-center justify-center rounded-[5px] focus:shadow-[inset_0_0_0_2px_#FFF,_inset_0_0_0_4px_#008296]">
        <i
          style={{ backgroundPosition: "0 0" }}
          className="arrow w-[34px] h-[52px] "
        />
      </button>
      <button className="customize-swiper-next-button  absolute top-0 right-0 z-10 w-20 h-[250px] flex items-center justify-center rounded-[5px] focus:shadow-[inset_0_0_0_2px_#FFF,_inset_0_0_0_4px_#008296]">
        <i
          style={{ backgroundPosition: "-34px 0" }}
          className="arrow w-[34px] h-[52px] "
        />
      </button>

      <section className="w-full absolute top-[39.6%] z-10">
        <div className="py-[10px] px-5 mx-2 flex items-start gap-4">
          <Card2
            title="Gaming accessories"
            href=""
            link="See more"
            images={[
              {
                title: "Headsets",
                href: "",
                img: { src: "images/fuji-quad-headset.jpg", alt: "" },
              },
              {
                title: "Keyboards",
                href: "",
                img: { src: "images/fuji-quad-keyboards.jpg", alt: "" },
              },
              {
                title: "Computer mice",
                href: "",
                img: { src: "images/fuji-quad-mouse.jpg", alt: "" },
              },
              {
                title: "Chairs",
                href: "",
                img: { src: "images/fuji-quad-chair.jpg", alt: "" },
              },
            ]}
          />
          <Card1
            title="Toys under $25"
            href=""
            link="Shop now"
            img={{ src: "/images/toy.jpg", alt: "" }}
          />
          <Card1
            title="Deals in PCs"
            href=""
            link="Shop now"
            img={{ src: "/images/cpu.jpg", alt: "" }}
          />
          <Card2
            title="Refresh your space"
            href=""
            link="See more"
            images={[
              {
                title: "Dining",
                href: "",
                img: { src: "images/dining.jpg", alt: "" },
              },
              {
                title: "Home",
                href: "",
                img: { src: "images/home.jpg", alt: "" },
              },
              {
                title: "Kitchen",
                href: "",
                img: { src: "images/kitchen.jpg", alt: "" },
              },
              {
                title: "Health and Beuty",
                href: "",
                img: { src: "images/health-beauty.jpg", alt: "" },
              },
            ]}
          />
        </div>
        <div className="py-[10px] px-5 mx-2 flex items-start gap-4">
          <Card2
            title="Shop deals in Fashion"
            href=""
            link="See all deals"
            images={[
              {
                title: "Jeans under $50",
                href: "",
                img: { src: "images/jeans.jpg", alt: "" },
              },
              {
                title: "Tops under $25",
                href: "",
                img: { src: "images/tops.jpg", alt: "" },
              },
              {
                title: "Dresses under $30",
                href: "",
                img: { src: "images/dresses.jpg", alt: "" },
              },
              {
                title: "Shoes under $50",
                href: "",
                img: { src: "images/shoes.jpg", alt: "" },
              },
            ]}
          />
          <Card2
            title="Fashion trends you like"
            href=""
            link="Explore more"
            images={[
              {
                title: "Dresses",
                href: "",
                img: { src: "images/dresses_2.jpg", alt: "" },
              },
              {
                title: "Knits",
                href: "",
                img: { src: "images/knits.jpg", alt: "" },
              },
              {
                title: "Jackets",
                href: "",
                img: { src: "images/jackets.jpg", alt: "" },
              },
              {
                title: "Jewelery",
                href: "",
                img: { src: "images/jewelery.jpg", alt: "" },
              },
            ]}
          />
          <Card1
            title="Beauty steals under $25"
            href=""
            link="Shop now"
            img={{ src: "/images/beauty-steals.jpg", alt: "" }}
          />
          <Card1
            title="Home décor under $50"
            href=""
            link="Shop now"
            img={{ src: "/images/home-decor.jpg", alt: "" }}
          />
        </div>
        <Slider
          title="Best Sellers in Books"
          _class="mt-4 mx-8"
          images={[
            {
              href: "",
              img: { src: "/images/books/atomic-habits.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/books/oath-and-honor.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/books/heaven-and-earth.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/books/iron-flame.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/books/curious-mind.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/books/lesson-in-chemistry.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/books/power.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/books/court-of-thrones.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/books/boys-in-the-boat.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/books/the-creative-art.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/books/the-wager.jpg", alt: "" } },
            {
              href: "",
              img: {
                src: "/images/books/friends-love-terrible-things.jpg",
                alt: "",
              },
            },
            {
              href: "",
              img: { src: "/images/books/psyclogy-of-money.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/books/my-first-library.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/books/icebreakers.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/books/baking-yersterday.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/books/diary-of-a-wimpy-kid.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/books/outlive.jpg", alt: "" } },
            {
              href: "",
              img: {
                src: "/images/books/killers-of-the-flower-moon.jpg",
                alt: "",
              },
            },
            {
              href: "",
              img: { src: "/images/books/the-housemaid.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/books/national-parks.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/books/wings-of-fire.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/books/difficult-riddles.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/books/wheres-bluey.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/books/complete-cookbook.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/books/songbird.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/books/kingdom-power-glory.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/books/rich-dad.jpg", alt: "" } },
            { href: "", img: { src: "/images/books/dad-jokes.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/books/house-of-flame.jpg", alt: "" },
            },
          ]}
        />
        <Slider
          title="Most wished for in Movies & TV"
          _class="mt-4 mx-8"
          images={[
            {
              href: "",
              img: { src: "/images/movies/oppenheimer.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/movies/christmas.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/movies/oppenheimder-blueray.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/movies/indiana-jones.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/movies/the-creator.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/movies/titanic.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/movies/lord-of-the-rings.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/movies/barbie.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/movies/mandalorian.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/movies/mandalorian_2.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/movies/yu-yu-hakusho.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/movies/avatar.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/movies/thanksgiving.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/movies/avatar_2.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/movies/indiana-jones_.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/movies/the-worriors.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/movies/batman.jpg", alt: "" } },
            { href: "", img: { src: "/images/movies/clue.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/movies/inglourious-basterds.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/movies/matrix.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/movies/indiana-jones_3.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/movies/lord-of-the-rings_2.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/movies/goonies.jpg", alt: "" } },
            {
              href: "",
              img: {
                src: "/images/movies/five-nights-at-freddys.jpg",
                alt: "",
              },
            },
            { href: "", img: { src: "/images/movies/paprika.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/movies/mission-impossible.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/movies/dune.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/movies/the-land-before-time.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/movies/spider-man.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/movies/barbie_2.jpg", alt: "" } },
          ]}
        />

        <div className="py-[10px] px-5 mx-2 flex items-start gap-4">
          <Card2
            title="New arrivals from Home"
            href=""
            link="Shop our latest"
            images={[
              {
                title: "Kitchen",
                href: "",
                img: { src: "/images/kitchen-pumkin.jpg", alt: "" },
              },
              {
                title: "Furniture",
                href: "",
                img: { src: "/images/furniture.jpg", alt: "" },
              },
              {
                title: "Bedding",
                href: "",
                img: { src: "/images/bedding.jpg", alt: "" },
              },
              {
                title: "Décor",
                href: "",
                img: { src: "/images/decor.jpg", alt: "" },
              },
            ]}
          />
          <Card1
            title="A whole new way to work"
            href=""
            link="Shop personal computers"
            img={{ src: "/images/computer.jpg", alt: "" }}
          />
          <Card2
            title="More smiles, for less"
            href=""
            link="Shop holiday gifts under $15"
            images={[
              {
                title: "Beauty",
                href: "",
                img: { src: "/images/beauty.jpg", alt: "" },
              },
              {
                title: "Gifts for her",
                href: "",
                img: { src: "/images/gifts-for-her.jpg", alt: "" },
              },
              {
                title: "Luxury beauty",
                href: "",
                img: { src: "/images/luxury-beauty.jpg", alt: "" },
              },
              {
                title: "Most-loved beauty",
                href: "",
                img: { src: "/images/most-loved-beauty.jpg", alt: "" },
              },
            ]}
          />
          <Card2
            title="Host gifts under $50"
            href=""
            link="Shop holiday finds"
            images={[
              {
                title: "Candles",
                href: "",
                img: { src: "/images/candles.jpg", alt: "" },
              },
              {
                title: "Coffee table books",
                href: "",
                img: { src: "/images/coffee-table-books.jpg", alt: "" },
              },
              {
                title: "Luxury beauty",
                href: "",
                img: { src: "/images/glassware.jpg", alt: "" },
              },
              {
                title: "Most-loved beauty",
                href: "",
                img: { src: "/images/tabletop.jpg", alt: "" },
              },
            ]}
          />
        </div>

        <Slider
          title="Top Sellers in Toys for you"
          _class="mx-8"
          images={[
            { href: "", img: { src: "/images/toys/super-tips.jpg", alt: "" } },
            { href: "", img: { src: "/images/toys/sylvie.jpg", alt: "" } },
            { href: "", img: { src: "/images/toys/civil-war.jpg", alt: "" } },
            { href: "", img: { src: "/images/toys/tapple.jpg", alt: "" } },
            { href: "", img: { src: "/images/toys/cars.jpg", alt: "" } },
            { href: "", img: { src: "/images/toys/iron-man.jpg", alt: "" } },
            { href: "", img: { src: "/images/toys/star-wars.jpg", alt: "" } },
            { href: "", img: { src: "/images/toys/monsters.jpg", alt: "" } },
            { href: "", img: { src: "/images/toys/thor.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/toys/spider-women.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/toys/furby-tie-dye.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/toys/captain-america.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/toys/bleach.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/toys/doctor-strange.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/toys/furby-purple.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/toys/jewelery-activity.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/toys/magic.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/toys/little-pet-shop.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/toys/goofy.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/toys/number-blocks.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/toys/nick-fury.jpg", alt: "" } },
            { href: "", img: { src: "/images/toys/funko-pop.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/toys/doctor-strange_2.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/toys/captain-marvel.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/toys/iron-zombie.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/toys/star-wars-hero.jpg", alt: "" },
            },
            { href: "", img: { src: "/images/toys/super-mario.jpg", alt: "" } },
            { href: "", img: { src: "/images/toys/hantom.jpg", alt: "" } },
            {
              href: "",
              img: { src: "/images/toys/number-blocks_2.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/toys/star-wars-weapon.jpg", alt: "" },
            },
          ]}
        />

        <div className="mx-8 my-4 flex items-center gap-4">
          <Card1
            title="Laptops for every need"
            href=""
            link="Find your laptop here"
            img={{ src: "/images/white-laptop.jpg", alt: "" }}
          />
          <Card1
            title="Personal Care under $25"
            href=""
            link="See more"
            img={{ src: "/images/oral-b.jpg", alt: "" }}
          />
          <Card1
            title="Creating business solutions"
            href=""
            link="See more software products"
            img={{ src: "/images/business-software.jpg", alt: "" }}
          />
          <Card1
            title="Player's paradise starts here"
            href=""
            link="Shop video games"
            img={{ src: "/images/video-games.jpg", alt: "" }}
          />
        </div>

        <Slider
          title="Best Sellers in Sports & Outdoors"
          _class="mx-8"
          images={[
            {
              href: "",
              img: { src: "/images/sports-outdoors/lifestraw.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/sports-outdoors/hydro-flask.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/sports-outdoors/10lb.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/sports-outdoors/foam-roller.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/sports-outdoors/earmufs.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/sports-outdoors/smart-watch.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/sports-outdoors/hothands.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/sports-outdoors/yoga-mat.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/sports-outdoors/supersoft.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/sports-outdoors/pickleballs.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/sports-outdoors/hoodie.jpg", alt: "" },
            },
            {
              href: "",
              img: {
                src: "/images/sports-outdoors/smart-watch_2.jpg",
                alt: "",
              },
            },
            {
              href: "",
              img: { src: "/images/sports-outdoors/gatorade.jpg", alt: "" },
            },
            {
              href: "",
              img: { src: "/images/sports-outdoors/bbq-set.jpg", alt: "" },
            },
          ]}
        />

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
      </section>
    </main>
  );
};

export default Home;
