import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { BsDatepickerAbstractComponent } from '../../base/bs-datepicker-container';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { DayViewModel } from '../../models';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { Subscription } from 'rxjs';
export declare class BsDatepickerContainerComponent extends BsDatepickerAbstractComponent implements OnInit, OnDestroy {
    private _config;
    private _store;
    private _actions;
    private _positionService;
    value: Date;
    valueChange: EventEmitter<Date>;
    _subs: Subscription[];
    constructor(_config: BsDatepickerConfig, _store: BsDatepickerStore, _actions: BsDatepickerActions, _effects: BsDatepickerEffects, _positionService: PositioningService);
    ngOnInit(): void;
    daySelectHandler(day: DayViewModel): void;
    ngOnDestroy(): void;
}
