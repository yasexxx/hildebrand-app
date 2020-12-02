import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsConditionRoutingModule } from './terms-condition-routing.module';
import { TermsConditionComponent } from './terms-condition.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [TermsConditionComponent],
  imports: [
    CommonModule,
    TermsConditionRoutingModule,
    SharedModule
  ]
})
export class TermsConditionModule { }
