import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ModalOptions } from './modal-options.class';
import { BsModalService } from './bs-modal.service';
import * as ɵngcc0 from '@angular/core';
export declare class ModalContainerComponent implements OnInit, OnDestroy {
    protected _element: ElementRef;
    private _renderer;
    config: ModalOptions;
    isShown: boolean;
    level: number;
    isAnimated: boolean;
    bsModalService: BsModalService;
    private isModalHiding;
    constructor(options: ModalOptions, _element: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    onClick(event: MouseEvent): void;
    onEsc(event: KeyboardEvent): void;
    ngOnDestroy(): void;
    hide(): void;
    static ngComponentDef: ɵngcc0.ΔComponentDefWithMeta<ModalContainerComponent, "modal-container", never, {}, {}, never>;
}

//# sourceMappingURL=modal-container.component.d.ts.map