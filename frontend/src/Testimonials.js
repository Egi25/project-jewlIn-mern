import Container from "react-bootstrap/Container";
import { Carousel, Image } from "react-bootstrap";
import woman2 from "./images/woman2.jpg";

import React from "react";
const testimonialsData = [
  {
    id: 1,
    name: "Jhon Wills",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lobortis mi. Mauris enim ante, tempor semper rhoncus eget, maximus ut tellus. Etiam quis diam fermentum, lobortis neque vel, hendrerit est. Donec ut velit id lacus vulputate scelerisque. Ut condimentum nibh eget nunc hendrerit, ut faucibus sem convallis. Vivamus euismod magna lectus. Nulla varius enim sit amet nunc sodales pulvinar. Proin consectetur nulla in odio sollicitudin, id congue lacus pretium.",
    photo: woman2,
    rating:'5'
  },
  {
    id: 2,
    name: "Kate Swift",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lobortis mi. Mauris enim ante, tempor semper rhoncus eget, maximus ut tellus. Etiam quis diam fermentum, lobortis neque vel, hendrerit est. Donec ut velit id lacus vulputate scelerisque. Ut condimentum nibh eget nunc hendrerit, ut faucibus sem convallis. Vivamus euismod magna lectus. Nulla varius enim sit amet nunc sodales pulvinar. Proin consectetur nulla in odio sollicitudin, id congue lacus pretium.",
    
    rating:'5'
  },

  {
    id: 3,
    name: "Monica Berry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lobortis mi. Mauris enim ante, tempor semper rhoncus eget, maximus ut tellus. Etiam quis diam fermentum, lobortis neque vel, hendrerit est. Donec ut velit id lacus vulputate scelerisque. Ut condimentum nibh eget nunc hendrerit, ut faucibus sem convallis. Vivamus euismod magna lectus. Nulla varius enim sit amet nunc sodales pulvinar. Proin consectetur nulla in odio sollicitudin, id congue lacus pretium.",

    rating:'5'
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testmonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">what client sat about us</div>
        </div>
      </Container>
      <Carousel>
        {testimonialsData.map((testimonials) => {
          return (
            <Carousel.Item key={testimonials.id}>
             
              <Image src={testimonials.photo} className="reviewPhoto" />
              <blockquote>
                <p>{testimonials.description}</p>
              </blockquote>
              <cite>
                <p>{testimonials.name}</p>
              </cite>
              <div className="review-stars">
                {"★★★★★".slice(0, testimonials.rating)}
                <span className="text-muted">
                  {"★★★★★".slice(testimonials.rating)}
                </span>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Testimonials;
