import React from "react";
import "../assets/styles/Timeline.scss";
import { roles } from "../data/content";
import Tags from "./Tags";

function Timeline() {
  return (
    <section className="block" id="history" aria-labelledby="history-heading">
      <div className="wrap">
        <div className="block-head">
          <h2 id="history-heading">Career history</h2>
          <p>Machine learning engineering since 2020, GenAI engineering since 2023.</p>
        </div>
        <ol className="roles">
          {roles.map((role) => (
            <li className="role" key={role.title}>
              <div className="when">{role.when}</div>
              <div>
                <h3>{role.title}</h3>
                <div className="where">{role.where}</div>
                <Tags items={role.tags} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Timeline;
