
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onClick(){
    this.auth.onLogOut()
    this.router.navigate(['/login'], {replaceUrl:true});
  }
}
