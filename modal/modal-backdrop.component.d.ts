import { ElementRef, OnInit, Renderer2 } from '@angular/core';
/** This component will be added as background layout for modals if enabled */
import * as ɵngcc0 from '@angular/core';
export declare class ModalBackdropComponent implements OnInit {
    isAnimated: boolean;
    isShown: boolean;
    element: ElementRef;
    renderer: Renderer2;
    protected _isAnimated: boolean;
    protected _isShown: boolean;
    constructor(element: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    static ngComponentDef: ɵngcc0.ΔComponentDefWithMeta<ModalBackdropComponent, "bs-modal-backdrop", never, {}, {}, never>;
}

//# sourceMappingURL=modal-backdrop.component.d.ts.map