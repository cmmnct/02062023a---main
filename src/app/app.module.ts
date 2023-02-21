import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ColorpatchesComponent } from './colorpatches/colorpatches.component';
import { ColorpatchComponent } from './colorpatch/colorpatch.component';
import { ColorPatchPipe } from './pipes/colorpatchPipe';
import { ColortostringPipe } from './colortostring.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BigfootComponent } from './bigfoot/bigfoot.component';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ColorpatchesComponent,
    ColorpatchComponent,
    ColorPatchPipe,
    ColortostringPipe,
    BigfootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
