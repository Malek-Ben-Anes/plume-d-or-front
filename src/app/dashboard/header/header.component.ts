import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignOut() {
    console.log("sign out");
    this.authService.signOutUser()
                    .then( () => this.router.navigate(['/auth']))    
                    .catch( () => console.log("can't sign out") );
  }
}
