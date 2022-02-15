import { Component, Inject } from '@angular/core';
import { AppConfig, APP_CONFIG, AppConfigProvider } from './app.config';

@Component({
  selector: 'app-root',
  template: ` {{ appConfig | json }} `,
  styles: [],
  providers: [AppConfigProvider],
})
export class AppComponent {
  constructor(@Inject(APP_CONFIG) public appConfig: AppConfig) {
    console.log(appConfig); // { "url": "http://somewhere.io", "port": "5000" }
  }
}
