import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './settings/settings.component';
import { SetproductComponent } from './admin/setproduct/setproduct.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', redirectTo: '/aboutus', pathMatch:'full'},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'setproduct', component: SetproductComponent},
  {path: 'sign', component: SignUpComponent},
  {path: '**', redirectTo: '/sign', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
