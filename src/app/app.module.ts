import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule here


import { HomeComponent } from './home/home.component'; // Add your components here
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



// Import your AppRoutingModule
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, // Declare your components here
    MerchandiseComponent,
    AboutComponent,
    ContactComponent,],
    
    imports: [
    BrowserModule,
    BrowserAnimationsModule, // Include BrowserAnimationsModule here
    MatSliderModule,
    MatCardModule, // Include MatCardModule here

    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FormsModule, // Import FormsModule if needed
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
