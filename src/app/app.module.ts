import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import fontawesome from '@fortawesome/fontawesome';
import faTrashAlt from '@fortawesome/fontawesome-free-regular/';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './company/about/about.component';
import { CareersComponent } from './company/careers/careers.component';
import { MobileComponent } from './services/mobile/mobile.component';
import { CustomComponent } from './services/custom/custom.component';
import { CmsComponent } from './services/cms/cms.component';
import { DevopsComponent } from './services/devops/devops.component';
import { CuberSecurityComponent } from './services/cuber-security/cuber-security.component';
import { TestAutomationComponent } from './services/test-automation/test-automation.component';
import { RoboticProcessAutomationComponent } from './services/robotic-process-automation/robotic-process-automation.component';
import { DigitalMarketingComponent } from './services/digital-marketing/digital-marketing.component';
import { RoboticsIotComponent } from './services/robotics-iot/robotics-iot.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { EngagementModelsComponent } from './how-we-work/engagement-models/engagement-models.component';
import { DevelopmentProcessComponent } from './how-we-work/development-process/development-process.component';
import { IndustriesWeCaterToComponent } from './portfolio/industries-we-cater-to/industries-we-cater-to.component';
import { WorkDoneComponent } from './portfolio/work-done/work-done.component';
import { ClientPresenceComponent } from './portfolio/client-presence/client-presence.component';
import { ClientTestimonialsComponent } from './portfolio/client-testimonials/client-testimonials.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch : 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'mobile', component: MobileComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'cms', component: CmsComponent },
  { path: 'devops', component: DevopsComponent },
  { path: 'cubersecurity', component: CuberSecurityComponent },
  { path: 'testautomation', component: TestAutomationComponent },
  { path: 'rpa', component: RoboticProcessAutomationComponent },
  { path: 'digitalmarketing', component: DigitalMarketingComponent },
  { path: 'roboticsiot', component: RoboticsIotComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'engagementmodels', component: EngagementModelsComponent },
  { path: 'developmentprocess', component: DevelopmentProcessComponent },
  { path: 'iwct', component: IndustriesWeCaterToComponent },
  { path: 'workdone', component: WorkDoneComponent },
  { path: 'clientpresence', component: ClientPresenceComponent },
  { path: 'clienttestimonials', component: ClientTestimonialsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CareersComponent,
    MobileComponent,
    CustomComponent,
    CmsComponent,
    DevopsComponent,
    CuberSecurityComponent,
    TestAutomationComponent,
    RoboticProcessAutomationComponent,
    DigitalMarketingComponent,
    RoboticsIotComponent,
    SolutionsComponent,
    EngagementModelsComponent,
    DevelopmentProcessComponent,
    IndustriesWeCaterToComponent,
    WorkDoneComponent,
    ClientPresenceComponent,
    ClientTestimonialsComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
