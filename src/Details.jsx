import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom"; //hook
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); //eg. from somewhere back to hm page

  //eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext); //_ declare it but not use it -> since dont care what it is
  // 'http://localhost:5173/details/1'
  //the id is come from browser router component in the app.jsx
  //context available to component underneath it
  //useParams can not work without browser router
  const { id } = useParams(); 
  /*give a query key: ["details", id]  what we request
   and it will store in cache */
  const results = useQuery(["details", id], fetchPet); //if not in catch, run this -> store it the cache

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">@</h2>
      </div>
    );
  }

  //pet is loaded
  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
             {pet.name} —{pet.breed} —{pet.city},{pet.state}
          <button onClick={() => setShowModal(true)}> Adopt {pet.name} </button>
          <p>{pet.description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {pet.name}</h1>
                <div className="buttons">
                  <button
                    onClick={() => {
                      setAdoptedPet(pet);
                      navigate("/"); //back to hm page
                    }}
                  >
                    Yes
                  </button>

                  <button onClick={() => setShowModal(false)}> No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </h2>
      </div>
    </div>
  );
};

//since error boundary can only catcher the error from the component
export default function DetailErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
