import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { TooltipConfig } from './tooltip.config';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import * as ɵngcc0 from '@angular/core';
export declare class TooltipDirective implements OnInit, OnDestroy {
    private _elementRef;
    private _renderer;
    private _positionService;
    tooltipId: number;
    /**
     * Content to be displayed as tooltip.
     */
    tooltip: string | TemplateRef<any>;
    /** Fired when tooltip content changes */
    tooltipChange: EventEmitter<string | TemplateRef<any>>;
    /**
     * Placement of a tooltip. Accepts: "top", "bottom", "left", "right"
     */
    placement: string;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     */
    triggers: string;
    /**
     * A selector specifying the element the tooltip should be appended to.
     */
    container: string;
    /**
     * Css class for tooltip container
     */
    containerClass: string;
    /**
     * Returns whether or not the tooltip is currently being shown
     */
    isOpen: boolean;
    /**
     * Allows to disable tooltip
     */
    isDisabled: boolean;
    /**
     * Delay before showing the tooltip
     */
    delay: number;
    /**
     * Emits an event when the tooltip is shown
     */
    onShown: EventEmitter<any>;
    /**
     * Emits an event when the tooltip is hidden
     */
    onHidden: EventEmitter<any>;
    /** @deprecated - please use `tooltip` instead */
    htmlContent: string | TemplateRef<any>;
    /** @deprecated - please use `placement` instead */
    _placement: string;
    /** @deprecated - please use `isOpen` instead */
    _isOpen: boolean;
    /** @deprecated - please use `isDisabled` instead */
    _enable: boolean;
    /** @deprecated - please use `container="body"` instead */
    _appendToBody: boolean;
    /** @deprecated - removed, will be added to configuration */
    tooltipAnimation: boolean;
    /** @deprecated - will replaced with customClass */
    _popupClass: string;
    /** @deprecated - removed */
    _tooltipContext: any;
    /** @deprecated */
    _tooltipPopupDelay: number;
    /** @deprecated */
    tooltipFadeDuration: number;
    /** @deprecated -  please use `triggers` instead */
    _tooltipTrigger: string | string[];
    ariaDescribedby: string;
    /** @deprecated */
    tooltipStateChanged: EventEmitter<boolean>;
    protected _delayTimeoutId: number | any;
    protected _tooltipCancelShowFn: Function;
    private _tooltip;
    constructor(_viewContainerRef: ViewContainerRef, cis: ComponentLoaderFactory, config: TooltipConfig, _elementRef: ElementRef, _renderer: Renderer2, _positionService: PositioningService);
    ngOnInit(): void;
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    toggle(): void;
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    show(): void;
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    hide(): void;
    ngOnDestroy(): void;
    static ngDirectiveDef: ɵngcc0.ΔDirectiveDefWithMeta<TooltipDirective, "[tooltip], [tooltipHtml]", ["bs-tooltip"], { 'containerClass': "containerClass", 'tooltipAnimation': "tooltipAnimation", 'tooltipFadeDuration': "tooltipFadeDuration", 'isOpen': "isOpen", 'htmlContent': "tooltipHtml", '_placement': "tooltipPlacement", '_isOpen': "tooltipIsOpen", '_enable': "tooltipEnable", '_appendToBody': "tooltipAppendToBody", '_popupClass': "tooltipClass", '_tooltipContext': "tooltipContext", '_tooltipPopupDelay': "tooltipPopupDelay", '_tooltipTrigger': "tooltipTrigger", 'tooltip': "tooltip", 'placement': "placement", 'triggers': "triggers", 'container': "container", 'isDisabled': "isDisabled", 'delay': "delay" }, { 'tooltipChange': "tooltipChange", 'tooltipStateChanged': "tooltipStateChanged", 'onShown': "onShown", 'onHidden': "onHidden" }, never>;
}

//# sourceMappingURL=tooltip.directive.d.ts.map