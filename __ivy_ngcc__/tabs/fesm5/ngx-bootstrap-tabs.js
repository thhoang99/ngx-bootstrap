import { CommonModule } from '@angular/common';
import { Directive, Input, TemplateRef, ViewContainerRef, Injectable, Component, HostBinding, Renderer2, EventEmitter, Output, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["tab-container"];
const _c1 = [1, "nav", 3, "ngClass", "click"];
const _c2 = [3, "ngClass", "active", "disabled", 4, "ngFor", "ngForOf"];
const _c3 = [1, "tab-content"];
const _c4 = [3, "ngClass"];
const _c5 = ["href", "javascript:void(0);", 1, "nav-link", 3, "id", "click"];
const _c6 = [3, "ngTransclude"];
const _c7 = ["class", "bs-remove-tab", 3, "click", 4, "ngIf"];
const _c8 = [1, "bs-remove-tab", 3, "click"];
function TabsetComponent_li_1_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r69 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "span", _c8);
    ɵngcc0.Δlistener("click", function TabsetComponent_li_1_span_4_Template_span_click_0_listener($event) { ɵngcc0.ΔrestoreView(_r69); const tabz_r66 = ɵngcc0.ΔnextContext().$implicit; const ctx_r68 = ɵngcc0.ΔnextContext(); $event.preventDefault(); return ctx_r68.removeTab(tabz_r66); });
    ɵngcc0.Δtext(1, " \u274C");
    ɵngcc0.ΔelementEnd();
} }
const _c9 = ["active", "disabled"];
const _c10 = function (a1) { return ["nav-item", a1]; };
function TabsetComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ΔelementStart(0, "li", _c4);
    ɵngcc0.ΔelementStyling(_c9);
    ɵngcc0.ΔelementStart(1, "a", _c5);
    ɵngcc0.ΔelementStyling(_c9);
    ɵngcc0.Δlistener("click", function TabsetComponent_li_1_Template_a_click_1_listener($event) { const tabz_r66 = ctx.$implicit; return tabz_r66.active = true; });
    ɵngcc0.ΔelementStart(2, "span", _c6);
    ɵngcc0.Δtext(3);
    ɵngcc0.ΔelementEnd();
    ɵngcc0.Δtemplate(4, TabsetComponent_li_1_span_4_Template, 2, 0, "span", _c7);
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const tabz_r66 = ctx.$implicit;
    ɵngcc0.ΔelementClassProp(0, 0, tabz_r66.active);
    ɵngcc0.ΔelementClassProp(0, 1, tabz_r66.disabled);
    ɵngcc0.ΔelementStylingApply(0);
    ɵngcc0.Δselect(0);
    ɵngcc0.Δproperty("ngClass", ɵngcc0.ΔpureFunction1(5, _c10, (tabz_r66.customClass || "")));
    ɵngcc0.ΔelementClassProp(1, 0, tabz_r66.active);
    ɵngcc0.ΔelementClassProp(1, 1, tabz_r66.disabled);
    ɵngcc0.ΔelementStylingApply(1);
    ɵngcc0.Δselect(1);
    ɵngcc0.ΔelementAttribute(1, "id", ɵngcc0.Δbind((tabz_r66.id ? (tabz_r66.id + "-link") : "")));
    ɵngcc0.Δselect(2);
    ɵngcc0.Δproperty("ngTransclude", tabz_r66.headingRef);
    ɵngcc0.Δselect(3);
    ɵngcc0.ΔtextBinding(3, ɵngcc0.Δinterpolation1("", tabz_r66.heading, ""));
    ɵngcc0.Δselect(4);
    ɵngcc0.Δproperty("ngIf", tabz_r66.removable);
} }
const _c11 = [];
const _c12 = ["tab-pane", "active"];
var NgTranscludeDirective = /** @class */ (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        /* tslint:disable-next-line:no-any */
        get: /* tslint:disable-next-line:no-any */
        /**
         * @return {?}
         */
        function () {
            return this._ngTransclude;
        },
        set: /**
         * @param {?} templateRef
         * @return {?}
         */
        function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    NgTranscludeDirective.propDecorators = {
        ngTransclude: [{ type: Input }]
    };
NgTranscludeDirective.ngDirectiveDef = ɵngcc0.ΔdefineDirective({ type: NgTranscludeDirective, selectors: [["", "ngTransclude", ""]], factory: function NgTranscludeDirective_Factory(t) { return new (t || NgTranscludeDirective)(ɵngcc0.ΔdirectiveInject(ViewContainerRef)); }, inputs: { ngTransclude: "ngTransclude" } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(NgTranscludeDirective, [{
        type: Directive,
        args: [{
                selector: '[ngTransclude]'
            }]
    }], function () { return [{ type: ViewContainerRef }]; }, { viewRef: [], ngTransclude: [{
            type: Input
        }], ngTransclude: [] });
    return NgTranscludeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabsetConfig = /** @class */ (function () {
    function TabsetConfig() {
        /**
         * provides default navigation context class: 'tabs' or 'pills'
         */
        this.type = 'tabs';
    }
TabsetConfig.ngInjectableDef = ɵngcc0.ΔdefineInjectable({ token: TabsetConfig, factory: function TabsetConfig_Factory(t) { return new (t || TabsetConfig)(); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TabsetConfig, [{
        type: Injectable
    }], function () { return []; }, { type: [] });
    return TabsetConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
var TabsetComponent = /** @class */ (function () {
    function TabsetComponent(config, renderer) {
        this.renderer = renderer;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        /** if true tabs will be placed vertically */
        get: /**
         * if true tabs will be placed vertically
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        /** if true tabs fill the container and have a consistent width */
        get: /**
         * if true tabs fill the container and have a consistent width
         * @return {?}
         */
        function () {
            return this._justified;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        /** navigation context class: 'tabs' or 'pills' */
        get: /**
         * navigation context class: 'tabs' or 'pills'
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroyed = true;
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.addTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
    };
    /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    TabsetComponent.prototype.removeTab = /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    function (tab, options) {
        if (options === void 0) { options = { reselect: true, emit: true }; }
        /** @type {?} */
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            /** @type {?} */
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
        }
    };
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.getClosestTabIndex = /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            /** @type {?} */
            var prevIndex = index - step;
            /** @type {?} */
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.hasAvailableTabs = /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    /**
     * @protected
     * @return {?}
     */
    TabsetComponent.prototype.setClassMap = /**
     * @protected
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {
                'nav-stacked': this.vertical,
                'flex-column': this.vertical,
                'nav-justified': this.justified
            },
            _a["nav-" + this.type] = true,
            _a);
    };
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return [
        { type: TabsetConfig },
        { type: Renderer2 }
    ]; };
    TabsetComponent.propDecorators = {
        vertical: [{ type: Input }],
        justified: [{ type: Input }],
        type: [{ type: Input }],
        clazz: [{ type: HostBinding, args: ['class.tab-container',] }]
    };
TabsetComponent.ngComponentDef = ɵngcc0.ΔdefineComponent({ type: TabsetComponent, selectors: [["tabset"]], factory: function TabsetComponent_Factory(t) { return new (t || TabsetComponent)(ɵngcc0.ΔdirectiveInject(TabsetConfig), ɵngcc0.ΔdirectiveInject(Renderer2)); }, hostBindings: function TabsetComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵngcc0.ΔelementHostStyling(_c0);
    } if (rf & 2) {
        ɵngcc0.ΔelementHostClassProp(0, ctx.clazz);
        ɵngcc0.ΔelementHostStylingApply();
    } }, inputs: { vertical: "vertical", justified: "justified", type: "type" }, ngContentSelectors: _c11, consts: 4, vars: 2, template: function TabsetComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ΔprojectionDef();
        ɵngcc0.ΔelementStart(0, "ul", _c1);
        ɵngcc0.Δlistener("click", function TabsetComponent_Template_ul_click_0_listener($event) { return $event.preventDefault(); });
        ɵngcc0.Δtemplate(1, TabsetComponent_li_1_Template, 5, 7, "li", _c2);
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementStart(2, "div", _c3);
        ɵngcc0.Δprojection(3);
        ɵngcc0.ΔelementEnd();
    } if (rf & 2) {
        ɵngcc0.Δselect(0);
        ɵngcc0.Δproperty("ngClass", ctx.classMap);
        ɵngcc0.Δselect(1);
        ɵngcc0.Δproperty("ngForOf", ctx.tabs);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf, NgTranscludeDirective, ɵngcc1.NgIf], encapsulation: 2 });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TabsetComponent, [{
        type: Component,
        args: [{
                selector: 'tabset',
                template: "<ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\n  <li *ngFor=\"let tabz of tabs\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n    <a href=\"javascript:void(0);\" class=\"nav-link\"\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n       (click)=\"tabz.active = true\">\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\n    </a>\n  </li>\n</ul>\n<div class=\"tab-content\">\n  <ng-content></ng-content>\n</div>\n"
            }]
    }], function () { return [{ type: TabsetConfig }, { type: Renderer2 }]; }, { renderer: [], clazz: [{
            type: HostBinding,
            args: ['class.tab-container']
        }], tabs: [], classMap: [], vertical: [{
            type: Input
        }], vertical: [], justified: [{
            type: Input
        }], justified: [], type: [{
            type: Input
        }], type: [], ngOnDestroy: [], isDestroyed: [], addTab: [], removeTab: [], getClosestTabIndex: [], hasAvailableTabs: [], setClassMap: [] });
    return TabsetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabDirective = /** @class */ (function () {
    function TabDirective(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * fired when tab became active, $event:Tab equals to selected instance of Tab component
         */
        this.selectTab = new EventEmitter();
        /**
         * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
         */
        this.deselect = new EventEmitter();
        /**
         * fired before tab will be removed, $event:Tab equals to instance of removed tab
         */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "customClass", {
        /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
        get: /**
         * if set, will be added to the tab's class attribute. Multiple classes are supported.
         * @return {?}
         */
        function () {
            return this._customClass;
        },
        set: /**
         * @param {?} customClass
         * @return {?}
         */
        function (customClass) {
            var _this = this;
            if (this.customClass) {
                this.customClass.split(' ').forEach(function (cssClass) {
                    _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
                });
            }
            this._customClass = customClass ? customClass.trim() : null;
            if (this.customClass) {
                this.customClass.split(' ').forEach(function (cssClass) {
                    _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "active", {
        /** tab active state toggle */
        get: /**
         * tab active state toggle
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            var _this = this;
            if (this._active === active) {
                return;
            }
            if ((this.disabled && active) || !active) {
                if (this._active && !active) {
                    this.deselect.emit(this);
                    this._active = active;
                }
                return;
            }
            this._active = active;
            this.selectTab.emit(this);
            this.tabset.tabs.forEach(function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.removable = this.removable;
    };
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    };
    /** @nocollapse */
    TabDirective.ctorParameters = function () { return [
        { type: TabsetComponent },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    TabDirective.propDecorators = {
        heading: [{ type: Input }],
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        disabled: [{ type: Input }],
        removable: [{ type: Input }],
        customClass: [{ type: Input }],
        active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
        selectTab: [{ type: Output }],
        deselect: [{ type: Output }],
        removed: [{ type: Output }],
        addClass: [{ type: HostBinding, args: ['class.tab-pane',] }]
    };
TabDirective.ngDirectiveDef = ɵngcc0.ΔdefineDirective({ type: TabDirective, selectors: [["tab"], ["", "tab", ""]], factory: function TabDirective_Factory(t) { return new (t || TabDirective)(ɵngcc0.ΔdirectiveInject(TabsetComponent), ɵngcc0.ΔdirectiveInject(ElementRef), ɵngcc0.ΔdirectiveInject(Renderer2)); }, hostBindings: function TabDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵngcc0.ΔallocHostVars(1);
        ɵngcc0.ΔelementHostStyling(_c12);
    } if (rf & 2) {
        ɵngcc0.ΔelementAttribute(elIndex, "id", ɵngcc0.Δbind(ctx.id));
        ɵngcc0.ΔelementHostClassProp(0, ctx.addClass);
        ɵngcc0.ΔelementHostClassProp(1, ctx.active);
        ɵngcc0.ΔelementHostStylingApply();
    } }, inputs: { customClass: "customClass", active: "active", removable: "removable", heading: "heading", id: "id", disabled: "disabled" }, outputs: { selectTab: "selectTab", deselect: "deselect", removed: "removed" } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TabDirective, [{
        type: Directive,
        args: [{ selector: 'tab, [tab]' }]
    }], function () { return [{ type: TabsetComponent }, { type: ElementRef }, { type: Renderer2 }]; }, { elementRef: [], renderer: [], selectTab: [{
            type: Output
        }], deselect: [{
            type: Output
        }], removed: [{
            type: Output
        }], addClass: [{
            type: HostBinding,
            args: ['class.tab-pane']
        }], tabset: [], customClass: [{
            type: Input
        }], customClass: [], active: [{
            type: HostBinding,
            args: ['class.active']
        }, {
            type: Input
        }], active: [], ngOnInit: [], removable: [{
            type: Input
        }], ngOnDestroy: [], heading: [{
            type: Input
        }], id: [{
            type: HostBinding,
            args: ['attr.id']
        }, {
            type: Input
        }], disabled: [{
            type: Input
        }] });
    return TabDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Should be used to mark <ng-template> element as a template for tab heading
 */
var TabHeadingDirective = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    /** @nocollapse */
    TabHeadingDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: TabDirective }
    ]; };
TabHeadingDirective.ngDirectiveDef = ɵngcc0.ΔdefineDirective({ type: TabHeadingDirective, selectors: [["", "tabHeading", ""]], factory: function TabHeadingDirective_Factory(t) { return new (t || TabHeadingDirective)(ɵngcc0.ΔdirectiveInject(TemplateRef), ɵngcc0.ΔdirectiveInject(TabDirective)); } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TabHeadingDirective, [{
        type: Directive,
        args: [{ selector: '[tabHeading]' }]
    }], function () { return [{ type: TemplateRef }, { type: TabDirective }]; }, null);
    return TabHeadingDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    /**
     * @return {?}
     */
    TabsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TabsModule,
            providers: [TabsetConfig]
        };
    };
TabsModule.ngModuleDef = ɵngcc0.ΔdefineNgModule({ type: TabsModule });
/*@__PURE__*/ ɵngcc0.ΔsetNgModuleScope(TabsModule, { declarations: function () { return [NgTranscludeDirective,
        TabDirective,
        TabsetComponent,
        TabHeadingDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [TabDirective,
        TabsetComponent,
        TabHeadingDirective,
        NgTranscludeDirective]; } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TabsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [
                    NgTranscludeDirective,
                    TabDirective,
                    TabsetComponent,
                    TabHeadingDirective
                ],
                exports: [
                    TabDirective,
                    TabsetComponent,
                    TabHeadingDirective,
                    NgTranscludeDirective
                ]
            }]
    }], function () { return []; }, null);
TabsModule.ngInjectorDef = ɵngcc0.ΔdefineInjector({ factory: function TabsModule_Factory(t) { return new (t || TabsModule)(); }, imports: [[CommonModule]] });
    return TabsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule };

//# sourceMappingURL=ngx-bootstrap-tabs.js.map