import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MrSummaryComponent } from './mr-summary/mr-summary.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { AlgorithmSelectionComponent } from './algorithm-selection/algorithm-selection.component';
import { ClusterAnalysisComponent } from './cluster-analysis/cluster-analysis.component';

const routes: Routes = [
  {
    path:"",
    component:LandingScreenComponent,
    pathMatch:"full"
  },
  {
    path:"summary",
    component: MrSummaryComponent,
    pathMatch:"full"
  },
  {
    path:"algorithm",
    component: AlgorithmSelectionComponent,
    pathMatch:"full"
  },
  {
    path:"analysis",
    component: ClusterAnalysisComponent,
    pathMatch:"full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
