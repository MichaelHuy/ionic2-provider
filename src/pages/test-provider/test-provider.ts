import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the TestProvider page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-test-provider',
  templateUrl: 'test-provider.html'
})
export class TestProvider {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TestProvider Page');
  }

}
