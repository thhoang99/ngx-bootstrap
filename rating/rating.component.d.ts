import { EventEmitter, OnInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { AccessorContent, RatingResults } from './models';
import * as ɵngcc0 from '@angular/core';
export declare const RATING_CONTROL_VALUE_ACCESSOR: AccessorContent;
export declare class RatingComponent implements ControlValueAccessor, OnInit {
    private changeDetection;
    /** number of icons */
    max: number;
    /** if true will not react on any user events */
    readonly: boolean;
    /** array of icons titles, default: (["one", "two", "three", "four", "five"]) */
    titles: string[];
    /** custom template for icons */
    customTemplate: TemplateRef<any>;
    /** fired when icon selected, $event:number equals to selected rating */
    onHover: EventEmitter<number>;
    /** fired when icon selected, $event:number equals to previous rating value */
    onLeave: EventEmitter<number>;
    onChange: any;
    onTouched: any;
    range: RatingResults[];
    value: number;
    protected preValue: number;
    constructor(changeDetection: ChangeDetectorRef);
    onKeydown(event: KeyboardEvent): void;
    ngOnInit(): void;
    writeValue(value: number): void;
    enter(value: number): void;
    reset(): void;
    registerOnChange(fn: (_: number) => {}): void;
    registerOnTouched(fn: () => {}): void;
    rate(value: number): void;
    protected buildTemplateObjects(max: number): RatingResults[];
    static ngComponentDef: ɵngcc0.ΔComponentDefWithMeta<RatingComponent, "rating", never, { 'max': "max", 'titles': "titles", 'readonly': "readonly", 'customTemplate': "customTemplate" }, { 'onHover': "onHover", 'onLeave': "onLeave" }, never>;
}

//# sourceMappingURL=rating.component.d.ts.map