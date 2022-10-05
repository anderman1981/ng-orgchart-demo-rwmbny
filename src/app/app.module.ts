import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { CoreModule } from "./core/core.module";
import { OrgchartModule } from '@dabeng/ng-orgchart';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { DefaultChartComponent } from "./default-chart/default-chart.component";
import { PanZoomChartComponent } from "./pan-zoom-chart/pan-zoom-chart.component";
import { CustomNodeTemplateChartComponent } from "./custom-node-template-chart/custom-node-template-chart.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrgchartModule,
    CoreModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, DefaultChartComponent, PanZoomChartComponent, CustomNodeTemplateChartComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
