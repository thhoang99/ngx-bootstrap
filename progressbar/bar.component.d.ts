import { OnDestroy, OnInit } from '@angular/core';
import { ProgressbarComponent } from './progressbar.component';
import * as ɵngcc0 from '@angular/core';
export declare class BarComponent implements OnInit, OnDestroy {
    max: number;
    /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
    type: string;
    /** current value of progress bar */
    value: number;
    readonly setBarWidth: number;
    readonly isBs3: boolean;
    striped: boolean;
    animate: boolean;
    percent: number;
    progress: ProgressbarComponent;
    protected _value: number;
    constructor(progress: ProgressbarComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    recalculatePercentage(): void;
    static ngComponentDef: ɵngcc0.ΔComponentDefWithMeta<BarComponent, "bar", never, { 'value': "value", 'type': "type" }, {}, never>;
}

//# sourceMappingURL=bar.component.d.ts.map