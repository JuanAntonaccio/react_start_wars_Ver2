import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<h3 className="text-danger">Personajes</h3>
			<div className="carrousel row">
				{store.people.map((item, index) => {
					return (
						<div key={index} className="card" style={{ width: "18rem" }}>
							<img src="https://via.placeholder.com/100x100" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Datos</h5>
								<p className="card-text">{item.name}</p>
								<Link to={"/people/" + index} className="btn btn-primary">
									Learn More....
								</Link>
								<button
									type="button"
									className="btn btn-warning ms-1"
									onClick={() => actions.agregarFavoritos(item.name)}>
									<i className="far fa-heart" />
								</button>
							</div>
						</div>
					);
				})}

				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
			<h3 className="text-danger">Planetas</h3>
			<div className="carrousel row">
				{store.planets.map((item, index) => {
					return (
						<div key={index} className="card" style={{ width: "18rem" }}>
							<img src="https://via.placeholder.com/100x100" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Planets</h5>
								<p className="card-text">{item.name}</p>
								<Link to={"/planets/" + index} className="btn btn-primary">
									Learn More....
								</Link>
								<button
									type="button"
									className="btn btn-warning ms-1"
									onClick={() => actions.agregarFavoritos(item.name)}>
									<i className="far fa-heart" />
								</button>
							</div>
						</div>
					);
				})}

				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</div>
	);
};
