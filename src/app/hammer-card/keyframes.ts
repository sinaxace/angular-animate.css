/* Note: 
        We're pretty much translating css keyframe animations 
        into Angular 8 code. Angular might make a css parser in the future.
    Tutorial: https://fireship.io/lessons/hammerjs-angular-5-animations-for-mobile-gestures-tutorial/

    Original swing.css keyframes: https://github.com/daneden/animate.css/blob/master/source/attention_seekers/swing.css
    Compare css keyframes with exported keyframe array to understand again.
*/

import { keyframes, style } from "@angular/animations";

// all we're doing is exporting variables that defines keyframes to be used in the app's animation
export const swing = [ // it cycles over 1000 milliseconds from hammer-card.component.ts
    style({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: .2 }), // the offset .2 is 20% within css keyframes
    style({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4 }),
    style({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: .6 }),
    style({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: .8 }),
    style({ transform: 'none', offset: 1 }) // 100%
];

export const jello = [
    style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222 }),
    style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 }),
    style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 }),
    style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 }),
    style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 }),
    style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
    style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 }),
    style({ transform: 'none', offset: 1 })
];

export const zoomOutRight = [
    style({ opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)', offset: 0.4 }),
    style({ opacity: 0, transform: 'scale(0.1) translate3d(2000px, 0, 0)', offset: 1 })
];

export const slideOutLeft = [
    style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    style({ visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 1 })
];