import { BrowserModule } from '@angular/platform-browser';
import { FileSelectDirective } from 'ng2-file-upload';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { employeeService } from './emplyeeService.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { TaskAssignComponent } from './task-assign/task-assign.component';
import { taskService } from './taskService.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UerViewTaskComponent } from './uer-view-task/uer-view-task.component';
import { UerUploadReportComponent } from './uer-upload-report/uer-upload-report.component';
import { UerViewReviewComponent } from './uer-view-review/uer-view-review.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { TaskReportService } from './task-report.service';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { AViewReportsComponent } from './aview-reports/aview-reports.component';

export const appRoutes:Routes=[
  {path:'',redirectTo:'/Index',pathMatch:'full'},  
  {path:'Home',component:HomeComponent},
  {path:'AddTask',component:TaskAssignComponent},
  {path:'Admin',component:LoginComponent},
  {path:'AddTeam',component:SignUpComponent},
  {path:'EmpList',component:EmployeeTableComponent},
  {path:'UpdateEmp',component:UpdateEmployeeComponent},
  {path:'UserLogin',component:UserLoginComponent},
  {path:'UserHome',component:UserHomeComponent},
  {path:'ViewTask',component:UerViewTaskComponent},
  {path:'Uploads',component:UerUploadReportComponent},
  {path:'Reviews',component:UerViewReviewComponent},
  {path:'Index',component:IndexPageComponent},
  {path:'UTaskDetails',component:TaskDetailsComponent},
  {path:'AViewReport',component:AViewReportsComponent},


  


];


@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    EmployeeTableComponent,
    UpdateEmployeeComponent,
    TaskAssignComponent,
    UserLoginComponent,
    UserNavbarComponent,
    UserHomeComponent,
    UerViewTaskComponent,
    UerUploadReportComponent,
    UerViewReviewComponent,
    IndexPageComponent,
    TaskDetailsComponent,
    AViewReportsComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule, HttpModule
  ],
  exports:[RouterModule],
  providers: [employeeService,taskService,TaskReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
