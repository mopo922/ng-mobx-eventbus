import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class EventBusService {
	private events: Record<string, Subject<any>> = {};

	public publish(eventName: string, payload?: any) {
		this.getEvent(eventName).next(payload);
	}

	public subscribe(eventName: string, callback: (payload) => any): Subscription {
		return this.getEvent(eventName).subscribe(callback);
	}

	private getEvent(eventName: string): Subject<any> {
		if (!this.events[eventName]) {
			this.events[eventName] = new Subject();
		}

		return this.events[eventName];
	}
}
