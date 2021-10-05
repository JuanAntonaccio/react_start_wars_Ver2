import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h3 className="">The name is {store.people[params.theid].name}</h3>
			<p className="ms-5"> The height is :{store.people[params.theid].height}</p>
			<p className="ms-5"> The mass is :{store.people[params.theid].mass}</p>
			<p className="ms-5"> The hair_color is :{store.people[params.theid].hair_color}</p>
			<p className="ms-5"> The skin color is :{store.people[params.theid].skin_color}</p>
			<p className="ms-5"> The eye color is :{store.people[params.theid].eye_color}</p>
			<p className="ms-5"> The birth year is :{store.people[params.theid].birth_year}</p>
			<p className="ms-5"> The gender is :{store.people[params.theid].gender}</p>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

People.propTypes = {
	match: PropTypes.object
};
