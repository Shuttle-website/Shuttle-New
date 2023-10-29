import React from "react";
import { Link } from "react-router-dom"
import "./Card.css";
import { FaSearch } from "react-icons/fa";

function Card(props) {
	const stars = [];
	for (let i = 0; i < props.rating; i++) {
		stars.push(
			<i className="fa-solid fa-star" style={{ color: "#f2e231" }}></i>
		);
	}
	return (
		<>
			<Link to={`/products/${id}`} className='link'>
			</Link>
			<div className="card--item">
				<img src={props.img} alt="image" />
				<FaSearch />
				<span className="card--shuttle">Shuttle</span>
				<div className="card--desc">{props.desc}</div>
				<div className="card--price">${props.price}</div>
				<div className="card--rating">{stars}</div>
			</div>
		</>
	);
}

export default Card;
