import React from "react";
import "./Card.css";
import dollar from "../../assets/dollar.png";
import order from "../../assets/order.png";
import balance from "../../assets/balance.png";
import total from "../../assets/total.png";

let array = [
  {
    id: "1",
    img: dollar,
    title: "Earning",
    price: "$198K",
    increase: "37.8% ",
    time: "This month",
    color:'green'
  },
  {
    id: "2",
    img: order,
    title: "Order",
    price: "$2.4K",
    increase: "2% ",
    time: "This month",
    color:'red'
  },
  {
    id: "3",
    img: balance,
    title: "Balance",
    price: "$2.4K",
    increase: "2% ",
    time: "This month",
    color:'red'
  },
  {
    id: "4",
    img: total,
    title: "Total sales",
    price: "$89K",
    increase: "11% ",
    time: "This week",
    color:'green'
  },
];

const Card = () => {
  return (
    <div className="Parent_card">
      {array &&
        array.length > 0 &&
        array.map((v) => (
            <div className="card" style={{ width: "26rem" }} key={v.id}>
              <div className="card-body">
                <img src={v.img} alt={v.img} />
              </div>
              <div>
                <p className="card-text" style={{color:'GrayText'}}>{v.title}</p>
                <p className="card-text" >{v.price}</p>
                <p className="card-text"><span style={{color:`${v.color}`}}>{v.increase}</span>{v.time}</p>
              </div>
            </div>
        ))}
    </div>
  );
};

export default Card;
