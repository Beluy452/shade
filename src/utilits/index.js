/**
 * scrollTo element, on default scroll to x = 0, y = 0
 * @param x{number}
 * @param y{number}
 */
export const scrollTo = (x = 0, y = 0) => {
	window.scrollTo(x, y);
};

/**
 * @param url
 * @param method
 * @param mode
 * @returns {Promise<Response>}
 * @constructor
 */
export function Fetch(url, method = "GET", mode = "cors") {
	return fetch(url, {method, mode})
		.then(res => {
			if (res.ok) return res.json();
			console.error("error", res);
			return false;
		})
		.catch((error) => {
			console.error("Request failure: ", error);
		});
}

export const getDeviceType = () => {
	const bodyWidth = document.body.clientWidth;
	let type;
	if (bodyWidth > 1024) {
		type = "desktop";
	}
	if (bodyWidth <= 1024 && !bodyWidth < 680) {
		type = "tablet";
	}
	if (bodyWidth <= 680) {
		type = "mobile";
	}
	return type;
};

export class onResize {
	constructor(dispatch) {
		window.addEventListener("resize", this.onResize, false);
		dispatch({
			type : "CHANGE_DEVICE_TYPE",
			payload : getDeviceType(),
		});
		this._dispatch = dispatch;
	}

	_interval = null;

	onResize = () => {
		if (this._interval) {
			clearTimeout(this._interval);
		}
		this._interval = setTimeout(() => {
			this._dispatch({
				type : "CHANGE_DEVICE_TYPE",
				payload : getDeviceType(),
			});
		}, 300);
	};
}

export const deviceType = {
	desktop : "desktop",
	tablet : "tablet",
	mobile : "mobile",
};
