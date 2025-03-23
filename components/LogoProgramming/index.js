import React from "react";

const logos = [
  "CssLogo.svg",
  "HTMLLogo.svg",
  "JavascriptLogo.svg",
  "NextLogo.svg",
  "NodeLogo.svg",
  "ReactLogo.svg",
  "TailwindLogo.svg",
];

const LogoProgramming = () => {
  return (
    <div className="mx-auto overflow-hidden py-8 text-center">
      {/* Judul */}
      <h2 className="text-3xl font-medium text-white mb-4">Technologies I Use</h2>

      {/* Container Logo dengan Animasi ke Kanan */}
      <div className="relative w-full overflow-hidden ">
        <div className="flex gap-12 animate-marquee mx-auto items-center justify-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`/images/ProgrammingLogo/${logo}`}
              alt={logo.replace(".svg", "")}
              className="w-12 h-12 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoProgramming;
