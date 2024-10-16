import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeoAnalysisComponent } from './seo-analysis/seo-analysis.component';
import { AdCampaignsComponent } from './ad-campaigns/ad-campaigns.component';
import { MarketingServicesComponent } from './marketing-services/marketing-services.component';
import { CommunicationHubComponent } from './communication-hub/communication-hub.component';
import { TelegramMiniAppComponent } from './telegram-mini-app/telegram-mini-app.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'seo-analysis', component: SeoAnalysisComponent },
  { path: 'ad-campaigns', component: AdCampaignsComponent },
  { path: 'marketing-services', component: MarketingServicesComponent },
  { path: 'communication-hub', component: CommunicationHubComponent },
  { path: 'telegram-mini-app', component: TelegramMiniAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }