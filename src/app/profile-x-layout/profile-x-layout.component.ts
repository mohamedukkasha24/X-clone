import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-profile-x-layout',
  imports: [CommonModule],
  templateUrl: './profile-x-layout.component.html',
  styleUrl: './profile-x-layout.component.css'
})
export class ProfileXLayoutComponent {
  constructor ( private homepage:Router ,private explorepage : Router , private notificationpage : Router , private messagepage :Router , private bookmarkpage : Router, private jobpage :Router,private premiumpage:Router,
    private verifiedorgspage : Router , private listpage : Router , private grokpage : Router
  ){}



  goToHome(){
      this.homepage.navigate(['x-layout']);
  }

  goToExplore(){
        this.explorepage.navigate(["explore"]);
  }

  goToNotification(){
       this.notificationpage.navigate(["notifications"])
  }

  goToMessage(){
    this.messagepage.navigate(["messages"])
}

 //private grokpage : Router
 goToGrok(){
  this.grokpage.navigate(["grok"])
 }

goToBookmarks(){
  this.bookmarkpage.navigate(["bookmarks"])
}

goToJobs(){
  this.jobpage.navigate(["jobs"])
}

goToPremium(){
  this.premiumpage.navigate(["premium"]);
}

goToVerifiedOrgs(){
  this.verifiedorgspage.navigate(["verifiedorgs"])
}

goToList(){
  this.listpage.navigate(['list'])
 }


 showMoreMenu = false;

 toggleMoreMenu() {
   this.showMoreMenu = !this.showMoreMenu;
 }

 dropdownVisible = false;

toggleDropdown() {
  this.dropdownVisible = !this.dropdownVisible;
}

}
