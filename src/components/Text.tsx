const Text = ({ children }: ChipProps) => {
  return <span className="text-[#CC0C39] text-[12px] font-ember font-bold">{children}</span>;
};

export default Text;

interface ChipProps {
  children: React.ReactNode;
}