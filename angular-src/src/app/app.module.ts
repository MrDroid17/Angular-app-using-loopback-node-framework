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
  MatIconModule, MatListModule, MatCardModule, MatMenuModule, MatSelectModule, MatSnackBarModule, MatOptionModule, MatCheckboxModule, MatTooltipModule, MatDialogModule, MatTableDataSource, MatTableModule, MatPaginatorModule
} from '@angular/material';

/**
 * component and services and modules
 */
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DeleteComponent } from './utils/dialog/delete/delete.component';
import { InfoComponent } from './utils/dialog/info/info.component';
import { ConfirmationComponent } from './utils/dialog/confirmation/confirmation.component';
import { ErrorComponent } from './utils/dialog/error/error.component';
import { DialogService } from './services/dialog.service';
import { NotificationService } from './services/notification.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AuthGuard } from './guard/auth.guard';
import { ValidationService } from './services/validation.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DeleteComponent,
    InfoComponent,
    ConfirmationComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: false }),
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
    DashboardModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    AuthService,
    CategoryService,
    AuthGuard,
    DialogService,
    NotificationService,
    ValidationService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteComponent,
    InfoComponent,
    ConfirmationComponent,
    ErrorComponent,
  ]
})
export class AppModule { }
