//
//  ViewController.swift
//  EatMe
//
//  Created by 石川伶 on 2015/07/02.
//  Copyright (c) 2015年 石川伶. All rights reserved.
//

import UIKit
import SwiftyJSON

class ViewController: UIViewController {
    private var myScrollView: UIScrollView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        myScrollView = UIScrollView()
        myScrollView.frame = CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height)
        
        let myAppFrameSize: CGSize = UIScreen.mainScreen().applicationFrame.size
        let mylabel: UILabel = UILabel(frame: CGRectMake(10,40,myAppFrameSize.width,myAppFrameSize.height*2))
        
        //NSTimer.scheduledTimerWithTimeInterval(5, target: self, selector: "update", userInfo: nil, repeats: true)
        
        var url = NSURL(string: "http://life-cloud.ht.sfc.keio.ac.jp/~mario/find.php")
        let config = NSURLSessionConfiguration.defaultSessionConfiguration()
        let session = NSURLSession(configuration: config)
        var req = NSURLRequest(URL: url!)
        
        //NSURLSessionDownloadTask is retured from session.dataTaskWithRequest
        var task = session.dataTaskWithRequest(req, completionHandler: {
            (data, resp, err) in
            var value: String = NSString(data:data, encoding:NSUTF8StringEncoding)! as String
            println(value)
//            mylabel.text = value
//            mylabel.numberOfLines = 0
//            mylabel.sizeToFit();
        })
        task.resume()

//        func update(){
//            get.resume()
//        }
        
        myScrollView.addSubview(mylabel)
        myScrollView.contentSize = CGSizeMake(mylabel.frame.size.width, mylabel.frame.size.height)
        self.view.addSubview(myScrollView)
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}


