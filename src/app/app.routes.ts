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
import { SigninPasswordComponent } from './signin-password/signin-password.component';
import { ProfilePictureSetupComponent } from './profile-picture-setup/profile-picture-setup.component';
import { UsernameSetupComponent } from './username-setup/username-setup.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { SelectInterestComponent } from './select-interest/select-interest.component';





export const routes: Routes = [
  { path: '', component: XAuthComponent},
  // { path: '**', redirectTo: '' },
  { path: 'sign-up', component: SignUpComponent},

  { path: 'sign-in', component: SignInComponent},

  { path: 'inside-sign-up', component: InsideSignUpComponent},

  { path: 'verification-code', component: VerificationCodeComponent},

  { path: 'password-setup', component: PasswordSetupComponent},

  { path: 'x-layout', component: XLayoutComponent},

  { path: 'explore', component: ExploreXLayoutComponent},

  { path: 'notifications', component: NotificationsXLayoutComponent},

  { path: 'messages', component: MessagesXLayoutComponent},

  { path: 'grok', component: GrokXLayoutComponent},

  { path: 'bookmarks', component: BookmarksXLayoutComponent},

  { path: 'jobs', component: JobsXLayoutComponent},

  { path: 'premium', component: PremiumXLayoutComponent},

  { path: 'verifiedorgs', component: VerifiedorgsXLayoutComponent},

  { path: 'profile', component: ProfileXLayoutComponent},

  { path: 'more', component: MoreXLayoutComponent},

  { path: 'list', component: ListsXLayoutComponent},

  { path: 'communities', component: CommunitiesXLayoutComponent},

  { path: 'signin-password', component:SigninPasswordComponent},

  { path: 'profile-picture-setup', component:ProfilePictureSetupComponent},

  { path: 'username-setup' , component: UsernameSetupComponent},

  { path : 'language-selector' , component :LanguageSelectorComponent},

  { path : 'select-interest' , component : SelectInterestComponent}
];
