import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<i className="fab fa-jedi-order" />
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-warning dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favoritos
						<span className="badge bg-secondary ms-1">{store.favoritos.length}</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favoritos.map((item, index) => {
							return (
								<li key={index}>
									<a className="dropdown-item">
										{item}
										<i
											className="far fa-trash-alt"
											onClick={() => actions.eliminarFavorito(item)}
										/>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
