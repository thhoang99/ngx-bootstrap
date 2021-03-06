import { ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import * as ɵngcc0 from '@angular/core';
export declare class BsDropdownContainerComponent implements OnDestroy {
    private _state;
    private cd;
    private _renderer;
    private _element;
    isOpen: boolean;
    readonly direction: 'down' | 'up';
    private _subscription;
    constructor(_state: BsDropdownState, cd: ChangeDetectorRef, _renderer: Renderer2, _element: ElementRef);
    /** @internal */
    _contains(el: Element): boolean;
    ngOnDestroy(): void;
    static ngComponentDef: ɵngcc0.ΔComponentDefWithMeta<BsDropdownContainerComponent, "bs-dropdown-container", never, {}, {}, never>;
}

//# sourceMappingURL=bs-dropdown-container.component.d.ts.map