const Chip = ({ children }: ChipProps) => {
  return <span className="text-white text-[12px] font-ember py-1 px-[6px] bg-[#CC0C39]">{children}</span>;
};

export default Chip;

interface ChipProps {
  children: React.ReactNode;
}
