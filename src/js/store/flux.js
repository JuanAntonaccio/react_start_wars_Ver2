const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favoritos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			// las acciones son funciones recuerden esto
			// esto es flux una forma de organizar el codigo
			colorFunction: index => {
				let color = Math.floor(Math.random() * 6);
				let arrayColor = ["yellow", "white", "green", "cyan", "pink", "orange"];
				getActions().changeColor(index, arrayColor[color]);
			},
			getData: () => {
				fetch("https://swapi.dev/api/people")
					.then(res => res.json())
					.then(data => setStore({ people: data.results }))
					.catch(err => console.error(err));
				fetch("https://swapi.dev/api/planets")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			agregarFavoritos: favorito => {
				console.log("Agregando favoritos  " + favorito);
				setStore({ favoritos: favorito });
			}
		}
	};
};

export default getState;
