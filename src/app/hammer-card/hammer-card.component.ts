import { Component } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations'; // browser animation imports
import * as kf from './keyframes'; // the animate.css library import


/* Fireship Tutorial Reference:
    https://fireship.io/lessons/hammerjs-angular-5-animations-for-mobile-gestures-tutorial/
*/

@Component({
  selector: 'app-hammer-card',
  templateUrl: './hammer-card.component.html',
  styleUrls: ['./hammer-card.component.less'],
  animations: [ // here is where we define our animations from animate css library
    // first we have an animation trigger called cardAnimator
    trigger('cardAnimator', [
      /* Animation Trigger Descriptions:
          - Every time it's triggered, the animation moves on to the different transition states below.
          - The star * in transition's first arg is a wildcard for any state that transitions. If it fits the wildcard, it runs the 2nd arg.
          - transition() second arg, animate(), has a first arg of 1000 milliseconds with the kf import used in keyframe()
      */
      // transition('* => wobble', animate(1000, keyframes(kf.wobble))),
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      transition('* => jello', animate(1000, keyframes(kf.jello))),
      transition('* => zoomOutRight', animate(1000, keyframes(kf.zoomOutRight))),
      transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft)))
    ])
  ]
})
export class HammerCardComponent {

  animationState: string; // this property takes note of the component's current animation

  /**
   * @method startAnimation simply starts a new animation if the animation state is an empty string.
   * @param state contains the new animation state as a string.
   */
  startAnimation(state) {
    console.log(state);
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  /**
   * @method resetAnimationState resets the animation state to 
   *              an empty string.
   */
  resetAnimationState() {
    this.animationState = '';
  }

}
