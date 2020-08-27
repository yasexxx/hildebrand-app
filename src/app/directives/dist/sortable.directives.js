"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NgbdSortableHeader3 = exports.NgbdSortableHeader2 = exports.NgbdSortableHeader = void 0;
var core_1 = require("@angular/core");
var rotate = { 'asc': 'desc', 'desc': '', '': 'asc' };
var NgbdSortableHeader = /** @class */ (function () {
    function NgbdSortableHeader() {
        this.sortable = '';
        this.direction = '';
        this.sort = new core_1.EventEmitter();
    }
    NgbdSortableHeader.prototype.rotate = function () {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    };
    __decorate([
        core_1.Input()
    ], NgbdSortableHeader.prototype, "sortable");
    __decorate([
        core_1.Input()
    ], NgbdSortableHeader.prototype, "direction");
    __decorate([
        core_1.Output()
    ], NgbdSortableHeader.prototype, "sort");
    NgbdSortableHeader = __decorate([
        core_1.Directive({
            selector: 'th[sortable]',
            host: {
                '[class.asc]': 'direction === "asc"',
                '[class.desc]': 'direction === "desc"',
                '(click)': 'rotate()'
            }
        })
    ], NgbdSortableHeader);
    return NgbdSortableHeader;
}());
exports.NgbdSortableHeader = NgbdSortableHeader;
//---------------
// for orders
var NgbdSortableHeader2 = /** @class */ (function () {
    function NgbdSortableHeader2() {
        this.sortable2 = '';
        this.direction2 = '';
        this.sort2 = new core_1.EventEmitter();
    }
    NgbdSortableHeader2.prototype.rotate = function () {
        this.direction2 = rotate[this.direction2];
        this.sort2.emit({ column: this.sortable2, direction: this.direction2 });
    };
    __decorate([
        core_1.Input()
    ], NgbdSortableHeader2.prototype, "sortable2");
    __decorate([
        core_1.Input()
    ], NgbdSortableHeader2.prototype, "direction2");
    __decorate([
        core_1.Output()
    ], NgbdSortableHeader2.prototype, "sort2");
    NgbdSortableHeader2 = __decorate([
        core_1.Directive({
            selector: 'th[sortable2]',
            host: {
                '[class.asc]': 'direction === "asc"',
                '[class.desc]': 'direction === "desc"',
                '(click)': 'rotate()'
            }
        })
    ], NgbdSortableHeader2);
    return NgbdSortableHeader2;
}());
exports.NgbdSortableHeader2 = NgbdSortableHeader2;
//---------
// for customer
var NgbdSortableHeader3 = /** @class */ (function () {
    function NgbdSortableHeader3() {
        this.sortable3 = '';
        this.direction3 = '';
        this.sort2 = new core_1.EventEmitter();
    }
    NgbdSortableHeader3.prototype.rotate = function () {
        this.direction3 = rotate[this.direction3];
        this.sort2.emit({ column: this.sortable3, direction: this.direction3 });
    };
    __decorate([
        core_1.Input()
    ], NgbdSortableHeader3.prototype, "sortable3");
    __decorate([
        core_1.Input()
    ], NgbdSortableHeader3.prototype, "direction3");
    __decorate([
        core_1.Output()
    ], NgbdSortableHeader3.prototype, "sort2");
    NgbdSortableHeader3 = __decorate([
        core_1.Directive({
            selector: 'th[sortable3]',
            host: {
                '[class.asc]': 'direction === "asc"',
                '[class.desc]': 'direction === "desc"',
                '(click)': 'rotate()'
            }
        })
    ], NgbdSortableHeader3);
    return NgbdSortableHeader3;
}());
exports.NgbdSortableHeader3 = NgbdSortableHeader3;
