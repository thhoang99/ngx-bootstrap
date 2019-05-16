/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
import * as ɵngcc0 from '@angular/core';
export declare class PopoverConfig {
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
     */
    placement: string;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     */
    triggers: string;
    outsideClick: boolean;
    /**
     * A selector specifying the element the popover should be appended to.
     */
    container: string;
    static ngInjectableDef: ɵngcc0.ΔInjectableDef<PopoverConfig>;
}

//# sourceMappingURL=popover.config.d.ts.map