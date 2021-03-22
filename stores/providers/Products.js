import { computed, observable } from "mobx";
import { ObservablePromise } from "mobx-observable-promise";
import { connect } from "../Api";
import Store from "../Store";
export default class Products extends Store {
	/*==========================================================================
	  OBSERVABLES
	==========================================================================*/

	@computed get products() {
		return this.getProductsCall.getResultOrDefault((x) => x.products, []);
	}

	/*==========================================================================
	  REQUESTS
	==========================================================================*/
	@observable getProductsCall = new ObservablePromise((body) => {
		return connect(body);
	});
}
