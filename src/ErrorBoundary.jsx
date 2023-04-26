import { Component } from "react";
import { Link } from "react-router-dom";

//catch error from your app 
//can only catch component that inside of it
class ErrorBoundary extends Component {
  state = { hasError: false };
  //if have error -> state set to true
  //static function -> can directly call in the class
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  //life cycle method
  componentDidCatch(error, info) {
    //typecally you would log this to something like TrackJS or NewRelic
    console.error("ErrorBoundary component caught an error", error, info);
  }

  //render: what display on screen when component is rendered
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was error with this listing.{" "}
          <Link to="/">Click here to go back to the home page. </Link>
        </h2>
      );
    }

    //if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
