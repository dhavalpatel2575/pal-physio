import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { MassageTherapyComponent } from './massage-therapy/massage-therapy.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { PhysiotherapyComponent } from './physiotherapy/physiotherapy.component';
import { ChiropractorComponent } from './chiropractor/chiropractor.component';
import { WorkplaceInjuryComponent } from './workplace-injury/workplace-injury.component';
import { MvaComponent } from './mva/mva.component';
import { AcupunctureComponent } from './acupuncture/acupuncture.component';
import { ModalitiesComponent } from './modalities/modalities.component';
import { CuppingComponent } from './cupping/cupping.component';
import { CustomeFootComponent } from './custome-foot/custome-foot.component';
import { CompressionComponent } from './compression/compression.component';
import { KinesiotapingComponent } from './kinesiotaping/kinesiotaping.component';
import { PhysioterapistComponent } from './physioterapist/physioterapist.component';

var myRoutes:Routes = [
  {path:"", component:GalleryComponent},
  {path:"home", component:GalleryComponent},
  {path:"about",component: AboutComponent},
  {path:"contact", component: ContactComponent},
  {path:"team", component: TeamComponent},
  {path:"physiotherapy", component: PhysiotherapyComponent},
  {path:"exercises", component: ExerciseComponent},
  {path:"massage", component: MassageTherapyComponent},
  {path:"chiropractor", component: ChiropractorComponent},
  {path:"workplace", component: WorkplaceInjuryComponent},
  {path:"mva", component: MvaComponent},
  {path:"acupuncture", component: AcupunctureComponent},
  {path:"modalities", component: ModalitiesComponent},
  {path:"cupping", component: CuppingComponent},
  {path:"custom-foot", component: CustomeFootComponent},
];

var myRoutes2 = RouterModule.forRoot(myRoutes);


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    GalleryComponent,
    HeaderComponent,
    FooterComponent,
    MassageTherapyComponent,
    ExerciseComponent,
    PhysiotherapyComponent,
    ChiropractorComponent,
    WorkplaceInjuryComponent,
    MvaComponent,
    AcupunctureComponent,
    ModalitiesComponent,
    CuppingComponent,
    CustomeFootComponent,
    CompressionComponent,
    KinesiotapingComponent,
    PhysioterapistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    myRoutes2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
