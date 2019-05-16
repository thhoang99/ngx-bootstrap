import { __decorate, __metadata } from 'tslib';
import { OnChange } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';
import { Injectable, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = [3, "ngIf"];
const _c1 = ["role", "alert", 3, "ngClass"];
const _c2 = ["type", "button", "aria-label", "Close", 1, "close", 3, "click"];
const _c3 = ["aria-hidden", "true"];
const _c4 = [1, "sr-only"];
function AlertComponent_ng_template_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "button", _c2);
    ɵngcc0.Δlistener("click", function AlertComponent_ng_template_0_ng_template_1_Template_button_click_0_listener($event) { ɵngcc0.ΔrestoreView(_r4); const ctx_r3 = ɵngcc0.ΔnextContext(2); return ctx_r3.close(); });
    ɵngcc0.ΔelementStart(1, "span", _c3);
    ɵngcc0.Δtext(2, "\u00D7");
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementStart(3, "span", _c4);
    ɵngcc0.Δtext(4, "Close");
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementEnd();
} }
function AlertComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ΔelementStart(0, "div", _c1);
    ɵngcc0.ΔelementStyling();
    ɵngcc0.Δtemplate(1, AlertComponent_ng_template_0_ng_template_1_Template, 5, 0, "ng-template", _c0);
    ɵngcc0.Δprojection(2);
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ΔnextContext();
    ɵngcc0.ΔelementStylingMap(0, ("alert alert-" + ctx_r1.type));
    ɵngcc0.ΔelementStylingApply(0);
    ɵngcc0.Δselect(0);
    ɵngcc0.Δproperty("ngClass", ctx_r1.classes);
    ɵngcc0.Δselect(1);
    ɵngcc0.Δproperty("ngIf", ctx_r1.dismissible);
} }
const _c5 = [];
var AlertConfig = /** @class */ (function () {
    function AlertConfig() {
        /**
         * default alert type
         */
        this.type = 'warning';
        /**
         * is alerts are dismissible by default
         */
        this.dismissible = false;
        /**
         * default time before alert will dismiss
         */
        this.dismissOnTimeout = undefined;
    }
AlertConfig.ngInjectableDef = ɵngcc0.ΔdefineInjectable({ token: AlertConfig, factory: function AlertConfig_Factory(t) { return new (t || AlertConfig)(); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(AlertConfig, [{
        type: Injectable
    }], function () { return []; }, { type: [], dismissible: [], dismissOnTimeout: [] });
    return AlertConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertComponent = /** @class */ (function () {
    function AlertComponent(_config, changeDetection) {
        var _this = this;
        this.changeDetection = changeDetection;
        /**
         * Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /**
         * If set, displays an inline "Close" button
         */
        this.dismissible = false;
        /**
         * Is alert visible
         */
        this.isOpen = true;
        /**
         * This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new EventEmitter();
        /**
         * This event fires when alert closed, $event is an instance of Alert component
         */
        this.onClosed = new EventEmitter();
        this.classes = '';
        this.dismissibleChange = new EventEmitter();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';
            _this.changeDetection.markForCheck();
        });
    }
    /**
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(function () { return _this.close(); }, parseInt((/** @type {?} */ (this.dismissOnTimeout)), 10));
        }
    };
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    AlertComponent.prototype.close = 
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    };
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: AlertConfig },
        { type: ChangeDetectorRef }
    ]; };
    AlertComponent.propDecorators = {
        type: [{ type: Input }],
        dismissible: [{ type: Input }],
        dismissOnTimeout: [{ type: Input }],
        isOpen: [{ type: Input }],
        onClose: [{ type: Output }],
        onClosed: [{ type: Output }]
    };
    __decorate([
        OnChange(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "dismissible", void 0);
AlertComponent.ngComponentDef = ɵngcc0.ΔdefineComponent({ type: AlertComponent, selectors: [["alert"], ["bs-alert"]], factory: function AlertComponent_Factory(t) { return new (t || AlertComponent)(ɵngcc0.ΔdirectiveInject(AlertConfig), ɵngcc0.ΔdirectiveInject(ChangeDetectorRef)); }, inputs: { type: "type", dismissible: "dismissible", isOpen: "isOpen", dismissOnTimeout: "dismissOnTimeout" }, outputs: { onClose: "onClose", onClosed: "onClosed" }, ngContentSelectors: _c5, consts: 1, vars: 1, template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ΔprojectionDef();
        ɵngcc0.Δtemplate(0, AlertComponent_ng_template_0_Template, 3, 2, "ng-template", _c0);
    } if (rf & 2) {
        ɵngcc0.Δselect(0);
        ɵngcc0.Δproperty("ngIf", ctx.isOpen);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                selector: 'alert,bs-alert',
                template: "<ng-template [ngIf]=\"isOpen\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: AlertConfig }, { type: ChangeDetectorRef }]; }, { changeDetection: [], type: [{
            type: Input
        }], dismissible: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], onClose: [{
            type: Output
        }], onClosed: [{
            type: Output
        }], classes: [], dismissibleChange: [], ngOnInit: [], close: [], dismissOnTimeout: [{
            type: Input
        }] });
    return AlertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    /**
     * @return {?}
     */
    AlertModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: AlertModule, providers: [AlertConfig] };
    };
AlertModule.ngModuleDef = ɵngcc0.ΔdefineNgModule({ type: AlertModule });
/*@__PURE__*/ ɵngcc0.ΔsetNgModuleScope(AlertModule, { declarations: function () { return [AlertComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [AlertComponent]; } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(AlertModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [AlertComponent],
                exports: [AlertComponent],
                entryComponents: [AlertComponent]
            }]
    }], function () { return []; }, null);
AlertModule.ngInjectorDef = ɵngcc0.ΔdefineInjector({ factory: function AlertModule_Factory(t) { return new (t || AlertModule)(); }, imports: [[CommonModule]] });
    return AlertModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AlertComponent, AlertModule, AlertConfig };

//# sourceMappingURL=ngx-bootstrap-alert.js.map