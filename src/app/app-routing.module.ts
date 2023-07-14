import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MrSummaryComponent } from './mr-summary/mr-summary.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { AlgorithmSelectionComponent } from './algorithm-selection/algorithm-selection.component';
import { ClusterAnalysisComponent } from './cluster-analysis/cluster-analysis.component';
import { SegmentsComponent } from './segments/segments.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ProductCharacteristicsComponent } from './product-characteristics/product-characteristics.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

const routes: Routes = [
  {
    path:"landing",
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
  {
    path:"segment",
    component: SegmentsComponent,
    pathMatch:"full"
  }, 
  {
    path:"whitespaceAnalysis",
    component: AnalysisComponent,
    pathMatch:"full"
  },
  {
    path:"product",
    component: ProductCharacteristicsComponent,
    pathMatch:"full"
  },
  {
    path:"",
    component: SplashScreenComponent,
    pathMatch:"full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
