import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';

import { SettingsComponent } from './settings/settings.component';
import { MatMenuModule } from '@angular/material/menu';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { SetproductComponent } from './admin/setproduct/setproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './pages/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    SettingsComponent,
    SetproductComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    ProductCardComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatBadgeModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    iconRegistry.addSvgIcon(
      'fb',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/fb.svg'));
    iconRegistry.addSvgIcon(
      'linkedin',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Linkedin.svg'));
    iconRegistry.addSvgIcon(
      'git',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
  }
 }
