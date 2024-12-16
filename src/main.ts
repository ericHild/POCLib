import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MessageComponent } from './app/message/message.component';
import { createCustomElement } from '@angular/elements';
import { BarCharttComponent } from './app/charts/bar-chart.component';

/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/

  /*createApplication(appConfig)
  .then((app) => {
      const messageComponent = createCustomElement(MessageComponent, { injector: app.injector });
      customElements.define('mylib-cmp-message', messageComponent);
  })
  .catch((err) => console.error(err));*/

  createApplication(appConfig)
  .then((app) => {
      const barChartComponent = createCustomElement(BarCharttComponent, { injector: app.injector });
      customElements.define('mylib-cmp-barchart', barChartComponent);
  })
  .catch((err) => console.error(err));