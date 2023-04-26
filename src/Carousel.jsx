import { Component } from "react";

//images of current pet
class Carousel extends Component {
  state = {
    active: 0
  };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  //when user click the thumbnail img -> change the img
  //arrow function dont create scope -> so it can capture carousell
  handleIndexClick = (e) => {
    this.setState({
      //"+" turn string to number eg. +"5" ->5
      //e.target: img | dataset: data dash thing | index: string
      active: +e.target.dataset.index,
    });
  };

  //function body
  render() {
    
    //can not use hook in class 
    const { active } = this.state //keep track
    const { images } = this.props



    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            //eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""} //active class || no class
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
