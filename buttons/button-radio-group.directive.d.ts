import { ChangeDetectorRef, Provider } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare const RADIO_CONTROL_VALUE_ACCESSOR: Provider;
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
export declare class ButtonRadioGroupDirective implements ControlValueAccessor {
    private cdr;
    onChange: Function;
    onTouched: Function;
    value: string | null;
    private _value;
    constructor(cdr: ChangeDetectorRef);
    writeValue(value: string | null): void;
    registerOnChange(fn: () => {}): void;
    registerOnTouched(fn: () => {}): void;
    static ngDirectiveDef: ɵngcc0.ΔDirectiveDefWithMeta<ButtonRadioGroupDirective, "[btnRadioGroup]", never, {}, {}, never>;
}

//# sourceMappingURL=button-radio-group.directive.d.ts.map