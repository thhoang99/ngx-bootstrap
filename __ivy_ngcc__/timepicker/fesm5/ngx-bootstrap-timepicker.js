import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { __extends } from 'tslib';
import { BehaviorSubject } from 'rxjs';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
import { Injectable, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = [1, "text-center", 3, "hidden"];
const _c1 = [1, "btn", "btn-link", 3, "click"];
const _c2 = [1, "bs-chevron", "bs-chevron-up"];
const _c3 = [4, "ngIf"];
const _c4 = [1, "form-group"];
const _c5 = ["type", "text", "placeholder", "HH", "maxlength", "2", 1, "form-control", "text-center", "bs-timepicker-field", 3, "readonly", "disabled", "value", "wheel", "keydown.ArrowUp", "keydown.ArrowDown", "change"];
const _c6 = ["class", "form-group", 3, "has-error", 4, "ngIf"];
const _c7 = [1, "bs-chevron", "bs-chevron-down"];
function TimepickerComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ΔelementStart(0, "td");
    ɵngcc0.Δtext(1, "\u00A0\u00A0\u00A0");
    ɵngcc0.ΔelementEnd();
} }
const _c8 = ["disabled"];
function TimepickerComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r91 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "td");
    ɵngcc0.ΔelementStart(1, "a", _c1);
    ɵngcc0.ΔelementStyling(_c8);
    ɵngcc0.Δlistener("click", function TimepickerComponent_td_7_Template_a_click_1_listener($event) { ɵngcc0.ΔrestoreView(_r91); const ctx_r90 = ɵngcc0.ΔnextContext(); return ctx_r90.changeMinutes(ctx_r90.minuteStep); });
    ɵngcc0.Δelement(2, "span", _c2);
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r73 = ɵngcc0.ΔnextContext();
    ɵngcc0.ΔelementClassProp(1, 0, (!ctx_r73.canIncrementMinutes || !ctx_r73.isEditable));
    ɵngcc0.ΔelementStylingApply(1);
} }
function TimepickerComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ΔelementStart(0, "td");
    ɵngcc0.Δtext(1, "\u00A0");
    ɵngcc0.ΔelementEnd();
} }
function TimepickerComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r93 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "td");
    ɵngcc0.ΔelementStart(1, "a", _c1);
    ɵngcc0.ΔelementStyling(_c8);
    ɵngcc0.Δlistener("click", function TimepickerComponent_td_9_Template_a_click_1_listener($event) { ɵngcc0.ΔrestoreView(_r93); const ctx_r92 = ɵngcc0.ΔnextContext(); return ctx_r92.changeSeconds(ctx_r92.secondsStep); });
    ɵngcc0.Δelement(2, "span", _c2);
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r75 = ɵngcc0.ΔnextContext();
    ɵngcc0.ΔelementClassProp(1, 0, (!ctx_r75.canIncrementSeconds || !ctx_r75.isEditable));
    ɵngcc0.ΔelementStylingApply(1);
} }
function TimepickerComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ΔelementStart(0, "td");
    ɵngcc0.Δtext(1, "\u00A0\u00A0\u00A0");
    ɵngcc0.ΔelementEnd();
} }
function TimepickerComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.Δelement(0, "td");
} }
function TimepickerComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ΔelementStart(0, "td");
    ɵngcc0.Δtext(1, "\u00A0:\u00A0");
    ɵngcc0.ΔelementEnd();
} }
const _c9 = ["type", "text", "placeholder", "MM", "maxlength", "2", 1, "form-control", "text-center", "bs-timepicker-field", 3, "readonly", "disabled", "value", "wheel", "keydown.ArrowUp", "keydown.ArrowDown", "change"];
const _c10 = ["has-error"];
const _c11 = ["is-invalid"];
function TimepickerComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r95 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "td", _c4);
    ɵngcc0.ΔelementStyling(_c10);
    ɵngcc0.ΔelementStart(1, "input", _c9);
    ɵngcc0.ΔelementStyling(_c11);
    ɵngcc0.Δlistener("wheel", function TimepickerComponent_td_16_Template_input_wheel_1_listener($event) { ɵngcc0.ΔrestoreView(_r95); const ctx_r94 = ɵngcc0.ΔnextContext(); ctx_r94.prevDef($event); return ctx_r94.changeMinutes((ctx_r94.minuteStep * ctx_r94.wheelSign($event)), "wheel"); });
    ɵngcc0.Δlistener("keydown.ArrowUp", function TimepickerComponent_td_16_Template_input_keydown_ArrowUp_1_listener($event) { ɵngcc0.ΔrestoreView(_r95); const ctx_r96 = ɵngcc0.ΔnextContext(); return ctx_r96.changeMinutes(ctx_r96.minuteStep, "key"); });
    ɵngcc0.Δlistener("keydown.ArrowDown", function TimepickerComponent_td_16_Template_input_keydown_ArrowDown_1_listener($event) { ɵngcc0.ΔrestoreView(_r95); const ctx_r97 = ɵngcc0.ΔnextContext(); return ctx_r97.changeMinutes((0 - ctx_r97.minuteStep), "key"); });
    ɵngcc0.Δlistener("change", function TimepickerComponent_td_16_Template_input_change_1_listener($event) { ɵngcc0.ΔrestoreView(_r95); const ctx_r98 = ɵngcc0.ΔnextContext(); return ctx_r98.updateMinutes($event.target.value); });
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r79 = ɵngcc0.ΔnextContext();
    ɵngcc0.ΔelementClassProp(0, 0, ctx_r79.invalidMinutes);
    ɵngcc0.ΔelementStylingApply(0);
    ɵngcc0.ΔelementClassProp(1, 0, ctx_r79.invalidMinutes);
    ɵngcc0.ΔelementStylingApply(1);
    ɵngcc0.Δselect(1);
    ɵngcc0.Δproperty("readonly", ctx_r79.readonlyInput);
    ɵngcc0.Δproperty("disabled", ctx_r79.disabled);
    ɵngcc0.Δproperty("value", ctx_r79.minutes);
} }
function TimepickerComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ΔelementStart(0, "td");
    ɵngcc0.Δtext(1, "\u00A0:\u00A0");
    ɵngcc0.ΔelementEnd();
} }
const _c12 = ["type", "text", "placeholder", "SS", "maxlength", "2", 1, "form-control", "text-center", "bs-timepicker-field", 3, "readonly", "disabled", "value", "wheel", "keydown.ArrowUp", "keydown.ArrowDown", "change"];
function TimepickerComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r100 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "td", _c4);
    ɵngcc0.ΔelementStyling(_c10);
    ɵngcc0.ΔelementStart(1, "input", _c12);
    ɵngcc0.ΔelementStyling(_c11);
    ɵngcc0.Δlistener("wheel", function TimepickerComponent_td_18_Template_input_wheel_1_listener($event) { ɵngcc0.ΔrestoreView(_r100); const ctx_r99 = ɵngcc0.ΔnextContext(); ctx_r99.prevDef($event); return ctx_r99.changeSeconds((ctx_r99.secondsStep * ctx_r99.wheelSign($event)), "wheel"); });
    ɵngcc0.Δlistener("keydown.ArrowUp", function TimepickerComponent_td_18_Template_input_keydown_ArrowUp_1_listener($event) { ɵngcc0.ΔrestoreView(_r100); const ctx_r101 = ɵngcc0.ΔnextContext(); return ctx_r101.changeSeconds(ctx_r101.secondsStep, "key"); });
    ɵngcc0.Δlistener("keydown.ArrowDown", function TimepickerComponent_td_18_Template_input_keydown_ArrowDown_1_listener($event) { ɵngcc0.ΔrestoreView(_r100); const ctx_r102 = ɵngcc0.ΔnextContext(); return ctx_r102.changeSeconds((0 - ctx_r102.secondsStep), "key"); });
    ɵngcc0.Δlistener("change", function TimepickerComponent_td_18_Template_input_change_1_listener($event) { ɵngcc0.ΔrestoreView(_r100); const ctx_r103 = ɵngcc0.ΔnextContext(); return ctx_r103.updateSeconds($event.target.value); });
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r81 = ɵngcc0.ΔnextContext();
    ɵngcc0.ΔelementClassProp(0, 0, ctx_r81.invalidSeconds);
    ɵngcc0.ΔelementStylingApply(0);
    ɵngcc0.ΔelementClassProp(1, 0, ctx_r81.invalidSeconds);
    ɵngcc0.ΔelementStylingApply(1);
    ɵngcc0.Δselect(1);
    ɵngcc0.Δproperty("readonly", ctx_r81.readonlyInput);
    ɵngcc0.Δproperty("disabled", ctx_r81.disabled);
    ɵngcc0.Δproperty("value", ctx_r81.seconds);
} }
function TimepickerComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ΔelementStart(0, "td");
    ɵngcc0.Δtext(1, "\u00A0\u00A0\u00A0");
    ɵngcc0.ΔelementEnd();
} }
const _c13 = ["type", "button", 1, "btn", "btn-default", "text-center", 3, "disabled", "click"];
function TimepickerComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r105 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "td");
    ɵngcc0.ΔelementStart(1, "button", _c13);
    ɵngcc0.ΔelementStyling(_c8);
    ɵngcc0.Δlistener("click", function TimepickerComponent_td_20_Template_button_click_1_listener($event) { ɵngcc0.ΔrestoreView(_r105); const ctx_r104 = ɵngcc0.ΔnextContext(); return ctx_r104.toggleMeridian(); });
    ɵngcc0.Δtext(2);
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r83 = ɵngcc0.ΔnextContext();
    ɵngcc0.ΔelementClassProp(1, 0, (!ctx_r83.isEditable || !ctx_r83.canToggleMeridian));
    ɵngcc0.ΔelementStylingApply(1);
    ɵngcc0.Δselect(1);
    ɵngcc0.Δproperty("disabled", (!ctx_r83.isEditable || !ctx_r83.canToggleMeridian));
    ɵngcc0.Δselect(2);
    ɵngcc0.ΔtextBinding(2, ɵngcc0.Δinterpolation1("", ctx_r83.meridian, " "));
} }
function TimepickerComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ΔelementStart(0, "td");
    ɵngcc0.Δtext(1, "\u00A0\u00A0\u00A0");
    ɵngcc0.ΔelementEnd();
} }
function TimepickerComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r107 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "td");
    ɵngcc0.ΔelementStart(1, "a", _c1);
    ɵngcc0.ΔelementStyling(_c8);
    ɵngcc0.Δlistener("click", function TimepickerComponent_td_26_Template_a_click_1_listener($event) { ɵngcc0.ΔrestoreView(_r107); const ctx_r106 = ɵngcc0.ΔnextContext(); return ctx_r106.changeMinutes((0 - ctx_r106.minuteStep)); });
    ɵngcc0.Δelement(2, "span", _c7);
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r85 = ɵngcc0.ΔnextContext();
    ɵngcc0.ΔelementClassProp(1, 0, (!ctx_r85.canDecrementMinutes || !ctx_r85.isEditable));
    ɵngcc0.ΔelementStylingApply(1);
} }
function TimepickerComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ΔelementStart(0, "td");
    ɵngcc0.Δtext(1, "\u00A0");
    ɵngcc0.ΔelementEnd();
} }
function TimepickerComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    const _r109 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "td");
    ɵngcc0.ΔelementStart(1, "a", _c1);
    ɵngcc0.ΔelementStyling(_c8);
    ɵngcc0.Δlistener("click", function TimepickerComponent_td_28_Template_a_click_1_listener($event) { ɵngcc0.ΔrestoreView(_r109); const ctx_r108 = ɵngcc0.ΔnextContext(); return ctx_r108.changeSeconds((0 - ctx_r108.secondsStep)); });
    ɵngcc0.Δelement(2, "span", _c7);
    ɵngcc0.ΔelementEnd();
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r87 = ɵngcc0.ΔnextContext();
    ɵngcc0.ΔelementClassProp(1, 0, (!ctx_r87.canDecrementSeconds || !ctx_r87.isEditable));
    ɵngcc0.ΔelementStylingApply(1);
} }
function TimepickerComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ΔelementStart(0, "td");
    ɵngcc0.Δtext(1, "\u00A0\u00A0\u00A0");
    ɵngcc0.ΔelementEnd();
} }
function TimepickerComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.Δelement(0, "td");
} }
var TimepickerActions = /** @class */ (function () {
    function TimepickerActions() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerActions.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: TimepickerActions.WRITE_VALUE,
            payload: value
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TimepickerActions.prototype.changeHours = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: TimepickerActions.CHANGE_HOURS,
            payload: event
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TimepickerActions.prototype.changeMinutes = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: TimepickerActions.CHANGE_MINUTES,
            payload: event
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TimepickerActions.prototype.changeSeconds = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: TimepickerActions.CHANGE_SECONDS,
            payload: event
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerActions.prototype.setTime = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: TimepickerActions.SET_TIME_UNIT,
            payload: value
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerActions.prototype.updateControls = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: TimepickerActions.UPDATE_CONTROLS,
            payload: value
        };
    };
    TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
    TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
    TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
    TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
    TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
    TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
TimepickerActions.ngInjectableDef = ɵngcc0.ΔdefineInjectable({ token: TimepickerActions, factory: function TimepickerActions_Factory(t) { return new (t || TimepickerActions)(); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TimepickerActions, [{
        type: Injectable
    }], function () { return []; }, { writeValue: [], changeHours: [], changeMinutes: [], changeSeconds: [], setTime: [], updateControls: [] });
    return TimepickerActions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var dex = 10;
/** @type {?} */
var hoursPerDay = 24;
/** @type {?} */
var hoursPerDayHalf = 12;
/** @type {?} */
var minutesPerHour = 60;
/** @type {?} */
var secondsPerMinute = 60;
/**
 * @param {?=} value
 * @return {?}
 */
function isValidDate(value) {
    if (!value) {
        return false;
    }
    if (value instanceof Date && isNaN(value.getHours())) {
        return false;
    }
    if (typeof value === 'string') {
        return isValidDate(new Date(value));
    }
    return true;
}
/**
 * @param {?} controls
 * @param {?} newDate
 * @return {?}
 */
function isValidLimit(controls, newDate) {
    if (controls.min && newDate < controls.min) {
        return false;
    }
    if (controls.max && newDate > controls.max) {
        return false;
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    return parseInt(value, dex);
}
/**
 * @param {?} value
 * @param {?=} isPM
 * @return {?}
 */
function parseHours(value, isPM) {
    if (isPM === void 0) { isPM = false; }
    /** @type {?} */
    var hour = toNumber(value);
    if (isNaN(hour) ||
        hour < 0 ||
        hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
        return NaN;
    }
    return hour === hoursPerDayHalf && !isPM ? 0 : hour;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseMinutes(value) {
    /** @type {?} */
    var minute = toNumber(value);
    if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
        return NaN;
    }
    return minute;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseSeconds(value) {
    /** @type {?} */
    var seconds = toNumber(value);
    if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
        return NaN;
    }
    return seconds;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseTime(value) {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
}
/**
 * @param {?} value
 * @param {?} diff
 * @return {?}
 */
function changeTime(value, diff) {
    if (!value) {
        return changeTime(createDate(new Date(), 0, 0, 0), diff);
    }
    /** @type {?} */
    var hour = value.getHours();
    /** @type {?} */
    var minutes = value.getMinutes();
    /** @type {?} */
    var seconds = value.getSeconds();
    if (diff.hour) {
        hour = (hour + toNumber(diff.hour)) % hoursPerDay;
        if (hour < 0) {
            hour += hoursPerDay;
        }
    }
    if (diff.minute) {
        minutes = minutes + toNumber(diff.minute);
    }
    if (diff.seconds) {
        seconds = seconds + toNumber(diff.seconds);
    }
    return createDate(value, hour, minutes, seconds);
}
/**
 * @param {?} value
 * @param {?} opts
 * @return {?}
 */
function setTime(value, opts) {
    /** @type {?} */
    var hour = parseHours(opts.hour);
    /** @type {?} */
    var minute = parseMinutes(opts.minute);
    /** @type {?} */
    var seconds = parseSeconds(opts.seconds) || 0;
    if (opts.isPM && hour !== 12) {
        hour += hoursPerDayHalf;
    }
    if (!value) {
        if (!isNaN(hour) && !isNaN(minute)) {
            return createDate(new Date(), hour, minute, seconds);
        }
        return value;
    }
    if (isNaN(hour) || isNaN(minute)) {
        return value;
    }
    return createDate(value, hour, minute, seconds);
}
/**
 * @param {?} value
 * @param {?} hours
 * @param {?} minutes
 * @param {?} seconds
 * @return {?}
 */
function createDate(value, hours, minutes, seconds) {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
}
/**
 * @param {?} value
 * @return {?}
 */
function padNumber(value) {
    /** @type {?} */
    var _value = value.toString();
    if (_value.length > 1) {
        return _value;
    }
    return "0" + _value;
}
/**
 * @param {?} hours
 * @param {?} isPM
 * @return {?}
 */
function isHourInputValid(hours, isPM) {
    return !isNaN(parseHours(hours, isPM));
}
/**
 * @param {?} minutes
 * @return {?}
 */
function isMinuteInputValid(minutes) {
    return !isNaN(parseMinutes(minutes));
}
/**
 * @param {?} seconds
 * @return {?}
 */
function isSecondInputValid(seconds) {
    return !isNaN(parseSeconds(seconds));
}
/**
 * @param {?} diff
 * @param {?} max
 * @param {?} min
 * @return {?}
 */
function isInputLimitValid(diff, max, min) {
    /** @type {?} */
    var newDate = setTime(new Date(), diff);
    if (max && newDate > max) {
        return false;
    }
    if (min && newDate < min) {
        return false;
    }
    return true;
}
/**
 * @param {?} hours
 * @param {?=} minutes
 * @param {?=} seconds
 * @param {?=} isPM
 * @return {?}
 */
function isInputValid(hours, minutes, seconds, isPM) {
    if (minutes === void 0) { minutes = '0'; }
    if (seconds === void 0) { seconds = '0'; }
    return isHourInputValid(hours, isPM)
        && isMinuteInputValid(minutes)
        && isSecondInputValid(seconds);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} state
 * @param {?=} event
 * @return {?}
 */
function canChangeValue(state, event) {
    if (state.readonlyInput || state.disabled) {
        return false;
    }
    if (event) {
        if (event.source === 'wheel' && !state.mousewheel) {
            return false;
        }
        if (event.source === 'key' && !state.arrowkeys) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeHours(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementHours) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementHours) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeMinutes(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementMinutes) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementMinutes) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeSeconds(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementSeconds) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementSeconds) {
        return false;
    }
    return true;
}
/**
 * @param {?} state
 * @return {?}
 */
function getControlsValue(state) {
    var hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, readonlyInput = state.readonlyInput, disabled = state.disabled, mousewheel = state.mousewheel, arrowkeys = state.arrowkeys, showSpinners = state.showSpinners, showMeridian = state.showMeridian, showSeconds = state.showSeconds, meridians = state.meridians, min = state.min, max = state.max;
    return {
        hourStep: hourStep,
        minuteStep: minuteStep,
        secondsStep: secondsStep,
        readonlyInput: readonlyInput,
        disabled: disabled,
        mousewheel: mousewheel,
        arrowkeys: arrowkeys,
        showSpinners: showSpinners,
        showMeridian: showMeridian,
        showSeconds: showSeconds,
        meridians: meridians,
        min: min,
        max: max
    };
}
/**
 * @param {?} value
 * @param {?} state
 * @return {?}
 */
function timepickerControls(value, state) {
    /** @type {?} */
    var hoursPerDayHalf = 12;
    var min = state.min, max = state.max, hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, showSeconds = state.showSeconds;
    /** @type {?} */
    var res = {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    };
    if (!value) {
        return res;
    }
    // compare dates
    if (max) {
        /** @type {?} */
        var _newHour = changeTime(value, { hour: hourStep });
        res.canIncrementHours = max > _newHour;
        if (!res.canIncrementHours) {
            /** @type {?} */
            var _newMinutes = changeTime(value, { minute: minuteStep });
            res.canIncrementMinutes = showSeconds
                ? max > _newMinutes
                : max >= _newMinutes;
        }
        if (!res.canIncrementMinutes) {
            /** @type {?} */
            var _newSeconds = changeTime(value, { seconds: secondsStep });
            res.canIncrementSeconds = max >= _newSeconds;
        }
        if (value.getHours() < hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: hoursPerDayHalf }) < max;
        }
    }
    if (min) {
        /** @type {?} */
        var _newHour = changeTime(value, { hour: -hourStep });
        res.canDecrementHours = min < _newHour;
        if (!res.canDecrementHours) {
            /** @type {?} */
            var _newMinutes = changeTime(value, { minute: -minuteStep });
            res.canDecrementMinutes = showSeconds
                ? min < _newMinutes
                : min <= _newMinutes;
        }
        if (!res.canDecrementMinutes) {
            /** @type {?} */
            var _newSeconds = changeTime(value, { seconds: -secondsStep });
            res.canDecrementSeconds = min <= _newSeconds;
        }
        if (value.getHours() >= hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: -hoursPerDayHalf }) > min;
        }
    }
    return res;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides default configuration values for timepicker
 */
var TimepickerConfig = /** @class */ (function () {
    function TimepickerConfig() {
        /**
         * hours change step
         */
        this.hourStep = 1;
        /**
         * hours change step
         */
        this.minuteStep = 5;
        /**
         * seconds changes step
         */
        this.secondsStep = 10;
        /**
         * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
         */
        this.showMeridian = true;
        /**
         * meridian labels based on locale
         */
        this.meridians = ['AM', 'PM'];
        /**
         * if true hours and minutes fields will be readonly
         */
        this.readonlyInput = false;
        /**
         * if true hours and minutes fields will be disabled
         */
        this.disabled = false;
        /**
         * if true scroll inside hours and minutes inputs will change time
         */
        this.mousewheel = true;
        /**
         * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
         */
        this.arrowkeys = true;
        /**
         * if true spinner arrows above and below the inputs will be shown
         */
        this.showSpinners = true;
        /**
         * show seconds in timepicker
         */
        this.showSeconds = false;
        /**
         * show minutes in timepicker
         */
        this.showMinutes = true;
    }
TimepickerConfig.ngInjectableDef = ɵngcc0.ΔdefineInjectable({ token: TimepickerConfig, factory: function TimepickerConfig_Factory(t) { return new (t || TimepickerConfig)(); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TimepickerConfig, [{
        type: Injectable
    }], function () { return []; }, { hourStep: [], minuteStep: [], secondsStep: [], showMeridian: [], meridians: [], readonlyInput: [], disabled: [], mousewheel: [], arrowkeys: [], showSpinners: [], showSeconds: [], showMinutes: [] });
    return TimepickerConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState = {
    value: null,
    config: new TimepickerConfig(),
    controls: {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    }
};
// tslint:disable-next-line:cyclomatic-complexity
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function timepickerReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case TimepickerActions.WRITE_VALUE: {
            return Object.assign({}, state, { value: action.payload });
        }
        case TimepickerActions.CHANGE_HOURS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeHours(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            var _newTime = changeTime(state.value, { hour: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_MINUTES: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeMinutes(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            var _newTime = changeTime(state.value, { minute: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_SECONDS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeSeconds(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            var _newTime = changeTime(state.value, {
                seconds: action.payload.step
            });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.SET_TIME_UNIT: {
            if (!canChangeValue(state.config)) {
                return state;
            }
            /** @type {?} */
            var _newTime = setTime(state.value, action.payload);
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.UPDATE_CONTROLS: {
            /** @type {?} */
            var _newControlsState = timepickerControls(state.value, action.payload);
            /** @type {?} */
            var _newState = {
                value: state.value,
                config: action.payload,
                controls: _newControlsState
            };
            if (state.config.showMeridian !== _newState.config.showMeridian) {
                if (state.value) {
                    _newState.value = new Date(state.value);
                }
            }
            return Object.assign({}, state, _newState);
        }
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TimepickerStore = /** @class */ (function (_super) {
    __extends(TimepickerStore, _super);
    function TimepickerStore() {
        var _this = this;
        /** @type {?} */
        var _dispatcher = new BehaviorSubject({
            type: '[mini-ngrx] dispatcher init'
        });
        /** @type {?} */
        var state = new MiniState(initialState, _dispatcher, timepickerReducer);
        _this = _super.call(this, _dispatcher, timepickerReducer, state) || this;
        return _this;
    }
    /** @nocollapse */
    TimepickerStore.ctorParameters = function () { return []; };
TimepickerStore.ngInjectableDef = ɵngcc0.ΔdefineInjectable({ token: TimepickerStore, factory: function TimepickerStore_Factory(t) { return new (t || TimepickerStore)(); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TimepickerStore, [{
        type: Injectable
    }], function () { return []; }, null);
    return TimepickerStore;
}(MiniStore));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return TimepickerComponent; }),
    multi: true
};
var TimepickerComponent = /** @class */ (function () {
    function TimepickerComponent(_config, _cd, _store, _timepickerActions) {
        var _this = this;
        this._cd = _cd;
        this._store = _store;
        this._timepickerActions = _timepickerActions;
        /**
         * emits true if value is a valid date
         */
        this.isValid = new EventEmitter();
        // min\max validation for input fields
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
        // control value accessor methods
        // tslint:disable-next-line:no-any
        this.onChange = Function.prototype;
        // tslint:disable-next-line:no-any
        this.onTouched = Function.prototype;
        Object.assign(this, _config);
        this.timepickerSub = _store
            .select(function (state) { return state.value; })
            .subscribe(function (value) {
            // update UI values if date changed
            _this._renderTime(value);
            _this.onChange(value);
            _this._store.dispatch(_this._timepickerActions.updateControls(getControlsValue(_this)));
        });
        _store
            .select(function (state) { return state.controls; })
            .subscribe(function (controlsState) {
            _this.isValid.emit(isInputValid(_this.hours, _this.minutes, _this.seconds, _this.isPM()));
            Object.assign(_this, controlsState);
            _cd.markForCheck();
        });
    }
    Object.defineProperty(TimepickerComponent.prototype, "isSpinnersVisible", {
        /** @deprecated - please use `isEditable` instead */
        get: /**
         * @deprecated - please use `isEditable` instead
         * @return {?}
         */
        function () {
            return this.showSpinners && !this.readonlyInput;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerComponent.prototype, "isEditable", {
        get: /**
         * @return {?}
         */
        function () {
            return !(this.readonlyInput || this.disabled);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.resetValidation = /**
     * @return {?}
     */
    function () {
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.isPM = /**
     * @return {?}
     */
    function () {
        return this.showMeridian && this.meridian === this.meridians[1];
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TimepickerComponent.prototype.prevDef = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TimepickerComponent.prototype.wheelSign = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        return Math.sign($event.deltaY) * -1;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TimepickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
    };
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    TimepickerComponent.prototype.changeHours = /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    function (step, source) {
        if (source === void 0) { source = ''; }
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeHours({ step: step, source: source }));
    };
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    TimepickerComponent.prototype.changeMinutes = /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    function (step, source) {
        if (source === void 0) { source = ''; }
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeMinutes({ step: step, source: source }));
    };
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    TimepickerComponent.prototype.changeSeconds = /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    function (step, source) {
        if (source === void 0) { source = ''; }
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeSeconds({ step: step, source: source }));
    };
    /**
     * @param {?} hours
     * @return {?}
     */
    TimepickerComponent.prototype.updateHours = /**
     * @param {?} hours
     * @return {?}
     */
    function (hours) {
        this.resetValidation();
        this.hours = hours;
        /** @type {?} */
        var isValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
        if (!isValid) {
            this.invalidHours = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    };
    /**
     * @param {?} minutes
     * @return {?}
     */
    TimepickerComponent.prototype.updateMinutes = /**
     * @param {?} minutes
     * @return {?}
     */
    function (minutes) {
        this.resetValidation();
        this.minutes = minutes;
        /** @type {?} */
        var isValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
        if (!isValid) {
            this.invalidMinutes = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    };
    /**
     * @param {?} seconds
     * @return {?}
     */
    TimepickerComponent.prototype.updateSeconds = /**
     * @param {?} seconds
     * @return {?}
     */
    function (seconds) {
        this.resetValidation();
        this.seconds = seconds;
        /** @type {?} */
        var isValid = isSecondInputValid(this.seconds) && this.isValidLimit();
        if (!isValid) {
            this.invalidSeconds = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.isValidLimit = /**
     * @return {?}
     */
    function () {
        return isInputLimitValid({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }, this.max, this.min);
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype._updateTime = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _seconds = this.showSeconds ? this.seconds : void 0;
        /** @type {?} */
        var _minutes = this.showMinutes ? this.minutes : void 0;
        if (!isInputValid(this.hours, _minutes, _seconds, this.isPM())) {
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._store.dispatch(this._timepickerActions.setTime({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }));
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.toggleMeridian = /**
     * @return {?}
     */
    function () {
        if (!this.showMeridian || !this.isEditable) {
            return;
        }
        /** @type {?} */
        var _hoursPerDayHalf = 12;
        this._store.dispatch(this._timepickerActions.changeHours({
            step: _hoursPerDayHalf,
            source: ''
        }));
    };
    /**
     * Write a new value to the element.
     */
    /**
     * Write a new value to the element.
     * @param {?} obj
     * @return {?}
     */
    TimepickerComponent.prototype.writeValue = /**
     * Write a new value to the element.
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (isValidDate(obj)) {
            this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
        }
        else if (obj == null) {
            this._store.dispatch(this._timepickerActions.writeValue(null));
        }
    };
    /**
     * Set the function to be called when the control receives a change event.
     */
    // tslint:disable-next-line:no-any
    /**
     * Set the function to be called when the control receives a change event.
     * @param {?} fn
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    TimepickerComponent.prototype.registerOnChange = /**
     * Set the function to be called when the control receives a change event.
     * @param {?} fn
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    function (fn) {
        this.onChange = fn;
    };
    /**
     * Set the function to be called when the control receives a touch event.
     */
    /**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */
    TimepickerComponent.prototype.registerOnTouched = /**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param {?} isDisabled
     * @return {?}
     */
    TimepickerComponent.prototype.setDisabledState = /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.timepickerSub.unsubscribe();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TimepickerComponent.prototype._renderTime = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!isValidDate(value)) {
            this.hours = '';
            this.minutes = '';
            this.seconds = '';
            this.meridian = this.meridians[0];
            return;
        }
        /** @type {?} */
        var _value = parseTime(value);
        /** @type {?} */
        var _hoursPerDayHalf = 12;
        /** @type {?} */
        var _hours = _value.getHours();
        if (this.showMeridian) {
            this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
            _hours = _hours % _hoursPerDayHalf;
            // should be 12 PM, not 00 PM
            if (_hours === 0) {
                _hours = _hoursPerDayHalf;
            }
        }
        this.hours = padNumber(_hours);
        this.minutes = padNumber(_value.getMinutes());
        this.seconds = padNumber(_value.getUTCSeconds());
    };
    /** @nocollapse */
    TimepickerComponent.ctorParameters = function () { return [
        { type: TimepickerConfig },
        { type: ChangeDetectorRef },
        { type: TimepickerStore },
        { type: TimepickerActions }
    ]; };
    TimepickerComponent.propDecorators = {
        hourStep: [{ type: Input }],
        minuteStep: [{ type: Input }],
        secondsStep: [{ type: Input }],
        readonlyInput: [{ type: Input }],
        disabled: [{ type: Input }],
        mousewheel: [{ type: Input }],
        arrowkeys: [{ type: Input }],
        showSpinners: [{ type: Input }],
        showMeridian: [{ type: Input }],
        showMinutes: [{ type: Input }],
        showSeconds: [{ type: Input }],
        meridians: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        isValid: [{ type: Output }]
    };
TimepickerComponent.ngComponentDef = ɵngcc0.ΔdefineComponent({ type: TimepickerComponent, selectors: [["timepicker"]], factory: function TimepickerComponent_Factory(t) { return new (t || TimepickerComponent)(ɵngcc0.ΔdirectiveInject(TimepickerConfig), ɵngcc0.ΔdirectiveInject(ChangeDetectorRef), ɵngcc0.ΔdirectiveInject(TimepickerStore), ɵngcc0.ΔdirectiveInject(TimepickerActions)); }, inputs: { disabled: "disabled", hourStep: "hourStep", minuteStep: "minuteStep", secondsStep: "secondsStep", readonlyInput: "readonlyInput", mousewheel: "mousewheel", arrowkeys: "arrowkeys", showSpinners: "showSpinners", showMeridian: "showMeridian", showMinutes: "showMinutes", showSeconds: "showSeconds", meridians: "meridians", min: "min", max: "max" }, outputs: { isValid: "isValid" }, features: [ɵngcc0.ΔProvidersFeature([TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore]), ɵngcc0.ΔNgOnChangesFeature()], consts: 31, vars: 23, template: function TimepickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ΔelementStart(0, "table");
        ɵngcc0.ΔelementStart(1, "tbody");
        ɵngcc0.ΔelementStart(2, "tr", _c0);
        ɵngcc0.ΔelementStart(3, "td");
        ɵngcc0.ΔelementStart(4, "a", _c1);
        ɵngcc0.ΔelementStyling(_c8);
        ɵngcc0.Δlistener("click", function TimepickerComponent_Template_a_click_4_listener($event) { return ctx.changeHours(ctx.hourStep); });
        ɵngcc0.Δelement(5, "span", _c2);
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementEnd();
        ɵngcc0.Δtemplate(6, TimepickerComponent_td_6_Template, 2, 0, "td", _c3);
        ɵngcc0.Δtemplate(7, TimepickerComponent_td_7_Template, 3, 0, "td", _c3);
        ɵngcc0.Δtemplate(8, TimepickerComponent_td_8_Template, 2, 0, "td", _c3);
        ɵngcc0.Δtemplate(9, TimepickerComponent_td_9_Template, 3, 0, "td", _c3);
        ɵngcc0.Δtemplate(10, TimepickerComponent_td_10_Template, 2, 0, "td", _c3);
        ɵngcc0.Δtemplate(11, TimepickerComponent_td_11_Template, 1, 0, "td", _c3);
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementStart(12, "tr");
        ɵngcc0.ΔelementStart(13, "td", _c4);
        ɵngcc0.ΔelementStyling(_c10);
        ɵngcc0.ΔelementStart(14, "input", _c5);
        ɵngcc0.ΔelementStyling(_c11);
        ɵngcc0.Δlistener("wheel", function TimepickerComponent_Template_input_wheel_14_listener($event) { ctx.prevDef($event); return ctx.changeHours((ctx.hourStep * ctx.wheelSign($event)), "wheel"); });
        ɵngcc0.Δlistener("keydown.ArrowUp", function TimepickerComponent_Template_input_keydown_ArrowUp_14_listener($event) { return ctx.changeHours(ctx.hourStep, "key"); });
        ɵngcc0.Δlistener("keydown.ArrowDown", function TimepickerComponent_Template_input_keydown_ArrowDown_14_listener($event) { return ctx.changeHours((0 - ctx.hourStep), "key"); });
        ɵngcc0.Δlistener("change", function TimepickerComponent_Template_input_change_14_listener($event) { return ctx.updateHours($event.target.value); });
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementEnd();
        ɵngcc0.Δtemplate(15, TimepickerComponent_td_15_Template, 2, 0, "td", _c3);
        ɵngcc0.Δtemplate(16, TimepickerComponent_td_16_Template, 2, 3, "td", _c6);
        ɵngcc0.Δtemplate(17, TimepickerComponent_td_17_Template, 2, 0, "td", _c3);
        ɵngcc0.Δtemplate(18, TimepickerComponent_td_18_Template, 2, 3, "td", _c6);
        ɵngcc0.Δtemplate(19, TimepickerComponent_td_19_Template, 2, 0, "td", _c3);
        ɵngcc0.Δtemplate(20, TimepickerComponent_td_20_Template, 3, 2, "td", _c3);
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementStart(21, "tr", _c0);
        ɵngcc0.ΔelementStart(22, "td");
        ɵngcc0.ΔelementStart(23, "a", _c1);
        ɵngcc0.ΔelementStyling(_c8);
        ɵngcc0.Δlistener("click", function TimepickerComponent_Template_a_click_23_listener($event) { return ctx.changeHours((0 - ctx.hourStep)); });
        ɵngcc0.Δelement(24, "span", _c7);
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementEnd();
        ɵngcc0.Δtemplate(25, TimepickerComponent_td_25_Template, 2, 0, "td", _c3);
        ɵngcc0.Δtemplate(26, TimepickerComponent_td_26_Template, 3, 0, "td", _c3);
        ɵngcc0.Δtemplate(27, TimepickerComponent_td_27_Template, 2, 0, "td", _c3);
        ɵngcc0.Δtemplate(28, TimepickerComponent_td_28_Template, 3, 0, "td", _c3);
        ɵngcc0.Δtemplate(29, TimepickerComponent_td_29_Template, 2, 0, "td", _c3);
        ɵngcc0.Δtemplate(30, TimepickerComponent_td_30_Template, 1, 0, "td", _c3);
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementEnd();
        ɵngcc0.ΔelementEnd();
    } if (rf & 2) {
        ɵngcc0.Δselect(2);
        ɵngcc0.Δproperty("hidden", !ctx.showSpinners);
        ɵngcc0.ΔelementClassProp(4, 0, (!ctx.canIncrementHours || !ctx.isEditable));
        ɵngcc0.ΔelementStylingApply(4);
        ɵngcc0.Δselect(6);
        ɵngcc0.Δproperty("ngIf", ctx.showMinutes);
        ɵngcc0.Δselect(7);
        ɵngcc0.Δproperty("ngIf", ctx.showMinutes);
        ɵngcc0.Δselect(8);
        ɵngcc0.Δproperty("ngIf", ctx.showSeconds);
        ɵngcc0.Δselect(9);
        ɵngcc0.Δproperty("ngIf", ctx.showSeconds);
        ɵngcc0.Δselect(10);
        ɵngcc0.Δproperty("ngIf", ctx.showMeridian);
        ɵngcc0.Δselect(11);
        ɵngcc0.Δproperty("ngIf", ctx.showMeridian);
        ɵngcc0.ΔelementClassProp(13, 0, ctx.invalidHours);
        ɵngcc0.ΔelementStylingApply(13);
        ɵngcc0.ΔelementClassProp(14, 0, ctx.invalidHours);
        ɵngcc0.ΔelementStylingApply(14);
        ɵngcc0.Δselect(14);
        ɵngcc0.Δproperty("readonly", ctx.readonlyInput);
        ɵngcc0.Δproperty("disabled", ctx.disabled);
        ɵngcc0.Δproperty("value", ctx.hours);
        ɵngcc0.Δselect(15);
        ɵngcc0.Δproperty("ngIf", ctx.showMinutes);
        ɵngcc0.Δselect(16);
        ɵngcc0.Δproperty("ngIf", ctx.showMinutes);
        ɵngcc0.Δselect(17);
        ɵngcc0.Δproperty("ngIf", ctx.showSeconds);
        ɵngcc0.Δselect(18);
        ɵngcc0.Δproperty("ngIf", ctx.showSeconds);
        ɵngcc0.Δselect(19);
        ɵngcc0.Δproperty("ngIf", ctx.showMeridian);
        ɵngcc0.Δselect(20);
        ɵngcc0.Δproperty("ngIf", ctx.showMeridian);
        ɵngcc0.Δselect(21);
        ɵngcc0.Δproperty("hidden", !ctx.showSpinners);
        ɵngcc0.ΔelementClassProp(23, 0, (!ctx.canDecrementHours || !ctx.isEditable));
        ɵngcc0.ΔelementStylingApply(23);
        ɵngcc0.Δselect(25);
        ɵngcc0.Δproperty("ngIf", ctx.showMinutes);
        ɵngcc0.Δselect(26);
        ɵngcc0.Δproperty("ngIf", ctx.showMinutes);
        ɵngcc0.Δselect(27);
        ɵngcc0.Δproperty("ngIf", ctx.showSeconds);
        ɵngcc0.Δselect(28);
        ɵngcc0.Δproperty("ngIf", ctx.showSeconds);
        ɵngcc0.Δselect(29);
        ɵngcc0.Δproperty("ngIf", ctx.showMeridian);
        ɵngcc0.Δselect(30);
        ɵngcc0.Δproperty("ngIf", ctx.showMeridian);
    } }, directives: [ɵngcc1.NgIf], styles: ["\n    .bs-chevron {\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n\n    .bs-chevron-up {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n\n    .bs-chevron-down {\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n\n    .bs-timepicker-field {\n      width: 50px;\n    }\n  "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TimepickerComponent, [{
        type: Component,
        args: [{
                selector: 'timepicker',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
                template: "<table>\n  <tbody>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- increment hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours || !isEditable\"\n         (click)=\"changeHours(hourStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- increment minutes button -->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(minuteStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- increment seconds button -->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-up\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  <tr>\n    <!-- hours -->\n    <td class=\"form-group\" [class.has-error]=\"invalidHours\">\n      <input type=\"text\" [class.is-invalid]=\"invalidHours\"\n             class=\"form-control text-center bs-timepicker-field\"\n             placeholder=\"HH\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"hours\"\n             (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\"\n             (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\"\n             (change)=\"updateHours($event.target.value)\"></td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;:&nbsp;</td>\n    <!-- minutes -->\n    <td class=\"form-group\" *ngIf=\"showMinutes\" [class.has-error]=\"invalidMinutes\">\n      <input type=\"text\" [class.is-invalid]=\"invalidMinutes\"\n             class=\"form-control text-center bs-timepicker-field\"\n             placeholder=\"MM\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"minutes\"\n             (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\"\n             (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\"\n             (change)=\"updateMinutes($event.target.value)\">\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td>\n    <!-- seconds -->\n    <td class=\"form-group\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\">\n      <input type=\"text\" [class.is-invalid]=\"invalidSeconds\"\n             class=\"form-control text-center bs-timepicker-field\"\n             placeholder=\"SS\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"seconds\"\n             (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\"\n             (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\"\n             (change)=\"updateSeconds($event.target.value)\">\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian -->\n    <td *ngIf=\"showMeridian\">\n      <button type=\"button\" class=\"btn btn-default text-center\"\n              [disabled]=\"!isEditable || !canToggleMeridian\"\n              [class.disabled]=\"!isEditable || !canToggleMeridian\"\n              (click)=\"toggleMeridian()\"\n      >{{ meridian }}\n      </button>\n    </td>\n  </tr>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- decrement hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours || !isEditable\"\n         (click)=\"changeHours(-hourStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- decrement minutes button-->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(-minuteStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- decrement seconds button-->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(-secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  </tbody>\n</table>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["\n    .bs-chevron {\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n\n    .bs-chevron-up {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n\n    .bs-chevron-down {\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n\n    .bs-timepicker-field {\n      width: 50px;\n    }\n  "]
            }]
    }], function () { return [{ type: TimepickerConfig }, { type: ChangeDetectorRef }, { type: TimepickerStore }, { type: TimepickerActions }]; }, { _cd: [], _store: [], _timepickerActions: [], isValid: [{
            type: Output
        }], invalidHours: [], invalidMinutes: [], invalidSeconds: [], onChange: [], onTouched: [], timepickerSub: [], isSpinnersVisible: [], isEditable: [], resetValidation: [], isPM: [], prevDef: [], wheelSign: [], ngOnChanges: [], changeHours: [], changeMinutes: [], changeSeconds: [], updateHours: [], hours: [], updateMinutes: [], minutes: [], updateSeconds: [], seconds: [], isValidLimit: [], _updateTime: [], toggleMeridian: [], writeValue: [], registerOnChange: [], registerOnTouched: [], setDisabledState: [], disabled: [{
            type: Input
        }], ngOnDestroy: [], _renderTime: [], meridian: [], hourStep: [{
            type: Input
        }], minuteStep: [{
            type: Input
        }], secondsStep: [{
            type: Input
        }], readonlyInput: [{
            type: Input
        }], mousewheel: [{
            type: Input
        }], arrowkeys: [{
            type: Input
        }], showSpinners: [{
            type: Input
        }], showMeridian: [{
            type: Input
        }], showMinutes: [{
            type: Input
        }], showSeconds: [{
            type: Input
        }], meridians: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }] });
    return TimepickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TimepickerModule = /** @class */ (function () {
    function TimepickerModule() {
    }
    /**
     * @return {?}
     */
    TimepickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TimepickerModule,
            providers: [TimepickerConfig, TimepickerActions, TimepickerStore]
        };
    };
TimepickerModule.ngModuleDef = ɵngcc0.ΔdefineNgModule({ type: TimepickerModule });
/*@__PURE__*/ ɵngcc0.ΔsetNgModuleScope(TimepickerModule, { declarations: function () { return [TimepickerComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [TimepickerComponent]; } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TimepickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [TimepickerComponent],
                exports: [TimepickerComponent]
            }]
    }], function () { return []; }, null);
TimepickerModule.ngInjectorDef = ɵngcc0.ΔdefineInjector({ factory: function TimepickerModule_Factory(t) { return new (t || TimepickerModule)(); }, imports: [[CommonModule]] });
    return TimepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TimepickerComponent, TimepickerActions, TimepickerStore, TimepickerConfig, TimepickerModule, TIMEPICKER_CONTROL_VALUE_ACCESSOR as ɵa };

//# sourceMappingURL=ngx-bootstrap-timepicker.js.map