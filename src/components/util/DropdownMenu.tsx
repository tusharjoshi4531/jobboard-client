type Props = {
  label?: string;
  placeholder: string;
  options: { id: string; label: string }[];
  className?: string;
};
export default function DropdownMenu({
  label = "",
  placeholder,
  options,
  className,
}: Props) {
  const optionElements = options.map((option) => (
    <option value={option.id} key={option.id}>
      {option.label}
    </option>
  ));

  return (
    <>
      <label>{label}</label>
      <select className={className}>
        <option value="">{placeholder}</option>
        {optionElements}
      </select>
    </>
  );
}
