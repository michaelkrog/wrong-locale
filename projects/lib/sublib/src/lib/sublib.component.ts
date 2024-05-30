import { Component, LOCALE_ID, inject } from '@angular/core';

@Component({
  selector: 'lib-lib',
  standalone: true,
  imports: [],
  template: `
    <p>
      Locale: {{locale}}
    </p>
  `,
  styles: ``
})
export class SubLibComponent {
  locale = inject(LOCALE_ID);
}
