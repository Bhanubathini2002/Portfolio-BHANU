import React from "react";
import "../assets/styles/Expertise.scss";
import { expertise } from "../data/content";
import Tags from "./Tags";

function Expertise() {
  return (
    <section className="block" id="expertise" aria-labelledby="expertise-heading">
      <div className="wrap">
        <div className="block-head">
          <h2 id="expertise-heading">Expertise</h2>
          <p>Three areas I work across, from the model layer to deployment.</p>
        </div>
        <div className="cols">
          {expertise.map((area) => (
            <div className="col" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <Tags items={area.stack} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
