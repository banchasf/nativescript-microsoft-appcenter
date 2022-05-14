import { Application } from '@nativescript/core';
import {AppCenter, AppCenterSettings} from "@bancha/nativescript-microsoft-appcenter";
if (Application.ios) {
  let appCenterSettings: AppCenterSettings = {
    appSecret: '999e92d4-0884-4e7d-b966-2aeb0fb13f51',
    analytics: true,
    crashes: true,
    distribute: true,
  }

  let appCenter = new AppCenter();
  appCenter.startWithAppDelegate(appCenterSettings);
} else {
  let appCenterSettings: AppCenterSettings = {
    appSecret: '999a6129-2487-4961-a1d6-076465b76bab',
    analytics: true,
    crashes: true,
    distribute: true,
  }

  let appCenter = new AppCenter();
  appCenter.start(appCenterSettings);
}
Application.run({moduleName: 'app-root'});
