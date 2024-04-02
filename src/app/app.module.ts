import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { MainBackComponent } from './BackOffice/main-back/main-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FormsModule } from '@angular/forms';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './FrontOffice/register/register.component';
import { WelcomComponent } from './FrontOffice/welcom/welcom.component'
import { LoginComponent } from './FrontOffice/login/login.component';
import { AdminComponent } from './FrontOffice/admin/admin.component';
import { UserComponent } from './FrontOffice/user/user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './serives/Auths-Last/auth.guard';
import { AuthInterceptor } from './serives/Auths-Last/auth.interceptor';
import { AuthenticationService } from './serives/authentication.service';
import { PasswordComponent } from './FrontOffice/password/password.component';
import { StatsComponent } from './BackOffice/stats/stats.component';
import { AllTempleteFrontComponent } from './FrontOffice/all-templete-front/all-templete-front.component';
import { AllCommentsComponent } from './FrontOffice/comments/all-comments/all-comments.component';
import { AjouterCommentaireComponent } from './FrontOffice/ajoutercommentaire/ajoutercommentaire.component';
import { EventDetailsComponent } from './FrontOffice/event-details/event-details.component';
import { calendarComponent } from './FrontOffice/shared/calendar/calendar.component';
import { AfiicheevennementfrontComponent } from './FrontOffice/afiicheevennementfront/afiicheevennementfront.component';
import { ModifierevennementComponent } from './BackOffice/modifierevennement/modifierevennement.component';
import { AjouterevennementComponent } from './BackOffice/ajouterevennement/ajouterevennement.component';
import { ListeEvennementComponent } from './BackOffice/liste-evennement/liste-evennement.component';
import { MapComponent } from './FrontOffice/shared/map/map.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AjouterEtablissementComponent } from './BackOffice/ajouter-etablissement/ajouter-etablissement.component';
import { ListeetablissementComponent } from './BackOffice/listeetablissement/listeetablissement.component';
import { ModifieretablissementComponent } from './BackOffice/modifieretablissement/modifieretablissement.component';
import { AfficheEtablissmentFrontComponent } from './FrontOffice/FrontOffice/affiche-etablissment-front/affiche-etablissment-front.component';
import { DetailEtablissementComponent } from './FrontOffice/FrontOffice/detail-etablissement/detail-etablissement.component';
import { AjouterAffctAmbulanceComponent } from './BackOffice/ajouter-affct-ambulance/ajouter-affct-ambulance.component';
import { ListeAmbulanceComponent } from './BackOffice/liste-ambulance/liste-ambulance.component';
import { DetailAmbulanceComponent } from './BackOffice/detail-ambulance/detail-ambulance.component';
import { UpdateAmbulanceComponent } from './BackOffice/update-ambulance/update-ambulance.component';
import { AjouterAmbulancierComponent } from './BackOffice/ajouter-ambulancier/ajouter-ambulancier.component';
import { ListeAmbulancierComponent } from './BackOffice/liste-ambulancier/liste-ambulancier.component';
import { UpdateAmbulancierComponent } from './BackOffice/update-ambulancier/update-ambulancier.component';
import { AjouterMorgueComponent } from './BackOffice/ajouter-morgue/ajouter-morgue.component';
import { ListeMorgueComponent } from './BackOffice/liste-morgue/liste-morgue.component';
import { UpdatemorgueComponent } from './BackOffice/updatemorgue/updatemorgue.component';
import { ModifierambulancierAmbulanceComponent } from './BackOffice/modifierambulancier-ambulance/modifierambulancier-ambulance.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    MainBackComponent,
    SidebarBackComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    HomeFrontComponent,
    LoginComponent,
    RegisterComponent,
    WelcomComponent,
    AdminComponent,
    UserComponent,
    ForbiddenComponent,
    PasswordComponent,
    StatsComponent,
    AllTempleteFrontComponent,
    ListeEvennementComponent,
    AjouterevennementComponent,
    ModifierevennementComponent,
    AfiicheevennementfrontComponent,
    calendarComponent,
    EventDetailsComponent,
    AjouterCommentaireComponent,
    AllCommentsComponent,
    MapComponent,
    AjouterEtablissementComponent,
    ListeetablissementComponent,
    ModifieretablissementComponent,
    AfficheEtablissmentFrontComponent,
    DetailEtablissementComponent,
    AjouterAffctAmbulanceComponent,
    ListeAmbulanceComponent,
    DetailAmbulanceComponent,
    UpdateAmbulanceComponent,
    AjouterAmbulancierComponent,
    ListeAmbulancierComponent,
    UpdateAmbulancierComponent,
    AjouterMorgueComponent,
    ListeMorgueComponent,
    UpdatemorgueComponent,
    ModifierambulancierAmbulanceComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgxMapLibreGLModule
  ],
  providers: [
    AuthGuard,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
    },
    HttpClient,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
