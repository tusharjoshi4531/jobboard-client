"use client";
import Card from "@/components/Card";
import Button from "@/components/util/Button";
import configContext from "@/store/config-context";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {
  const config = useContext(configContext);
  console.log(config);
  console.log(`mt-4 bg-${config.primary}  `);

  
  return (
    <div className="m-8 flex flex-col">
      <Card className="p-8">
        <h1 className=" text-center font-extrabold text-lg">{config.title}</h1>
      </Card>
      <Card className="mt-4 p-8 flex flex-col">
        <p>{config.description}</p>
        <Button
          className={"mt-8"}
          text="Start"
          buttonProps={{
            style: { backgroundColor: config.primary },
          }}
        />
      </Card>
    </div>
  );
}
