import React from "react";

const Section = (props) => {
  return (
    <section>
      <img src={props.img} alt="Image" className="section--img" />
      <div className="section--info">
        <div className="section--loc">
          <p>
            <img
              src="../images/location.png"
              alt="Location"
              className="section-loc__img"
            />
            <text>{props.location}</text>
          </p>
          <a href="#">View on Google Maps</a>
        </div>
        <div className="section--place">{props.place}</div>
        <div className="section--desc">
          <tex className="section--date">{props.date}</tex>
          <p>{props.description}</p>
        </div>
          </div>
    </section>
  );
};

export default Section;
