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
    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {

    if let url = navigationAction.request.url {
        if (url.scheme == "mailto") {
            // mailto: link is clicked
            UIApplication.shared.open(url)
            decisionHandler(.cancel)
            return
        }
        if (url.scheme == "tel") {
            // mailto: link is clicked
            UIApplication.shared.open(url)
            decisionHandler(.cancel)
            return
        }
        if (url.absoluteString.contains("www.divepro.me")) {
            // Load this stuff in WebView
            decisionHandler(.allow)
            return
        } else {
            // open any other URL in mobile Safari
            UIApplication.shared.open(url)
            decisionHandler(.cancel)
            return
        }
    }

    decisionHandler(.cancel)
    return
    }

}

