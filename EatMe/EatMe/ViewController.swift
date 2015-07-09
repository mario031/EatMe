//
//  ViewController.swift
//  EatMe
//
//  Created by 石川伶 on 2015/07/02.
//  Copyright (c) 2015年 石川伶. All rights reserved.
//

import UIKit
import SwiftyJSON

class ViewController: UIViewController,NSURLSessionDelegate,NSURLSessionDataDelegate{
    private var myTextView: UITextView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        myTextView = UITextView(frame:CGRectMake(10, 50, self.view.frame.size.width, self.view.frame.size.height))
        
        myTextView.font = UIFont.systemFontOfSize(CGFloat(20))
        myTextView.textColor = UIColor.blackColor()
        myTextView.textAlignment = NSTextAlignment.Left
        self.view.addSubview(myTextView)
        
        NSTimer.scheduledTimerWithTimeInterval(10, target: self, selector:Selector("update"), userInfo: nil, repeats: false)
        
        // 通信用のConfigを生成.
        let myConfig:NSURLSessionConfiguration = NSURLSessionConfiguration.backgroundSessionConfigurationWithIdentifier("backgroundTask")
        // Sessionを生成.
        var mySession:NSURLSession = NSURLSession(configuration: myConfig, delegate: self, delegateQueue: nil)
        // 通信先のURLを生成.
        let myUrl:NSURL = NSURL(string: "http://life-cloud.ht.sfc.keio.ac.jp/~mario/find.php")!
        // タスクの生成.
        let myTask:NSURLSessionDataTask = mySession.dataTaskWithURL(myUrl)
        // タスクの実行.
        myTask.resume()
    }
        /*
        通信が終了したときに呼び出されるデリゲート.
        */
        func URLSession(session: NSURLSession, dataTask: NSURLSessionDataTask, didReceiveData data: NSData) {
            println("NSURLSessionDataTask")
            
            // 帰ってきたデータを文字列に変換.
            var myData:NSString = NSString(data: data, encoding: NSUTF8StringEncoding)!
            
            // バックグラウンドだとUIの処理が出来ないので、メインスレッドでUIの処理を行わせる.
            dispatch_async(dispatch_get_main_queue(), {
                self.myTextView.text = myData as String
            })
        }
        /*
        バックグラウンドからフォアグラウンドの復帰時に呼び出されるデリゲート.
        */
        func URLSessionDidFinishEventsForBackgroundURLSession(session: NSURLSession) {
            println("URLSessionDidFinishEventsForBackgroundURLSession")
        }
    
    //一定時間毎に更新
    func update(){
        viewDidLoad()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}


