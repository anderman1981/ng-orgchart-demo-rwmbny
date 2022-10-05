import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgchartModule } from '@dabeng/ng-orgchart';

import { JSRoutingModule } from './js-routing.module';
import { JSComponent } from './js.component';

@NgModule({
  imports: [CommonModule, JSRoutingModule, OrgchartModule],
  declarations: [JSComponent],
})
export class JSModule { }