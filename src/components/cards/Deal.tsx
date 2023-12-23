import { Chip, Text } from "..";

const Deal = () => {
  return (
    <article className="min-w-[165px] max-w-[270px] overflow-hidden">
      <img
        src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41zm3Dj11aL._SY500__AC_SY200_.jpg"
        alt=""
      />
      <div className="flex items-center gap-2">
        <Chip>Up to 52% off</Chip>
        <Text>Ends in 00:00</Text>
      </div>
      <span className="text-[#0f1111] text-[13px] font-ember w-full mt-1 overflow-hidden whitespace-nowrap text-ellipsis block">
        VEITORLD All in One Survival Tools Hammer Multitool
      </span>
    </article>
  );
};

export default Deal;

interface DealProps {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  discount: string;
}