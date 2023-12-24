type Props = {
  className?: string;
  children?: React.ReactNode;
};
export default function Card({ children, className = "" }: Props) {
  const cardClassName = ` bg-white shadow-2xl w-full ${className}`;
  return <div className={cardClassName}>{children}</div>;
}
