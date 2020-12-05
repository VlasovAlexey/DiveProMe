//
//  ViewController.swift
//  DiveProMe
//
//  Created by Admin on 01.09.2020.
//  Copyright © 2020 AlexeyVlasov. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController {

    @IBOutlet weak var htmlload: WKWebView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        let htmlpath = Bundle.main.path(forResource: "index", ofType: "html")
        let url = URL(fileURLWithPath: htmlpath!)
        let request = URLRequest(url:url)
        htmlload.load(request)
    }


}

