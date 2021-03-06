import { animate, style, AnimationBuilder } from '@angular/animations';
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';

const _c0 = ["collapse", "in", "show", "collapsing"];
var COLLAPSE_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';
/** @type {?} */
var expandAnimation = [
    style({ height: 0, visibility: 'hidden' }),
    animate(COLLAPSE_ANIMATION_TIMING, style({ height: '*', visibility: 'visible' }))
];
/** @type {?} */
var collapseAnimation = [
    style({ height: '*', visibility: 'visible' }),
    animate(COLLAPSE_ANIMATION_TIMING, style({ height: 0, visibility: 'hidden' }))
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CollapseDirective = /** @class */ (function () {
    function CollapseDirective(_el, _renderer, _builder) {
        this._el = _el;
        this._renderer = _renderer;
        /**
         * This event fires as soon as content collapses
         */
        this.collapsed = new EventEmitter();
        /**
         * This event fires when collapsing is started
         */
        this.collapses = new EventEmitter();
        /**
         * This event fires as soon as content becomes visible
         */
        this.expanded = new EventEmitter();
        /**
         * This event fires when expansion is started
         */
        this.expands = new EventEmitter();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        this._display = 'block';
        this._stylesLoaded = false;
        this._COLLAPSE_ACTION_NAME = 'collapse';
        this._EXPAND_ACTION_NAME = 'expand';
        this._factoryCollapseAnimation = _builder.build(collapseAnimation);
        this._factoryExpandAnimation = _builder.build(expandAnimation);
    }
    Object.defineProperty(CollapseDirective.prototype, "display", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!this.isAnimated) {
                this._renderer.setStyle(this._el.nativeElement, 'display', value);
                return;
            }
            this._display = value;
            if (value === 'none') {
                this.hide();
                return;
            }
            this.show();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isExpanded;
        },
        /** A flag indicating visibility of content (shown or hidden) */
        set: /**
         * A flag indicating visibility of content (shown or hidden)
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CollapseDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this._stylesLoaded = true;
    };
    /** allows to manually toggle content visibility */
    /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    CollapseDirective.prototype.toggle = /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /** allows to manually hide content */
    /**
     * allows to manually hide content
     * @return {?}
     */
    CollapseDirective.prototype.hide = /**
     * allows to manually hide content
     * @return {?}
     */
    function () {
        var _this = this;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapsing = false;
        this.collapses.emit(this);
        this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)(function () {
            _this.collapsed.emit(_this);
            _this._renderer.setStyle(_this._el.nativeElement, 'display', 'none');
        });
    };
    /** allows to manually show collapsed content */
    /**
     * allows to manually show collapsed content
     * @return {?}
     */
    CollapseDirective.prototype.show = /**
     * allows to manually show collapsed content
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapsing = false;
        this.expands.emit(this);
        this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)(function () {
            _this.expanded.emit(_this);
        });
    };
    /**
     * @param {?} isAnimated
     * @param {?} action
     * @return {?}
     */
    CollapseDirective.prototype.animationRun = /**
     * @param {?} isAnimated
     * @param {?} action
     * @return {?}
     */
    function (isAnimated, action) {
        var _this = this;
        if (!isAnimated || !this._stylesLoaded) {
            return function (callback) { return callback(); };
        }
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
        this._renderer.addClass(this._el.nativeElement, 'collapse');
        /** @type {?} */
        var factoryAnimation = (action === this._EXPAND_ACTION_NAME)
            ? this._factoryExpandAnimation
            : this._factoryCollapseAnimation;
        if (this._player) {
            this._player.destroy();
        }
        this._player = factoryAnimation.create(this._el.nativeElement);
        this._player.play();
        return function (callback) { return _this._player.onDone(callback); };
    };
    /** @nocollapse */
    CollapseDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: AnimationBuilder }
    ]; };
    CollapseDirective.propDecorators = {
        collapsed: [{ type: Output }],
        collapses: [{ type: Output }],
        expanded: [{ type: Output }],
        expands: [{ type: Output }],
        isExpanded: [{ type: HostBinding, args: ['class.in',] }, { type: HostBinding, args: ['class.show',] }, { type: HostBinding, args: ['attr.aria-expanded',] }],
        isCollapsed: [{ type: HostBinding, args: ['attr.aria-hidden',] }],
        isCollapse: [{ type: HostBinding, args: ['class.collapse',] }],
        isCollapsing: [{ type: HostBinding, args: ['class.collapsing',] }],
        display: [{ type: Input }],
        isAnimated: [{ type: Input }],
        collapse: [{ type: Input }]
    };
CollapseDirective.ngDirectiveDef = ɵngcc0.ΔdefineDirective({ type: CollapseDirective, selectors: [["", "collapse", ""]], factory: function CollapseDirective_Factory(t) { return new (t || CollapseDirective)(ɵngcc0.ΔdirectiveInject(ElementRef), ɵngcc0.ΔdirectiveInject(Renderer2), ɵngcc0.ΔdirectiveInject(AnimationBuilder)); }, hostBindings: function CollapseDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵngcc0.ΔallocHostVars(2);
        ɵngcc0.ΔelementHostStyling(_c0);
    } if (rf & 2) {
        ɵngcc0.ΔelementAttribute(elIndex, "aria-expanded", ɵngcc0.Δbind(ctx.isExpanded));
        ɵngcc0.ΔelementAttribute(elIndex, "aria-hidden", ɵngcc0.Δbind(ctx.isCollapsed));
        ɵngcc0.ΔelementHostClassProp(0, ctx.isCollapse);
        ɵngcc0.ΔelementHostClassProp(1, ctx.isExpanded);
        ɵngcc0.ΔelementHostClassProp(2, ctx.isExpanded);
        ɵngcc0.ΔelementHostClassProp(3, ctx.isCollapsing);
        ɵngcc0.ΔelementHostStylingApply();
    } }, inputs: { isAnimated: "isAnimated", display: "display", collapse: "collapse" }, outputs: { collapsed: "collapsed", collapses: "collapses", expanded: "expanded", expands: "expands" }, exportAs: ["bs-collapse"] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(CollapseDirective, [{
        type: Directive,
        args: [{
                selector: '[collapse]',
                exportAs: 'bs-collapse',
                host: {
                    '[class.collapse]': 'true'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: AnimationBuilder }]; }, { _el: [], _renderer: [], collapsed: [{
            type: Output
        }], collapses: [{
            type: Output
        }], expanded: [{
            type: Output
        }], expands: [{
            type: Output
        }], isExpanded: [{
            type: HostBinding,
            args: ['class.in']
        }, {
            type: HostBinding,
            args: ['class.show']
        }, {
            type: HostBinding,
            args: ['attr.aria-expanded']
        }], isCollapsed: [{
            type: HostBinding,
            args: ['attr.aria-hidden']
        }], isCollapse: [{
            type: HostBinding,
            args: ['class.collapse']
        }], isCollapsing: [{
            type: HostBinding,
            args: ['class.collapsing']
        }], isAnimated: [{
            type: Input
        }], _display: [], _stylesLoaded: [], _COLLAPSE_ACTION_NAME: [], _EXPAND_ACTION_NAME: [], _factoryCollapseAnimation: [], _factoryExpandAnimation: [], display: [{
            type: Input
        }], collapse: [{
            type: Input
        }], collapse: [], ngAfterViewChecked: [], toggle: [], hide: [], show: [], animationRun: [], _player: [] });
    return CollapseDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CollapseModule = /** @class */ (function () {
    function CollapseModule() {
    }
    /**
     * @return {?}
     */
    CollapseModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: CollapseModule, providers: [] };
    };
CollapseModule.ngModuleDef = ɵngcc0.ΔdefineNgModule({ type: CollapseModule });
/*@__PURE__*/ ɵngcc0.ΔsetNgModuleScope(CollapseModule, { declarations: [CollapseDirective], exports: [CollapseDirective] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(CollapseModule, [{
        type: NgModule,
        args: [{
                declarations: [CollapseDirective],
                exports: [CollapseDirective]
            }]
    }], function () { return []; }, null);
CollapseModule.ngInjectorDef = ɵngcc0.ΔdefineInjector({ factory: function CollapseModule_Factory(t) { return new (t || CollapseModule)(); } });
    return CollapseModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CollapseDirective, CollapseModule };

//# sourceMappingURL=ngx-bootstrap-collapse.js.map