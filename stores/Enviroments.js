const API_HOST = "http://localhost:8080/";

const enviroments = {
	get_products: "api/products",
	get_sub_products: "api/products/sub",
};

export const setPath = (env) => {
	return `${API_HOST}${enviroments[env]}`;
};

export const setPathById = (env, id) => {
	return `${API_HOST}${enviroments[env]}/${id}`;
};
