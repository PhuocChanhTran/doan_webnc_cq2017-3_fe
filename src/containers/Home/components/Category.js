import React, { useContext } from "react";
export default function Category() {
  return (
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <div className="list-group">
                <a href="#" className="list-group-item active">IT</a>
                <a href="#" className="list-group-item">MARKETING</a>
                <a href="#" className="list-group-item">DESIGN</a>
                <a href="#" className="list-group-item">MUSIC</a>
                <a href="#" className="list-group-item">ART</a>
              </div>
            </div>
      );
}
