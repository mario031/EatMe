//
//  ViewController.swift
//  EatMe
//
//  Created by 石川伶 on 2015/07/02.
//  Copyright (c) 2015年 石川伶. All rights reserved.
//

import UIKit
import Alamofire
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
        
        Alamofire.request(.GET, "http://life-cloud.ht.sfc.keio.ac.jp/~mario/find.php")
            .responseString {(request, response, data, error) in
                if (response?.statusCode == 200) {
                    println("success")
                    let json = JSON(data!)
                    println(json)
                    mylabel.text = "うごいたよ"
                }
        }
        
        myScrollView.addSubview(mylabel)
        myScrollView.contentSize = CGSizeMake(mylabel.frame.size.width, mylabel.frame.size.height)
        self.view.addSubview(myScrollView)
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

