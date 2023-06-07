import React from "react";

import WorkItem from "./WorkItem";
import WorkData from "./data/WorkData";

function Works() {
  return (
    <div id="works" className="container">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {WorkData.map((work) => (
          <WorkItem
            key={work.title}
            title={work.title}
            img={work.img}
            tech={work.tech}
            dec={work.dec}
          ></WorkItem>
        ))}
      </div>
    </div>
  );
}

export default Works;
