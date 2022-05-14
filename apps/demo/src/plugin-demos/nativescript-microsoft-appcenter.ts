import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptMicrosoftAppcenter } from '@demo/shared';
import { } from '@sfamc/nativescript-microsoft-appcenter';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptMicrosoftAppcenter {

}
