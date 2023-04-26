import { Link } from "react-router-dom";
//no need to refreash -> react router could capture the event
//and route without forcing the user to totally refresh the page

//same with above
const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "c";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} — {breed} — {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
