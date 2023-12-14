import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HomeComponent,
    RouterModule
  ],
  standalone: true,
  styleUrls: ['./app.component.scss'],
  template: /*html*/`
  <main>
    <app-header />
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
  `
})
export class AppComponent {
  title = 'homes';
}
