import { Routes } from '@angular/router';
import { SeePostWorkComponent } from './components/see-post-work/see-post-work.component';
import { LandigPageComponent } from './components/landig-page/landig-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignInTeacherComponent } from './components/sign-in-teacher/sign-in-teacher.component';
import { LoginComponent } from './components/login/login.component';
import { SeeStudentsComponent } from './components/see-students/see-students.component';
import { LoginTeacherComponent } from './components/login-teacher/login-teacher.component';
import { HeaderSComponent } from './components/header-s/header-s.component';
import { SignInStudentComponent } from './components/sign-in-student/sign-in-student.component';
import { HeaderTComponent } from './components/header-t/header-t.component';
import { WorksComponent } from './components/works/works.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { PostWorkComponent } from './components/post-work/post-work.component';
import { CurseReadingComponent } from './components/curse-reading/curse-reading.component';
import { SeeWorksComponent } from './components/see-works/see-works.component';
import { CurseWritingComponent } from './components/curse-writing/curse-writing.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CurseNumberComponent } from './components/curse-number/curse-number.component';
import { RewardsComponent } from './components/rewards/rewards.component';

export const routes: Routes = [
    {
        path: "", redirectTo: "landing",pathMatch:'full'
    },
    
    {
        path: "landing",component:LandigPageComponent,
    },
    {
        path: "signIn",component:SignInComponent,
    },
    {
        path: "sigIn/teacher",component:SignInTeacherComponent,
    },

    {
        path: "login",component:LoginComponent,
    },

    {
        path: "homeTeacher",component:HeaderTComponent,
    },
    {
        path: "loginTeacher",component:LoginTeacherComponent
    },
    
    {
        path: "signin/Student",component:SignInStudentComponent
    },
    {
        path:"homeStudent",component:HeaderSComponent
    },
    {
        path:"loginStudent",component:LoginStudentComponent
    },
    {
        path: "postWork", component:PostWorkComponent
    },
    {
        path:"works",component:WorksComponent
    },
    {
        path:"seeStudent",component:SeeStudentsComponent
    },
    {
        path:"seePostWork",component:SeePostWorkComponent
    },
    {
        path:"workStudents",component:SeeWorksComponent,
    },
    {
        path:"curseReading",component:CurseReadingComponent
    },
    {
        path:"curseWriting",component:CurseWritingComponent
    },
    {
        path:"MyTask",component:TasksComponent
    },
    {
        path:"curseNumber",component:CurseNumberComponent
    },
    {
        path:"rewards",component:RewardsComponent
    }
    

];
