import { ClassName, DismissReasons, Selector, TransitionDurations } from './models';
import * as ɵngcc0 from '@angular/core';
export declare class ModalOptions {
    /**
     *  Includes a modal-backdrop element. Alternatively,
     *  specify static for a backdrop which doesn't close the modal on click.
     */
    backdrop?: boolean | 'static';
    /**
     * Closes the modal when escape key is pressed.
     */
    keyboard?: boolean;
    focus?: boolean;
    /**
     * Shows the modal when initialized.
     */
    show?: boolean;
    /**
     * Ignore the backdrop click
     */
    ignoreBackdropClick?: boolean;
    /**
     * Css class for opened modal
     */
    class?: string;
    /**
     * Toggle animation
     */
    animated?: boolean;
    /**
     * Modal data
     */
    initialState?: Object;
    static ngInjectableDef: ɵngcc0.ΔInjectableDef<ModalOptions>;
}
export declare const modalConfigDefaults: ModalOptions;
export declare const CLASS_NAME: ClassName;
export declare const SELECTOR: Selector;
export declare const TRANSITION_DURATIONS: TransitionDurations;
export declare const DISMISS_REASONS: DismissReasons;

//# sourceMappingURL=modal-options.class.d.ts.map