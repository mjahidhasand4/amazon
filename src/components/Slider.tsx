import Link from "next/link";

const Slider = ({ title, images, _class }: SliderProps) => {
  return (
    <div className={`p-5 bg-white ${_class}`}>
      <h2 className="text-[#0f1111] text-[21px] leading-[27px] font-ember font-bold mb-2">
        {title}
      </h2>
      <div className="w-auto h-[200px] flex items-center gap-[10px] overflow-y-hidden overflow-x-scroll no-scrollbar">
        {images.map((image, index) => (
          <Link href={image.href} key={index} className="block">
            <img {...image.img} className="max-w-[270px] max-h-[200px] object-cover" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Slider;

interface SliderProps {
  title: string;
  images: Array<{
    href: string;
    img: { src: string; alt: string };
  }>;
  _class?: string;
}
