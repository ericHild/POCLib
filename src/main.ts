import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MessageComponent } from './app/message/message.component';
import { createCustomElement } from '@angular/elements';
import { BarCharttComponent } from './app/charts/bar-chart.component';

// Bootstrap application
/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/

// Create MessageComponent Web Component
/*createApplication(appConfig)
  .then((app) => {
    const messageComponent = createCustomElement(MessageComponent, { injector: app.injector });
    customElements.define('mylib-cmp-message', messageComponent);
})
.catch((err) => console.error(err));*/


// Create BarCharttComponent Web Component
/*createApplication(appConfig)
.then((app) => {
    const barChartComponent = createCustomElement(BarCharttComponent, { injector: app.injector });
    customElements.define('mylib-cmp-barchart', barChartComponent);
})
.catch((err) => console.error(err));*/


// Create Web Component from arrayList

  const webComponentLis = [
    { componentTarget: MessageComponent, componentCustomName: 'mylib-cmp-message' },
    { componentTarget: BarCharttComponent, componentCustomName: 'mylib-cmp-barchart' },
];

createApplication(appConfig)
  .then((app) => {
    webComponentLis.forEach( (composant) => {
        const create_custom_component = createCustomElement(composant.componentTarget, { injector: app.injector });
        customElements.define(composant.componentCustomName, create_custom_component);
    });
})
.catch((err) => console.error(err));