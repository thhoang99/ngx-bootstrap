import { filter } from 'rxjs/operators';
import { isBs3 } from 'ngx-bootstrap/utils';
import { __values } from 'tslib';
import { Injectable, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, Directive, Input, Output, ViewContainerRef, TemplateRef, HostBinding, HostListener, NgModule } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default dropdown configuration
 */
import * as ɵngcc0 from '@angular/core';

const _c0 = [2, "display", "block", "position", "absolute"];
const _c1 = ["dropup", "dropdown", "show", "open"];
const _c2 = [];
const _c3 = ["dropup", "open", "show"];
var BsDropdownConfig = /** @class */ (function () {
    function BsDropdownConfig() {
        /**
         * default dropdown auto closing behavior
         */
        this.autoClose = true;
        /**
         * default dropdown auto closing behavior
         */
        this.insideClick = false;
    }
BsDropdownConfig.ngInjectableDef = ɵngcc0.ΔdefineInjectable({ token: BsDropdownConfig, factory: function BsDropdownConfig_Factory(t) { return new (t || BsDropdownConfig)(); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(BsDropdownConfig, [{
        type: Injectable
    }], function () { return []; }, { autoClose: [], insideClick: [] });
    return BsDropdownConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new EventEmitter();
        this.isDisabledChange = new EventEmitter();
        this.toggleClick = new EventEmitter();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
BsDropdownState.ngInjectableDef = ɵngcc0.ΔdefineInjectable({ token: BsDropdownState, factory: function BsDropdownState_Factory(t) { return new (t || BsDropdownState)(); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(BsDropdownState, [{
        type: Injectable
    }], function () { return []; }, { direction: [], isOpenChange: [], isDisabledChange: [], toggleClick: [], dropdownMenu: [] });
    return BsDropdownState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDropdownContainerComponent = /** @class */ (function () {
    function BsDropdownContainerComponent(_state, cd, _renderer, _element) {
        var _this = this;
        this._state = _state;
        this.cd = cd;
        this._renderer = _renderer;
        this._element = _element;
        this.isOpen = false;
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
            /** @type {?} */
            var dropdown = _this._element.nativeElement.querySelector('.dropdown-menu');
            if (dropdown && !isBs3()) {
                _this._renderer.addClass(dropdown, 'show');
                if (dropdown.classList.contains('dropdown-menu-right')) {
                    _this._renderer.setStyle(dropdown, 'left', 'auto');
                    _this._renderer.setStyle(dropdown, 'right', '0');
                }
                if (_this.direction === 'up') {
                    _this._renderer.setStyle(dropdown, 'top', 'auto');
                    _this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                }
            }
            _this.cd.markForCheck();
            _this.cd.detectChanges();
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    /**
     * \@internal
     * @param {?} el
     * @return {?}
     */
    BsDropdownContainerComponent.prototype._contains = /**
     * \@internal
     * @param {?} el
     * @return {?}
     */
    function (el) {
        return this._element.nativeElement.contains(el);
    };
    /**
     * @return {?}
     */
    BsDropdownContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: BsDropdownState },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
BsDropdownContainerComponent.ngComponentDef = ɵngcc0.ΔdefineComponent({ type: BsDropdownContainerComponent, selectors: [["bs-dropdown-container"]], factory: function BsDropdownContainerComponent_Factory(t) { return new (t || BsDropdownContainerComponent)(ɵngcc0.ΔdirectiveInject(BsDropdownState), ɵngcc0.ΔdirectiveInject(ChangeDetectorRef), ɵngcc0.ΔdirectiveInject(Renderer2), ɵngcc0.ΔdirectiveInject(ElementRef)); }, hostBindings: function BsDropdownContainerComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵngcc0.ΔelementHostAttrs(_c0);
    } }, ngContentSelectors: _c2, consts: 2, vars: 0, template: function BsDropdownContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ΔprojectionDef();
        ɵngcc0.ΔelementStart(0, "div");
        ɵngcc0.ΔelementStyling(_c1);
        ɵngcc0.Δprojection(1);
        ɵngcc0.ΔelementEnd();
    } if (rf & 2) {
        ɵngcc0.ΔelementClassProp(0, 0, (ctx.direction === "up"));
        ɵngcc0.ΔelementClassProp(0, 1, (ctx.direction === "down"));
        ɵngcc0.ΔelementClassProp(0, 2, ctx.isOpen);
        ɵngcc0.ΔelementClassProp(0, 3, ctx.isOpen);
        ɵngcc0.ΔelementStylingApply(0);
    } }, directives: function () { return [BsDropdownDirective]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(BsDropdownContainerComponent, [{
        type: Component,
        args: [{
                selector: 'bs-dropdown-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    style: 'display:block;position: absolute;'
                },
                template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
            }]
    }], function () { return [{ type: BsDropdownState }, { type: ChangeDetectorRef }, { type: Renderer2 }, { type: ElementRef }]; }, { _state: [], cd: [], _renderer: [], _element: [], isOpen: [], _subscription: [], direction: [], _contains: [], ngOnDestroy: [] });
    return BsDropdownContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDropdownDirective = /** @class */ (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
        this._state.insideClick = this._config.insideClick;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         */
        set: /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._state.autoClose = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "insideClick", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.insideClick;
        },
        /**
         * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
         */
        set: /**
         * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._state.insideClick = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisabled;
        },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         */
        set: /**
         * Disables dropdown toggle and hides dropdown menu if opened
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
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
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "_showInline", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return !this.container;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        // attach DOM listeners
        this._dropdown.listen({
            // because of dropdown inline mode
            outsideClick: false,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state.toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state.isDisabledChange
            .pipe(filter(function (value) { return value; }))
            .subscribe(function (value) { return _this.hide(); }));
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.show = /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        if (this._showInline) {
            if (!this._inlinedMenu) {
                this._state.dropdownMenu.then(function (dropdownMenu) {
                    _this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
                    _this._inlinedMenu = _this._dropdown._inlineViewRef;
                    _this.addBs4Polyfills();
                })
                    // swallow errors
                    .catch();
            }
            this.addBs4Polyfills();
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu.then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            /** @type {?} */
            var _dropup = _this.dropup ||
                (typeof _this.dropup !== 'undefined' && _this.dropup);
            _this._state.direction = _dropup ? 'up' : 'down';
            /** @type {?} */
            var _placement = _this.placement || (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        })
            // swallow error
            .catch();
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.hide = /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            return;
        }
        if (this._showInline) {
            this.removeShowClass();
            this.removeDropupStyles();
            this._isInlineOpen = false;
            this.onHidden.emit(true);
        }
        else {
            this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     */
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     * @param {?=} value
     * @return {?}
     */
    BsDropdownDirective.prototype.toggle = /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (this.isOpen || !value) {
            return this.hide();
        }
        return this.show();
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    BsDropdownDirective.prototype._contains = /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this._elementRef.nativeElement.contains(event.target) ||
            (this._dropdown.instance && this._dropdown.instance._contains(event.target));
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            // clean up subscriptions and destroy dropdown
            for (var _b = __values(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._dropdown.dispose();
    };
    /**
     * @private
     * @return {?}
     */
    BsDropdownDirective.prototype.addBs4Polyfills = /**
     * @private
     * @return {?}
     */
    function () {
        if (!isBs3()) {
            this.addShowClass();
            this.checkRightAlignment();
            this.addDropupStyles();
        }
    };
    /**
     * @private
     * @return {?}
     */
    BsDropdownDirective.prototype.addShowClass = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    /**
     * @private
     * @return {?}
     */
    BsDropdownDirective.prototype.removeShowClass = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    /**
     * @private
     * @return {?}
     */
    BsDropdownDirective.prototype.checkRightAlignment = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            /** @type {?} */
            var isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
        }
    };
    /**
     * @private
     * @return {?}
     */
    BsDropdownDirective.prototype.addDropupStyles = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            // a little hack to not break support of bootstrap 4 beta
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'bottom', 'auto');
        }
    };
    /**
     * @private
     * @return {?}
     */
    BsDropdownDirective.prototype.removeDropupStyles = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'bottom');
        }
    };
    /** @nocollapse */
    BsDropdownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: ComponentLoaderFactory },
        { type: BsDropdownConfig },
        { type: BsDropdownState }
    ]; };
    BsDropdownDirective.propDecorators = {
        placement: [{ type: Input }],
        triggers: [{ type: Input }],
        container: [{ type: Input }],
        dropup: [{ type: Input }],
        autoClose: [{ type: Input }],
        insideClick: [{ type: Input }],
        isDisabled: [{ type: Input }],
        isOpen: [{ type: Input }],
        isOpenChange: [{ type: Output }],
        onShown: [{ type: Output }],
        onHidden: [{ type: Output }]
    };
BsDropdownDirective.ngDirectiveDef = ɵngcc0.ΔdefineDirective({ type: BsDropdownDirective, selectors: [["", "bsDropdown", ""], ["", "dropdown", ""]], factory: function BsDropdownDirective_Factory(t) { return new (t || BsDropdownDirective)(ɵngcc0.ΔdirectiveInject(ElementRef), ɵngcc0.ΔdirectiveInject(Renderer2), ɵngcc0.ΔdirectiveInject(ViewContainerRef), ɵngcc0.ΔdirectiveInject(ComponentLoaderFactory), ɵngcc0.ΔdirectiveInject(BsDropdownConfig), ɵngcc0.ΔdirectiveInject(BsDropdownState)); }, hostBindings: function BsDropdownDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵngcc0.ΔelementHostStyling(_c3);
    } if (rf & 2) {
        ɵngcc0.ΔelementHostClassProp(0, ctx.dropup);
        ɵngcc0.ΔelementHostClassProp(1, ctx.isOpen);
        ɵngcc0.ΔelementHostClassProp(2, (ctx.isOpen && ctx.isBs4));
        ɵngcc0.ΔelementHostStylingApply();
    } }, inputs: { autoClose: "autoClose", insideClick: "insideClick", isDisabled: "isDisabled", isOpen: "isOpen", placement: "placement", triggers: "triggers", container: "container", dropup: "dropup" }, outputs: { onShown: "onShown", onHidden: "onHidden", isOpenChange: "isOpenChange" }, exportAs: ["bs-dropdown"], features: [ɵngcc0.ΔProvidersFeature([BsDropdownState])] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(BsDropdownDirective, [{
        type: Directive,
        args: [{
                selector: '[bsDropdown],[dropdown]',
                exportAs: 'bs-dropdown',
                providers: [BsDropdownState],
                host: {
                    '[class.dropup]': 'dropup',
                    '[class.open]': 'isOpen',
                    '[class.show]': 'isOpen && isBs4'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: ViewContainerRef }, { type: ComponentLoaderFactory }, { type: BsDropdownConfig }, { type: BsDropdownState }]; }, { _elementRef: [], _renderer: [], _viewContainerRef: [], _cis: [], _config: [], _state: [], _isInlineOpen: [], _subscriptions: [], _isInited: [], _dropdown: [], onShown: [{
            type: Output
        }], onHidden: [{
            type: Output
        }], isOpenChange: [{
            type: Output
        }], autoClose: [{
            type: Input
        }], autoClose: [], insideClick: [{
            type: Input
        }], insideClick: [], isDisabled: [{
            type: Input
        }], isDisabled: [], isOpen: [{
            type: Input
        }], isOpen: [], isBs4: [], _showInline: [], ngOnInit: [], show: [], hide: [], toggle: [], _contains: [], ngOnDestroy: [], addBs4Polyfills: [], addShowClass: [], removeShowClass: [], checkRightAlignment: [], addDropupStyles: [], removeDropupStyles: [], placement: [{
            type: Input
        }], triggers: [{
            type: Input
        }], container: [{
            type: Input
        }], dropup: [{
            type: Input
        }] });
    return BsDropdownDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDropdownMenuDirective = /** @class */ (function () {
    // tslint:disable:no-any
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    /** @nocollapse */
    BsDropdownMenuDirective.ctorParameters = function () { return [
        { type: BsDropdownState },
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
BsDropdownMenuDirective.ngDirectiveDef = ɵngcc0.ΔdefineDirective({ type: BsDropdownMenuDirective, selectors: [["", "bsDropdownMenu", ""], ["", "dropdownMenu", ""]], factory: function BsDropdownMenuDirective_Factory(t) { return new (t || BsDropdownMenuDirective)(ɵngcc0.ΔdirectiveInject(BsDropdownState), ɵngcc0.ΔdirectiveInject(ViewContainerRef), ɵngcc0.ΔdirectiveInject(TemplateRef)); }, exportAs: ["bs-dropdown-menu"] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(BsDropdownMenuDirective, [{
        type: Directive,
        args: [{
                selector: '[bsDropdownMenu],[dropdownMenu]',
                exportAs: 'bs-dropdown-menu'
            }]
    }], function () { return [{ type: BsDropdownState }, { type: ViewContainerRef }, { type: TemplateRef }]; }, null);
    return BsDropdownMenuDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDropdownToggleDirective = /** @class */ (function () {
    function BsDropdownToggleDirective(_changeDetectorRef, _dropdown, _element, _renderer, _state) {
        var _this = this;
        this._changeDetectorRef = _changeDetectorRef;
        this._dropdown = _dropdown;
        this._element = _element;
        this._renderer = _renderer;
        this._state = _state;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
            if (value) {
                _this._documentClickListener = _this._renderer.listen('document', 'click', function (event) {
                    if (_this._state.autoClose && event.button !== 2 &&
                        !_this._element.nativeElement.contains(event.target) &&
                        !(_this._state.insideClick && _this._dropdown._contains(event))) {
                        _this._state.toggleClick.emit(false);
                        _this._changeDetectorRef.detectChanges();
                    }
                });
                _this._escKeyUpListener = _this._renderer.listen(_this._element.nativeElement, 'keyup.esc', function () {
                    if (_this._state.autoClose) {
                        _this._state.toggleClick.emit(false);
                        _this._changeDetectorRef.detectChanges();
                    }
                });
            }
            else {
                _this._documentClickListener();
                _this._escKeyUpListener();
            }
        }));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange.subscribe(function (value) { return (_this.isDisabled = value || null); }));
    }
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit(true);
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = __values(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: BsDropdownDirective },
        { type: ElementRef },
        { type: Renderer2 },
        { type: BsDropdownState }
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        isDisabled: [{ type: HostBinding, args: ['attr.disabled',] }],
        isOpen: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
        onClick: [{ type: HostListener, args: ['click', [],] }]
    };
BsDropdownToggleDirective.ngDirectiveDef = ɵngcc0.ΔdefineDirective({ type: BsDropdownToggleDirective, selectors: [["", "bsDropdownToggle", ""], ["", "dropdownToggle", ""]], factory: function BsDropdownToggleDirective_Factory(t) { return new (t || BsDropdownToggleDirective)(ɵngcc0.ΔdirectiveInject(ChangeDetectorRef), ɵngcc0.ΔdirectiveInject(BsDropdownDirective), ɵngcc0.ΔdirectiveInject(ElementRef), ɵngcc0.ΔdirectiveInject(Renderer2), ɵngcc0.ΔdirectiveInject(BsDropdownState)); }, hostBindings: function BsDropdownToggleDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵngcc0.ΔallocHostVars(3);
        ɵngcc0.Δlistener("click", function BsDropdownToggleDirective_click_HostBindingHandler($event) { return ctx.onClick(); });
    } if (rf & 2) {
        ɵngcc0.ΔelementAttribute(elIndex, "aria-haspopup", ɵngcc0.Δbind(true));
        ɵngcc0.ΔelementAttribute(elIndex, "disabled", ɵngcc0.Δbind(ctx.isDisabled));
        ɵngcc0.ΔelementAttribute(elIndex, "aria-expanded", ɵngcc0.Δbind(ctx.isOpen));
    } }, exportAs: ["bs-dropdown-toggle"] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(BsDropdownToggleDirective, [{
        type: Directive,
        args: [{
                selector: '[bsDropdownToggle],[dropdownToggle]',
                exportAs: 'bs-dropdown-toggle',
                host: {
                    '[attr.aria-haspopup]': 'true'
                }
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: BsDropdownDirective }, { type: ElementRef }, { type: Renderer2 }, { type: BsDropdownState }]; }, { _changeDetectorRef: [], _dropdown: [], _element: [], _renderer: [], _state: [], isDisabled: [{
            type: HostBinding,
            args: ['attr.disabled']
        }], _subscriptions: [], onClick: [{
            type: HostListener,
            args: ['click', []]
        }], ngOnDestroy: [], isOpen: [{
            type: HostBinding,
            args: ['attr.aria-expanded']
        }] });
    return BsDropdownToggleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDropdownModule = /** @class */ (function () {
    function BsDropdownModule() {
    }
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?=} config
     * @return {?}
     */
    BsDropdownModule.forRoot = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: BsDropdownModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                {
                    provide: BsDropdownConfig,
                    useValue: config ? config : { autoClose: true, insideClick: false }
                }
            ]
        };
    };
BsDropdownModule.ngModuleDef = ɵngcc0.ΔdefineNgModule({ type: BsDropdownModule });
/*@__PURE__*/ ɵngcc0.ΔsetNgModuleScope(BsDropdownModule, { declarations: [BsDropdownMenuDirective,
        BsDropdownToggleDirective,
        BsDropdownContainerComponent,
        BsDropdownDirective], exports: [BsDropdownMenuDirective,
        BsDropdownToggleDirective,
        BsDropdownDirective] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(BsDropdownModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownContainerComponent,
                    BsDropdownDirective
                ],
                exports: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownDirective
                ],
                entryComponents: [BsDropdownContainerComponent]
            }]
    }], function () { return []; }, null);
BsDropdownModule.ngInjectorDef = ɵngcc0.ΔdefineInjector({ factory: function BsDropdownModule_Factory(t) { return new (t || BsDropdownModule)(); } });
    return BsDropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownState, BsDropdownConfig, BsDropdownModule };

//# sourceMappingURL=ngx-bootstrap-dropdown.js.map