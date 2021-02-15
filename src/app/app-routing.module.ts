import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'favourite',
    loadChildren: () => import('./favourite/favourite.module').then( m => m.FavouritePageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'appoinments',
    loadChildren: () => import('./appoinments/appoinments.module').then( m => m.AppoinmentsPageModule)
  },
  {
    path: 'sub-category',
    loadChildren: () => import('./sub-category/sub-category.module').then( m => m.SubCategoryPageModule)
  },
  {
    path: 'clinics',
    loadChildren: () => import('./clinics/clinics.module').then( m => m.ClinicsPageModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then( m => m.BookPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'trajet',
    loadChildren: () => import('./trajet/trajet.module').then( m => m.TrajetPageModule)
  },
  {
    path: 'tache',
    loadChildren: () => import('./tache/tache.module').then( m => m.TachePageModule)
  },
  {
    path: 'paiement',
    loadChildren: () => import('./paiement/paiement.module').then( m => m.PaiementPageModule)
  },
  {
    path: 'infraction',
    loadChildren: () => import('./infraction/infraction.module').then( m => m.InfractionPageModule)
  },
  {
    path: 'sinistre',
    loadChildren: () => import('./sinistre/sinistre.module').then( m => m.SinistrePageModule)
  },
  {
    path: 'kilometrage',
    loadChildren: () => import('./kilometrage/kilometrage.module').then( m => m.KilometragePageModule)
  },
  {
    path: 'essence',
    loadChildren: () => import('./essence/essence.module').then( m => m.EssencePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
