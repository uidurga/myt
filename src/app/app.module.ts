import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NewstabsComponent } from './newstabs/newstabs.component';
import { HomerightComponent } from './homeright/homeright.component';
import { FriendsComponent } from './friends/friends.component';
import { RecommendFriendsComponent } from './recommend-friends/recommend-friends.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AlertsComponent } from './alerts/alerts.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { AssignmentComponent } from './assignment/assignment.component';
import { HomechatComponent } from './homechat/homechat.component';
import { HomeleftComponent } from './homeleft/homeleft.component';
import { HometopComponent } from './hometop/hometop.component';
import { AssigntabsComponent } from './assigntabs/assigntabs.component';
import { TestsComponent } from './tests/tests.component';
import { TestresulttabComponent } from './testresulttab/testresulttab.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { ClassroomtabsComponent } from './classroomtabs/classroomtabs.component';
import { CoachroomComponent } from './coachroom/coachroom.component';
import { CoachroominComponent } from './coachroomin/coachroomin.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectinComponent } from './subjectin/subjectin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { FundtalentComponent } from './fundtalent/fundtalent.component';
import { HrconnectComponent } from './hrconnect/hrconnect.component';
import { InvestorComponent } from './investor/investor.component';
import { BidComponent } from './bid/bid.component';
import { BookcommerceComponent } from './bookcommerce/bookcommerce.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { FundmenuComponent } from './fundmenu/fundmenu.component';
import { BackupprojectsComponent } from './backupprojects/backupprojects.component';
import { RemainderComponent } from './remainder/remainder.component';
import { BusinessshareComponent } from './businessshare/businessshare.component';
import { RebinideasComponent } from './rebinideas/rebinideas.component';
import { BookmenuComponent } from './bookmenu/bookmenu.component';
import { BdepartmentComponent } from './bdepartment/bdepartment.component';
import { BpublishComponent } from './bpublish/bpublish.component';
import { BfavComponent } from './bfav/bfav.component';
import { BookfilterComponent } from './bookfilter/bookfilter.component';
import { HrmenuComponent } from './hrmenu/hrmenu.component';
import { HrdepartmentsComponent } from './hrdepartments/hrdepartments.component';
import { HrempComponent } from './hremp/hremp.component';
import { HrmeetComponent } from './hrmeet/hrmeet.component';
import { HrreqComponent } from './hrreq/hrreq.component';
import { InstsubComponent } from './instsub/instsub.component';
import { InstasubinComponent } from './instasubin/instasubin.component';
import { FundmainComponent } from './fundmain/fundmain.component';
import { BkpinnerComponent } from './bkpinner/bkpinner.component';
import { BinmainComponent } from './binmain/binmain.component';
import { IdeashareinComponent } from './ideasharein/ideasharein.component';
import { RemainComponent } from './remain/remain.component';

// imports: [
//   # [...]
//   JwtModule.forRoot({
//     config: {
//       tokenGetter: function  tokenGetter() {
//            return     localStorage.getItem('access_token');},
//       whitelistedDomains: ['http://13.233.126.74:91'],
//       blacklistedRoutes: ['http://13.233.126.74:91/api/user']
//     }
//   })
// ],



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ErrorComponent,
    LoginComponent,
    SignupComponent,
    CategoriesComponent,
    HomeComponent,
    NewsfeedComponent,
    NewstabsComponent,
    HomerightComponent,
    FriendsComponent,
    RecommendFriendsComponent,
    NotificationsComponent,
    AlertsComponent,
    UserComponent,
    AssignmentComponent,
    HomechatComponent,
    HomeleftComponent,
    HometopComponent,
    AssigntabsComponent,
    TestsComponent,
    TestresulttabComponent,
    ClassroomComponent,
    ClassroomtabsComponent,
    CoachroomComponent,
    CoachroominComponent,
    SubjectsComponent,
    SubjectinComponent,
    MainmenuComponent,
    FundtalentComponent,
    HrconnectComponent,
    InvestorComponent,
    BidComponent,
    BookcommerceComponent,
    SubscriptionsComponent,
    FundmenuComponent,
    BackupprojectsComponent,
    RemainderComponent,
    BusinessshareComponent,
    RebinideasComponent,
    BookmenuComponent,
    BdepartmentComponent,
    BpublishComponent,
    BfavComponent,
    BookfilterComponent,
    HrmenuComponent,
    HrdepartmentsComponent,
    HrempComponent,
    HrmeetComponent,
    HrreqComponent,
    InstsubComponent,
    InstasubinComponent,
    FundmainComponent,
    BkpinnerComponent,
    BinmainComponent,
    IdeashareinComponent,
    RemainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    JwtModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
