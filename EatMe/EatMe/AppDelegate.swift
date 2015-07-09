//
//  AppDelegate.swift
//  EatMe
//
//  Created by 石川伶 on 2015/07/02.
//  Copyright (c) 2015年 石川伶. All rights reserved.
//

import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

//    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
//        
//    let settings = UIUserNotificationSettings(forTypes: UIUserNotificationType.Alert, categories: nil)
//    UIApplication.sharedApplication().registerUserNotificationSettings(settings)
//    UIApplication.sharedApplication().setMinimumBackgroundFetchInterval(UIApplicationBackgroundFetchIntervalMinimum)
//        application.registerUserNotificationSettings(UIUserNotificationSettings(forTypes: UIUserNotificationType.Sound | UIUserNotificationType.Alert | UIUserNotificationType.Badge, categories: nil))
//
//    return true;
//    }
//    
//    func application(application: UIApplication, performFetchWithCompletionHandler completionHandler: (UIBackgroundFetchResult) -> Void) {
//        println("Complete");
//        completionHandler(UIBackgroundFetchResult.NewData)
//        
//        getData();
//    }
//    
//    func getData() -> Void{
//        /// 通信先のURLを生成.
//        let myUrl:NSURL = NSURL(string: "http://life-cloud.ht.sfc.keio.ac.jp/~mario/find.php")!
//        // セッションの生成.
//        let mySession = NSURLSession(configuration: NSURLSessionConfiguration.defaultSessionConfiguration())
//        // 通信のタスクを生成.
//        let myTask = mySession.dataTaskWithURL(myUrl, completionHandler: {
//            (data, response, err) in
//            var localNotification:UILocalNotification = UILocalNotification()
//            localNotification.alertAction = "OK"
//            localNotification.alertBody = "動いてないよー"
//            localNotification.fireDate = NSDate(timeIntervalSinceNow: 1)
//            UIApplication.sharedApplication().scheduleLocalNotification(localNotification)
//            var eatme = NSJSONSerialization.JSONObjectWithData(data, options: nil, error: nil) as! NSDictionary;
//            var eatme_name: [NSDictionary]=[];
//            eatme_name = eatme["name"] as! [NSDictionary];
//
//            
//            // 帰ってきたデータを文字列に変換.
//            var myData:NSString = NSString(data: data, encoding: NSUTF8StringEncoding)!
//            
//            var localNotification:UILocalNotification = UILocalNotification()
//            localNotification.timeZone = NSTimeZone.defaultTimeZone()
//            localNotification.alertAction = "OK"
//            localNotification.alertBody = "動いてないよー"
//            UIApplication.sharedApplication().scheduleLocalNotification(localNotification)
//            
//            var alert = UIAlertView();
//            alert.title = "受け取りました";
//            alert.message = localNotification.alertBody;
//            alert.addButtonWithTitle(localNotification.alertAction!);
//            alert.show();

//        })
////         タスクの実行
//        myTask.resume()
//      
//    }
    
    func applicationWillResignActive(application: UIApplication) {
        // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
        // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
    }
    func applicationDidBecomeActive(application: UIApplication) {
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    }
    
    func applicationWillTerminate(application: UIApplication) {
        // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    }
}

