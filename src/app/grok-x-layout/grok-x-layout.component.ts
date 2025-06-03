import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-grok-x-layout',
  imports: [],
  templateUrl: './grok-x-layout.component.html',
  styleUrl: './grok-x-layout.component.css'
})
export class GrokXLayoutComponent {
  constructor ( private homepage:Router ,private explorepage : Router , private notificationpage : Router , private messagepage : Router, private bookmarkpage : Router,private jobpage : Router, private premiumpage :Router,
    private verifiedorgspage : Router,private profilepage:Router, private listpage : Router , private grokpage : Router
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

goToProfile(){
  this.profilepage.navigate(['profile'])
}
goToList(){
  this.listpage.navigate(['list'])
 }
}
