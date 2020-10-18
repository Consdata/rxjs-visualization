import { Component } from '@angular/core';

@Component({
  selector: 'arges-root',
  template: `
    <nav mat-tab-nav-bar [backgroundColor]="'primary'">
      <a mat-tab-link *ngFor="let link of subjectsLinks"
         (click)="activeLink = link.link"
         [active]="activeLink== link.link"
         routerLink="{{link.link}}">
        {{link.description}}
      </a>

      <a mat-tab-link *ngFor="let link of operatorsLinks"
         (click)="activeLink = link.link"
         [active]="activeLink== link.link"
         routerLink="{{link.link}}">
        {{link.description}}
      </a>
    </nav>
    <div class="body">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeLink: string;

  subjectsLinks = [{ link: 'subject', icon: 'info', description: 'Subject' },
    { link: 'behavior-subject', icon: 'info', description: 'BehaviorSubject' },
    { link: 'replay-subject', icon: 'info', description: 'ReplaySubject' },
    { link: 'async-subject', icon: 'info', description: 'AsyncSubject' }];

  operatorsLinks = [{ link: 'share-replay', icon: 'info', description: 'Share Replay' },
    { link: 'combine-latest', icon: 'info', description: 'Combine Latest' },
    { link: 'with-latest-from', icon: 'info', description: 'With Latest From' },
    { link: 'merge', icon: 'info', description: 'Merge' }];
}
