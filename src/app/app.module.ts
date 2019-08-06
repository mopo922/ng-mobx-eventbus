import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MobxAngularModule } from 'mobx-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { ApiService } from '../providers/api/api.service';
import { EventBusService } from '../providers/event-bus/event-bus.service';
import { PatentStore } from '../stores/patent.store';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NotificationComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		MobxAngularModule,
	],
	providers: [
		ApiService,
		EventBusService,
		PatentStore,
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
