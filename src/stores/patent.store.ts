import { Injectable } from '@angular/core';
import { action, computed, observable } from 'mobx-angular';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patent } from '../interfaces/patent.interface';
import { ApiService } from '../providers/api/api.service';

@Injectable({
	providedIn: 'root'
})
export class PatentStore {
	constructor(private api: ApiService) {}

	@observable patent: Patent = {};

	@computed get patentAbbreviation() {
		if (this.patent.name) {
			return this.patent.name.split(' ').reduce(
				(abbr, word) => abbr + word[0].toUpperCase() + '.',
				''
				);
		}
	}

	@action loadPatent(): Observable<Patent> {
		if (this.patent.name) {
			return of(this.patent);
		}

		return this.api.getPatent().pipe(
			map((patent) => {
				console.log('DEMO: Patent loaded', patent);

				return this.patent = patent;
			})
		);
	}

	@action savePatent(patent: Patent): Subscription {
		return this.api.postPatent().subscribe(() => {
			console.log('DEMO: Patent saved', patent);

			return this.patent = patent;
		});
	}
}
