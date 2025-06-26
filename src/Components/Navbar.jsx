import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar">
        <div className="left new_items">portfolio</div>
        <div className="right">
          <a href="#home" className="new_items">Home</a>
          <a href="" className="new_items">Experience</a>
          <a href="#skills" className="new_items">Skills</a>
          <a href="#projects" className="new_items">Project</a>
          <a href="#contact" className="new_items">Contact</a>
        </div>
      </div>
    </>
  );
};
export default Navbar;
