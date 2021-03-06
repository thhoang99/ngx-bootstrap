/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class CarouselConfig {
    constructor() {
        /**
         * Default interval of auto changing of slides
         */
        this.interval = 5000;
        /**
         * Is loop of auto changing of slides can be paused
         */
        this.noPause = false;
        /**
         * Is slides can wrap from the last to the first slide
         */
        this.noWrap = false;
        /**
         * Show carousel-indicators
         */
        this.showIndicators = true;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
            of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
    }
}
CarouselConfig.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * Default interval of auto changing of slides
     * @type {?}
     */
    CarouselConfig.prototype.interval;
    /**
     * Is loop of auto changing of slides can be paused
     * @type {?}
     */
    CarouselConfig.prototype.noPause;
    /**
     * Is slides can wrap from the last to the first slide
     * @type {?}
     */
    CarouselConfig.prototype.noWrap;
    /**
     * Show carousel-indicators
     * @type {?}
     */
    CarouselConfig.prototype.showIndicators;
    /** @type {?} */
    CarouselConfig.prototype.itemsPerSlide;
    /** @type {?} */
    CarouselConfig.prototype.singleSlideOffset;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sY0FBYztJQUQzQjs7OztRQUdFLGFBQVEsR0FBRyxJQUFJLENBQUM7Ozs7UUFHaEIsWUFBTyxHQUFHLEtBQUssQ0FBQzs7OztRQUdoQixXQUFNLEdBQUcsS0FBSyxDQUFDOzs7O1FBR2YsbUJBQWMsR0FBRyxJQUFJLENBQUM7O1FBR3RCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDOzs7UUFJbEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7OztZQXBCQSxVQUFVOzs7Ozs7O0lBR1Qsa0NBQWdCOzs7OztJQUdoQixpQ0FBZ0I7Ozs7O0lBR2hCLGdDQUFlOzs7OztJQUdmLHdDQUFzQjs7SUFHdEIsdUNBQWtCOztJQUlsQiwyQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbmZpZyB7XG4gIC8qKiBEZWZhdWx0IGludGVydmFsIG9mIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzICovXG4gIGludGVydmFsID0gNTAwMDtcblxuICAvKiogSXMgbG9vcCBvZiBhdXRvIGNoYW5naW5nIG9mIHNsaWRlcyBjYW4gYmUgcGF1c2VkICovXG4gIG5vUGF1c2UgPSBmYWxzZTtcblxuICAvKiogSXMgc2xpZGVzIGNhbiB3cmFwIGZyb20gdGhlIGxhc3QgdG8gdGhlIGZpcnN0IHNsaWRlICovXG4gIG5vV3JhcCA9IGZhbHNlO1xuXG4gIC8qKiBTaG93IGNhcm91c2VsLWluZGljYXRvcnMgKi9cbiAgc2hvd0luZGljYXRvcnMgPSB0cnVlO1xuXG4gIC8qIElmIHZhbHVlIG1vcmUgdGhlbiAxIOKAlCBjYXJvdXNlbCB3b3JrcyBpbiBtdWx0aWxpc3QgbW9kZSAqL1xuICBpdGVtc1BlclNsaWRlID0gMTtcblxuICAvKiBJZiBgdHJ1ZWAg4oCUIGNhcm91c2VsIHNoaWZ0cyBieSBvbmUgZWxlbWVudC4gQnkgZGVmYXVsdCBjYXJvdXNlbCBzaGlmdHMgYnkgbnVtYmVyXG4gICAgb2YgdmlzaWJsZSBlbGVtZW50cyAoaXRlbXNQZXJTbGlkZSBmaWVsZCkgKi9cbiAgc2luZ2xlU2xpZGVPZmZzZXQgPSBmYWxzZTtcbn1cbiJdfQ==