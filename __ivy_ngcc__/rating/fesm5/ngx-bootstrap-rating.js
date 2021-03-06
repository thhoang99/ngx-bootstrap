import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["tabindex", "0", "role", "slider", "aria-valuemin", "0", 3, "aria-valuemax", "aria-valuenow", "mouseleave", "keydown"];
const _c1 = ["star", ""];
const _c2 = ["ngFor", "", 3, "ngForOf"];
function RatingComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.Δtext(0);
} if (rf & 2) {
    const value_r41 = ctx.value;
    const index_r42 = ctx.index;
    ɵngcc0.Δselect(0);
    ɵngcc0.ΔtextBinding(0, ɵngcc0.Δinterpolation1("", ((index_r42 < value_r41) ? "\u2605" : "\u2606"), ""));
} }
const _c3 = [1, "sr-only"];
const _c4 = [1, "bs-rating-star", 3, "title", "mouseenter", "click"];
const _c5 = [3, "ngTemplateOutlet", "ngTemplateOutletContext"];
function RatingComponent_ng_template_3_ng_template_3_Template(rf, ctx) { }
const _c6 = ["active"];
const _c7 = ["cursor"];
const _c8 = function (a0, a1) { return { index: a0, value: a1 }; };
function RatingComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r47 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "span", _c3);
    ɵngcc0.Δtext(1);
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementStart(2, "span", _c4);
    ɵngcc0.ΔelementStyling(_c6, _c7);
    ɵngcc0.Δlistener("mouseenter", function RatingComponent_ng_template_3_Template_span_mouseenter_2_listener($event) { ɵngcc0.ΔrestoreView(_r47); const index_r44 = ctx.index; const ctx_r46 = ɵngcc0.ΔnextContext(); return ctx_r46.enter((index_r44 + 1)); });
    ɵngcc0.Δlistener("click", function RatingComponent_ng_template_3_Template_span_click_2_listener($event) { ɵngcc0.ΔrestoreView(_r47); const index_r44 = ctx.index; const ctx_r48 = ɵngcc0.ΔnextContext(); return ctx_r48.rate((index_r44 + 1)); });
    ɵngcc0.Δtemplate(3, RatingComponent_ng_template_3_ng_template_3_Template, 0, 0, "ng-template", _c5);
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const r_r43 = ctx.$implicit;
    const index_r44 = ctx.index;
    const ctx_r40 = ɵngcc0.ΔnextContext();
    const _r38 = ɵngcc0.Δreference(2);
    ɵngcc0.Δselect(1);
    ɵngcc0.ΔtextBinding(1, ɵngcc0.Δinterpolation1("(", ((index_r44 < ctx_r40.value) ? "*" : " "), ")"));
    ɵngcc0.ΔelementStyleProp(2, 0, (ctx_r40.readonly ? "default" : "pointer"));
    ɵngcc0.ΔelementClassProp(2, 0, (index_r44 < ctx_r40.value));
    ɵngcc0.ΔelementStylingApply(2);
    ɵngcc0.Δselect(2);
    ɵngcc0.Δproperty("title", r_r43.title);
    ɵngcc0.Δselect(3);
    ɵngcc0.Δproperty("ngTemplateOutlet", (ctx_r40.customTemplate || _r38));
    ɵngcc0.Δproperty("ngTemplateOutletContext", ɵngcc0.ΔpureFunction2(4, _c8, index_r44, ctx_r40.value));
} }
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return RatingComponent; }),
    multi: true
};
var RatingComponent = /** @class */ (function () {
    function RatingComponent(changeDetection) {
        this.changeDetection = changeDetection;
        /**
         * number of icons
         */
        this.max = 5;
        /**
         * fired when icon selected, $event:number equals to selected rating
         */
        this.onHover = new EventEmitter();
        /**
         * fired when icon selected, $event:number equals to previous rating value
         */
        this.onLeave = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onChange = Function.prototype;
        // tslint:disable-next-line:no-any
        this.onTouched = Function.prototype;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    RatingComponent.prototype.onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /* tslint:disable-next-line: deprecation */
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        /* tslint:disable-next-line: deprecation */
        /** @type {?} */
        var sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    };
    /**
     * @return {?}
     */
    RatingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.max = typeof this.max !== 'undefined' ? this.max : 5;
        this.titles =
            typeof this.titles !== 'undefined' && this.titles.length > 0
                ? this.titles
                : [];
        this.range = this.buildTemplateObjects(this.max);
    };
    // model -> view
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    RatingComponent.prototype.writeValue = 
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            this.changeDetection.markForCheck();
            return;
        }
        this.preValue = value;
        this.value = value;
        this.changeDetection.markForCheck();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RatingComponent.prototype.enter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.readonly) {
            this.value = value;
            this.changeDetection.markForCheck();
            this.onHover.emit(value);
        }
    };
    /**
     * @return {?}
     */
    RatingComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.value = this.preValue;
        this.changeDetection.markForCheck();
        this.onLeave.emit(this.value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RatingComponent.prototype.registerOnChange = /**
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
    RatingComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RatingComponent.prototype.rate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.readonly && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    };
    /**
     * @protected
     * @param {?} max
     * @return {?}
     */
    RatingComponent.prototype.buildTemplateObjects = /**
     * @protected
     * @param {?} max
     * @return {?}
     */
    function (max) {
        /** @type {?} */
        var result = [];
        for (var i = 0; i < max; i++) {
            result.push({
                index: i,
                title: this.titles[i] || i + 1
            });
        }
        return result;
    };
    /** @nocollapse */
    RatingComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    RatingComponent.propDecorators = {
        max: [{ type: Input }],
        readonly: [{ type: Input }],
        titles: [{ type: Input }],
        customTemplate: [{ type: Input }],
        onHover: [{ type: Output }],
        onLeave: [{ type: Output }],
        onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
RatingComponent.ngComponentDef = ɵngcc0.ΔdefineComponent({ type: RatingComponent, selectors: [["rating"]], factory: function RatingComponent_Factory(t) { return new (t || RatingComponent)(ɵngcc0.ΔdirectiveInject(ChangeDetectorRef)); }, hostBindings: function RatingComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵngcc0.Δlistener("keydown", function RatingComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
    } }, inputs: { max: "max", titles: "titles", readonly: "readonly", customTemplate: "customTemplate" }, outputs: { onHover: "onHover", onLeave: "onLeave" }, features: [ɵngcc0.ΔProvidersFeature([RATING_CONTROL_VALUE_ACCESSOR])], consts: 4, vars: 3, template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ΔelementStart(0, "span", _c0);
        ɵngcc0.Δlistener("mouseleave", function RatingComponent_Template_span_mouseleave_0_listener($event) { return ctx.reset(); });
        ɵngcc0.Δlistener("keydown", function RatingComponent_Template_span_keydown_0_listener($event) { return ctx.onKeydown($event); });
        ɵngcc0.Δtemplate(1, RatingComponent_ng_template_1_Template, 1, 1, "ng-template", null, _c1, ɵngcc0.ΔtemplateRefExtractor);
        ɵngcc0.Δtemplate(3, RatingComponent_ng_template_3_Template, 4, 7, "ng-template", _c2);
        ɵngcc0.ΔelementEnd();
    } if (rf & 2) {
        ɵngcc0.Δselect(0);
        ɵngcc0.ΔelementAttribute(0, "aria-valuemax", ɵngcc0.Δbind(ctx.range.length));
        ɵngcc0.ΔelementAttribute(0, "aria-valuenow", ɵngcc0.Δbind(ctx.value));
        ɵngcc0.Δselect(3);
        ɵngcc0.Δproperty("ngForOf", ctx.range);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(RatingComponent, [{
        type: Component,
        args: [{
                selector: 'rating',
                template: "<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\"\n      role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\"\n      [attr.aria-valuenow]=\"value\">\n  <ng-template #star let-value=\"value\" let-index=\"index\">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>\n  <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\n    <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\n    <span class=\"bs-rating-star\"\n          (mouseenter)=\"enter(index + 1)\"\n          (click)=\"rate(index + 1)\"\n          [title]=\"r.title\"\n          [style.cursor]=\"readonly ? 'default' : 'pointer'\"\n          [class.active]=\"index < value\">\n      <ng-template [ngTemplateOutlet]=\"customTemplate || star\"\n                   [ngTemplateOutletContext]=\"{index: index, value: value}\">\n      </ng-template>\n    </span>\n  </ng-template>\n</span>\n",
                providers: [RATING_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { changeDetection: [], max: [{
            type: Input
        }], onHover: [{
            type: Output
        }], onLeave: [{
            type: Output
        }], onChange: [], onTouched: [], onKeydown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], ngOnInit: [], titles: [{
            type: Input
        }], range: [], writeValue: [], value: [], preValue: [], enter: [], reset: [], registerOnChange: [], registerOnTouched: [], rate: [], buildTemplateObjects: [], readonly: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }] });
    return RatingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RatingModule = /** @class */ (function () {
    function RatingModule() {
    }
    /**
     * @return {?}
     */
    RatingModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: RatingModule,
            providers: []
        };
    };
RatingModule.ngModuleDef = ɵngcc0.ΔdefineNgModule({ type: RatingModule });
/*@__PURE__*/ ɵngcc0.ΔsetNgModuleScope(RatingModule, { declarations: function () { return [RatingComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [RatingComponent]; } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(RatingModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [RatingComponent],
                exports: [RatingComponent]
            }]
    }], function () { return []; }, null);
RatingModule.ngInjectorDef = ɵngcc0.ΔdefineInjector({ factory: function RatingModule_Factory(t) { return new (t || RatingModule)(); }, imports: [[CommonModule]] });
    return RatingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { RatingComponent, RatingModule, RATING_CONTROL_VALUE_ACCESSOR as ɵa };

//# sourceMappingURL=ngx-bootstrap-rating.js.map