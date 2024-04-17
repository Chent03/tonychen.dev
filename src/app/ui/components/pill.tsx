type TProps = {
  text: string;
};
export const Pill: React.FC<TProps> = ({ text }) => {
  return (
    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
      {text}
    </div>
  );
};
