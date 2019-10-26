import {Package} from "./package.model";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable()
export class PackageService {
	get(id: number): Observable<Package> {
		switch (id) {
			case 1:
				return of({
					id: 1,
					code: "basic",
					name: "Register",
					description: "This is the basic package",
					price: 25,
				} as Package);
			case 2:
				return of({
					id: 2,
					code: "recommend",
					name: "Silver",
					description: "This is the recommended package",
					price: 99,
				} as Package);
			case 3:
				return of({
					id: 1,
					code: "premium",
					name: "Gold",
					description: "This is the premium package",
					price: 499,
				} as Package);
			default:
				return of(null);
		}
	}
}
