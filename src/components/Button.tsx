interface Props {
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: React.HTMLAttributes<HTMLButtonElement>["className"];
  textClassName?: React.HTMLAttributes<HTMLSpanElement>["className"];
}

function Button({ value, onClick, className, textClassName }: Props) {
  return (
    <button
      className={`bg-crOrange text-white rounded-2xl p-2 flex items-center justify-center gap-4 min-w-36 ${className}`}
      onClick={(e) => onClick(e)}
    >
      {
        //TODO icon
      }
      <span className={`text-lg font-extrabold ${textClassName}`}>{value}</span>
    </button>
  );
}

export default Button;
