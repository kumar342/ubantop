import React, { Component } from "react";
import "../App.css";

export default class Stock extends Component {
  render() {
    return (
      <div className="row container ml-1">
        <div className="col-md-9  card">
          <div className="allign-cards d-flex">
            <div className="col-lg-2 mr-4">
              <div className="card">
                <div className="card1">
                  <i className="fa fa-bars " aria-hidden="true"></i>

                  <div className="card_column_one">
                    <span className="column_aadr">AADR</span>
                    <br />
                    <span className="column_dollar">$50.3</span>
                  </div>
                  <div className="card_column_two">
                    <span className="col_ishares">iShares</span>
                    <span className="col_blackdoc">by Blackdoc</span>
                    <span className="col_sp">S&P 500Index</span>
                    <span className="col_equity">US Equity</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mr-3">
              <div className="card">
                <div className="card2">
                  <div className="quantity">
                    <div className="quantity-left">
                      <i className="fa fa-database"></i>
                      <span>Quantity</span>
                    </div>

                    <span className="span_column_two">430</span>
                  </div>
                  <div className="avg-cost">
                    <div className="avg-cost-left">
                      <i className="fa fa-at"></i>
                      <span>Avg.Cost</span>
                    </div>
                    <span className="span_column_two_avg_cost">41.75</span>
                  </div>
                  <div className="invest-amount">
                    <div className="invest-amount-left">
                      <i className="fa fa-money"></i>
                      <span>Invested Amt</span>
                    </div>
                    <span className="span_column_two_money">$17952.07</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mr-3">
              <div className="card">
                <div className="card3">
                  <div className="market-value">
                    <span>Market Value</span>
                    <span>$21629</span>
                  </div>
                  <div className="portifolio mb-1">
                    {" "}
                    <span className="portifolio-value-tag">
                      % of portifolio Value
                    </span>
                    <span className="portifolio-value">24.14%</span>
                  </div>

                  <div className="pg">
                    <div className="progress" style={{ height: "11px" }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="24.14"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        24.14%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <div className="card4">
                  <div className="unrealize">
                    <span>Unrealized P\L</span>
                    <span>3676.93</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1">()</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#/" className="btn btn-success">
                Go
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
