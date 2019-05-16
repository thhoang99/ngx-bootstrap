import { isBs3 } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';
import { Injectable, Component, HostBinding, Input, Host, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["progress"];
const _c1 = [3, "type", "value", 4, "ngIf"];
const _c2 = [3, "ngIf"];
const _c3 = [3, "type", "value"];
function ProgressbarComponent_bar_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ΔelementStart(0, "bar", _c3);
    ɵngcc0.Δprojection(1);
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r34 = ɵngcc0.ΔnextContext();
    ɵngcc0.Δselect(0);
    ɵngcc0.Δproperty("type", ctx_r34.type);
    ɵngcc0.Δproperty("value", ctx_r34._value);
} }
const _c4 = [3, "type", "value", 4, "ngFor", "ngForOf"];
function ProgressbarComponent_ng_template_1_bar_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ΔelementStart(0, "bar", _c3);
    ɵngcc0.Δtext(1);
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    ɵngcc0.Δselect(0);
    ɵngcc0.Δproperty("type", item_r37.type);
    ɵngcc0.Δproperty("value", item_r37.value);
    ɵngcc0.Δselect(1);
    ɵngcc0.ΔtextBinding(1, ɵngcc0.Δinterpolation1("", item_r37.label, ""));
} }
function ProgressbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.Δtemplate(0, ProgressbarComponent_ng_template_1_bar_0_Template, 2, 3, "bar", _c4);
} if (rf & 2) {
    const ctx_r35 = ɵngcc0.ΔnextContext();
    ɵngcc0.Δselect(0);
    ɵngcc0.Δproperty("ngForOf", ctx_r35._value);
} }
const _c5 = [];
const _c6 = ["role", "progressbar", "aria-valuemin", "0"];
const _c7 = ["progress-bar-animated", "progress-bar-striped", "active"];
const _c8 = ["height", "width"];
var ProgressbarConfig = /** @class */ (function () {
    function ProgressbarConfig() {
        /**
         * if `true` changing value of progress bar will be animated
         */
        this.animate = false;
        /**
         * maximum total value of progress element
         */
        this.max = 100;
    }
ProgressbarConfig.ngInjectableDef = ɵngcc0.ΔdefineInjectable({ token: ProgressbarConfig, factory: function ProgressbarConfig_Factory(t) { return new (t || ProgressbarConfig)(); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(ProgressbarConfig, [{
        type: Injectable
    }], function () { return []; }, { animate: [], max: [] });
    return ProgressbarConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent(config) {
        this.isStacked = false;
        this.addClass = true;
        /* tslint:disable-next-line:no-any */
        this.bars = [];
        this._max = 100;
        Object.assign(this, config);
    }
    Object.defineProperty(ProgressbarComponent.prototype, "animate", {
        /** if `true` changing value of progress bar will be animated */
        set: /**
         * if `true` changing value of progress bar will be animated
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._animate = value;
            this.bars.forEach(function (b) {
                b.animate = value;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "striped", {
        /** If `true`, striped classes are applied */
        set: /**
         * If `true`, striped classes are applied
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._striped = value;
            this.bars.forEach(function (b) {
                b.striped = value;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "value", {
        /** current value of progress bar. Could be a number or array of objects
         * like {"value":15,"type":"info","label":"15 %"}
         */
        set: /**
         * current value of progress bar. Could be a number or array of objects
         * like {"value":15,"type":"info","label":"15 %"}
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isStacked = Array.isArray(value);
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "max", {
        /** maximum total value of progress element */
        get: /**
         * maximum total value of progress element
         * @return {?}
         */
        function () {
            return this._max;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._max = v;
            this.bars.forEach(function (bar) {
                bar.recalculatePercentage();
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressbarComponent.prototype.addBar = /**
     * @param {?} bar
     * @return {?}
     */
    function (bar) {
        bar.animate = this._animate;
        bar.striped = this._striped;
        this.bars.push(bar);
    };
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressbarComponent.prototype.removeBar = /**
     * @param {?} bar
     * @return {?}
     */
    function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: ProgressbarConfig }
    ]; };
    ProgressbarComponent.propDecorators = {
        animate: [{ type: Input }],
        striped: [{ type: Input }],
        type: [{ type: Input }],
        value: [{ type: Input }],
        max: [{ type: HostBinding, args: ['attr.max',] }, { type: Input }],
        addClass: [{ type: HostBinding, args: ['class.progress',] }]
    };
ProgressbarComponent.ngComponentDef = ɵngcc0.ΔdefineComponent({ type: ProgressbarComponent, selectors: [["progressbar"]], factory: function ProgressbarComponent_Factory(t) { return new (t || ProgressbarComponent)(ɵngcc0.ΔdirectiveInject(ProgressbarConfig)); }, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵngcc0.ΔallocHostVars(1);
        ɵngcc0.ΔelementHostStyling(_c0);
    } if (rf & 2) {
        ɵngcc0.ΔelementAttribute(elIndex, "max", ɵngcc0.Δbind(ctx.max));
        ɵngcc0.ΔelementHostClassProp(0, ctx.addClass);
        ɵngcc0.ΔelementHostStylingApply();
    } }, inputs: { animate: "animate", striped: "striped", value: "value", max: "max", type: "type" }, ngContentSelectors: _c5, consts: 2, vars: 2, template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ΔprojectionDef();
        ɵngcc0.Δtemplate(0, ProgressbarComponent_bar_0_Template, 2, 2, "bar", _c1);
        ɵngcc0.Δtemplate(1, ProgressbarComponent_ng_template_1_Template, 1, 1, "ng-template", _c2);
    } if (rf & 2) {
        ɵngcc0.Δselect(0);
        ɵngcc0.Δproperty("ngIf", !ctx.isStacked);
        ɵngcc0.Δselect(1);
        ɵngcc0.Δproperty("ngIf", ctx.isStacked);
    } }, directives: function () { return [ɵngcc1.NgIf, BarComponent, ɵngcc1.NgForOf]; }, styles: ["[_nghost-%COMP%] {\n      width: 100%;\n      display: flex;\n    }"] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(ProgressbarComponent, [{
        type: Component,
        args: [{
                selector: 'progressbar',
                template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\">\n  <ng-content></ng-content>\n</bar>\n<ng-template [ngIf]=\"isStacked\">\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar>\n</ng-template>\n",
                styles: ["\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "]
            }]
    }], function () { return [{ type: ProgressbarConfig }]; }, { isStacked: [], addClass: [{
            type: HostBinding,
            args: ['class.progress']
        }], bars: [], _max: [], animate: [{
            type: Input
        }], striped: [{
            type: Input
        }], value: [{
            type: Input
        }], isBs3: [], max: [{
            type: HostBinding,
            args: ['attr.max']
        }, {
            type: Input
        }], max: [], addBar: [], removeBar: [], type: [{
            type: Input
        }] });
    return ProgressbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: number pipe
// todo: use query from progress?
var BarComponent = /** @class */ (function () {
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        /** current value of progress bar */
        get: /**
         * current value of progress bar
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "setBarWidth", {
        get: /**
         * @return {?}
         */
        function () {
            this.recalculatePercentage();
            return this.percent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.progress.addBar(this);
    };
    /**
     * @return {?}
     */
    BarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.progress.removeBar(this);
    };
    /**
     * @return {?}
     */
    BarComponent.prototype.recalculatePercentage = /**
     * @return {?}
     */
    function () {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        /** @type {?} */
        var totalPercentage = this.progress.bars
            .reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    /** @nocollapse */
    BarComponent.ctorParameters = function () { return [
        { type: ProgressbarComponent, decorators: [{ type: Host }] }
    ]; };
    BarComponent.propDecorators = {
        type: [{ type: Input }],
        value: [{ type: Input }],
        setBarWidth: [{ type: HostBinding, args: ['style.width.%',] }]
    };
BarComponent.ngComponentDef = ɵngcc0.ΔdefineComponent({ type: BarComponent, selectors: [["bar"]], factory: function BarComponent_Factory(t) { return new (t || BarComponent)(ɵngcc0.ΔdirectiveInject(ProgressbarComponent, 1)); }, hostBindings: function BarComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵngcc0.ΔallocHostVars(3);
        ɵngcc0.ΔelementHostAttrs(_c6);
        ɵngcc0.ΔelementHostStyling(_c7, _c8);
    } if (rf & 2) {
        ɵngcc0.ΔelementAttribute(elIndex, "aria-valuenow", ɵngcc0.Δbind(ctx.value));
        ɵngcc0.ΔelementAttribute(elIndex, "aria-valuetext", ɵngcc0.Δbind((ctx.percent ? (ctx.percent.toFixed(0) + "%") : "")));
        ɵngcc0.ΔelementAttribute(elIndex, "aria-valuemax", ɵngcc0.Δbind(ctx.max));
        ɵngcc0.ΔelementHostStylingMap(("progress-bar " + (ctx.type ? ((("progress-bar-" + ctx.type) + " bg-") + ctx.type) : "")));
        ɵngcc0.ΔelementHostStyleProp(0, "100", "%");
        ɵngcc0.ΔelementHostStyleProp(1, ctx.setBarWidth, "%");
        ɵngcc0.ΔelementHostClassProp(0, (!ctx.isBs3 && ctx.animate));
        ɵngcc0.ΔelementHostClassProp(1, ctx.striped);
        ɵngcc0.ΔelementHostClassProp(2, (ctx.isBs3 && ctx.animate));
        ɵngcc0.ΔelementHostStylingApply();
    } }, inputs: { value: "value", type: "type" }, ngContentSelectors: _c5, consts: 1, vars: 0, template: function BarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ΔprojectionDef();
        ɵngcc0.Δprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(BarComponent, [{
        type: Component,
        args: [{
                selector: 'bar',
                template: "<ng-content></ng-content>\n",
                host: {
                    role: 'progressbar',
                    'aria-valuemin': '0',
                    '[class]': '"progress-bar " + (type ? "progress-bar-" + type + " bg-" + type : "")',
                    '[class.progress-bar-animated]': '!isBs3 && animate',
                    '[class.progress-bar-striped]': 'striped',
                    '[class.active]': 'isBs3 && animate',
                    '[attr.aria-valuenow]': 'value',
                    '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                    '[attr.aria-valuemax]': 'max',
                    '[style.height.%]': '"100"'
                }
            }]
    }], function () { return [{ type: ProgressbarComponent, decorators: [{
                type: Host
            }] }]; }, { percent: [], progress: [], value: [{
            type: Input
        }], value: [], setBarWidth: [{
            type: HostBinding,
            args: ['style.width.%']
        }], isBs3: [], ngOnInit: [], ngOnDestroy: [], recalculatePercentage: [], type: [{
            type: Input
        }] });
    return BarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressbarModule = /** @class */ (function () {
    function ProgressbarModule() {
    }
    /**
     * @return {?}
     */
    ProgressbarModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ProgressbarModule, providers: [ProgressbarConfig] };
    };
ProgressbarModule.ngModuleDef = ɵngcc0.ΔdefineNgModule({ type: ProgressbarModule });
/*@__PURE__*/ ɵngcc0.ΔsetNgModuleScope(ProgressbarModule, { declarations: function () { return [BarComponent,
        ProgressbarComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [BarComponent,
        ProgressbarComponent]; } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(ProgressbarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [BarComponent, ProgressbarComponent],
                exports: [BarComponent, ProgressbarComponent]
            }]
    }], function () { return []; }, null);
ProgressbarModule.ngInjectorDef = ɵngcc0.ΔdefineInjector({ factory: function ProgressbarModule_Factory(t) { return new (t || ProgressbarModule)(); }, imports: [[CommonModule]] });
    return ProgressbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BarComponent, ProgressbarComponent, ProgressbarModule, ProgressbarConfig };

//# sourceMappingURL=ngx-bootstrap-progressbar.js.map