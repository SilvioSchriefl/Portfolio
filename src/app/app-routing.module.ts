import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: 'impressum', component: ImpressumComponent},
  {path: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
