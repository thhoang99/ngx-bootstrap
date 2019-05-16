import { isBs3 } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';
import { Injectable, Component, Input, HostBinding, Inject, Output, EventEmitter, NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configuration service, provides default values for the AccordionComponent.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ngx-bootstrap/collapse';

const _c0 = ["role", "tablist", 1, "panel-group", 2, "display", "block"];
const _c1 = [];
const _c2 = [1, "panel", 2, "display", "block"];
const _c3 = ["panel-open"];
const _c4 = [1, "panel", "card", 3, "ngClass"];
const _c5 = ["role", "tab", 1, "panel-heading", "card-header", 3, "click"];
const _c6 = [1, "panel-title"];
const _c7 = ["role", "button", 1, "accordion-toggle", 3, "aria-expanded"];
const _c8 = ["class", "btn btn-link", 3, "ngClass", 4, "ngIf"];
const _c9 = ["role", "tabpanel", 1, "panel-collapse", "collapse", 3, "collapse", "isAnimated"];
const _c10 = [1, "panel-body", "card-block", "card-body"];
const _c11 = [1, "btn", "btn-link", 3, "ngClass"];
const _c12 = function (a0) { return { "text-muted": a0 }; };
function AccordionPanelComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ΔelementStart(0, "button", _c11);
    ɵngcc0.Δtext(1);
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ΔnextContext();
    ɵngcc0.Δselect(0);
    ɵngcc0.Δproperty("ngClass", ɵngcc0.ΔpureFunction1(2, _c12, ctx_r0.isDisabled));
    ɵngcc0.Δselect(1);
    ɵngcc0.ΔtextBinding(1, ɵngcc0.Δinterpolation1(" ", ctx_r0.heading, " "));
} }
const _c13 = [[["", "accordion-heading", ""]]];
const _c14 = ["[accordion-heading]"];
var AccordionConfig = /** @class */ (function () {
    function AccordionConfig() {
        /**
         * Whether the other panels should be closed when a panel is opened
         */
        this.closeOthers = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
    }
AccordionConfig.ngInjectableDef = ɵngcc0.ΔdefineInjectable({ token: AccordionConfig, factory: function AccordionConfig_Factory(t) { return new (t || AccordionConfig)(); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(AccordionConfig, [{
        type: Injectable
    }], function () { return []; }, { closeOthers: [], isAnimated: [] });
    return AccordionConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Displays collapsible content panels for presenting information in a limited amount of space.
 */
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent(config) {
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        this.groups = [];
        Object.assign(this, config);
    }
    /**
     * @param {?} openGroup
     * @return {?}
     */
    AccordionComponent.prototype.closeOtherPanels = /**
     * @param {?} openGroup
     * @return {?}
     */
    function (openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    /**
     * @param {?} group
     * @return {?}
     */
    AccordionComponent.prototype.addGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        group.isAnimated = this.isAnimated;
        this.groups.push(group);
    };
    /**
     * @param {?} group
     * @return {?}
     */
    AccordionComponent.prototype.removeGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    /** @nocollapse */
    AccordionComponent.ctorParameters = function () { return [
        { type: AccordionConfig }
    ]; };
    AccordionComponent.propDecorators = {
        isAnimated: [{ type: Input }],
        closeOthers: [{ type: Input }]
    };
AccordionComponent.ngComponentDef = ɵngcc0.ΔdefineComponent({ type: AccordionComponent, selectors: [["accordion"]], factory: function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(ɵngcc0.ΔdirectiveInject(AccordionConfig)); }, hostBindings: function AccordionComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵngcc0.ΔallocHostVars(1);
        ɵngcc0.ΔelementHostAttrs(_c0);
    } if (rf & 2) {
        ɵngcc0.ΔelementAttribute(elIndex, "aria-multiselectable", ɵngcc0.Δbind(ctx.closeOthers));
    } }, inputs: { isAnimated: "isAnimated", closeOthers: "closeOthers" }, ngContentSelectors: _c1, consts: 1, vars: 0, template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ΔprojectionDef();
        ɵngcc0.Δprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(AccordionComponent, [{
        type: Component,
        args: [{
                selector: 'accordion',
                template: "<ng-content></ng-content>",
                host: {
                    '[attr.aria-multiselectable]': 'closeOthers',
                    role: 'tablist',
                    class: 'panel-group',
                    style: 'display: block'
                }
            }]
    }], function () { return [{ type: AccordionConfig }]; }, { isAnimated: [{
            type: Input
        }], groups: [], closeOtherPanels: [], addGroup: [], removeGroup: [], closeOthers: [{
            type: Input
        }] });
    return AccordionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
var AccordionPanelComponent = /** @class */ (function () {
    function AccordionPanelComponent(accordion) {
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * Emits when the opened state changes
         */
        this.isOpenChange = new EventEmitter();
        this._isOpen = false;
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
        // Questionable, maybe .panel-open should be on child div.panel element?
        /** Is accordion group open or closed. This property supports two-way binding */
        get: 
        // Questionable, maybe .panel-open should be on child div.panel element?
        /**
         * Is accordion group open or closed. This property supports two-way binding
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (value !== this.isOpen) {
                if (value) {
                    this.accordion.closeOtherPanels(this);
                }
                this._isOpen = value;
                Promise.resolve(null).then(function () {
                    _this.isOpenChange.emit(value);
                })
                    .catch(function (error) {
                    /* tslint:disable: no-console */
                    console.log(error);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
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
    AccordionPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    };
    /**
     * @return {?}
     */
    AccordionPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.accordion.removeGroup(this);
    };
    /**
     * @return {?}
     */
    AccordionPanelComponent.prototype.toggleOpen = /**
     * @return {?}
     */
    function () {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    /** @nocollapse */
    AccordionPanelComponent.ctorParameters = function () { return [
        { type: AccordionComponent, decorators: [{ type: Inject, args: [AccordionComponent,] }] }
    ]; };
    AccordionPanelComponent.propDecorators = {
        heading: [{ type: Input }],
        panelClass: [{ type: Input }],
        isDisabled: [{ type: Input }],
        isOpenChange: [{ type: Output }],
        isOpen: [{ type: HostBinding, args: ['class.panel-open',] }, { type: Input }]
    };
AccordionPanelComponent.ngComponentDef = ɵngcc0.ΔdefineComponent({ type: AccordionPanelComponent, selectors: [["accordion-group"], ["accordion-panel"]], factory: function AccordionPanelComponent_Factory(t) { return new (t || AccordionPanelComponent)(ɵngcc0.ΔdirectiveInject(AccordionComponent)); }, hostBindings: function AccordionPanelComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵngcc0.ΔelementHostAttrs(_c2);
        ɵngcc0.ΔelementHostStyling(_c3);
    } if (rf & 2) {
        ɵngcc0.ΔelementHostClassProp(0, ctx.isOpen);
        ɵngcc0.ΔelementHostStylingApply();
    } }, inputs: { isOpen: "isOpen", panelClass: "panelClass", heading: "heading", isDisabled: "isDisabled" }, outputs: { isOpenChange: "isOpenChange" }, ngContentSelectors: _c14, consts: 9, vars: 5, template: function AccordionPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ΔprojectionDef(_c13);
        ɵngcc0.ΔelementStart(0, "div", _c4);
        ɵngcc0.ΔelementStart(1, "div", _c5);
        ɵngcc0.Δlistener("click", function AccordionPanelComponent_Template_div_click_1_listener($event) { return ctx.toggleOpen(); });
        ɵngcc0.ΔelementStart(2, "div", _c6);
        ɵngcc0.ΔelementStart(3, "div", _c7);
        ɵngcc0.Δtemplate(4, AccordionPanelComponent_button_4_Template, 2, 4, "button", _c8);
        ɵngcc0.Δprojection(5, 1);
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementStart(6, "div", _c9);
        ɵngcc0.ΔelementStart(7, "div", _c10);
        ɵngcc0.Δprojection(8);
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementEnd();
    } if (rf & 2) {
        ɵngcc0.Δselect(0);
        ɵngcc0.Δproperty("ngClass", ctx.panelClass);
        ɵngcc0.Δselect(3);
        ɵngcc0.ΔelementAttribute(3, "aria-expanded", ɵngcc0.Δbind(ctx.isOpen));
        ɵngcc0.Δselect(4);
        ɵngcc0.Δproperty("ngIf", ctx.heading);
        ɵngcc0.Δselect(6);
        ɵngcc0.Δproperty("collapse", !ctx.isOpen);
        ɵngcc0.Δproperty("isAnimated", ctx.isAnimated);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc2.CollapseDirective], encapsulation: 2 });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(AccordionPanelComponent, [{
        type: Component,
        args: [{
                selector: 'accordion-group, accordion-panel',
                template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div class=\"panel-heading card-header\" role=\"tab\"\n       (click)=\"toggleOpen()\">\n    <div class=\"panel-title\">\n      <div role=\"button\" class=\"accordion-toggle\"\n           [attr.aria-expanded]=\"isOpen\">\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{'text-muted': isDisabled}\">\n          {{ heading }}\n        </button>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\" [isAnimated]=\"isAnimated\">\n    <div class=\"panel-body card-block card-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                host: {
                    class: 'panel',
                    style: 'display: block'
                }
            }]
    }], function () { return [{ type: AccordionComponent, decorators: [{
                type: Inject,
                args: [AccordionComponent]
            }] }]; }, { isAnimated: [], isOpenChange: [{
            type: Output
        }], _isOpen: [], accordion: [], isOpen: [{
            type: HostBinding,
            args: ['class.panel-open']
        }, {
            type: Input
        }], isOpen: [], isBs3: [], ngOnInit: [], panelClass: [{
            type: Input
        }], ngOnDestroy: [], toggleOpen: [], heading: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }] });
    return AccordionPanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    /**
     * @return {?}
     */
    AccordionModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: AccordionModule, providers: [AccordionConfig] };
    };
AccordionModule.ngModuleDef = ɵngcc0.ΔdefineNgModule({ type: AccordionModule });
/*@__PURE__*/ ɵngcc0.ΔsetNgModuleScope(AccordionModule, { declarations: function () { return [AccordionComponent,
        AccordionPanelComponent]; }, imports: function () { return [CommonModule, CollapseModule]; }, exports: function () { return [AccordionComponent,
        AccordionPanelComponent]; } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(AccordionModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, CollapseModule],
                declarations: [AccordionComponent, AccordionPanelComponent],
                exports: [AccordionComponent, AccordionPanelComponent]
            }]
    }], function () { return []; }, null);
AccordionModule.ngInjectorDef = ɵngcc0.ΔdefineInjector({ factory: function AccordionModule_Factory(t) { return new (t || AccordionModule)(); }, imports: [[CommonModule, CollapseModule]] });
    return AccordionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AccordionPanelComponent, AccordionComponent, AccordionModule, AccordionConfig };

//# sourceMappingURL=ngx-bootstrap-accordion.js.map