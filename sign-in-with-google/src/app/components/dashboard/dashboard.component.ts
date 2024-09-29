import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCardComponent } from '../user-card/user-card.component';
import { CommonModule } from '@angular/common';
declare var handleSignout: any; // Declare the global function to avoid TypeScript errors

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UserCardComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}
  userProfile: any;
  ngOnInit() {
    this.userProfile = JSON.parse(sessionStorage.getItem('loggedInUser') || '');
  }
  handleSignOut() {
    handleSignout();
    sessionStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
