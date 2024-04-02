import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { ForbiddenComponent } from './FrontOffice/forbidden/forbidden.component';
import { AuthGuard } from './serives/Auths-Last/auth.guard';
import { UserComponent } from './FrontOffice/user/user.component';
import { StatsComponent } from './BackOffice/stats/stats.component';
import { AllTempleteFrontComponent } from './FrontOffice/all-templete-front/all-templete-front.component';
import { AfiicheevennementfrontComponent } from './FrontOffice/afiicheevennementfront/afiicheevennementfront.component';
import { MapComponent } from './FrontOffice/shared/map/map.component';
import { calendarComponent } from './FrontOffice/shared/calendar/calendar.component';
import { EventDetailsComponent } from './FrontOffice/event-details/event-details.component';
import { AjouterCommentaireComponent } from './FrontOffice/ajoutercommentaire/ajoutercommentaire.component';
import { ModifierevennementComponent } from './BackOffice/modifierevennement/modifierevennement.component';
import { ListeEvennementComponent } from './BackOffice/liste-evennement/liste-evennement.component';
import { AjouterevennementComponent } from './BackOffice/ajouterevennement/ajouterevennement.component';
import { ListeetablissementComponent } from './BackOffice/listeetablissement/listeetablissement.component';
import { AjouterEtablissementComponent } from './BackOffice/ajouter-etablissement/ajouter-etablissement.component';
import { ModifieretablissementComponent } from './BackOffice/modifieretablissement/modifieretablissement.component';
import { ListeAmbulanceComponent } from './BackOffice/liste-ambulance/liste-ambulance.component';
import { AjouterAffctAmbulanceComponent } from './BackOffice/ajouter-affct-ambulance/ajouter-affct-ambulance.component';
import { AjouterMorgueComponent } from './BackOffice/ajouter-morgue/ajouter-morgue.component';
import { ListeMorgueComponent } from './BackOffice/liste-morgue/liste-morgue.component';
import { UpdatemorgueComponent } from './BackOffice/updatemorgue/updatemorgue.component';
import { DetailAmbulanceComponent } from './BackOffice/detail-ambulance/detail-ambulance.component';
import { UpdateAmbulanceComponent } from './BackOffice/update-ambulance/update-ambulance.component';
import { AjouterAmbulancierComponent } from './BackOffice/ajouter-ambulancier/ajouter-ambulancier.component';
import { UpdateAmbulancierComponent } from './BackOffice/update-ambulancier/update-ambulancier.component';
import { ListeAmbulancierComponent } from './BackOffice/liste-ambulancier/liste-ambulancier.component';
import { ModifierambulancierAmbulanceComponent } from './BackOffice/modifierambulancier-ambulance/modifierambulancier-ambulance.component';
import { AfficheEtablissmentFrontComponent } from './FrontOffice/FrontOffice/affiche-etablissment-front/affiche-etablissment-front.component';
import { DetailEtablissementComponent } from './FrontOffice/FrontOffice/detail-etablissement/detail-etablissement.component';

const routes: Routes = [
  {
    path:"forbiden",
    component:ForbiddenComponent
  },
 { path:"",
  component:AllTempleteFrontComponent,
  children:[
    {
      path: 'afficherevennementfront',
      component: AfiicheevennementfrontComponent,
    },
    {
      path: 'map',
      component: MapComponent,
    },
    { path: 'calendar', component: calendarComponent },

    { path: 'event/:id', component: EventDetailsComponent
   },

    { path: 'ajoutercommentaire', component: AjouterCommentaireComponent },
    {
      path:"login",
      component:LoginComponent
    },
    {
      path:"register",
      component:RegisterComponent
    },
    {
      path:"etablissment",
      component:AfficheEtablissmentFrontComponent
    },
    {
      path:"detailetablissment/:id",
      component:DetailEtablissementComponent
    },
  ]
 },

 {
  path: "admin",
  component: AllTemplateBackComponent,
  children: [
    {
      path:"listeEtablissement",
      component:ListeetablissementComponent
    },
    {
      path:"ajouterEtablissement",
      component:AjouterEtablissementComponent
    },
    {
      path:"modifierEtablissement/:id",
      component:ModifieretablissementComponent
    },
    {
      path:"listAmbulance",
      component:ListeAmbulanceComponent 
    },
    {
      path:"ajouterAmbulance",
      component:AjouterAffctAmbulanceComponent 
    },
    {
      path:"ajouterMorgue",
      component:AjouterMorgueComponent 
    },
    {
      path:"listeMorgue",
      component:ListeMorgueComponent 
    },
    {
      path:"UpdateMorgue/:id",
      component:UpdatemorgueComponent
    },

    {
      path:"detailAmbulance/:id",
      component:DetailAmbulanceComponent 
    },
    {
      path:"UpdateAmbulance/:id",
      component:UpdateAmbulanceComponent
    },
    {
      path:"ajouterAmbulancier",
      component:AjouterAmbulancierComponent 
    },
    {
      path:"modifierrAmbulancier/:id",
      component:UpdateAmbulancierComponent 
    },
    {
      path:"listeAmbulancier",
      component:ListeAmbulancierComponent 
    },
    {
      path:"UpdateAmbulancierAmbulance/:id",
      component:ModifierambulancierAmbulanceComponent
    },

    {
      path: "stats",
      component: StatsComponent
    },
    {
      path: 'listeEvennement',
      component: ListeEvennementComponent,
    },
    {
      path: 'ajouterevennement',
      component: AjouterevennementComponent,
    },
    {
      path: 'modifierevennement/:id',
      component: ModifierevennementComponent,
    },
    {
      path: 'calendar',
      component: calendarComponent,
    },
    {
      path: 'ajoutercommentaire',
      component: AjouterCommentaireComponent,
    }
  ],
  canActivate: [AuthGuard],
  data: { roles: ['ADMIN'] }
},

{
path:"user",
component:UserComponent , canActivate:[AuthGuard],data:{roles:['USER']}
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
