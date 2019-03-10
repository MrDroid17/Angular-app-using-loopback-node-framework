// tslint:disable:max-line-length
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSidenavModule,
  MatIconModule, MatListModule, MatCardModule, MatMenuModule, MatSelectModule, MatSnackBarModule, MatOptionModule, MatCheckboxModule, MatTooltipModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // RouterModule.forRoot(routes, { useHash: false }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
