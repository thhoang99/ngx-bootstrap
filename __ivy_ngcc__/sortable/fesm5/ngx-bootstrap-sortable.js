import { CommonModule } from '@angular/common';
import { __spread } from 'tslib';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Injectable, Component, Input, Output, EventEmitter, forwardRef, NgModule } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = [3, "ngClass", "ngStyle", "dragover", "dragenter", "drop", "mouseleave"];
const _c1 = [3, "ngClass", "ngStyle", "dragover", "dragenter", 4, "ngIf"];
const _c2 = ["draggable", "true", "aria-dropeffect", "move", 3, "ngClass", "ngStyle", "aria-grabbed", "dragstart", "dragend", "dragover", "dragenter", 4, "ngFor", "ngForOf"];
const _c3 = ["defItemTemplate", ""];
const _c4 = [3, "ngClass", "ngStyle", "dragover", "dragenter"];
function SortableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r54 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "div", _c4);
    ɵngcc0.Δlistener("dragover", function SortableComponent_div_1_Template_div_dragover_0_listener($event) { ɵngcc0.ΔrestoreView(_r54); const ctx_r53 = ɵngcc0.ΔnextContext(); return ctx_r53.onItemDragover($event, 0); });
    ɵngcc0.Δlistener("dragenter", function SortableComponent_div_1_Template_div_dragenter_0_listener($event) { ɵngcc0.ΔrestoreView(_r54); const ctx_r55 = ɵngcc0.ΔnextContext(); return ctx_r55.cancelEvent($event); });
    ɵngcc0.Δtext(1);
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const ctx_r49 = ɵngcc0.ΔnextContext();
    ɵngcc0.Δselect(0);
    ɵngcc0.Δproperty("ngClass", ctx_r49.placeholderClass);
    ɵngcc0.Δproperty("ngStyle", ctx_r49.placeholderStyle);
    ɵngcc0.Δselect(1);
    ɵngcc0.ΔtextBinding(1, ɵngcc0.Δinterpolation1("", ctx_r49.placeholderItem, ""));
} }
const _c5 = ["draggable", "true", "aria-dropeffect", "move", 3, "ngClass", "ngStyle", "aria-grabbed", "dragstart", "dragend", "dragover", "dragenter"];
const _c6 = [3, "ngTemplateOutlet", "ngTemplateOutletContext"];
function SortableComponent_div_2_ng_template_1_Template(rf, ctx) { }
const _c7 = function (a0, a1) { return [a0, a1]; };
const _c8 = function (a0, a1) { return { item: a0, index: a1 }; };
function SortableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r60 = ɵngcc0.ΔgetCurrentView();
    ɵngcc0.ΔelementStart(0, "div", _c5);
    ɵngcc0.Δlistener("dragstart", function SortableComponent_div_2_Template_div_dragstart_0_listener($event) { ɵngcc0.ΔrestoreView(_r60); const item_r56 = ctx.$implicit; const i_r57 = ctx.index; const ctx_r59 = ɵngcc0.ΔnextContext(); return ctx_r59.onItemDragstart($event, item_r56, i_r57); });
    ɵngcc0.Δlistener("dragend", function SortableComponent_div_2_Template_div_dragend_0_listener($event) { ɵngcc0.ΔrestoreView(_r60); const ctx_r61 = ɵngcc0.ΔnextContext(); return ctx_r61.resetActiveItem($event); });
    ɵngcc0.Δlistener("dragover", function SortableComponent_div_2_Template_div_dragover_0_listener($event) { ɵngcc0.ΔrestoreView(_r60); const i_r57 = ctx.index; const ctx_r62 = ɵngcc0.ΔnextContext(); return ctx_r62.onItemDragover($event, i_r57); });
    ɵngcc0.Δlistener("dragenter", function SortableComponent_div_2_Template_div_dragenter_0_listener($event) { ɵngcc0.ΔrestoreView(_r60); const ctx_r63 = ɵngcc0.ΔnextContext(); return ctx_r63.cancelEvent($event); });
    ɵngcc0.Δtemplate(1, SortableComponent_div_2_ng_template_1_Template, 0, 0, "ng-template", _c6);
    ɵngcc0.ΔelementEnd();
} if (rf & 2) {
    const item_r56 = ctx.$implicit;
    const i_r57 = ctx.index;
    const ctx_r50 = ɵngcc0.ΔnextContext();
    const _r51 = ɵngcc0.Δreference(4);
    ɵngcc0.Δselect(0);
    ɵngcc0.Δproperty("ngClass", ɵngcc0.ΔpureFunction2(5, _c7, ctx_r50.itemClass, ((i_r57 === ctx_r50.activeItem) ? ctx_r50.itemActiveClass : "")));
    ɵngcc0.Δproperty("ngStyle", ctx_r50.getItemStyle((i_r57 === ctx_r50.activeItem)));
    ɵngcc0.ΔelementAttribute(0, "aria-grabbed", ɵngcc0.Δbind((i_r57 === ctx_r50.activeItem)));
    ɵngcc0.Δselect(1);
    ɵngcc0.Δproperty("ngTemplateOutlet", (ctx_r50.itemTemplate || _r51));
    ɵngcc0.Δproperty("ngTemplateOutletContext", ɵngcc0.ΔpureFunction2(8, _c8, item_r56, i_r57));
} }
function SortableComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.Δtext(0);
} if (rf & 2) {
    const item_r64 = ctx.item;
    ɵngcc0.Δselect(0);
    ɵngcc0.ΔtextBinding(0, ɵngcc0.Δinterpolation1("", item_r64.value, ""));
} }
var DraggableItemService = /** @class */ (function () {
    function DraggableItemService() {
        this.onCapture = new Subject();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    DraggableItemService.prototype.dragStart = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.draggableItem = item;
    };
    /**
     * @return {?}
     */
    DraggableItemService.prototype.getItem = /**
     * @return {?}
     */
    function () {
        return this.draggableItem;
    };
    /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */
    DraggableItemService.prototype.captureItem = /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */
    function (overZoneIndex, newIndex) {
        if (this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, {
                overZoneIndex: overZoneIndex,
                i: newIndex
            });
        }
        return this.draggableItem;
    };
    /**
     * @return {?}
     */
    DraggableItemService.prototype.onCaptureItem = /**
     * @return {?}
     */
    function () {
        return this.onCapture;
    };
DraggableItemService.ngInjectableDef = ɵngcc0.ΔdefineInjectable({ token: DraggableItemService, factory: function DraggableItemService_Factory(t) { return new (t || DraggableItemService)(); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(DraggableItemService, [{
        type: Injectable
    }], function () { return []; }, { onCapture: [], dragStart: [], draggableItem: [], getItem: [], captureItem: [], onCaptureItem: [] });
    return DraggableItemService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
var SortableComponent = /** @class */ (function () {
    function SortableComponent(transfer) {
        var _this = this;
        /**
         * class name for items wrapper
         */
        this.wrapperClass = '';
        /**
         * style object for items wrapper
         */
        this.wrapperStyle = {};
        /**
         * class name for item
         */
        this.itemClass = '';
        /**
         * style object for item
         */
        this.itemStyle = {};
        /**
         * class name for active item
         */
        this.itemActiveClass = '';
        /**
         * style object for active item
         */
        this.itemActiveStyle = {};
        /**
         * class name for placeholder
         */
        this.placeholderClass = '';
        /**
         * style object for placeholder
         */
        this.placeholderStyle = {};
        /**
         * placeholder item which will be shown if collection is empty
         */
        this.placeholderItem = '';
        /**
         * fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         */
        /* tslint:disable-next-line: no-any */
        this.onChange = new EventEmitter();
        this.showPlaceholder = false;
        this.activeItem = -1;
        /* tslint:disable-next-line: no-any */
        this.onTouched = Function.prototype;
        /* tslint:disable-next-line: no-any */
        this.onChanged = Function.prototype;
        this.transfer = transfer;
        this.currentZoneIndex = SortableComponent.globalZoneIndex++;
        this.transfer
            .onCaptureItem()
            .subscribe(function (item) { return _this.onDrop(item); });
    }
    Object.defineProperty(SortableComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._items = value;
            /** @type {?} */
            var out = this.items.map(function (x) { return x.initData; });
            this.onChanged(out);
            this.onChange.emit(out);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    SortableComponent.prototype.onItemDragstart = /**
     * @param {?} event
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    function (event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event: event,
            item: item,
            i: i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    };
    /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    SortableComponent.prototype.onItemDragover = /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    function (event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        /** @type {?} */
        var dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        /* tslint:disable-next-line: no-any */
        /** @type {?} */
        var newArray = [];
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = __spread(this.items.slice(0, i), [
                dragItem.item
            ], this.items.slice(i, dragItem.i), this.items.slice(dragItem.i + 1));
        }
        else {
            // this.draggedItem.i < i
            newArray = __spread(this.items.slice(0, dragItem.i), this.items.slice(dragItem.i + 1, i + 1), [
                dragItem.item
            ], this.items.slice(i + 1));
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype.cancelEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SortableComponent.prototype.onDrop = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter(function (x, i) { return i !== item.i; });
            this.updatePlaceholderState();
        }
        this.resetActiveItem(undefined);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype.resetActiveItem = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    SortableComponent.prototype.registerOnChange = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.onChanged = callback;
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    SortableComponent.prototype.registerOnTouched = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.onTouched = callback;
    };
    /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    SortableComponent.prototype.writeValue = /* tslint:disable-next-line: no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (value) {
            /* tslint:disable-next-line: no-any */
            this.items = value.map(function (x, i) { return ({
                id: i,
                initData: x,
                value: _this.fieldName ? x[_this.fieldName] : x
            }); });
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    };
    /**
     * @return {?}
     */
    SortableComponent.prototype.updatePlaceholderState = /**
     * @return {?}
     */
    function () {
        this.showPlaceholder = !this._items.length;
    };
    /**
     * @param {?} isActive
     * @return {?}
     */
    SortableComponent.prototype.getItemStyle = /**
     * @param {?} isActive
     * @return {?}
     */
    function (isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    };
    // tslint:disable-next-line
    // tslint:disable-next-line
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype.initDragstartEvent = 
    // tslint:disable-next-line
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        event.dataTransfer.setData('Text', 'placeholder');
    };
    SortableComponent.globalZoneIndex = 0;
    /** @nocollapse */
    SortableComponent.ctorParameters = function () { return [
        { type: DraggableItemService }
    ]; };
    SortableComponent.propDecorators = {
        fieldName: [{ type: Input }],
        wrapperClass: [{ type: Input }],
        wrapperStyle: [{ type: Input }],
        itemClass: [{ type: Input }],
        itemStyle: [{ type: Input }],
        itemActiveClass: [{ type: Input }],
        itemActiveStyle: [{ type: Input }],
        placeholderClass: [{ type: Input }],
        placeholderStyle: [{ type: Input }],
        placeholderItem: [{ type: Input }],
        itemTemplate: [{ type: Input }],
        onChange: [{ type: Output }]
    };
SortableComponent.ngComponentDef = ɵngcc0.ΔdefineComponent({ type: SortableComponent, selectors: [["bs-sortable"]], factory: function SortableComponent_Factory(t) { return new (t || SortableComponent)(ɵngcc0.ΔdirectiveInject(DraggableItemService)); }, inputs: { wrapperClass: "wrapperClass", wrapperStyle: "wrapperStyle", itemClass: "itemClass", itemStyle: "itemStyle", itemActiveClass: "itemActiveClass", itemActiveStyle: "itemActiveStyle", placeholderClass: "placeholderClass", placeholderStyle: "placeholderStyle", placeholderItem: "placeholderItem", fieldName: "fieldName", itemTemplate: "itemTemplate" }, outputs: { onChange: "onChange" }, exportAs: ["bs-sortable"], features: [ɵngcc0.ΔProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(function () { return SortableComponent; }),
                multi: true
            }
        ])], consts: 5, vars: 5, template: function SortableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ΔelementStart(0, "div", _c0);
        ɵngcc0.Δlistener("dragover", function SortableComponent_Template_div_dragover_0_listener($event) { return ctx.cancelEvent($event); });
        ɵngcc0.Δlistener("dragenter", function SortableComponent_Template_div_dragenter_0_listener($event) { return ctx.cancelEvent($event); });
        ɵngcc0.Δlistener("drop", function SortableComponent_Template_div_drop_0_listener($event) { return ctx.resetActiveItem($event); });
        ɵngcc0.Δlistener("mouseleave", function SortableComponent_Template_div_mouseleave_0_listener($event) { return ctx.resetActiveItem($event); });
        ɵngcc0.Δtemplate(1, SortableComponent_div_1_Template, 2, 3, "div", _c1);
        ɵngcc0.Δtemplate(2, SortableComponent_div_2_Template, 2, 11, "div", _c2);
        ɵngcc0.ΔelementEnd();
        ɵngcc0.Δtemplate(3, SortableComponent_ng_template_3_Template, 1, 1, "ng-template", null, _c3, ɵngcc0.ΔtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.Δselect(0);
        ɵngcc0.Δproperty("ngClass", ctx.wrapperClass);
        ɵngcc0.Δproperty("ngStyle", ctx.wrapperStyle);
        ɵngcc0.Δproperty("ngStyle", ctx.wrapperStyle);
        ɵngcc0.Δselect(1);
        ɵngcc0.Δproperty("ngIf", ctx.showPlaceholder);
        ɵngcc0.Δselect(2);
        ɵngcc0.Δproperty("ngForOf", ctx.items);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(SortableComponent, [{
        type: Component,
        args: [{
                selector: 'bs-sortable',
                exportAs: 'bs-sortable',
                template: "\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n        aria-dropeffect=\"move\"\n        [attr.aria-grabbed]=\"i === activeItem\"\n    ><ng-template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngTemplateOutletContext]=\"{item:item, index: i}\"></ng-template></div>\n</div>\n\n<ng-template #defItemTemplate let-item=\"item\">{{item.value}}</ng-template>  \n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return SortableComponent; }),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: DraggableItemService }]; }, { wrapperClass: [{
            type: Input
        }], wrapperStyle: [{
            type: Input
        }], itemClass: [{
            type: Input
        }], itemStyle: [{
            type: Input
        }], itemActiveClass: [{
            type: Input
        }], itemActiveStyle: [{
            type: Input
        }], placeholderClass: [{
            type: Input
        }], placeholderStyle: [{
            type: Input
        }], placeholderItem: [{
            type: Input
        }], onChange: [{
            type: Output
        }], showPlaceholder: [], activeItem: [], onTouched: [], onChanged: [], transfer: [], currentZoneIndex: [], items: [], items: [], onItemDragstart: [], onItemDragover: [], cancelEvent: [], onDrop: [], resetActiveItem: [], registerOnChange: [], registerOnTouched: [], writeValue: [], updatePlaceholderState: [], getItemStyle: [], initDragstartEvent: [], fieldName: [{
            type: Input
        }], itemTemplate: [{
            type: Input
        }] });
    return SortableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SortableModule = /** @class */ (function () {
    function SortableModule() {
    }
    /**
     * @return {?}
     */
    SortableModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: SortableModule, providers: [DraggableItemService] };
    };
SortableModule.ngModuleDef = ɵngcc0.ΔdefineNgModule({ type: SortableModule });
/*@__PURE__*/ ɵngcc0.ΔsetNgModuleScope(SortableModule, { declarations: function () { return [SortableComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [SortableComponent]; } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(SortableModule, [{
        type: NgModule,
        args: [{
                declarations: [SortableComponent],
                imports: [CommonModule],
                exports: [SortableComponent]
            }]
    }], function () { return []; }, null);
SortableModule.ngInjectorDef = ɵngcc0.ΔdefineInjector({ factory: function SortableModule_Factory(t) { return new (t || SortableModule)(); }, imports: [[CommonModule]] });
    return SortableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SortableModule, SortableComponent, DraggableItemService };

//# sourceMappingURL=ngx-bootstrap-sortable.js.map