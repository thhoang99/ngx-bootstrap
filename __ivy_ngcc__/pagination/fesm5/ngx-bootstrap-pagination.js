import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Injectable, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides default values for Pagination and pager components
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = [1, "pager"];
const _c1 = [3, "ngClass"];
const _c2 = ["href", "", 3, "click"];
const _c3 = ["disabled", "previous"];
const _c4 = ["disabled", "next"];
const _c5 = function (a0, a1) { return { "pull-right": a0, "float-right": a1 }; };
const _c6 = [1, "pagination", 3, "ngClass"];
const _c7 = ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"];
const _c8 = ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"];
const _c9 = ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"];
const _c10 = ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"];
const _c11 = ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"];
const _c12 = [1, "pagination-first", "page-item"];
const _c13 = ["href", "", 1, "page-link", 3, "innerHTML", "click"];
const _c14 = ["disabled"];
function PaginationComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "li", _c12);
    ɵngcc0.ΔelementStyling(_c14);
    ɵngcc0.ΔelementStart(1, "a", _c13);
    ɵngcc0.Δlistener("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) { ɵngcc0.ΔrestoreView(_r24); const ctx_r23 = ɵngcc0.ΔnextContext(); return ctx_r23.selectPage(1, $event); });
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵngcc0.ΔnextContext();
    ɵngcc0.ΔelementClassProp(0, 0, (ctx_r18.noPrevious() || ctx_r18.disabled));
    ɵngcc0.ΔelementStylingApply(0);
    ɵngcc0.Δselect(1);
    ɵngcc0.Δproperty("innerHTML", ctx_r18.getText("first"), ɵngcc0.ΔsanitizeHtml);
} }
const _c15 = [1, "pagination-prev", "page-item"];
function PaginationComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "li", _c15);
    ɵngcc0.ΔelementStyling(_c14);
    ɵngcc0.ΔelementStart(1, "a", _c13);
    ɵngcc0.Δlistener("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) { ɵngcc0.ΔrestoreView(_r26); const ctx_r25 = ɵngcc0.ΔnextContext(); return ctx_r25.selectPage((ctx_r25.page - 1), $event); });
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r19 = ɵngcc0.ΔnextContext();
    ɵngcc0.ΔelementClassProp(0, 0, (ctx_r19.noPrevious() || ctx_r19.disabled));
    ɵngcc0.ΔelementStylingApply(0);
    ɵngcc0.Δselect(1);
    ɵngcc0.Δproperty("innerHTML", ctx_r19.getText("previous"), ɵngcc0.ΔsanitizeHtml);
} }
const _c16 = [1, "pagination-page", "page-item"];
const _c17 = ["active", "disabled"];
function PaginationComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "li", _c16);
    ɵngcc0.ΔelementStyling(_c17);
    ɵngcc0.ΔelementStart(1, "a", _c13);
    ɵngcc0.Δlistener("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) { ɵngcc0.ΔrestoreView(_r29); const pg_r27 = ctx.$implicit; const ctx_r28 = ɵngcc0.ΔnextContext(); return ctx_r28.selectPage(pg_r27.number, $event); });
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const pg_r27 = ctx.$implicit;
    const ctx_r20 = ɵngcc0.ΔnextContext();
    ɵngcc0.ΔelementClassProp(0, 0, pg_r27.active);
    ɵngcc0.ΔelementClassProp(0, 1, (ctx_r20.disabled && !pg_r27.active));
    ɵngcc0.ΔelementStylingApply(0);
    ɵngcc0.Δselect(1);
    ɵngcc0.Δproperty("innerHTML", pg_r27.text, ɵngcc0.ΔsanitizeHtml);
} }
const _c18 = [1, "pagination-next", "page-item"];
function PaginationComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "li", _c18);
    ɵngcc0.ΔelementStyling(_c14);
    ɵngcc0.ΔelementStart(1, "a", _c13);
    ɵngcc0.Δlistener("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) { ɵngcc0.ΔrestoreView(_r31); const ctx_r30 = ɵngcc0.ΔnextContext(); return ctx_r30.selectPage((ctx_r30.page + 1), $event); });
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r21 = ɵngcc0.ΔnextContext();
    ɵngcc0.ΔelementClassProp(0, 0, (ctx_r21.noNext() || ctx_r21.disabled));
    ɵngcc0.ΔelementStylingApply(0);
    ɵngcc0.Δselect(1);
    ɵngcc0.Δproperty("innerHTML", ctx_r21.getText("next"), ɵngcc0.ΔsanitizeHtml);
} }
const _c19 = [1, "pagination-last", "page-item"];
function PaginationComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "li", _c19);
    ɵngcc0.ΔelementStyling(_c14);
    ɵngcc0.ΔelementStart(1, "a", _c13);
    ɵngcc0.Δlistener("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) { ɵngcc0.ΔrestoreView(_r33); const ctx_r32 = ɵngcc0.ΔnextContext(); return ctx_r32.selectPage(ctx_r32.totalPages, $event); });
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r22 = ɵngcc0.ΔnextContext();
    ɵngcc0.ΔelementClassProp(0, 0, (ctx_r22.noNext() || ctx_r22.disabled));
    ɵngcc0.ΔelementStylingApply(0);
    ɵngcc0.Δselect(1);
    ɵngcc0.Δproperty("innerHTML", ctx_r22.getText("last"), ɵngcc0.ΔsanitizeHtml);
} }
var PaginationConfig = /** @class */ (function () {
    function PaginationConfig() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
PaginationConfig.ngInjectableDef = ɵngcc0.ΔdefineInjectable({ token: PaginationConfig, factory: function PaginationConfig_Factory(t) { return new (t || PaginationConfig)(); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(PaginationConfig, [{
        type: Injectable
    }], function () { return []; }, { main: [], pager: [] });
    return PaginationConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return PagerComponent; }),
    multi: true
};
var PagerComponent = /** @class */ (function () {
    function PagerComponent(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new EventEmitter();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    Object.defineProperty(PagerComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */
        function () {
            return this._itemsPerPage;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: /**
         * total number of items in all pages
         * @return {?}
         */
        function () {
            return this._totalItems;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalPages", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalPages;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    PagerComponent.prototype.configureOptions = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = Object.assign({}, config);
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PagerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    PagerComponent.prototype.getText = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        // tslint:disable-next-line:no-any
        return ((/** @type {?} */ (this)))[key + "Text"] || ((/** @type {?} */ (this))).config[key + "Text"];
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.noPrevious = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.noNext = /**
     * @return {?}
     */
    function () {
        return this.page === this.totalPages;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PagerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PagerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    PagerComponent.prototype.selectPage = /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                /** @type {?} */
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    PagerComponent.prototype.makePage = 
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    PagerComponent.prototype.getPages = /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    function (currentPage, totalPages) {
        /** @type {?} */
        var pages = [];
        // Default page limits
        /** @type {?} */
        var startPage = 1;
        /** @type {?} */
        var endPage = totalPages;
        /** @type {?} */
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            /** @type {?} */
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                /** @type {?} */
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                /** @type {?} */
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    // base class
    /**
     * @protected
     * @return {?}
     */
    PagerComponent.prototype.calculateTotalPages = 
    // base class
    /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    /** @nocollapse */
    PagerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: PaginationConfig },
        { type: ChangeDetectorRef }
    ]; };
    PagerComponent.propDecorators = {
        align: [{ type: Input }],
        maxSize: [{ type: Input }],
        boundaryLinks: [{ type: Input }],
        directionLinks: [{ type: Input }],
        firstText: [{ type: Input }],
        previousText: [{ type: Input }],
        nextText: [{ type: Input }],
        lastText: [{ type: Input }],
        rotate: [{ type: Input }],
        pageBtnClass: [{ type: Input }],
        disabled: [{ type: Input }],
        numPages: [{ type: Output }],
        pageChanged: [{ type: Output }],
        itemsPerPage: [{ type: Input }],
        totalItems: [{ type: Input }]
    };
PagerComponent.ngComponentDef = ɵngcc0.ΔdefineComponent({ type: PagerComponent, selectors: [["pager"]], factory: function PagerComponent_Factory(t) { return new (t || PagerComponent)(ɵngcc0.ΔdirectiveInject(ElementRef), ɵngcc0.ΔdirectiveInject(PaginationConfig), ɵngcc0.ΔdirectiveInject(ChangeDetectorRef)); }, inputs: { itemsPerPage: "itemsPerPage", totalItems: "totalItems", maxSize: "maxSize", rotate: "rotate", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", pageBtnClass: "pageBtnClass", align: "align", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", disabled: "disabled" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [ɵngcc0.ΔProvidersFeature([PAGER_CONTROL_VALUE_ACCESSOR])], consts: 7, vars: 12, template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ΔelementStart(0, "ul", _c0);
        ɵngcc0.ΔelementStart(1, "li", _c1);
        ɵngcc0.ΔelementStyling(_c3);
        ɵngcc0.ΔelementStart(2, "a", _c2);
        ɵngcc0.Δlistener("click", function PagerComponent_Template_a_click_2_listener($event) { return ctx.selectPage((ctx.page - 1), $event); });
        ɵngcc0.Δtext(3);
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementStart(4, "li", _c1);
        ɵngcc0.ΔelementStyling(_c4);
        ɵngcc0.ΔelementStart(5, "a", _c2);
        ɵngcc0.Δlistener("click", function PagerComponent_Template_a_click_5_listener($event) { return ctx.selectPage((ctx.page + 1), $event); });
        ɵngcc0.Δtext(6);
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementEnd();
    } if (rf & 2) {
        ɵngcc0.ΔelementStylingMap(1, ɵngcc0.Δinterpolation1("", ctx.pageBtnClass, ""));
        ɵngcc0.ΔelementClassProp(1, 0, ctx.noPrevious());
        ɵngcc0.ΔelementClassProp(1, 1, ctx.align);
        ɵngcc0.ΔelementStylingApply(1);
        ɵngcc0.Δselect(1);
        ɵngcc0.Δproperty("ngClass", ɵngcc0.ΔpureFunction2(6, _c5, ctx.align, ctx.align));
        ɵngcc0.Δselect(3);
        ɵngcc0.ΔtextBinding(3, ɵngcc0.Δinterpolation1("", ctx.getText("previous"), ""));
        ɵngcc0.ΔelementStylingMap(4, ɵngcc0.Δinterpolation1("", ctx.pageBtnClass, ""));
        ɵngcc0.ΔelementClassProp(4, 0, ctx.noNext());
        ɵngcc0.ΔelementClassProp(4, 1, ctx.align);
        ɵngcc0.ΔelementStylingApply(4);
        ɵngcc0.Δselect(4);
        ɵngcc0.Δproperty("ngClass", ɵngcc0.ΔpureFunction2(9, _c5, ctx.align, ctx.align));
        ɵngcc0.Δselect(6);
        ɵngcc0.ΔtextBinding(6, ɵngcc0.Δinterpolation1("", ctx.getText("next"), ""));
    } }, directives: [ɵngcc1.NgClass], encapsulation: 2 });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(PagerComponent, [{
        type: Component,
        args: [{
                selector: 'pager',
                template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
                providers: [PAGER_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: ElementRef }, { type: PaginationConfig }, { type: ChangeDetectorRef }]; }, { elementRef: [], changeDetection: [], numPages: [{
            type: Output
        }], pageChanged: [{
            type: Output
        }], onChange: [], onTouched: [], inited: [], _page: [], itemsPerPage: [{
            type: Input
        }], itemsPerPage: [], totalItems: [{
            type: Input
        }], totalItems: [], totalPages: [], totalPages: [], page: [], page: [], configureOptions: [], config: [], ngOnInit: [], classMap: [], maxSize: [{
            type: Input
        }], rotate: [{
            type: Input
        }], boundaryLinks: [{
            type: Input
        }], directionLinks: [{
            type: Input
        }], pageBtnClass: [{
            type: Input
        }], pages: [], writeValue: [], getText: [], noPrevious: [], noNext: [], registerOnChange: [], registerOnTouched: [], selectPage: [], makePage: [], getPages: [], calculateTotalPages: [], align: [{
            type: Input
        }], firstText: [{
            type: Input
        }], previousText: [{
            type: Input
        }], nextText: [{
            type: Input
        }], lastText: [{
            type: Input
        }], disabled: [{
            type: Input
        }] });
    return PagerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return PaginationComponent; }),
    multi: true
};
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new EventEmitter();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */
        function () {
            return this._itemsPerPage;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: /**
         * total number of items in all pages
         * @return {?}
         */
        function () {
            return this._totalItems;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalPages;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    PaginationComponent.prototype.configureOptions = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = Object.assign({}, config);
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PaginationComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    PaginationComponent.prototype.getText = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        // tslint:disable-next-line:no-any
        return ((/** @type {?} */ (this)))[key + "Text"] || ((/** @type {?} */ (this))).config[key + "Text"];
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.noPrevious = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.noNext = /**
     * @return {?}
     */
    function () {
        return this.page === this.totalPages;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PaginationComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PaginationComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    PaginationComponent.prototype.selectPage = /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                /** @type {?} */
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    PaginationComponent.prototype.makePage = 
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    PaginationComponent.prototype.getPages = /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    function (currentPage, totalPages) {
        /** @type {?} */
        var pages = [];
        // Default page limits
        /** @type {?} */
        var startPage = 1;
        /** @type {?} */
        var endPage = totalPages;
        /** @type {?} */
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            /** @type {?} */
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                /** @type {?} */
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                /** @type {?} */
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    // base class
    /**
     * @protected
     * @return {?}
     */
    PaginationComponent.prototype.calculateTotalPages = 
    // base class
    /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: PaginationConfig },
        { type: ChangeDetectorRef }
    ]; };
    PaginationComponent.propDecorators = {
        align: [{ type: Input }],
        maxSize: [{ type: Input }],
        boundaryLinks: [{ type: Input }],
        directionLinks: [{ type: Input }],
        firstText: [{ type: Input }],
        previousText: [{ type: Input }],
        nextText: [{ type: Input }],
        lastText: [{ type: Input }],
        rotate: [{ type: Input }],
        pageBtnClass: [{ type: Input }],
        disabled: [{ type: Input }],
        numPages: [{ type: Output }],
        pageChanged: [{ type: Output }],
        itemsPerPage: [{ type: Input }],
        totalItems: [{ type: Input }]
    };
PaginationComponent.ngComponentDef = ɵngcc0.ΔdefineComponent({ type: PaginationComponent, selectors: [["pagination"]], factory: function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(ɵngcc0.ΔdirectiveInject(ElementRef), ɵngcc0.ΔdirectiveInject(PaginationConfig), ɵngcc0.ΔdirectiveInject(ChangeDetectorRef)); }, inputs: { itemsPerPage: "itemsPerPage", totalItems: "totalItems", maxSize: "maxSize", rotate: "rotate", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", pageBtnClass: "pageBtnClass", align: "align", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", disabled: "disabled" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [ɵngcc0.ΔProvidersFeature([PAGINATION_CONTROL_VALUE_ACCESSOR])], consts: 6, vars: 6, template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ΔelementStart(0, "ul", _c6);
        ɵngcc0.Δtemplate(1, PaginationComponent_li_1_Template, 2, 1, "li", _c7);
        ɵngcc0.Δtemplate(2, PaginationComponent_li_2_Template, 2, 1, "li", _c8);
        ɵngcc0.Δtemplate(3, PaginationComponent_li_3_Template, 2, 1, "li", _c9);
        ɵngcc0.Δtemplate(4, PaginationComponent_li_4_Template, 2, 1, "li", _c10);
        ɵngcc0.Δtemplate(5, PaginationComponent_li_5_Template, 2, 1, "li", _c11);
        ɵngcc0.ΔelementEnd();
    } if (rf & 2) {
        ɵngcc0.Δselect(0);
        ɵngcc0.Δproperty("ngClass", ctx.classMap);
        ɵngcc0.Δselect(1);
        ɵngcc0.Δproperty("ngIf", ctx.boundaryLinks);
        ɵngcc0.Δselect(2);
        ɵngcc0.Δproperty("ngIf", ctx.directionLinks);
        ɵngcc0.Δselect(3);
        ɵngcc0.Δproperty("ngForOf", ctx.pages);
        ɵngcc0.Δselect(4);
        ɵngcc0.Δproperty("ngIf", ctx.directionLinks);
        ɵngcc0.Δselect(5);
        ɵngcc0.Δproperty("ngIf", ctx.boundaryLinks);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgForOf], encapsulation: 2 });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{
                selector: 'pagination',
                template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\"\n       [innerHTML]=\"getText('first')\"></a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\"\n       [innerHTML]=\"getText('previous')\"></a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled&&!pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\"\n       [innerHTML]=\"pg.text\"></a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\"\n       [innerHTML]=\"getText('next')\"></a></li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\"\n       [innerHTML]=\"getText('last')\"></a></li>\n</ul>\n",
                providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: ElementRef }, { type: PaginationConfig }, { type: ChangeDetectorRef }]; }, { elementRef: [], changeDetection: [], numPages: [{
            type: Output
        }], pageChanged: [{
            type: Output
        }], onChange: [], onTouched: [], inited: [], _page: [], itemsPerPage: [{
            type: Input
        }], itemsPerPage: [], totalItems: [{
            type: Input
        }], totalItems: [], totalPages: [], totalPages: [], page: [], page: [], configureOptions: [], config: [], ngOnInit: [], classMap: [], maxSize: [{
            type: Input
        }], rotate: [{
            type: Input
        }], boundaryLinks: [{
            type: Input
        }], directionLinks: [{
            type: Input
        }], pageBtnClass: [{
            type: Input
        }], pages: [], writeValue: [], getText: [], noPrevious: [], noNext: [], registerOnChange: [], registerOnTouched: [], selectPage: [], makePage: [], getPages: [], calculateTotalPages: [], align: [{
            type: Input
        }], firstText: [{
            type: Input
        }], previousText: [{
            type: Input
        }], nextText: [{
            type: Input
        }], lastText: [{
            type: Input
        }], disabled: [{
            type: Input
        }] });
    return PaginationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    /**
     * @return {?}
     */
    PaginationModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: PaginationModule, providers: [PaginationConfig] };
    };
PaginationModule.ngModuleDef = ɵngcc0.ΔdefineNgModule({ type: PaginationModule });
/*@__PURE__*/ ɵngcc0.ΔsetNgModuleScope(PaginationModule, { declarations: function () { return [PagerComponent,
        PaginationComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [PagerComponent,
        PaginationComponent]; } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(PaginationModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [PagerComponent, PaginationComponent],
                exports: [PagerComponent, PaginationComponent]
            }]
    }], function () { return []; }, null);
PaginationModule.ngInjectorDef = ɵngcc0.ΔdefineInjector({ factory: function PaginationModule_Factory(t) { return new (t || PaginationModule)(); }, imports: [[CommonModule]] });
    return PaginationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PagerComponent, PaginationComponent, PaginationModule, PaginationConfig, PAGER_CONTROL_VALUE_ACCESSOR as ɵa, PAGINATION_CONTROL_VALUE_ACCESSOR as ɵb };

//# sourceMappingURL=ngx-bootstrap-pagination.js.map