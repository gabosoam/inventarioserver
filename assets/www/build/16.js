webpackJsonp([16],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarproductoPageModule", function() { return BuscarproductoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buscarproducto__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuscarproductoPageModule = (function () {
    function BuscarproductoPageModule() {
    }
    BuscarproductoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buscarproducto__["a" /* BuscarproductoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buscarproducto__["a" /* BuscarproductoPage */]),
            ],
        })
    ], BuscarproductoPageModule);
    return BuscarproductoPageModule;
}());

//# sourceMappingURL=buscarproducto.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarproductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(42);
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
 * Generated class for the BuscarproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuscarproductoPage = (function () {
    function BuscarproductoPage(navCtrl, viewCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.service = service;
        this.searchQuery = '';
        //this.initializeItems();
    }
    BuscarproductoPage.prototype.initializeItems = function (nombre) {
        this.items = [
            { nombre: "gabriel" },
            { nombre: "alba" }
        ];
    };
    BuscarproductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuscarproductoPage');
    };
    BuscarproductoPage.prototype.agregar = function (producto) {
        this.viewCtrl.dismiss(producto);
    };
    BuscarproductoPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        var _this = this;
        // set val to the value of the searchbar
        var val = ev.target.value;
        var seq = this.service.buscarProductoNombre(val).share();
        seq.subscribe(function (data) {
            _this.items = data;
            if (val && val.trim() != '') {
                _this.items = _this.items.filter(function (item) {
                    return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
        });
        // if the value is an empty string don't filter the items
    };
    BuscarproductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buscarproducto',template:/*ion-inline-start:"C:\Proyectos\inventarioclient\src\pages\buscarproducto\buscarproducto.html"*/'<!--\n  Generated template for the BuscarproductoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-searchbar placeholder="Ingresar el nombre de un producto" (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <table style="width: 100%; padding: 10px; border-radius: 25px" border="1">\n   \n        <tr>\n          \n          <th style="padding: 5px; text-align: center">Código</th>\n          <th style="padding: 5px; text-align: center">Producto</th>\n          <th style="padding: 5px; text-align: center">U.</th>\n         \n       \n\n          <th style="padding: 5px; text-align: center"></th>\n        </tr>\n        <tr *ngFor="let item of items">\n          <td  style="padding: 5px; text-align: center">{{item.codigo}}</td>\n          <td style="padding: 5px; text-align: center">{{item.nombre}}</td>\n          <td style="padding: 5px; text-align: center">{{item.unidad}}</td>\n         \n\n     \n          <td style="padding: 5px; text-align: center">\n            <button ion-button round icon-only small (click)="agregar(item)">\n              <ion-icon name="ios-arrow-down"></ion-icon>\n            </button>\n       \n          </td>\n        </tr>\n  \n  \n      </table>\n\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos\inventarioclient\src\pages\buscarproducto\buscarproducto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Items */]])
    ], BuscarproductoPage);
    return BuscarproductoPage;
}());

//# sourceMappingURL=buscarproducto.js.map

/***/ })

});
//# sourceMappingURL=16.js.map