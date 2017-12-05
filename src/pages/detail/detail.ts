import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    ngOnInit(){
        if(this.navCtrl.getViews().length == 1){
            this.navCtrl.insert(0, 'HomePage', null,{ animate:false }).then(
                ()=>this.navCtrl.push('DetailPage',null, { animate:false }).then(
                    ()=>{
                        this.navCtrl.remove(1)
                    }
                )
            );
        }
    }
}
