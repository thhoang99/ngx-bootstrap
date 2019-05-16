import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Directive, forwardRef, HostBinding, HostListener, Input, ChangeDetectorRef, ElementRef, Optional, Renderer2, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons
/** @type {?} */
import * as ɵngcc0 from '@angular/core';

const _c0 = ["active"];
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = /** @class */ (function () {
    function ButtonCheckboxDirective() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    // view -> model
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.onClick = 
    // view -> model
    /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.toggle = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.writeValue = 
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnChange = /**
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
    ButtonCheckboxDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.propDecorators = {
        btnCheckboxTrue: [{ type: Input }],
        btnCheckboxFalse: [{ type: Input }],
        state: [{ type: HostBinding, args: ['class.active',] }, { type: HostBinding, args: ['attr.aria-pressed',] }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
ButtonCheckboxDirective.ngDirectiveDef = ɵngcc0.ΔdefineDirective({ type: ButtonCheckboxDirective, selectors: [["", "btnCheckbox", ""]], factory: function ButtonCheckboxDirective_Factory(t) { return new (t || ButtonCheckboxDirective)(); }, hostBindings: function ButtonCheckboxDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵngcc0.ΔallocHostVars(1);
        ɵngcc0.Δlistener("click", function ButtonCheckboxDirective_click_HostBindingHandler($event) { return ctx.onClick(); });
        ɵngcc0.ΔelementHostStyling(_c0);
    } if (rf & 2) {
        ɵngcc0.ΔelementAttribute(elIndex, "aria-pressed", ɵngcc0.Δbind(ctx.state));
        ɵngcc0.ΔelementHostClassProp(0, ctx.state);
        ɵngcc0.ΔelementHostStylingApply();
    } }, inputs: { btnCheckboxTrue: "btnCheckboxTrue", btnCheckboxFalse: "btnCheckboxFalse" }, features: [ɵngcc0.ΔProvidersFeature([CHECKBOX_CONTROL_VALUE_ACCESSOR])] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(ButtonCheckboxDirective, [{
        type: Directive,
        args: [{
                selector: '[btnCheckbox]',
                providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return []; }, { btnCheckboxTrue: [{
            type: Input
        }], btnCheckboxFalse: [{
            type: Input
        }], state: [{
            type: HostBinding,
            args: ['class.active']
        }, {
            type: HostBinding,
            args: ['attr.aria-pressed']
        }], onChange: [], onTouched: [], onClick: [{
            type: HostListener,
            args: ['click']
        }], ngOnInit: [], trueValue: [], falseValue: [], toggle: [], value: [], writeValue: [], setDisabledState: [], isDisabled: [], registerOnChange: [], registerOnTouched: [] });
    return ButtonCheckboxDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return ButtonRadioGroupDirective; }),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioGroupDirective = /** @class */ (function () {
    function ButtonRadioGroupDirective(cdr) {
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioGroupDirective.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.registerOnChange = /**
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
    ButtonRadioGroupDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /** @nocollapse */
    ButtonRadioGroupDirective.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
ButtonRadioGroupDirective.ngDirectiveDef = ɵngcc0.ΔdefineDirective({ type: ButtonRadioGroupDirective, selectors: [["", "btnRadioGroup", ""]], factory: function ButtonRadioGroupDirective_Factory(t) { return new (t || ButtonRadioGroupDirective)(ɵngcc0.ΔdirectiveInject(ChangeDetectorRef)); }, features: [ɵngcc0.ΔProvidersFeature([RADIO_CONTROL_VALUE_ACCESSOR])] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(ButtonRadioGroupDirective, [{
        type: Directive,
        args: [{
                selector: '[btnRadioGroup]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { cdr: [], onChange: [], onTouched: [], value: [], value: [], writeValue: [], _value: [], registerOnChange: [], registerOnTouched: [] });
    return ButtonRadioGroupDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RADIO_CONTROL_VALUE_ACCESSOR$1 = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = /** @class */ (function () {
    function ButtonRadioDirective(el, cdr, group, renderer) {
        this.el = el;
        this.cdr = cdr;
        this.group = group;
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "value", {
        /** Current value of radio component or group */
        get: /**
         * Current value of radio component or group
         * @return {?}
         */
        function () {
            return this.group ? this.group.value : this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.group) {
                this.group.value = value;
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "disabled", {
        /** If `true` — radio button is disabled */
        get: /**
         * If `true` — radio button is disabled
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            this._disabled = disabled;
            this.setDisabledState(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.btnRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.el.nativeElement.attributes.disabled || !this.uncheckable && this.btnRadio === this.value) {
            return;
        }
        this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
        this._onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype._onChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.group) {
            this.group.onTouched();
            this.group.onChange(value);
            return;
        }
        this.onTouched();
        this.onChange(value);
    };
    // ControlValueAccessor
    // model -> view
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype.writeValue = 
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnChange = /**
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
    ButtonRadioDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    ButtonRadioDirective.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    };
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: ButtonRadioGroupDirective, decorators: [{ type: Optional }] },
        { type: Renderer2 }
    ]; };
    ButtonRadioDirective.propDecorators = {
        btnRadio: [{ type: Input }],
        uncheckable: [{ type: Input }],
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        isActive: [{ type: HostBinding, args: ['class.active',] }, { type: HostBinding, args: ['attr.aria-pressed',] }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
ButtonRadioDirective.ngDirectiveDef = ɵngcc0.ΔdefineDirective({ type: ButtonRadioDirective, selectors: [["", "btnRadio", ""]], factory: function ButtonRadioDirective_Factory(t) { return new (t || ButtonRadioDirective)(ɵngcc0.ΔdirectiveInject(ElementRef), ɵngcc0.ΔdirectiveInject(ChangeDetectorRef), ɵngcc0.ΔdirectiveInject(ButtonRadioGroupDirective, 8), ɵngcc0.ΔdirectiveInject(Renderer2)); }, hostBindings: function ButtonRadioDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵngcc0.ΔallocHostVars(1);
        ɵngcc0.Δlistener("click", function ButtonRadioDirective_click_HostBindingHandler($event) { return ctx.onClick(); });
        ɵngcc0.ΔelementHostStyling(_c0);
    } if (rf & 2) {
        ɵngcc0.ΔelementAttribute(elIndex, "aria-pressed", ɵngcc0.Δbind(ctx.isActive));
        ɵngcc0.ΔelementHostClassProp(0, ctx.isActive);
        ɵngcc0.ΔelementHostStylingApply();
    } }, inputs: { value: "value", disabled: "disabled", uncheckable: "uncheckable", btnRadio: "btnRadio" }, features: [ɵngcc0.ΔProvidersFeature([RADIO_CONTROL_VALUE_ACCESSOR$1])] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(ButtonRadioDirective, [{
        type: Directive,
        args: [{
                selector: '[btnRadio]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }, { type: ButtonRadioGroupDirective, decorators: [{
                type: Optional
            }] }, { type: Renderer2 }]; }, { el: [], cdr: [], group: [], renderer: [], onChange: [], onTouched: [], value: [{
            type: Input
        }], value: [], disabled: [{
            type: Input
        }], disabled: [], isActive: [{
            type: HostBinding,
            args: ['class.active']
        }, {
            type: HostBinding,
            args: ['attr.aria-pressed']
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }], ngOnInit: [], uncheckable: [{
            type: Input
        }], onBlur: [], _onChange: [], writeValue: [], registerOnChange: [], registerOnTouched: [], setDisabledState: [], btnRadio: [{
            type: Input
        }] });
    return ButtonRadioDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    /**
     * @return {?}
     */
    ButtonsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
ButtonsModule.ngModuleDef = ɵngcc0.ΔdefineNgModule({ type: ButtonsModule });
/*@__PURE__*/ ɵngcc0.ΔsetNgModuleScope(ButtonsModule, { declarations: [ButtonCheckboxDirective,
        ButtonRadioDirective,
        ButtonRadioGroupDirective], exports: [ButtonCheckboxDirective,
        ButtonRadioDirective,
        ButtonRadioGroupDirective] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(ButtonsModule, [{
        type: NgModule,
        args: [{
                declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
            }]
    }], function () { return []; }, null);
ButtonsModule.ngInjectorDef = ɵngcc0.ΔdefineInjector({ factory: function ButtonsModule_Factory(t) { return new (t || ButtonsModule)(); } });
    return ButtonsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ButtonCheckboxDirective, ButtonRadioGroupDirective, ButtonRadioDirective, ButtonsModule, CHECKBOX_CONTROL_VALUE_ACCESSOR as ɵa, RADIO_CONTROL_VALUE_ACCESSOR as ɵb, RADIO_CONTROL_VALUE_ACCESSOR$1 as ɵc };

//# sourceMappingURL=ngx-bootstrap-buttons.js.map