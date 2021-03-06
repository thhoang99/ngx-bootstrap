import { __decorate, __metadata } from 'tslib';
import { isBs3, OnChange, warnOnce, parseTriggers } from 'ngx-bootstrap/utils';
import { timer } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Injectable, Component, ChangeDetectionStrategy, Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, ViewContainerRef, NgModule } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default values provider for tooltip
 */
import * as ɵngcc0 from '@angular/core';

const _c0 = ["role", "tooltip"];
const _c1 = ["show", "bs3"];
const _c2 = [1, "tooltip-arrow", "arrow"];
const _c3 = [1, "tooltip-inner"];
const _c4 = [];
var TooltipConfig = /** @class */ (function () {
    function TooltipConfig() {
        /**
         * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
         */
        this.placement = 'top';
        /**
         * array of event names which triggers tooltip opening
         */
        this.triggers = 'hover focus';
        /**
         * delay before showing the tooltip
         */
        this.delay = 0;
    }
TooltipConfig.ngInjectableDef = ɵngcc0.ΔdefineInjectable({ token: TooltipConfig, factory: function TooltipConfig_Factory(t) { return new (t || TooltipConfig)(); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TooltipConfig, [{
        type: Injectable
    }], function () { return []; }, { placement: [], triggers: [], delay: [] });
    return TooltipConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipContainerComponent = /** @class */ (function () {
    function TooltipContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
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
    TooltipContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap["tooltip-" + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    };
    /** @nocollapse */
    TooltipContainerComponent.ctorParameters = function () { return [
        { type: TooltipConfig }
    ]; };
TooltipContainerComponent.ngComponentDef = ɵngcc0.ΔdefineComponent({ type: TooltipContainerComponent, selectors: [["bs-tooltip-container"]], factory: function TooltipContainerComponent_Factory(t) { return new (t || TooltipContainerComponent)(ɵngcc0.ΔdirectiveInject(TooltipConfig)); }, hostBindings: function TooltipContainerComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵngcc0.ΔallocHostVars(1);
        ɵngcc0.ΔelementHostAttrs(_c0);
        ɵngcc0.ΔelementHostStyling(_c1);
    } if (rf & 2) {
        ɵngcc0.ΔelementAttribute(elIndex, "id", ɵngcc0.Δbind(ctx.id));
        ɵngcc0.ΔelementHostStylingMap((((((((("tooltip in tooltip-" + ctx.placement) + " ") + "bs-tooltip-") + ctx.placement) + " ") + ctx.placement) + " ") + ctx.containerClass));
        ɵngcc0.ΔelementHostClassProp(0, !ctx.isBs3);
        ɵngcc0.ΔelementHostClassProp(1, ctx.isBs3);
        ɵngcc0.ΔelementHostStylingApply();
    } }, ngContentSelectors: _c4, consts: 3, vars: 0, template: function TooltipContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ΔprojectionDef();
        ɵngcc0.Δelement(0, "div", _c2);
        ɵngcc0.ΔelementStart(1, "div", _c3);
        ɵngcc0.Δprojection(2);
        ɵngcc0.ΔelementEnd();
    } }, styles: [".tooltip[_nghost-%COMP%] {\n      display: block;\n      pointer-events: none;\n    }\n    .bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.tooltip.bottom[_nghost-%COMP%] {\n      margin-top: 0px;\n    }\n    .bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{\n      margin: 0px;\n    }\n    .bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      margin: .3rem 0;\n    }"], changeDetection: 0 });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TooltipContainerComponent, [{
        type: Component,
        args: [{
                selector: 'bs-tooltip-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                    '[class.show]': '!isBs3',
                    '[class.bs3]': 'isBs3',
                    '[attr.id]': 'this.id',
                    role: 'tooltip'
                },
                template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    ",
                styles: ["\n    :host.tooltip {\n      display: block;\n      pointer-events: none;\n    }\n    :host.bs3.tooltip.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.tooltip.bottom {\n      margin-top: 0px;\n    }\n    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{\n      margin: 0px;\n    }\n    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {\n      margin: .3rem 0;\n    }\n  "]
            }]
    }], function () { return [{ type: TooltipConfig }]; }, { isBs3: [], ngAfterViewInit: [], classMap: [] });
    return TooltipContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var id = 0;
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._positionService = _positionService;
        this.tooltipId = id++;
        /**
         * Fired when tooltip content changes
         */
        /* tslint:disable-next-line:no-any */
        this.tooltipChange = new EventEmitter();
        /**
         * Css class for tooltip container
         */
        this.containerClass = '';
        /**
         * @deprecated - removed, will be added to configuration
         */
        this.tooltipAnimation = true;
        /**
         * @deprecated
         */
        this.tooltipFadeDuration = 150;
        this.ariaDescribedby = "tooltip-" + this.tooltipId;
        /**
         * @deprecated
         */
        this.tooltipStateChanged = new EventEmitter();
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, this._renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: /**
         * Returns whether or not the tooltip is currently being shown
         * @return {?}
         */
        function () {
            return this._tooltip.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
        /** @deprecated - please use `tooltip` instead */
        set: /**
         * @deprecated - please use `tooltip` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
            this.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_placement", {
        /** @deprecated - please use `placement` instead */
        set: /**
         * @deprecated - please use `placement` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
        },
        /** @deprecated - please use `isOpen` instead */
        set: /**
         * @deprecated - please use `isOpen` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_enable", {
        get: /**
         * @return {?}
         */
        function () {
            warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled;
        },
        /** @deprecated - please use `isDisabled` instead */
        set: /**
         * @deprecated - please use `isDisabled` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = !value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
        get: /**
         * @return {?}
         */
        function () {
            warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
        },
        /** @deprecated - please use `container="body"` instead */
        set: /**
         * @deprecated - please use `container="body"` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            this.container = value ? 'body' : this.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
        /** @deprecated - will replaced with customClass */
        set: /**
         * @deprecated - will replaced with customClass
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipClass deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
        /** @deprecated - removed */
        set: /**
         * @deprecated - removed
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipContext deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipPopupDelay", {
        /** @deprecated */
        set: /**
         * @deprecated
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipPopupDelay is deprecated, use `delay` instead');
            this.delay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
        /** @deprecated -  please use `triggers` instead */
        get: /**
         * @deprecated -  please use `triggers` instead
         * @return {?}
         */
        function () {
            warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
            this.triggers = (value || '').toString();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: true
                }
            }
        });
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        /* tslint:disable-next-line:no-any */
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.toggle = /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.show = /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        /** @type {?} */
        var showTooltip = function () {
            if (_this._delayTimeoutId) {
                _this._delayTimeoutId = undefined;
            }
            _this._tooltip
                .attach(TooltipContainerComponent)
                .to(_this.container)
                .position({ attachment: _this.placement })
                .show({
                content: _this.tooltip,
                placement: _this.placement,
                containerClass: _this.containerClass,
                id: _this.ariaDescribedby
            });
        };
        /** @type {?} */
        var cancelDelayedTooltipShowing = function () {
            if (_this._tooltipCancelShowFn) {
                _this._tooltipCancelShowFn();
            }
        };
        if (this.delay) {
            /** @type {?} */
            var _timer_1 = timer(this.delay).subscribe(function () {
                showTooltip();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                /** @type {?} */
                var triggers = parseTriggers(this.triggers);
                this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, triggers[0].close, function () {
                    _timer_1.unsubscribe();
                    cancelDelayedTooltipShowing();
                });
            }
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.hide = /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this.tooltipFadeDuration);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._tooltip.dispose();
    };
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentLoaderFactory },
        { type: TooltipConfig },
        { type: ElementRef },
        { type: Renderer2 },
        { type: PositioningService }
    ]; };
    TooltipDirective.propDecorators = {
        tooltip: [{ type: Input }],
        tooltipChange: [{ type: Output }],
        placement: [{ type: Input }],
        triggers: [{ type: Input }],
        container: [{ type: Input }],
        containerClass: [{ type: Input }],
        isOpen: [{ type: Input }],
        isDisabled: [{ type: Input }],
        delay: [{ type: Input }],
        onShown: [{ type: Output }],
        onHidden: [{ type: Output }],
        htmlContent: [{ type: Input, args: ['tooltipHtml',] }],
        _placement: [{ type: Input, args: ['tooltipPlacement',] }],
        _isOpen: [{ type: Input, args: ['tooltipIsOpen',] }],
        _enable: [{ type: Input, args: ['tooltipEnable',] }],
        _appendToBody: [{ type: Input, args: ['tooltipAppendToBody',] }],
        tooltipAnimation: [{ type: Input }],
        _popupClass: [{ type: Input, args: ['tooltipClass',] }],
        _tooltipContext: [{ type: Input, args: ['tooltipContext',] }],
        _tooltipPopupDelay: [{ type: Input, args: ['tooltipPopupDelay',] }],
        tooltipFadeDuration: [{ type: Input }],
        _tooltipTrigger: [{ type: Input, args: ['tooltipTrigger',] }],
        ariaDescribedby: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
        tooltipStateChanged: [{ type: Output }]
    };
    __decorate([
        OnChange(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltip", void 0);
TooltipDirective.ngDirectiveDef = ɵngcc0.ΔdefineDirective({ type: TooltipDirective, selectors: [["", "tooltip", ""], ["", "tooltipHtml", ""]], factory: function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(ɵngcc0.ΔdirectiveInject(ViewContainerRef), ɵngcc0.ΔdirectiveInject(ComponentLoaderFactory), ɵngcc0.ΔdirectiveInject(TooltipConfig), ɵngcc0.ΔdirectiveInject(ElementRef), ɵngcc0.ΔdirectiveInject(Renderer2), ɵngcc0.ΔdirectiveInject(PositioningService)); }, hostBindings: function TooltipDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵngcc0.ΔallocHostVars(1);
    } if (rf & 2) {
        ɵngcc0.ΔelementAttribute(elIndex, "aria-describedby", ɵngcc0.Δbind(ctx.ariaDescribedby));
    } }, inputs: { containerClass: "containerClass", tooltipAnimation: "tooltipAnimation", tooltipFadeDuration: "tooltipFadeDuration", isOpen: "isOpen", htmlContent: ["tooltipHtml", "htmlContent"], _placement: ["tooltipPlacement", "_placement"], _isOpen: ["tooltipIsOpen", "_isOpen"], _enable: ["tooltipEnable", "_enable"], _appendToBody: ["tooltipAppendToBody", "_appendToBody"], _popupClass: ["tooltipClass", "_popupClass"], _tooltipContext: ["tooltipContext", "_tooltipContext"], _tooltipPopupDelay: ["tooltipPopupDelay", "_tooltipPopupDelay"], _tooltipTrigger: ["tooltipTrigger", "_tooltipTrigger"], tooltip: "tooltip", placement: "placement", triggers: "triggers", container: "container", isDisabled: "isDisabled", delay: "delay" }, outputs: { tooltipChange: "tooltipChange", tooltipStateChanged: "tooltipStateChanged", onShown: "onShown", onHidden: "onHidden" }, exportAs: ["bs-tooltip"] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[tooltip], [tooltipHtml]',
                exportAs: 'bs-tooltip'
            }]
    }], function () { return [{ type: ViewContainerRef }, { type: ComponentLoaderFactory }, { type: TooltipConfig }, { type: ElementRef }, { type: Renderer2 }, { type: PositioningService }]; }, { _elementRef: [], _renderer: [], _positionService: [], tooltipId: [], tooltipChange: [{
            type: Output
        }], containerClass: [{
            type: Input
        }], tooltipAnimation: [{
            type: Input
        }], tooltipFadeDuration: [{
            type: Input
        }], ariaDescribedby: [{
            type: HostBinding,
            args: ['attr.aria-describedby']
        }], tooltipStateChanged: [{
            type: Output
        }], _tooltip: [], onShown: [{
            type: Output
        }], onHidden: [{
            type: Output
        }], isOpen: [{
            type: Input
        }], isOpen: [], htmlContent: [{
            type: Input,
            args: ['tooltipHtml']
        }], _placement: [{
            type: Input,
            args: ['tooltipPlacement']
        }], _isOpen: [{
            type: Input,
            args: ['tooltipIsOpen']
        }], _isOpen: [], _enable: [{
            type: Input,
            args: ['tooltipEnable']
        }], _enable: [], _appendToBody: [{
            type: Input,
            args: ['tooltipAppendToBody']
        }], _appendToBody: [], _popupClass: [{
            type: Input,
            args: ['tooltipClass']
        }], _tooltipContext: [{
            type: Input,
            args: ['tooltipContext']
        }], _tooltipPopupDelay: [{
            type: Input,
            args: ['tooltipPopupDelay']
        }], _tooltipTrigger: [{
            type: Input,
            args: ['tooltipTrigger']
        }], _tooltipTrigger: [], ngOnInit: [], toggle: [], show: [], _tooltipCancelShowFn: [], hide: [], _delayTimeoutId: [], ngOnDestroy: [], tooltip: [{
            type: Input
        }], placement: [{
            type: Input
        }], triggers: [{
            type: Input
        }], container: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], delay: [{
            type: Input
        }] });
    return TooltipDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    /**
     * @return {?}
     */
    TooltipModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TooltipModule,
            providers: [TooltipConfig, ComponentLoaderFactory, PositioningService]
        };
    };
TooltipModule.ngModuleDef = ɵngcc0.ΔdefineNgModule({ type: TooltipModule });
/*@__PURE__*/ ɵngcc0.ΔsetNgModuleScope(TooltipModule, { declarations: function () { return [TooltipDirective,
        TooltipContainerComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [TooltipDirective]; } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TooltipModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [TooltipDirective, TooltipContainerComponent],
                exports: [TooltipDirective],
                entryComponents: [TooltipContainerComponent]
            }]
    }], function () { return []; }, null);
TooltipModule.ngInjectorDef = ɵngcc0.ΔdefineInjector({ factory: function TooltipModule_Factory(t) { return new (t || TooltipModule)(); }, imports: [[CommonModule]] });
    return TooltipModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TooltipContainerComponent, TooltipDirective, TooltipModule, TooltipConfig };

//# sourceMappingURL=ngx-bootstrap-tooltip.js.map