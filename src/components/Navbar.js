import React from  'react';
class Navbar extends React.Component{
    render()
    {
        return(
          <div className="nav">
              <div class="search-container">
                  <input />
                  <button id="search-btn">Search</button>
              </div>
          </div>
        );
    }
}
export default Navbar;