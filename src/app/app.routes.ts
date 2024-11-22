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
import { VideogamesComponent } from './components/videogames/videogames.component';
import { Game1Component } from './components/game1/game1.component';
import { Game2Component } from './components/game2/game2.component';
import { Game3Component } from './components/game3/game3.component';
import { Game4Component } from './components/game4/game4.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CurseStudentComponent } from './components/curse-student/curse-student.component';


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
    },
    {
        path:"videogames",component:VideogamesComponent
    },
    {
        path:"gameAverage",component:Game1Component
    },
    {
        path:"gameCars",component:Game2Component
    },{
        path:"gameSpace",component:Game3Component
    },{
        path: "gameScrable",component:Game4Component
    },{
        path:"settings",component:SettingsComponent
    },
    {
        path:"curse",component:CurseStudentComponent
    }
    

];
