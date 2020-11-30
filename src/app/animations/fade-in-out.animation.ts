import { AnimationTriggerMetadata, animate, style, transition, trigger } from '@angular/animations';

export const itemFadeInOut: AnimationTriggerMetadata = trigger('itemFadeInOut', [
  transition(':enter', [style({ opacity: 0 }), animate('500ms', style({ opacity: 1 }))]),
  transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
]);
