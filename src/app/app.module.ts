import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BodycontentComponent } from './bodycontent/bodycontent.component';
import { BreadcumComponent } from './breadcum/breadcum.component';


import {AngularFireModule} from '@angular/fire/compat'
		import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
		import { environment } from '../environments/environment';
		import { AngularFireAuthModule } from '@angular/fire/compat/auth';

   
		
import { RecentsaletableComponent } from './recentsaletable/recentsaletable.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
    BodycontentComponent,
    BreadcumComponent,
    RecentsaletableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
			AngularFirestoreModule,
			AngularFireAuthModule, // imports firebase/auth, only needed for auth features=> dùng cho chức năng update
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
