import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`w-full p-3 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-gray-100"
      }`}
    >
      <h1 className="text-2xl font-medium">{name || "Heading"}</h1>
      <p className="mt-3 text-gray-500 text-base">
        {description ||
          "Lorem Ipsum has been the industry's standard dummy text since the 1500s."}
      </p>
    </div>
  );
};

export default ServiceCard;
