import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MessageComponent } from './app/message/message.component';
import { createCustomElement } from '@angular/elements';

/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/

  createApplication(appConfig)
  .then((app) => {
      const messageComponent = createCustomElement(MessageComponent, { injector: app.injector });
      customElements.define('mylib-cmp-message', messageComponent);
  })
  .catch((err) => console.error(err));