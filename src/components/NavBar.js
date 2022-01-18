import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  //console.log(links)
  
  const listLinks = links.map((eachLink) => {
    return <a key={eachLink} href={'#'+eachLink}>{eachLink}</a>
  })


  return <nav>

  {listLinks}
  
  </nav>;
}

export default NavBar;
