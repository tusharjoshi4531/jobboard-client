import Card from "../Card";

type Props = {
  className: string;

};
export default function JobPostCard({ className }: Props) {
  
  return <Card className="bg-yellow-100 flex p-6">
    <div>Logo</div>
    <div className="flex flex-row">
      <h1 className=" font-extrabold">Title</h1>
    </div>
  </Card>;
}
