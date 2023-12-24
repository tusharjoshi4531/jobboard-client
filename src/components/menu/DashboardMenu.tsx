"use client";
import { useState } from "react";
import { DownIcon, UpIcon } from "../icons/NavIcons";
import Button from "../util/Button";
import SelectButtons from "../util/SelectButtons";

export default function DashboardMenuSections() {
  
  const [activeButton, setActiveButton] = useState<string>("");

  const activateButton = (button: string) => {
    console.log(button);
    setActiveButton((state) => {
      return state === button ? "" : button;
    });
  };

  console.log(activeButton);

  return (
    <div className="flex flex-col m-2">
      <Button
        className="bg-zinc-500 text-white my-1"
        text="General"
        onClick={() => activateButton("General")}
        endAdornment={activeButton === "General" ? <DownIcon /> : <UpIcon />}
      />
      {activeButton === "General" && (
        <SelectButtons
          options={[
            { id: "general/board-setting", text: "Board Setting" },
            { id: "general/appearance-theme", text: "Appearance/Theme" },
            { id: "general/domain", text: "Domain" },
            { id: "general/analytics", text: "Analytics" },
            { id: "general/payments", text: "Payments" },
            { id: "general/users", text: "Users" },
          ]}
          baseClassName="rounded-md hover:bg-gray-200 my-1"
          selectedClassName="rounded-md bg-yellow-300 my-1"
        />
      )}
      <Button
        className="bg-zinc-500 text-white my-1"
        text="Navigation"
        onClick={() => activateButton("Navigation")}
        endAdornment={activeButton === "Navigation" ? <DownIcon /> : <UpIcon />}
      />
      <Button
        className="bg-zinc-500 text-white my-1"
        text="Content"
        onClick={() => activateButton("Content")}
        endAdornment={activeButton === "Content" ? <DownIcon /> : <UpIcon />}
      />
      <Button
        className="bg-zinc-500 text-white my-1"
        text="Jobs"
        onClick={() => activateButton("Jobs")}
        endAdornment={activeButton === "Jobs" ? <DownIcon /> : <UpIcon />}
      />
      <Button
        className="bg-zinc-500 text-white my-1"
        text="Other"
        onClick={() => activateButton("Other")}
        endAdornment={activeButton === "Other" ? <DownIcon /> : <UpIcon />}
      />
    </div>
  );
}
