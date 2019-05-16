import { ElementRef, TemplateRef, Renderer2 } from '@angular/core';
import { TypeaheadMatch } from './typeahead-match.class';
import { TypeaheadDirective } from './typeahead.directive';
import * as ɵngcc0 from '@angular/core';
export declare class TypeaheadContainerComponent {
    private renderer;
    parent: TypeaheadDirective;
    query: string[] | string;
    element: ElementRef;
    isFocused: boolean;
    top: string;
    left: string;
    display: string;
    placement: string;
    dropup: boolean;
    guiHeight: string;
    needScrollbar: boolean;
    readonly isBs4: boolean;
    protected _active: TypeaheadMatch;
    protected _matches: TypeaheadMatch[];
    private ulElement;
    private liElements;
    constructor(element: ElementRef, renderer: Renderer2);
    readonly active: TypeaheadMatch;
    matches: TypeaheadMatch[];
    readonly optionsListTemplate: TemplateRef<any>;
    readonly typeaheadScrollable: boolean;
    readonly typeaheadOptionsInScrollableView: number;
    readonly typeaheadIsFirstItemActive: boolean;
    readonly itemTemplate: TemplateRef<any>;
    selectActiveMatch(isActiveItemChanged?: boolean): void;
    prevActiveMatch(): void;
    nextActiveMatch(): void;
    selectActive(value: TypeaheadMatch): void;
    highlight(match: TypeaheadMatch, query: string[] | string): string;
    focusLost(): void;
    isActive(value: TypeaheadMatch): boolean;
    selectMatch(value: TypeaheadMatch, e?: Event): boolean;
    setScrollableMode(): void;
    scrollPrevious(index: number): void;
    scrollNext(index: number): void;
    private isScrolledIntoView;
    private scrollToBottom;
    private scrollToTop;
    static ngComponentDef: ɵngcc0.ΔComponentDefWithMeta<TypeaheadContainerComponent, "typeahead-container", never, {}, {}, never>;
}

//# sourceMappingURL=typeahead-container.component.d.ts.map