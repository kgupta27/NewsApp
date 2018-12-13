import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-news-sources',
  templateUrl: 'news-sources.html',
})
export class NewsSourcesPage {

  // Array of item to hold the data of news Sources
  newsSource:any= [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
     public http: Http,
     public inAppBrowser: InAppBrowser,
 ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsSourcesPage');
  }


  ionViewWillEnter(){
    // Each time the updated API results will be loaded
    this.getNewsSources().then(data => {

      console.log('Data: ', data)
      this.newsSource = data;
      }, error => {
      console.log(error);
    })
  }

// function to get the list of news sources
  getNewsSources() {

    let api = 'https://newsapi.org/v2/everything?q=bitcoin&from=2018-12-09&sortBy=publishedAt&apiKey=201c45b7b05049029bec86a383179a5a';

        return new Promise(resolve => {
          this.http.get(api)
            .map(res => res.json())
            .subscribe(data => {
              var d = data;
              resolve(d);
            });
        });

  }

  // function which is invoked to call inAppBrowser to load the url of selected news
  newsItemSelected(newsLink){
    console.log("Clicked",newsLink); 
    try {
      const browser = this.inAppBrowser.create(newsLink, '_blank', 'location=yes');
    }
    catch (e) {
      console.log("Invalid Url");
    }

  }
}
