import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string = '';
  defaultIcon: string = "moon-outline"



  constructor(private navCtrl: NavController, private render: Renderer2) { }

  ngOnInit() { }

  navigateToPage() {
    this.navCtrl.navigateForward('/login');
  }

  changeMode() {
  
    this.defaultIcon = (this.defaultIcon === 'moon-outline') ? 'sunny-outline' : 'moon-outline';
  }
}
