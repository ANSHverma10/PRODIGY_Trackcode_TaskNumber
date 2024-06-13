import React from "react";
import './about.css'

function About() {
  return (
    <div className="about-me">
      <h1 onMouseEnter={() => console.log("Hovering over the title!")} >This is the about Page in about me component</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore explicabo repellendus ullam, voluptate nam eius placeat asperiores laudantium, hic atque at maxime perferendis. Ratione esse, recusandae, ducimus id molestias delectus temporibus culpa ad inventore quas unde. Ab fugit dolorem magni officiis laborum a placeat libero in, soluta odit necessitatibus. Possimus veniam fugiat laudantium rem a nihil. Libero numquam minus eum nisi, quis qui repellat ea quisquam laudantium autem soluta recusandae dolor odio exercitationem excepturi rerum tenetur explicabo similique ducimus odit nemo. Minus error repellendus repudiandae sint atque harum facilis vero fuga totam illum amet iste praesentium, alias, deleniti rerum magnam.</p>
      <button class="learn-more-button">Learn More</button>
      <div className="social-links">
        <a href="#" className="social-link">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default About;