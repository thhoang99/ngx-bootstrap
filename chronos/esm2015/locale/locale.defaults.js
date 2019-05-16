/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { defaultDayOfMonthOrdinalParse, defaultLocaleMonths, defaultLocaleMonthsShort, defaultLocaleWeekdays, defaultLocaleWeekdaysMin, defaultLocaleWeekdaysShort, defaultLongDateFormat, defaultOrdinal } from './locale.class';
import { defaultCalendar } from './calendar';
/** @type {?} */
export const defaultInvalidDate = 'Invalid date';
/** @type {?} */
export const defaultLocaleWeek = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6 // The week that contains Jan 1st is the first week of the year.
};
/** @type {?} */
export const defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
/** @type {?} */
export const defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
};
/** @type {?} */
export const baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLmRlZmF1bHRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsibG9jYWxlL2xvY2FsZS5kZWZhdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLDZCQUE2QixFQUM3QixtQkFBbUIsRUFDbkIsd0JBQXdCLEVBQ3hCLHFCQUFxQixFQUNyQix3QkFBd0IsRUFDeEIsMEJBQTBCLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUVsRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7O0FBRTdDLE1BQU0sT0FBTyxrQkFBa0IsR0FBRyxjQUFjOztBQUVoRCxNQUFNLE9BQU8saUJBQWlCLEdBQUc7SUFDL0IsR0FBRyxFQUFFLENBQUM7O0lBQ04sR0FBRyxFQUFFLENBQUMsQ0FBQyxnRUFBZ0U7Q0FDeEU7O0FBRUQsTUFBTSxPQUFPLDBCQUEwQixHQUFHLGVBQWU7O0FBRXpELE1BQU0sT0FBTyxtQkFBbUIsR0FBNEI7SUFDMUQsTUFBTSxFQUFHLE9BQU87SUFDaEIsSUFBSSxFQUFLLFFBQVE7SUFDakIsQ0FBQyxFQUFJLGVBQWU7SUFDcEIsRUFBRSxFQUFHLFlBQVk7SUFDakIsQ0FBQyxFQUFJLFVBQVU7SUFDZixFQUFFLEVBQUcsWUFBWTtJQUNqQixDQUFDLEVBQUksU0FBUztJQUNkLEVBQUUsRUFBRyxVQUFVO0lBQ2YsQ0FBQyxFQUFJLE9BQU87SUFDWixFQUFFLEVBQUcsU0FBUztJQUNkLENBQUMsRUFBSSxTQUFTO0lBQ2QsRUFBRSxFQUFHLFdBQVc7SUFDaEIsQ0FBQyxFQUFJLFFBQVE7SUFDYixFQUFFLEVBQUcsVUFBVTtDQUNoQjs7QUFFRCxNQUFNLE9BQU8sVUFBVSxHQUFlO0lBQ3BDLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLGNBQWMsRUFBRSxxQkFBcUI7SUFDckMsV0FBVyxFQUFFLGtCQUFrQjtJQUMvQixPQUFPLEVBQUUsY0FBYztJQUN2QixzQkFBc0IsRUFBRSw2QkFBNkI7SUFDckQsWUFBWSxFQUFFLG1CQUFtQjtJQUVqQyxNQUFNLEVBQUUsbUJBQW1CO0lBQzNCLFdBQVcsRUFBRSx3QkFBd0I7SUFFckMsSUFBSSxFQUFFLGlCQUFpQjtJQUV2QixRQUFRLEVBQUUscUJBQXFCO0lBQy9CLFdBQVcsRUFBRSx3QkFBd0I7SUFDckMsYUFBYSxFQUFFLDBCQUEwQjtJQUV6QyxhQUFhLEVBQUUsMEJBQTBCO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UsXG4gIGRlZmF1bHRMb2NhbGVNb250aHMsXG4gIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCxcbiAgZGVmYXVsdExvY2FsZVdlZWtkYXlzLFxuICBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4sXG4gIGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LCBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQsIGRlZmF1bHRPcmRpbmFsLFxuICBMb2NhbGVEYXRhXG59IGZyb20gJy4vbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGRlZmF1bHRDYWxlbmRhciB9IGZyb20gJy4vY2FsZW5kYXInO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEludmFsaWREYXRlID0gJ0ludmFsaWQgZGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlV2VlayA9IHtcbiAgZG93OiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgZG95OiA2IC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlTWVyaWRpZW1QYXJzZSA9IC9bYXBdXFwuP20/XFwuPy9pO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFJlbGF0aXZlVGltZToge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gIGZ1dHVyZSA6ICdpbiAlcycsXG4gIHBhc3QgICA6ICclcyBhZ28nLFxuICBzICA6ICdhIGZldyBzZWNvbmRzJyxcbiAgc3MgOiAnJWQgc2Vjb25kcycsXG4gIG0gIDogJ2EgbWludXRlJyxcbiAgbW0gOiAnJWQgbWludXRlcycsXG4gIGggIDogJ2FuIGhvdXInLFxuICBoaCA6ICclZCBob3VycycsXG4gIGQgIDogJ2EgZGF5JyxcbiAgZGQgOiAnJWQgZGF5cycsXG4gIE0gIDogJ2EgbW9udGgnLFxuICBNTSA6ICclZCBtb250aHMnLFxuICB5ICA6ICdhIHllYXInLFxuICB5eSA6ICclZCB5ZWFycydcbn07XG5cbmV4cG9ydCBjb25zdCBiYXNlQ29uZmlnOiBMb2NhbGVEYXRhID0ge1xuICBjYWxlbmRhcjogZGVmYXVsdENhbGVuZGFyLFxuICBsb25nRGF0ZUZvcm1hdDogZGVmYXVsdExvbmdEYXRlRm9ybWF0LFxuICBpbnZhbGlkRGF0ZTogZGVmYXVsdEludmFsaWREYXRlLFxuICBvcmRpbmFsOiBkZWZhdWx0T3JkaW5hbCxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UsXG4gIHJlbGF0aXZlVGltZTogZGVmYXVsdFJlbGF0aXZlVGltZSxcblxuICBtb250aHM6IGRlZmF1bHRMb2NhbGVNb250aHMsXG4gIG1vbnRoc1Nob3J0OiBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQsXG5cbiAgd2VlazogZGVmYXVsdExvY2FsZVdlZWssXG5cbiAgd2Vla2RheXM6IGRlZmF1bHRMb2NhbGVXZWVrZGF5cyxcbiAgd2Vla2RheXNNaW46IGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbixcbiAgd2Vla2RheXNTaG9ydDogZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQsXG5cbiAgbWVyaWRpZW1QYXJzZTogZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2Vcbn07XG4iXX0=