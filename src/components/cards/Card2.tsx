import { A } from "..";

const Card2 = ({ title, href, link }: CardProps) => {
  return (
    <article className="w-[370px] max-h-[420px] p-5 bg-white flex flex-col relative">
      <h2 className="text-[#0f1111] text-[21px] leading-[27px] font-ember font-bold">
        {title}
      </h2>
      <div></div>
      <A href={href} _class="text-[13px] relative z-10">
        {link} 
      </A>
    </article>
  );
};

export default Card2;

interface CardProps {
  title: string;
  href: string;
  link: string;
  images: {
    img: {
      src: string;
      alt: string;
    };
    title: string;
    href: string;
  }[];
}
