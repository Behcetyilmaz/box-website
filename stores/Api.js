import axios from "axios";
import { setPath, setPathById } from "./Enviroments";

export const connect = async (path, id = null) => {
	const newPath = id !== null ? setPathById(path, id) : setPath(path);

	if (newPath !== "") {
		return new Promise((resolve, reject) => {
			axios.get(newPath).then((data) => {
				if (data) {
					resolve(data.data);
				} else {
					reject({ error: "Bir hata oluştu" });
				}
			});
		});
	}
};
