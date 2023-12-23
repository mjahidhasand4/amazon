import Link from "next/link";
import { A } from "..";

const Card1 = ({ title, href, img, link }: CardProps) => {
  return (
    <article className="w-[370px] max-h-[420px] p-5 bg-white flex flex-col relative">
      <h2 className="text-[#0f1111] text-[21px] leading-[27px] font-ember font-bold">{title}</h2>
      <img {...img} className="h-[230px] object-contain my-2" />
      <A href={href} _class="text-[13px] relative z-10">{link}</A>
      <Link href={href} className="absolute top-0 bottom-0 left-0 right-0 opacity-0">{title}</Link>
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