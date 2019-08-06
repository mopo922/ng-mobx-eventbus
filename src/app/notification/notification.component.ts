import { Component, OnDestroy } from '@angular/core';
import { EventBusService } from 'src/providers/event-bus/event-bus.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnDestroy {
	public collapsed = true;
	private subscription: Subscription;

	constructor(private events: EventBusService) {
		this.events.subscribe('toggle-notification', () => {
			this.collapsed = !this.collapsed;
		});
	}

	public ngOnDestroy() {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}
}
