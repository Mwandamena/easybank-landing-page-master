import React from "react";

const Card = ({ img, author, title, description }) => {
  return (
    <div className="w-full md:max-w-[400px] flex flex-col gap-0 items-center bg-[var(--white)] rounded-md">
      {/* card image section */}
      <div className="overflow-hidden w-full h-full md:h-[12rem]">
        <img src={img} alt={title} className="rounded-t-md w-full h-full" />
      </div>
      {/* card text section */}
      <div className="p-6 flex flex-col gap-3">
        <span className="text-xs">{author}</span>
        <h3>
          <a
            href="#"
            className="text-[var(--dark-blue)] font-medium text-[18px] hover:text-[var(--lime-green)] transition duration-300"
          >
            {title}
          </a>
        </h3>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
