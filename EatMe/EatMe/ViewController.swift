//
//  ViewController.swift
//  EatMe
//
//  Created by 石川伶 on 2015/06/26.
//  Copyright (c) 2015年 石川伶. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        //Construct url object via string
        var url = NSURL(string: "http://life-cloud.ht.sfc.keio.ac.jp/~mario/find.php")
        let config = NSURLSessionConfiguration.defaultSessionConfiguration()
        let session = NSURLSession(configuration: config)
        var req = NSURLRequest(URL: url!)
        
        //NSURLSessionDownloadTask is retured from session.dataTaskWithRequest
        var task = session.dataTaskWithRequest(req, completionHandler: {
            (data, resp, err) in
            println(resp.URL!)
            println(NSString(data: data, encoding: NSUTF8StringEncoding))
        })
        task.resume()

            }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
        
    }
}

