import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import { MrSummaryComponent } from './mr-summary/mr-summary.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { AlgorithmSelectionComponent } from './algorithm-selection/algorithm-selection.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ClusterAnalysisComponent } from './cluster-analysis/cluster-analysis.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SegmentsComponent } from './segments/segments.component';
import { Ng5SliderModule } from 'ng5-slider';
import { AnalysisComponent } from './analysis/analysis.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import {MatSliderModule} from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProductCharacteristicsComponent } from './product-characteristics/product-characteristics.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { TooltipCardComponent } from './tooltip-card/tooltip-card.component';
import { ProductRecommendationsComponent } from './product-recommendations/product-recommendations.component';
import { ImageCardSliderComponent } from './image-card-slider/image-card-slider.component';
import { ProjectLibraryComponent } from './project-library/project-library.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    LandingScreenComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    MrSummaryComponent,
    AlgorithmSelectionComponent,
    ClusterAnalysisComponent,
    SegmentsComponent,
    AnalysisComponent,
    ChatbotComponent,
    ProductCharacteristicsComponent,
    SplashScreenComponent,
    TooltipCardComponent,
    ProductRecommendationsComponent,
    ImageCardSliderComponent,
    ProjectLibraryComponent,
   
  ],
  imports: [
    MatProgressBarModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatSidenavModule,
    MatDividerModule,
    MatChipsModule,
    MatExpansionModule,    
    MatStepperModule,
    NgApexchartsModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    Ng5SliderModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
