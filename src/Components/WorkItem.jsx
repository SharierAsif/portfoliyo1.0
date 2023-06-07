import React from "react";

function WorkItem({ title, img, tech, dec }) {
  return (
    <div className="mx-4 mt-4 mb-6">
      <div className="rounded-lg h-64 overflow-hidden hover:scale-90 transition-transform duration-150 delay-100">
        <img
          alt={title}
          className="object-cover object-center h-full w-full "
          src={img}
        />
      </div>
      <h2 className="title-font text-2xl font-medium text-gray-900 my-6">
        {title}
      </h2>
      <p className="text-xs text-center justify-center md:text-sm flex flex-row  items-center gap-2 flex-wrap ">
        {tech.map((item) => (
          <span
            key={item}
            className="dark:text-slate-300 rounded-md inline-block px-2 py-1 bg-blue-gray-200 dark:bg-slate-600"
          >
            {item}
          </span>
        ))}
      </p>
      <p className="leading-relaxed text-base mb-2">{dec}</p>
      <a className="text-blue-700 hover:text-blue-gray-800 inline-flex items-center cursor-pointer">
        See More
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  );
}

export default WorkItem;
