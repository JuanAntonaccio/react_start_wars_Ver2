const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "PRIMERO",
					background: "white",
					initial: "white"
				},
				{
					title: "SEGUNDO",
					background: "white",
					initial: "white"
				}
			]
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
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
			}
		}
	};
};

export default getState;
