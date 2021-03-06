import { __spread } from 'tslib';
import { isBs3, LinkedList } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';
import { Injectable, Component, EventEmitter, Input, NgZone, Output, HostBinding, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = [1, "carousel", "slide", 3, "mouseenter", "mouseleave", "mouseup"];
const _c1 = ["class", "carousel-indicators", 4, "ngIf"];
const _c2 = [1, "carousel-inner", 3, "ngStyle"];
const _c3 = ["class", "left carousel-control carousel-control-prev", 3, "disabled", "click", 4, "ngIf"];
const _c4 = ["class", "right carousel-control carousel-control-next", 3, "disabled", "click", 4, "ngIf"];
const _c5 = [1, "carousel-indicators"];
const _c6 = [3, "active", "click", 4, "ngFor", "ngForOf"];
const _c7 = [3, "click"];
const _c8 = ["active"];
function CarouselComponent_ol_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "li", _c7);
    ɵngcc0.ΔelementStyling(_c8);
    ɵngcc0.Δlistener("click", function CarouselComponent_ol_1_li_1_Template_li_click_0_listener($event) { ɵngcc0.ΔrestoreView(_r12); const i_r10 = ctx.index; const ctx_r11 = ɵngcc0.ΔnextContext(2); return ctx_r11.selectSlide(i_r10); });
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const slidez_r9 = ctx.$implicit;
    ɵngcc0.ΔelementClassProp(0, 0, (slidez_r9.active === true));
    ɵngcc0.ΔelementStylingApply(0);
} }
function CarouselComponent_ol_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ΔelementStart(0, "ol", _c5);
    ɵngcc0.Δtemplate(1, CarouselComponent_ol_1_li_1_Template, 1, 0, "li", _c6);
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ΔnextContext();
    ɵngcc0.Δselect(1);
    ɵngcc0.Δproperty("ngForOf", ctx_r5.slides);
} }
const _c9 = [1, "left", "carousel-control", "carousel-control-prev", 3, "click"];
const _c10 = ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"];
const _c11 = ["class", "sr-only", 4, "ngIf"];
const _c12 = [1, "sr-only"];
function CarouselComponent_a_4_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ΔelementStart(0, "span", _c12);
    ɵngcc0.Δtext(1, "Previous");
    ɵngcc0.ΔelementEnd();
} }
const _c13 = ["disabled"];
function CarouselComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "a", _c9);
    ɵngcc0.ΔelementStyling(_c13);
    ɵngcc0.Δlistener("click", function CarouselComponent_a_4_Template_a_click_0_listener($event) { ɵngcc0.ΔrestoreView(_r15); const ctx_r14 = ɵngcc0.ΔnextContext(); return ctx_r14.previousSlide(); });
    ɵngcc0.Δelement(1, "span", _c10);
    ɵngcc0.Δtemplate(2, CarouselComponent_a_4_span_2_Template, 2, 0, "span", _c11);
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ΔnextContext();
    ɵngcc0.ΔelementClassProp(0, 0, ((ctx_r6.activeSlide === 0) && ctx_r6.noWrap));
    ɵngcc0.ΔelementStylingApply(0);
    ɵngcc0.Δselect(2);
    ɵngcc0.Δproperty("ngIf", ctx_r6.isBs4);
} }
const _c14 = [1, "right", "carousel-control", "carousel-control-next", 3, "click"];
const _c15 = ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"];
function CarouselComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "a", _c14);
    ɵngcc0.ΔelementStyling(_c13);
    ɵngcc0.Δlistener("click", function CarouselComponent_a_5_Template_a_click_0_listener($event) { ɵngcc0.ΔrestoreView(_r17); const ctx_r16 = ɵngcc0.ΔnextContext(); return ctx_r16.nextSlide(); });
    ɵngcc0.Δelement(1, "span", _c15);
    ɵngcc0.ΔelementStart(2, "span", _c12);
    ɵngcc0.Δtext(3, "Next");
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ΔnextContext();
    ɵngcc0.ΔelementClassProp(0, 0, (ctx_r7.isLast(ctx_r7.activeSlide) && ctx_r7.noWrap));
    ɵngcc0.ΔelementStylingApply(0);
} }
const _c16 = function (a0) { return { "display": a0 }; };
const _c17 = [];
const _c18 = ["item", "carousel-item", "active"];
const _c19 = ["width", "order"];
const _c20 = [1, "item"];
var CarouselConfig = /** @class */ (function () {
    function CarouselConfig() {
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
CarouselConfig.ngInjectableDef = ɵngcc0.ΔdefineInjectable({ token: CarouselConfig, factory: function CarouselConfig_Factory(t) { return new (t || CarouselConfig)(); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(CarouselConfig, [{
        type: Injectable
    }], function () { return []; }, { interval: [], noPause: [], noWrap: [], showIndicators: [], itemsPerSlide: [], singleSlideOffset: [] });
    return CarouselConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @template T
 * @param {?} array The source array to search in
 * @param {?} predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 * @return {?}
 */
function findLastIndex(array, predicate) {
    /** @type {?} */
    var l = array.length;
    while (l--) {
        if (predicate(array[l], l, array)) {
            return l;
        }
    }
    return -1;
}
/**
 * @template T
 * @param {?} array
 * @param {?} size
 * @return {?}
 */
function chunkByNumber(array, size) {
    /** @type {?} */
    var out = [];
    /** @type {?} */
    var n = Math.ceil((array.length) / size);
    /** @type {?} */
    var i = 0;
    while (i < n) {
        /** @type {?} */
        var chunk = array.splice(0, (i === n - 1) && size < array.length ? array.length : size);
        out.push(chunk);
        i++;
    }
    return out;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var Direction = {
    UNKNOWN: 0,
    NEXT: 1,
    PREV: 2,
};
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config, ngZone) {
        this.ngZone = ngZone;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
             of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new EventEmitter(false);
        /**
         * Will be emitted when active slides has been changed in multilist mode
         */
        this.slideRangeChange = new EventEmitter();
        /* Index to start display slides from it */
        this.startFromIndex = 0;
        this._slides = new LinkedList();
        this._currentVisibleSlidesIndex = 0;
        this.destroyed = false;
        this.getActive = function (slide) { return slide.active; };
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentActiveSlide;
        },
        /** Index of currently displayed slide(started for 0) */
        set: /**
         * Index of currently displayed slide(started for 0)
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this.multilist) {
                return;
            }
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle
         * automatically.
         */
        get: /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle
         * automatically.
         * @return {?}
         */
        function () {
            return this._interval;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: /**
         * @return {?}
         */
        function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (_this.multilist) {
                _this._chunkedSlides = chunkByNumber(_this.mapSlidesAndIndexes(), _this.itemsPerSlide);
                _this.selectInitialSlides();
            }
        }, 0);
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.addSlide = /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        this._slides.add(slide);
        if (this.multilist && this._slides.length <= this.itemsPerSlide) {
            slide.active = true;
        }
        if (!this.multilist && this._slides.length === 1) {
            this._currentActiveSlide = undefined;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.removeSlide = /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        var _this = this;
        /** @type {?} */
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            /** @type {?} */
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            /** @type {?} */
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.nextSlide = /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        this.move(Direction.NEXT, force);
    };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.previousSlide = /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        this.move(Direction.PREV, force);
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.getFirstVisibleIndex = /**
     * @return {?}
     */
    function () {
        return this.slides.findIndex(this.getActive);
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.getLastVisibleIndex = /**
     * @return {?}
     */
    function () {
        return findLastIndex(this.slides, this.getActive);
    };
    /**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.move = /**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */
    function (direction, force) {
        if (force === void 0) { force = false; }
        /** @type {?} */
        var firstVisibleIndex = this.getFirstVisibleIndex();
        /** @type {?} */
        var lastVisibleIndex = this.getLastVisibleIndex();
        if (this.noWrap) {
            if (direction === Direction.NEXT &&
                this.isLast(lastVisibleIndex) ||
                direction === Direction.PREV &&
                    firstVisibleIndex === 0) {
                return;
            }
        }
        if (!this.multilist) {
            this.activeSlide = this.findNextSlideIndex(direction, force);
        }
        else {
            this.moveMultilist(direction);
        }
    };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlide = /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (!this.multilist) {
            this.activeSlide = index;
        }
        else {
            this.selectSlideRange(index);
        }
    };
    /**
     * Starts a auto changing of slides
     */
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.play = /**
     * Starts a auto changing of slides
     * @return {?}
     */
    function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     */
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.pause = /**
     * Stops a auto changing of slides
     * @return {?}
     */
    function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     */
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    function () {
        return this._slides.findIndex(this.getActive);
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     */
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isLast = /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines, whether the specified index is first in collection
     * @param index
     */
    /**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isFirst = /**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index === 0;
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.selectInitialSlides = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var startIndex = this.startFromIndex <= this._slides.length
            ? this.startFromIndex
            : 0;
        this.hideSlides();
        if (this.singleSlideOffset) {
            this._slidesWithIndexes = this.mapSlidesAndIndexes();
            if (this._slides.length - startIndex < this.itemsPerSlide) {
                /** @type {?} */
                var slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);
                this._slidesWithIndexes = __spread(this._slidesWithIndexes, slidesToAppend).slice(slidesToAppend.length)
                    .slice(0, this.itemsPerSlide);
            }
            else {
                this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
            }
            this._slidesWithIndexes.forEach(function (slide) { return slide.item.active = true; });
            this.makeSlidesConsistent();
        }
        else {
            this.selectRangeByNestedIndex(startIndex);
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    };
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
     *   return undefined if next slide require wrapping
     */
    /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    CarouselComponent.prototype.findNextSlideIndex = /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    function (direction, force) {
        /** @type {?} */
        var nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return undefined;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.mapSlidesAndIndexes = /**
     * @private
     * @return {?}
     */
    function () {
        return this.slides
            .slice()
            .map(function (slide, index) {
            return {
                index: index,
                item: slide
            };
        });
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlideRange = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.isIndexInRange(index)) {
            return;
        }
        this.hideSlides();
        if (!this.singleSlideOffset) {
            this.selectRangeByNestedIndex(index);
        }
        else {
            /** @type {?} */
            var startIndex = this.isIndexOnTheEdges(index)
                ? index
                : index - this.itemsPerSlide + 1;
            /** @type {?} */
            var endIndex = this.isIndexOnTheEdges(index)
                ? index + this.itemsPerSlide
                : index + 1;
            this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
            this.makeSlidesConsistent();
            this._slidesWithIndexes.forEach(function (slide) { return slide.item.active = true; });
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectRangeByNestedIndex = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var selectedRange = this._chunkedSlides
            .map(function (slidesList, i) {
            return {
                index: i,
                list: slidesList
            };
        })
            .find(function (slidesList) {
            return slidesList.list.find(function (slide) { return slide.index === index; }) !== undefined;
        });
        this._currentVisibleSlidesIndex = selectedRange.index;
        this._chunkedSlides[selectedRange.index].forEach(function (slide) {
            slide.item.active = true;
        });
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isIndexOnTheEdges = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return (index + 1 - this.itemsPerSlide <= 0 ||
            index + this.itemsPerSlide <= this._slides.length);
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isIndexInRange = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.singleSlideOffset) {
            /** @type {?} */
            var visibleIndexes = this._slidesWithIndexes.map(function (slide) { return slide.index; });
            return visibleIndexes.indexOf(index) >= 0;
        }
        return (index <= this.getLastVisibleIndex() &&
            index >= this.getFirstVisibleIndex());
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.hideSlides = /**
     * @private
     * @return {?}
     */
    function () {
        this.slides.forEach(function (slide) { return slide.active = false; });
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.isVisibleSlideListLast = /**
     * @private
     * @return {?}
     */
    function () {
        return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.isVisibleSlideListFirst = /**
     * @private
     * @return {?}
     */
    function () {
        return this._currentVisibleSlidesIndex === 0;
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    CarouselComponent.prototype.moveSliderByOneItem = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        /** @type {?} */
        var firstVisibleIndex;
        /** @type {?} */
        var lastVisibleIndex;
        /** @type {?} */
        var indexToHide;
        /** @type {?} */
        var indexToShow;
        if (this.noWrap) {
            firstVisibleIndex = this.getFirstVisibleIndex();
            lastVisibleIndex = this.getLastVisibleIndex();
            indexToHide = direction === Direction.NEXT
                ? firstVisibleIndex
                : lastVisibleIndex;
            indexToShow = direction !== Direction.NEXT
                ? firstVisibleIndex - 1
                : !this.isLast(lastVisibleIndex)
                    ? lastVisibleIndex + 1 : 0;
            this._slides.get(indexToHide).active = false;
            this._slides.get(indexToShow).active = true;
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
        else {
            /** @type {?} */
            var displayedIndex = void 0;
            firstVisibleIndex = this._slidesWithIndexes[0].index;
            lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;
            if (direction === Direction.NEXT) {
                this._slidesWithIndexes.shift();
                displayedIndex = this.isLast(lastVisibleIndex)
                    ? 0
                    : lastVisibleIndex + 1;
                this._slidesWithIndexes.push({
                    index: displayedIndex,
                    item: this._slides.get(displayedIndex)
                });
            }
            else {
                this._slidesWithIndexes.pop();
                displayedIndex = this.isFirst(firstVisibleIndex)
                    ? this._slides.length - 1
                    : firstVisibleIndex - 1;
                this._slidesWithIndexes = __spread([{
                        index: displayedIndex,
                        item: this._slides.get(displayedIndex)
                    }], this._slidesWithIndexes);
            }
            this.makeSlidesConsistent();
            this.hideSlides();
            this._slidesWithIndexes.forEach(function (slide) { return slide.item.active = true; });
            this.slideRangeChange.emit(this._slidesWithIndexes.map(function (slide) { return slide.index; }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.makeSlidesConsistent = /**
     * @private
     * @return {?}
     */
    function () {
        this._slidesWithIndexes.forEach(function (slide, index) {
            slide.item.order = index;
        });
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    CarouselComponent.prototype.moveMultilist = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        if (this.singleSlideOffset) {
            this.moveSliderByOneItem(direction);
        }
        else {
            this.hideSlides();
            if (this.noWrap) {
                this._currentVisibleSlidesIndex = direction === Direction.NEXT
                    ? this._currentVisibleSlidesIndex + 1
                    : this._currentVisibleSlidesIndex - 1;
            }
            else {
                if (direction === Direction.NEXT) {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListLast()
                        ? 0
                        : this._currentVisibleSlidesIndex + 1;
                }
                else {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListFirst()
                        ? this._chunkedSlides.length - 1
                        : this._currentVisibleSlidesIndex - 1;
                }
            }
            this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(function (slide) { return slide.item.active = true; });
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.getVisibleIndexes = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.singleSlideOffset) {
            return this._chunkedSlides[this._currentVisibleSlidesIndex]
                .map(function (slide) { return slide.index; });
        }
        else {
            return this._slidesWithIndexes.map(function (slide) { return slide.index; });
        }
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     */
    /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype._select = /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        if (!this.multilist) {
            /** @type {?} */
            var currentSlide = this._slides.get(this._currentActiveSlide);
            if (currentSlide) {
                currentSlide.active = false;
            }
        }
        /** @type {?} */
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     */
    /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.restartTimer = /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.resetTimer();
        /** @type {?} */
        var interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular(function () {
                return setInterval(function () {
                    /** @type {?} */
                    var nInterval = +_this.interval;
                    _this.ngZone.run(function () {
                        if (_this.isPlaying &&
                            !isNaN(_this.interval) &&
                            nInterval > 0 &&
                            _this.slides.length) {
                            _this.nextSlide();
                        }
                        else {
                            _this.pause();
                        }
                    });
                }, interval);
            });
        }
    };
    Object.defineProperty(CarouselComponent.prototype, "multilist", {
        get: /**
         * @return {?}
         */
        function () {
            return this.itemsPerSlide > 1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Stops loop of auto changing of slides
     */
    /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.resetTimer = /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
    function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: CarouselConfig },
        { type: NgZone }
    ]; };
    CarouselComponent.propDecorators = {
        noWrap: [{ type: Input }],
        noPause: [{ type: Input }],
        showIndicators: [{ type: Input }],
        itemsPerSlide: [{ type: Input }],
        singleSlideOffset: [{ type: Input }],
        activeSlideChange: [{ type: Output }],
        slideRangeChange: [{ type: Output }],
        activeSlide: [{ type: Input }],
        startFromIndex: [{ type: Input }],
        interval: [{ type: Input }]
    };
CarouselComponent.ngComponentDef = ɵngcc0.ΔdefineComponent({ type: CarouselComponent, selectors: [["carousel"]], factory: function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(ɵngcc0.ΔdirectiveInject(CarouselConfig), ɵngcc0.ΔdirectiveInject(NgZone)); }, inputs: { itemsPerSlide: "itemsPerSlide", singleSlideOffset: "singleSlideOffset", startFromIndex: "startFromIndex", activeSlide: "activeSlide", interval: "interval", noWrap: "noWrap", noPause: "noPause", showIndicators: "showIndicators" }, outputs: { activeSlideChange: "activeSlideChange", slideRangeChange: "slideRangeChange" }, ngContentSelectors: _c17, consts: 6, vars: 6, template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ΔprojectionDef();
        ɵngcc0.ΔelementStart(0, "div", _c0);
        ɵngcc0.Δlistener("mouseenter", function CarouselComponent_Template_div_mouseenter_0_listener($event) { return ctx.pause(); });
        ɵngcc0.Δlistener("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener($event) { return ctx.play(); });
        ɵngcc0.Δlistener("mouseup", function CarouselComponent_Template_div_mouseup_0_listener($event) { return ctx.play(); });
        ɵngcc0.Δtemplate(1, CarouselComponent_ol_1_Template, 2, 1, "ol", _c1);
        ɵngcc0.ΔelementStart(2, "div", _c2);
        ɵngcc0.Δprojection(3);
        ɵngcc0.ΔelementEnd();
        ɵngcc0.Δtemplate(4, CarouselComponent_a_4_Template, 3, 1, "a", _c3);
        ɵngcc0.Δtemplate(5, CarouselComponent_a_5_Template, 4, 0, "a", _c4);
        ɵngcc0.ΔelementEnd();
    } if (rf & 2) {
        ɵngcc0.Δselect(1);
        ɵngcc0.Δproperty("ngIf", (ctx.showIndicators && (ctx.slides.length > 1)));
        ɵngcc0.Δselect(2);
        ɵngcc0.Δproperty("ngStyle", ɵngcc0.ΔpureFunction1(4, _c16, (ctx.multilist ? "flex" : "block")));
        ɵngcc0.Δselect(4);
        ɵngcc0.Δproperty("ngIf", (ctx.slides.length > 1));
        ɵngcc0.Δselect(5);
        ɵngcc0.Δproperty("ngIf", (ctx.slides.length > 1));
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc1.NgForOf], encapsulation: 2 });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(CarouselComponent, [{
        type: Component,
        args: [{
                selector: 'carousel',
                template: "<div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel slide\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\n  </ol>\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\"><ng-content></ng-content></div>\n  <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\"  [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n\n"
            }]
    }], function () { return [{ type: CarouselConfig }, { type: NgZone }]; }, { ngZone: [], itemsPerSlide: [{
            type: Input
        }], singleSlideOffset: [{
            type: Input
        }], activeSlideChange: [{
            type: Output
        }], slideRangeChange: [{
            type: Output
        }], startFromIndex: [{
            type: Input
        }], _slides: [], _currentVisibleSlidesIndex: [], destroyed: [], getActive: [], activeSlide: [{
            type: Input
        }], activeSlide: [], interval: [{
            type: Input
        }], interval: [], slides: [], isBs4: [], ngAfterViewInit: [], ngOnDestroy: [], addSlide: [], _currentActiveSlide: [], removeSlide: [], nextSlide: [], previousSlide: [], getFirstVisibleIndex: [], getLastVisibleIndex: [], move: [], selectSlide: [], play: [], isPlaying: [], pause: [], getCurrentSlideIndex: [], isLast: [], isFirst: [], selectInitialSlides: [], _slidesWithIndexes: [], findNextSlideIndex: [], mapSlidesAndIndexes: [], selectSlideRange: [], selectRangeByNestedIndex: [], isIndexOnTheEdges: [], isIndexInRange: [], hideSlides: [], isVisibleSlideListLast: [], isVisibleSlideListFirst: [], moveSliderByOneItem: [], makeSlidesConsistent: [], moveMultilist: [], getVisibleIndexes: [], _select: [], restartTimer: [], currentInterval: [], multilist: [], resetTimer: [], noWrap: [{
            type: Input
        }], noPause: [{
            type: Input
        }], showIndicators: [{
            type: Input
        }] });
    return CarouselComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SlideComponent = /** @class */ (function () {
    function SlideComponent(carousel) {
        this.itemWidth = '100%';
        this.order = 0;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnInit = /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    function () {
        this.carousel.addSlide(this);
        this.itemWidth = 100 / this.carousel.itemsPerSlide + "%";
    };
    /** Fires changes in container collection after removing of this slide instance */
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnDestroy = /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    function () {
        this.carousel.removeSlide(this);
    };
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: CarouselComponent }
    ]; };
    SlideComponent.propDecorators = {
        active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
        itemWidth: [{ type: HostBinding, args: ['style.width',] }],
        order: [{ type: HostBinding, args: ['style.order',] }],
        addClass: [{ type: HostBinding, args: ['class.item',] }, { type: HostBinding, args: ['class.carousel-item',] }]
    };
SlideComponent.ngComponentDef = ɵngcc0.ΔdefineComponent({ type: SlideComponent, selectors: [["slide"]], factory: function SlideComponent_Factory(t) { return new (t || SlideComponent)(ɵngcc0.ΔdirectiveInject(CarouselComponent)); }, hostBindings: function SlideComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵngcc0.ΔallocHostVars(1);
        ɵngcc0.ΔelementHostStyling(_c18, _c19);
    } if (rf & 2) {
        ɵngcc0.ΔelementAttribute(elIndex, "aria-hidden", ɵngcc0.Δbind(!ctx.active));
        ɵngcc0.ΔelementHostStyleProp(0, ctx.itemWidth);
        ɵngcc0.ΔelementHostStyleProp(1, ctx.order);
        ɵngcc0.ΔelementHostClassProp(0, ctx.addClass);
        ɵngcc0.ΔelementHostClassProp(1, ctx.addClass);
        ɵngcc0.ΔelementHostClassProp(2, ctx.active);
        ɵngcc0.ΔelementHostStylingApply();
    } }, inputs: { active: "active" }, ngContentSelectors: _c17, consts: 2, vars: 0, template: function SlideComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ΔprojectionDef();
        ɵngcc0.ΔelementStart(0, "div", _c20);
        ɵngcc0.ΔelementStyling(_c8);
        ɵngcc0.Δprojection(1);
        ɵngcc0.ΔelementEnd();
    } if (rf & 2) {
        ɵngcc0.ΔelementClassProp(0, 0, ctx.active);
        ɵngcc0.ΔelementStylingApply(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(SlideComponent, [{
        type: Component,
        args: [{
                selector: 'slide',
                template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",
                host: {
                    '[attr.aria-hidden]': '!active'
                }
            }]
    }], function () { return [{ type: CarouselComponent }]; }, { itemWidth: [{
            type: HostBinding,
            args: ['style.width']
        }], order: [{
            type: HostBinding,
            args: ['style.order']
        }], addClass: [{
            type: HostBinding,
            args: ['class.item']
        }, {
            type: HostBinding,
            args: ['class.carousel-item']
        }], carousel: [], ngOnInit: [], ngOnDestroy: [], active: [{
            type: HostBinding,
            args: ['class.active']
        }, {
            type: Input
        }] });
    return SlideComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    /**
     * @return {?}
     */
    CarouselModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: CarouselModule, providers: [] };
    };
CarouselModule.ngModuleDef = ɵngcc0.ΔdefineNgModule({ type: CarouselModule });
/*@__PURE__*/ ɵngcc0.ΔsetNgModuleScope(CarouselModule, { declarations: function () { return [SlideComponent,
        CarouselComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [SlideComponent,
        CarouselComponent]; } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(CarouselModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [SlideComponent, CarouselComponent],
                exports: [SlideComponent, CarouselComponent],
                providers: [CarouselConfig]
            }]
    }], function () { return []; }, null);
CarouselModule.ngInjectorDef = ɵngcc0.ΔdefineInjector({ factory: function CarouselModule_Factory(t) { return new (t || CarouselModule)(); }, providers: [CarouselConfig], imports: [[CommonModule]] });
    return CarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CarouselComponent, CarouselModule, SlideComponent, CarouselConfig };

//# sourceMappingURL=ngx-bootstrap-carousel.js.map