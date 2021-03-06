import { AfterViewInit } from '@angular/core';
import { TooltipConfig } from './tooltip.config';
import * as ɵngcc0 from '@angular/core';
export declare class TooltipContainerComponent implements AfterViewInit {
    classMap: {
        [key: string]: boolean;
    };
    placement: string;
    containerClass: string;
    animation: boolean;
    id: string;
    readonly isBs3: boolean;
    constructor(config: TooltipConfig);
    ngAfterViewInit(): void;
    static ngComponentDef: ɵngcc0.ΔComponentDefWithMeta<TooltipContainerComponent, "bs-tooltip-container", never, {}, {}, never>;
}

//# sourceMappingURL=tooltip-container.component.d.ts.map