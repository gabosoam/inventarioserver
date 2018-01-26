webpackJsonp([13],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaCobrarPageModule", function() { return FacturaCobrarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__factura_cobrar__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FacturaCobrarPageModule = (function () {
    function FacturaCobrarPageModule() {
    }
    FacturaCobrarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__factura_cobrar__["a" /* FacturaCobrarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__factura_cobrar__["a" /* FacturaCobrarPage */]),
            ],
        })
    ], FacturaCobrarPageModule);
    return FacturaCobrarPageModule;
}());

//# sourceMappingURL=factura-cobrar.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturaCobrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
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
 * Generated class for the FacturaCobrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacturaCobrarPage = (function () {
    function FacturaCobrarPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.total = navParams.get('total');
    }
    FacturaCobrarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FacturaCobrarPage');
    };
    FacturaCobrarPage.prototype.calcular = function () {
        this.vuelto = (this.recibido - this.total).toFixed(2);
    };
    FacturaCobrarPage.prototype.cobrar = function (accion) {
        this.viewCtrl.dismiss(accion);
    };
    FacturaCobrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-factura-cobrar',template:/*ion-inline-start:"C:\Proyectos\inventarioclient\src\pages\factura-cobrar\factura-cobrar.html"*/'<!--\n\n  Generated template for the FacturaCobrarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>$ {{total}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label>Por cobrar: $</ion-label>\n\n      <ion-input disabled type="text" value="{{total}}"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Recibido: $</ion-label>\n\n      <ion-input autofocus type="number" [(ngModel)]="recibido" (change)="calcular()"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Vuelto: $</ion-label>\n\n      <ion-input  type="number" value="0.00" [(ngModel)]="vuelto" ></ion-input>\n\n    </ion-item>\n\n\n\n\n\n  </ion-list>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n          <button  ion-button color="default" (click)="cobrar(\'comprobante\')">Cobrar e imprimir comprobante</button>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n          <button  ion-button color="secondary" (click)="cobrar(\'sincomprobante\')">Cobrar sin imprimir comprobante</button>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n          <button  ion-button color="danger" (click)="cobrar(\'cancelar\')">Cancelar comprobante</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Proyectos\inventarioclient\src\pages\factura-cobrar\factura-cobrar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], FacturaCobrarPage);
    return FacturaCobrarPage;
}());

//# sourceMappingURL=factura-cobrar.js.map

/***/ })

});
//# sourceMappingURL=13.js.map