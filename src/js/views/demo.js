import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container d-flex">
			{store.people.map((item, index) => {
				return (
					<div key={index} className="card" style={{ width: "18rem" }}>
						<img src="https://via.placeholder.com/100x200" className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Datos</h5>
							<p className="card-text">{item.name}</p>
							<a href="#" className="btn btn-primary">
								Go to....
							</a>
						</div>
					</div>
				);
			})}

			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
