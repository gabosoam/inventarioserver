webpackJsonp([3],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageModule", function() { return StockPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stock__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StockPageModule = (function () {
    function StockPageModule() {
    }
    StockPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__stock__["a" /* StockPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__stock__["a" /* StockPage */]),
            ],
        })
    ], StockPageModule);
    return StockPageModule;
}());

//# sourceMappingURL=stock.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the StockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StockPage = (function () {
    function StockPage(navCtrl, navParams, formBuilder, service, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.service = service;
        this.viewCtrl = viewCtrl;
        this.prod = navParams.get('producto');
        this.formCodigo = formBuilder.group({
            unidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cantidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.obtenerPrecios();
    }
    StockPage.prototype.gestionar = function () {
        var total = this.formCodigo.value.cantidad / this.formCodigo.value.unidad;
        if (this.formCodigo.valid) {
            this.viewCtrl.dismiss({ id: this.prod.id, stock: total });
        }
        else {
        }
    };
    StockPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StockPage');
    };
    StockPage.prototype.obtenerPrecios = function () {
        var _this = this;
        var seq = this.service.obtenerPrecios(this.prod.id);
        seq.subscribe(function (res) {
            _this.items = res;
        });
    };
    StockPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stock',template:/*ion-inline-start:"C:\Proyectos\inventarioclient\src\pages\stock\stock.html"*/'<!--\n  Generated template for the StockPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>stock</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form id="container" [formGroup]="formCodigo" (ngSubmit)="gestionar()">\n\n    <ion-list>\n\n      <ion-item>\n        <ion-label>Unidad de ingreso</ion-label>\n        <ion-select [(ngModel)]="unidad" formControlName="unidad">\n          <ion-option *ngFor="let item of items"  value={{item.tamano}}>{{item.unidad}}</ion-option>\n\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Cantidad</ion-label>\n        <ion-input  type="number" value="" formControlName="cantidad"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <button ion-button>Guardar</button>\n      </ion-item>\n    </ion-list>\n  </form>\n  <ion-list>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Proyectos\inventarioclient\src\pages\stock\stock.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* Items */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], StockPage);
    return StockPage;
}());

//# sourceMappingURL=stock.js.map

/***/ })

});
//# sourceMappingURL=3.js.map