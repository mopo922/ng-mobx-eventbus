import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { autorun, IReactionDisposer } from 'mobx';
import { Patent } from '../../interfaces/patent.interface';
import { EventBusService } from '../../providers/event-bus/event-bus.service';
import { PatentStore } from '../../stores/patent.store';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
	public live = true;
	public workingPatent: Partial<Patent> = {};
	private mobxDisposer: IReactionDisposer;

	constructor(
		public events: EventBusService,
		public store: PatentStore
	) {
		this.mobxDisposer = autorun(() => {
			console.log('DEMO: Autorun', this.store.patent);
		});

		store.loadPatent().subscribe((patent) => {
			this.workingPatent = {...patent};
		});
	}

	public ngOnDestroy() {
		this.mobxDisposer();
	}
}
