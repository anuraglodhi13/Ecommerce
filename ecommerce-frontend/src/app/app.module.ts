import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ValidateEqualModule } from 'ng-validate-equal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { VendorViewComponent } from './vendor-view/vendor-view.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { Ng2CompleterModule } from 'ng2-completer';
import { VendorReportComponent } from './vendor-report/vendor-report.component';
import { PagerService } from './service/pager-service';
import { ProductService } from './service/product-service';
import { CartViewComponent } from './cart-view/cart-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BuyNowViewComponent } from './buy-now-view/buy-now-view.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { FailModalComponent } from './fail-modal/fail-modal.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { AuthenticationGuardService } from './service/authentication-guard-service';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { Constants } from 'src/config/constants';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    VendorViewComponent,
    CustomerViewComponent,
    VendorAddComponent,
    VendorReportComponent,
    CartViewComponent,
    BuyNowViewComponent,
    SuccessModalComponent,
    FailModalComponent,
    VendorEditComponent,
    SignupPageComponent,
    SearchboxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ValidateEqualModule,
    NgMultiSelectDropDownModule,
    NgSelectModule,
    Ng2CompleterModule,
    NgbModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
  ],
  providers: [PagerService,ProductService,[{ provide: AuthenticationGuardService, useClass: AuthenticationGuardService }],Constants],
  bootstrap: [AppComponent]
})
export class AppModule { }
