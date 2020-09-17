import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NewstabsComponent } from './newstabs/newstabs.component';
import { HomerightComponent } from './homeright/homeright.component';
import { RecommendFriendsComponent } from './recommend-friends/recommend-friends.component';
import { FriendsComponent } from './friends/friends.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SchoolhomeComponent } from './school/schoolhome/schoolhome.component';
import { UserComponent } from './user/user.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { HomechatComponent } from './homechat/homechat.component';
import { TestsComponent } from './tests/tests.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { CoachroomComponent } from './coachroom/coachroom.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { FundtalentComponent } from './fundtalent/fundtalent.component';
import { HrconnectComponent } from './hrconnect/hrconnect.component';
import { InvestorComponent } from './investor/investor.component';
import { BidComponent } from './bid/bid.component';
import { BookcommerceComponent } from './bookcommerce/bookcommerce.component';
import { BackupprojectsComponent } from './backupprojects/backupprojects.component';
import { RemainderComponent } from './remainder/remainder.component';
import { BusinessshareComponent } from './businessshare/businessshare.component';
import { RebinideasComponent } from './rebinideas/rebinideas.component';
import { BookfilterComponent } from './bookfilter/bookfilter.component';
import { BfavComponent } from './bfav/bfav.component';
import { BpublishComponent } from './bpublish/bpublish.component';
import { BdepartmentComponent } from './bdepartment/bdepartment.component';
import { HrdepartmentsComponent } from './hrdepartments/hrdepartments.component';
import { HrempComponent } from './hremp/hremp.component';
import { HrmeetComponent } from './hrmeet/hrmeet.component';
import { HrreqComponent } from './hrreq/hrreq.component';
import { InstsubComponent } from './instsub/instsub.component';


const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch:'full' },
{ path: 'instsub', component: InstsubComponent },
{ path: 'hrdepartments', component: HrdepartmentsComponent },
{ path: 'hremp', component: HrempComponent },
{ path: 'hrmeet', component: HrmeetComponent },
{ path: 'hrreq', component: HrreqComponent },
{ path: 'bdepartment', component: BdepartmentComponent },
{ path: 'bpublish', component: BpublishComponent },
{ path: 'bfav', component: BfavComponent },
{ path: 'bookfilter', component: BookfilterComponent },
{ path: 'backupprojects', component: BackupprojectsComponent },
{ path: 'remainder', component: RemainderComponent },
{ path: 'businessshare', component: BusinessshareComponent },
{ path: 'rebinideas', component: RebinideasComponent },
{ path: 'classroom', component: ClassroomComponent },
{ path: 'fundtalent', component: FundtalentComponent },
{ path: 'hrconnect', component: HrconnectComponent },
{ path: 'investor', component: InvestorComponent },
{ path: 'bid', component: BidComponent },
{ path: 'bookcommerce', component: BookcommerceComponent },
{ path: 'subscriptions', component: FundtalentComponent },
{ path: 'subjects', component: SubjectsComponent },
{ path: 'coachroom', component: CoachroomComponent },
{ path: 'tests', component: TestsComponent },
{ path: 'homechat', component: HomechatComponent },
{ path: 'assignment', component: AssignmentComponent },
{ path: 'user', component: UserComponent },
{ path: 'schoolhome', component: SchoolhomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'homeright', component: HomerightComponent },
{ path: 'newsfeed', component: NewsfeedComponent },
{ path: 'notifications', component: NotificationsComponent },
{ path: 'newstabs', component: NewstabsComponent },
{ path: 'header', component: HeaderComponent },
{ path: 'search', component: SearchComponent },
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'friends', component: FriendsComponent },
{ path: 'recommend', component: RecommendFriendsComponent },
{ path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
