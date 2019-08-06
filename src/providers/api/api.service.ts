import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Patent } from 'src/interfaces/patent.interface';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	public getPatent(): Observable<Patent> {
		return this.request().pipe(
			map(() => ({
				name: 'My Patent',
				description: 'Lorem ipsum...',
			}))
		);
	}

	public postPatent(): Observable<Patent> {
		return this.request();
	}

	private request(): Observable<any> {
		console.log('DEMO: Calling API...');

		return timer(2000);
	}
}
