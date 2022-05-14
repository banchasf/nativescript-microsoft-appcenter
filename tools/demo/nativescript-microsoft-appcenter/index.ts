import { DemoSharedBase } from '../utils';
import {
  AppCenter,
  AppCenterAnalytics,
  AppCenterCrashes, AppCenterDistribute,
  AppCenterSettings
} from '../../../packages/nativescript-microsoft-appcenter';
import { Application } from '@nativescript/core';
export class DemoSharedNativescriptMicrosoftAppcenter extends DemoSharedBase {

  testIt() {
    let analytics = new AppCenterAnalytics();
    let device = 'Android';
    if (Application.ios) {
      device = 'iOS';
    }
    const appCenter = new AppCenter();
    const crashes = new AppCenterCrashes();
    const distribute = new AppCenterDistribute();

    console.log("==========================");
    console.log("= App Center Config:");
    console.log(`= Install Id = ${appCenter.getInstallId()}`);
    console.log(`= Enabled = ${appCenter.isEnabled()}`);
    console.log("==========================");
    analytics.trackEvent(`[LOGIN] User='THEUSER', Device= '${device}' , Install Id='${appCenter.getInstallId()}'`);
    console.log("Invoke trackEvent");
  }
}
