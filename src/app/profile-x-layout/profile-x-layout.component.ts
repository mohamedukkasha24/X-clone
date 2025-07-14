import { CommonModule } from '@angular/common';
import { Auth } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-profile-x-layout',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './profile-x-layout.component.html',
  styleUrl: './profile-x-layout.component.css',
})
export class ProfileXLayoutComponent implements OnInit{
  constructor(private auth: Auth, private firestore: Firestore) {}
  name: string = '';
  username: string = '';
  joinedDate: string = '';
  async ngOnInit() {
    const currentUser = this.auth.currentUser;
    if (currentUser) {
      const uid = currentUser.uid;
      const userDocRef = doc(this.firestore, `joinees details/${uid}`);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists()) {
        const userData: any = userSnap.data();
        this.name = userData.name;
        this.username = userData.username;

        const createdAt = userData.createdAt?.toDate?.();
        if (createdAt) {
          const options = { year: 'numeric', month: 'long' } as const;
          this.joinedDate = createdAt.toLocaleDateString('en-US', options);
        }
      }
    }
  }
}
