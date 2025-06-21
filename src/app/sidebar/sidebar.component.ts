import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(
    private homepage: Router,
    private explorepage: Router,
    private notificationpage: Router,
    private messagepage: Router,
    private bookmarkpage: Router,
    private jobpage: Router,
    private premiumpage: Router,
    private verifiedorgspage: Router,
    private profilepage: Router,
    private morepage: Router,
    private listpage: Router,
    private grokpage: Router,
    private communitiespage: Router,
    private router: Router
  ) {}
  private auth: Auth = inject(Auth);
  goToHome() {
    this.homepage.navigate(['x-layout']);
  }

  goToExplore() {
    this.explorepage.navigate(['explore']);
  }

  goToNotification() {
    this.notificationpage.navigate(['notifications']);
  }

  goToMessage() {
    this.messagepage.navigate(['messages']);
  }
  //private grokpage : Router
  goToGrok() {
    this.grokpage.navigate(['grok']);
  }

  goToBookmarks() {
    this.bookmarkpage.navigate(['bookmarks']);
  }

  goToJobs() {
    this.jobpage.navigate(['jobs']);
  }

  goToPremium() {
    this.premiumpage.navigate(['premium']);
  }

  goToVerifiedOrgs() {
    this.verifiedorgspage.navigate(['verifiedorgs']);
  }

  goToProfile() {
    this.profilepage.navigate(['profile']);
  }

  goToCommunities() {
    this.communitiespage.navigate(['communities']);
  }
  goToMore() {
    this.morepage.navigate(['more']);
  }

  goToList() {
    this.listpage.navigate(['list']);
  }
  dropdownVisible = false;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  logout() {
    const confirmLogout = confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      signOut(this.auth)
        .then(() => {
          localStorage.removeItem('verified'); // ❗Optional: Clear verification flag
          this.router.navigate(['']);
        })
        .catch((error) => {
          alert('Error during logout: ' + error.message);
        });
    }
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}
