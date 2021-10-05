import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h4 className="">The name of the planet is {store.planets[params.theid].name}</h4>
			<p className="ms-5"> The rotation period is :{store.planets[params.theid].rotation_period}</p>
			<p className="ms-5"> The orbital period is :{store.planets[params.theid].orbital_period}</p>
			<p className="ms-5"> The diameter is :{store.planets[params.theid].diameter}</p>
			<p className="ms-5"> The climate is :{store.planets[params.theid].climate}</p>
			<p className="ms-5"> The gravity is :{store.planets[params.theid].gravity}</p>
			<p className="ms-5"> The terrain is :{store.planets[params.theid].terrain}</p>
			<p className="ms-5"> The surface water is :{store.planets[params.theid].surface_water}</p>
			<p className="ms-5"> The population is :{store.planets[params.theid].population}</p>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Planets.propTypes = {
	match: PropTypes.object
};
