import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptMicrosoftAppcenter } from '@demo/shared';
import { } from '@sfamc/nativescript-microsoft-appcenter';

@Component({
	selector: 'demo-nativescript-microsoft-appcenter',
	templateUrl: 'nativescript-microsoft-appcenter.component.html',
})
export class NativescriptMicrosoftAppcenterComponent {

  demoShared: DemoSharedNativescriptMicrosoftAppcenter;

	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptMicrosoftAppcenter();
  }

}
