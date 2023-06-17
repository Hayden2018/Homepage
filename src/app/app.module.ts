import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { WorksComponent } from './works/works.component';
import { MenuComponent } from './component/menu/menu.component';
import { BannerComponent } from './component/banner/banner.component';

import { StoreModule } from '@ngrx/store';
import { menuReducer } from './store/store.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    WorksComponent,
    MenuComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({ menu: menuReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
