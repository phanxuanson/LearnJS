import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i className="fa fa-angle-double-right"></i>Home
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i className="fa fa-angle-double-right"></i>Home
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i className="fa fa-angle-double-right"></i>Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
