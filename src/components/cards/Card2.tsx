import Link from "next/link";
import { A } from "..";

const Card2 = ({ title, href, link, images }: CardProps) => {
  return (
    <article className="w-[370px] h-[420px] p-5 bg-white flex flex-col relative">
      <h2 className="text-[#0f1111] text-[21px] leading-[27px] font-ember font-bold mb-2">
        {title}
      </h2>
      <div className="w-full h-[270px] grid grid-cols-2 justify-between gap-x-4 gap-y-8">
        {images.map((image, index) => (
          <Link href={image.href} key={index}>
            <img src={image.img.src} alt={image.img.alt} className="h-[80%]" />
            <span className="text-[#0f1111] text-[12px]">{image.title}</span>
          </Link>
        ))}
      </div>
      <A href={href} _class="text-[13px] relative z-10 mt-auto">
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
  images: Array<{
    title: string;
    href: string;
    img: { src: string; alt: string };
  }>;
}
