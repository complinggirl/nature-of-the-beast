import BaseUtility, { RunParams } from './BaseUtility';
import store, { ActionTypes } from '../store';
import Location from '../locations/Location';

export default class Cd extends BaseUtility {
	private goToPreviousLocation() {
		const newLocation = store.getState().previousLocationStack[0];

		store.dispatch({
			type: ActionTypes.POP_LOCATION_STACK
		});

		if (newLocation) {
			store.dispatch({
				type: ActionTypes.SET_LOCATION,
				value: newLocation
			});
		}
	}

	run({ args, writeToConsole }: RunParams): void {
		if (args[0] == '..') {
			this.goToPreviousLocation();
			return;
		}

		const newLocation = store
			.getState()
			.location.neighbors.find((location: Location) => {
				return location.slug === args[0];
			});

		if (newLocation) {
			store.dispatch({
				type: ActionTypes.PUSH_LOCATION_STACK,
				value: store.getState().location
			});

			store.dispatch({
				type: ActionTypes.SET_LOCATION,
				value: newLocation
			});
			return;
		}

		writeToConsole(`invalid location ${args[0]}`);
	}

	command = 'cd';
}
