import { UserService } from './../../_services/user.service';
import { TokenStackService } from './../../_services/token-stack.service';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { LoaderService } from './../../_services/loader.service';
import { AuthService } from './../../_services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../_helpers/auth.interceptor';
import { LoaderInterceptor } from '../../_helpers/loader.interceptor';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        SignupComponent
    ],
    imports: [ 
        CommonModule,
        SignUpRoutingModule,
        SharedModule,
        NgxIntlTelInputModule,
    ],
    exports: []
})
export class SignUpModule {}