import Link from "next/link";
import { A } from "..";

const Card1 = ({ title, href, img, link }: CardProps) => {
  return (
    <article className="w-[370px] h-[420px] p-5 bg-white flex flex-col relative">
      <h2 className="text-[#0f1111] text-[21px] leading-[27px] font-ember font-bold">{title}</h2>
      <img {...img} className="w-full h-[304px] object-cover mt-2 mb-3" />
      <A href={href} _class="text-[13px] relative z-10">{link}</A>
    </article>
  );
};

export default Card1;

interface CardProps {
  title: string;
  href: string;
  link: string;
  img: {
    src: string;
    alt: string;
  };
}