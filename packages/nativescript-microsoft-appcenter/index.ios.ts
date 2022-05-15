import { AppCenterSettings, TrackProperties } from './common';
import { Application as application} from "@nativescript/core";

declare const MSACAppCenter: any;
declare const MSACAnalytics: any;
declare const MSACCrashes: any;
declare const MSACDistribute: any;

export class AppCenter {
  public start(settings: AppCenterSettings): void {
    const services = NSMutableArray.alloc().init();

    if (settings.analytics) {
      services.addObject(MSACAnalytics);
    }

    if (settings.crashes) {
      services.addObject(MSACCrashes);
    }

    if (settings.distribute) {
      services.addObject(MSACDistribute);
    }

    MSACAppCenter.startWithServices(settings.appSecret, services);
  }

  public startWithAppDelegate(settings: AppCenterSettings): void {
    AppCenterDelegate.setup(settings);
    application.ios.delegate = AppCenterDelegate;
  }

  public getInstallId(): string {
    return MSACAppCenter.installId;
  }

  public isEnabled(): boolean {
    return MSACAppCenter.enabled;
  }

  public disable(): void {
    MSACAppCenter.enabled = false;
  }
}

export class AppCenterAnalytics {
  public disable(): void {
    MSACAnalytics.enabled = false;
  }

  public isEnabled(): boolean {
    return MSACAnalytics.isEnabled();
  }

  public trackEvent(eventName: string, properties?: TrackProperties[]): void {
    if (properties && properties.length > 0) {
      let hashMap = NSMutableDictionary.alloc().init();

      properties.forEach(property => {
        hashMap.setValueForKey(property.value, property.key);
      });

      MSACAnalytics.trackEventWithProperties(eventName, hashMap);
    } else {
      MSACAnalytics.trackEvent(eventName);
    }
  }
}

export class AppCenterCrashes {

  public disable(): void {
    MSACCrashes.enabled = false;
  }

  public enable(): void {
    MSACCrashes.enabled = true;
  }

  public isEnabled(): boolean {
    return MSACCrashes.enabled;
  }

  public hasCrashedInLastSession(): boolean {
    return MSACCrashes.hasCrashedInLastSession();
  }

  public generateTestCrash(): void {
    MSACCrashes.generateTestCrash();
  }
}

export class AppCenterDistribute {

  public disable(): void {
    MSACDistribute.enabled = false;
  }

  public enable(): void {
    MSACDistribute.enabled = true;
  }

  public isEnabled(): boolean {
    return MSACDistribute.enabled;
  }
}

@NativeClass()
export class AppCenterDelegate extends UIResponder implements UIApplicationDelegate {
  private static settings: AppCenterSettings;
  public static ObjCProtocols = [UIApplicationDelegate];

  public static setup(settings: AppCenterSettings): void {
    this.settings = settings;
  }

  applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
    const services = NSMutableArray.alloc().init();

    if (AppCenterDelegate.settings.analytics) {
      services.addObject(MSACAnalytics);
    }

    if (AppCenterDelegate.settings.crashes) {
      services.addObject(MSACCrashes);
    }

    if (AppCenterDelegate.settings.distribute) {
      services.addObject(MSACDistribute);
    }

    MSACAppCenter.startWithServices(AppCenterDelegate.settings.appSecret, services);
    return true;
  }
}
