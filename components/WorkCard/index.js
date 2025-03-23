import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-3 transition-all ease-out duration-300 "
      onClick={onClick}
    >
      {/* Gambar */}
      <div className="relative rounded-lg overflow-hidden">
        <img
          alt={name}
          className="w-full max-h-60 object-contain rounded-md transition-all ease-out duration-300 hover:scale-105"
          src={img}
          onError={(e) => (e.target.style.display = "none")} // Sembunyikan gambar jika error
        />
      </div>
      {/* Nama dan Deskripsi */}
      <h1 className="mt-4 text-xl font-medium ">{name || "Project Name"}</h1>
      <p className="text-gray-500 text-sm mt-1">
        {description || "Description"}
      </p>
    </div>
  );
};

export default WorkCard;
