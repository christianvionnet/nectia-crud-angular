import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/show" },
  { path: "show", component: ShowComponent, ...canActivate(() => redirectUnauthorizedTo(["/login"])) },
  { path: "create", component: CreateComponent, ...canActivate(() => redirectUnauthorizedTo(["/login"])) },
  { path: "edit/:id", component: EditComponent, ...canActivate(() => redirectUnauthorizedTo(["/login"])) },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
