import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SolutionComponent } from './solution/solution.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UseCasesComponent } from './use-cases/use-cases.component';
import { SolutionInsightsComponent } from './solution-insights/solution-insights.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HighlightPipe } from './pipes/highlight.pipe';
import { TooltipModule } from 'ng2-tooltip-directive';

const routes: Routes = [
  { path: 'solution/:id', component:SolutionComponent , children: [
    { path: 'usecases', component: UseCasesComponent },
    { path: 'solution-insights', component: SolutionInsightsComponent }
  ]},
  { path: '', component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SolutionComponent,
    UseCasesComponent,
    SolutionInsightsComponent,
    JwPaginationComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    TooltipModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
