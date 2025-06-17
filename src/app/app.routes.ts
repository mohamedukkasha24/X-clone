import { Routes } from '@angular/router';
import { XAuthComponent } from './x-auth/x-auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { InsideSignUpComponent } from './inside-sign-up/inside-sign-up.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { PasswordSetupComponent } from './password-setup/password-setup.component';
import { XLayoutComponent } from './x-layout/x-layout.component';
import { ExploreXLayoutComponent } from './explore-x-layout/explore-x-layout.component';
import { NotificationsXLayoutComponent } from './notifications-x-layout/notifications-x-layout.component';
import { MessagesXLayoutComponent } from './messages-x-layout/messages-x-layout.component';
import { GrokXLayoutComponent } from './grok-x-layout/grok-x-layout.component';
import { BookmarksXLayoutComponent } from './bookmarks-x-layout/bookmarks-x-layout.component';
import { JobsXLayoutComponent } from './jobs-x-layout/jobs-x-layout.component';
import { PremiumXLayoutComponent } from './premium-x-layout/premium-x-layout.component';
import { VerifiedorgsXLayoutComponent } from './verifiedorgs-x-layout/verifiedorgs-x-layout.component';
import { ProfileXLayoutComponent } from './profile-x-layout/profile-x-layout.component';
import { MoreXLayoutComponent } from './more-x-layout/more-x-layout.component';
import { ListsXLayoutComponent } from './lists-x-layout/lists-x-layout.component';
import { CommunitiesXLayoutComponent } from './communities-x-layout/communities-x-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';




export const routes: Routes = [
  { path: '', component: XAuthComponent,canActivate: [NoAuthGuard]},
  // { path: '**', redirectTo: '' },
  { path: 'sign-up', component: SignUpComponent , canActivate: [NoAuthGuard]},

  { path: 'sign-in', component: SignInComponent , canActivate: [NoAuthGuard]},

  { path: 'inside-sign-up', component: InsideSignUpComponent ,canActivate: [NoAuthGuard]},

  { path: 'verification-code', component: VerificationCodeComponent , canActivate: [NoAuthGuard]},

  { path: 'password-setup', component: PasswordSetupComponent,canActivate: [NoAuthGuard]},

  { path: 'x-layout', component: XLayoutComponent,canActivate : [AuthGuard]},

  { path: 'explore', component: ExploreXLayoutComponent ,canActivate : [AuthGuard]},

  { path: 'notifications', component: NotificationsXLayoutComponent , canActivate : [AuthGuard]},

  { path: 'messages', component: MessagesXLayoutComponent , canActivate : [AuthGuard]},

  { path: 'grok', component: GrokXLayoutComponent , canActivate : [AuthGuard]},

  { path: 'bookmarks', component: BookmarksXLayoutComponent ,canActivate : [AuthGuard]},

  { path: 'jobs', component: JobsXLayoutComponent ,canActivate : [AuthGuard]},

  { path: 'premium', component: PremiumXLayoutComponent,canActivate : [AuthGuard] },

  { path: 'verifiedorgs', component: VerifiedorgsXLayoutComponent , canActivate : [AuthGuard]},

  { path: 'profile', component: ProfileXLayoutComponent , canActivate : [AuthGuard] },

  { path: 'more', component: MoreXLayoutComponent , canActivate : [AuthGuard]},

  { path: 'list', component: ListsXLayoutComponent , canActivate : [AuthGuard]},

  { path: 'communities', component: CommunitiesXLayoutComponent ,canActivate : [AuthGuard]},
];
