import { DemoSharedBase } from '../utils';
import { AppCenterAnalytics, AppCenterSettings} from '../../../packages/nativescript-microsoft-appcenter';
import { Application } from '@nativescript/core';
export class DemoSharedNativescriptMicrosoftAppcenter extends DemoSharedBase {

  testIt() {
    let analytics = new AppCenterAnalytics();
    let device = 'Android';
    if (Application.ios) {
      device = 'iOS';
    }
    analytics.trackEvent(`[LOGIN] User='THEUSER', Device= '${device}' , Install Id='1234'`);
  }
}
