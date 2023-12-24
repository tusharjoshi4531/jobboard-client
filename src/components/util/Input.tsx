type Props = {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  labelText: string;
  className?: string;
};
export default function Input({
  inputProps,
  labelText,
  className = "",
}: Props) {
  const inputClassName = `border-2 border-blue-200 rounded-md px-2 py-2 ${className}`;
  return (
    <>
      <label htmlFor="" className="mt-4 mb-1 font-bold text-gray-600 text-sm">
        {labelText}
      </label>
      <input name="" {...inputProps} className={inputClassName} />
    </>
  );
}
