import PropTypes from "prop-types";

import Button from "./Button";

const Header = ({ title, name }) => {
  
    const onClickTest = (e) => {
    console.log("Clicked", e);
  };
  
  return (
    <header className="header">
      {/* always put inline css in double braces */}
      {/* <h1 style = {{color : "red" , backgroundColor : "blue"}}>  
        Task Tracker {title} {name}
      </h1> */}
      <h1>Task Tracker</h1>
      <Button onClickMili={onClickTest} />
    </header>
  );
};

Header.defaultProps = {
  title: "Default title if nothing passed",
};

// just a way to make sure you send in props of the correct datatype
Header.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.number,
};

//css in react
// const headerStyling = {
//     color : "red",
//     backgroundColor : "black"
// }
{
  /* <h1 style = { headerStyling}></h1>  no need of double bracing here dumbo!!*/
}

export default Header;
