import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,isDevMode  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule} from '@angular/flex-layout';
import { environment }    from '../environments/environment'
import { Logger,Options } from 'angular2-logger/core';

//importing the material module files.
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material'; 
import { AppComponent } from './app.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BasicExampleDataComponent } from './shared/components/basic-example/basic-example-data.component';
import { BasicExampleComponent } from './shared/components/basic-example/basic-example.component';

//importing the hammerjs.
import 'hammerjs';

//imporing the components which were created by us using angular cli
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component'

//Importing the Services.
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { JoblistingComponent } from './joblisting/joblisting.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
  
    LoginComponent,
    BasicExampleDataComponent,
    BasicExampleComponent,
    JoblistingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    HttpModule,
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule,    FlexLayoutModule,
    AppRoutingModule
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [DishService,PromotionService,LeaderService,Logger,{ provide: Options, useValue:{ level:environment.logger.level,store: false }}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private logger: Logger) {
    if (isDevMode()) {
      console.info('To see debug logs enter: \'logger.level = logger.Level.DEBUG;\' in your browser console');
    }
    this.logger.level = environment.logger.level;
  }
}
