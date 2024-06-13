import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="heading">
      <div className="intro">
        <h1 className="head">This is the heading in Home component<br />Enter your name:-</h1>
        <div className="form">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="contactNumber">Contact Number:</label>
            <input type="tel" id="contactNumber" name="contactNumber" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

          </form>
        </div>
      </div>
      <p className="para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae
        aliquid facilis ducimus ratione quia minima, deserunt cupiditate
        incidunt voluptatum, accusamus labore modi assumenda? Nulla ipsam ipsum
        exercitationem molestiae fugiat Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Mollitia itaque error nemo natus repellendus
        consectetur magni hic, nulla aperiam asperiores. Ratione unde nihil in
        dolorem dolores, quia minima repellat dicta aspernatur ipsum,
        voluptatibus possimus blanditiis eligendi dolore eius nam. Ratione,
        maxime delectus voluptates atque maiores libero sapiente eius. Nisi
        voluptas veritatis ex? Repellat ab animi recusandae, debitis dolor quia,
        laudantium consequuntur facere molestias in quasi a expedita error
        perferendis ut quod rem ipsa tempore, laborum delectus. Voluptates
        molestiae mollitia excepturi nostrum asperiores voluptate eligendi fugit
        fugiat cumque quidem soluta, blanditiis aperiam corrupti accusantium.
        Voluptate sequi aspernatur mollitia quae excepturi dolor!
      </p>
    </div>
  );
}

export default Home;
