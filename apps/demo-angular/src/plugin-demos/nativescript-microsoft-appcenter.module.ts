import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptMicrosoftAppcenterComponent } from './nativescript-microsoft-appcenter.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptMicrosoftAppcenterComponent }])],
  declarations: [NativescriptMicrosoftAppcenterComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptMicrosoftAppcenterModule {}
