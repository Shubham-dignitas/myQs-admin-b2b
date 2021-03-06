import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { AppRoutingModule } from './app-routing.module';

import { CompaniesService } from './companies.service';
import { CategoriesService } from './categories.service';
import { QuestionsService } from './questions.service';
import { ChallengesService } from './challenges.service';
import { UsersService } from './users.service';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CompaniesComponent } from './companies/companies.component';
import { QuestionsComponent } from './questions/questions.component';
import { CategoriesComponent } from './categories/categories.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { RewardsComponent } from './rewards/rewards.component';
import { BillingComponent } from './billing/billing.component';
import { AddminSettingComponent } from './addmin-setting/addmin-setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { from } from 'rxjs';
import { UsersComponent } from './users/users.component';
import { TopnavComponent } from './topnav/topnav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DataTablesModule } from 'angular-datatables';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';





@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProfileComponent,
    SidenavComponent,
    CompaniesComponent,
    QuestionsComponent,
    CategoriesComponent,
    ChallengesComponent,
    RewardsComponent,
    BillingComponent,
    AddminSettingComponent,
    DashboardComponent,
    UsersComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    DataTablesModule,
    NgxPaginationModule,
    ModalModule.forRoot()
  ],
  providers: [
    AmplifyService,
    CompaniesService,
    CategoriesService,
    QuestionsService,
    ChallengesService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
