import React from "react";
import "./Table.css";
import tabimag1 from "../../assets/tabImag1.png";
import tabimag2 from "../../assets/tabImag2.png";

const Table = () => {
  return (
    <div>
      <div className="table_head">
        <div>
          <h4>Product Sell</h4>
        </div>
        <div className="div_input">
          <div>
            <input className="input_sty" type="text" placeholder="search" />
          </div>
          <div>
            <select className="input_sty" name="" id="">
              <option value="a">Last 30 days</option>
              <option value="a">Last 6 moint</option>
              <option value="a">Last 1 years</option>
            </select>
          </div>
        </div>
      </div>
      <table class="table table-hover table-bordered results">
        <thead>
          <tr>
            <th class="col-md-5 col-xs-5 p-2">Product Name</th>
            <th class="col-md-3 col-xs-4 p-2">Stock</th>
            <th class="col-md-3 col-xs-3 p-2">Price</th>
            <th class="col-md-3 col-xs-3 p-2">Total Sale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="tabple_product">
                <div>
                  <img src={tabimag1} alt="" />
                </div>
                <div>
                  <strong>Abstract 3D</strong>
                  <br />
                  <p style={{color:'GrayText'}}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </td>
            <td>32 in Stock</td>
            <td>$ 45.99</td>
            <td>20</td>
          </tr>
          <tr>
            <td>
              <div className="tabple_product">
                <div>
                <img src={tabimag2} alt="" />
                </div>
                <div>
                  <strong>Sarphens illustrastion</strong>
                  <br />
                  <p style={{color:'GrayText'}}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </td>
            <td>32 in Stocl</td>
            <td>$ 45.99</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
