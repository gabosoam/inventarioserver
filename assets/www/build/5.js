webpackJsonp([5],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(42);
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
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, settings, formBuilder, navParams, translate, alertCtrl, modalCtrl, items) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.items = items;
        this.settingsReady = false;
        this.profileSettings = {
            page: 'profile',
            pageTitleKey: 'SETTINGS_PAGE_PROFILE'
        };
        this.page = 'main';
        this.pageTitleKey = 'SETTINGS_TITLE';
        this.subSettings = SettingsPage_1;
        this.form = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.formCodigo = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    SettingsPage_1 = SettingsPage;
    SettingsPage.prototype.saludar = function () {
        var _this = this;
        this.buscador = "nombre";
        var seq = this.items.buscarProductoNombre(this.form.value.name);
        seq.subscribe(function (res) {
            console.log(res);
            _this.productos = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    };
    SettingsPage.prototype.buscarNombre = function (nombre) {
        var _this = this;
        this.buscador = "nombre";
        var seq = this.items.buscarProductoNombre(nombre);
        seq.subscribe(function (res) {
            console.log(res);
            _this.productos = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    };
    SettingsPage.prototype.buscarCodigo = function () {
        var _this = this;
        this.buscador = "codigo";
        var seq = this.items.buscarProductoCodigo(this.formCodigo.value.name);
        seq.subscribe(function (res) {
            console.log('asdasdsa');
            console.log(res);
            _this.productos = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    };
    SettingsPage.prototype.buscarCodigo2 = function (codigo) {
        var _this = this;
        var seq = this.items.buscarProductoCodigo(codigo);
        seq.subscribe(function (res) {
            console.log('asdasdsa');
            console.log(res);
            _this.productos = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    };
    SettingsPage.prototype.modificarItem = function (producto) {
        var _this = this;
        //  let addModal = this.modalCtrl.create('ItemCreatePage');
        var addModal = this.modalCtrl.create('ItemCreatePage', { producto: producto });
        addModal.onDidDismiss(function (producto) {
            if (producto) {
                var seq = _this.items.modificarProducto(producto.id, producto);
                seq.subscribe(function (res) {
                    if (_this.buscador == "nombre") {
                        _this.saludar();
                    }
                    else if (_this.buscador == "codigo") {
                        _this.buscarCodigo();
                    }
                });
            }
        });
        addModal.present();
    };
    SettingsPage.prototype.listarPrecios = function (producto) {
        var _this = this;
        //  let addModal = this.modalCtrl.create('ItemCreatePage');
        var addModal = this.modalCtrl.create('PrecioPage', { producto: producto });
        addModal.onDidDismiss(function (producto) {
            if (producto) {
                var seq = _this.items.modificarProducto(producto.id, producto);
                seq.subscribe(function (res) {
                    if (_this.buscador == "nombre") {
                        _this.saludar();
                    }
                    else if (_this.buscador == "codigo") {
                        _this.buscarCodigo();
                    }
                });
            }
        });
        addModal.present();
    };
    SettingsPage.prototype.agregarStock = function (producto) {
        var _this = this;
        //  let addModal = this.modalCtrl.create('ItemCreatePage');
        var addModal = this.modalCtrl.create('StockPage', { producto: producto });
        addModal.onDidDismiss(function (data) {
            if (data) {
                var seq = _this.items.modificarStock(data.id, data.stock);
                seq.subscribe(function (res) {
                    if (_this.buscador == "nombre") {
                        _this.saludar();
                    }
                    else if (_this.buscador == "codigo") {
                        _this.buscarCodigo();
                    }
                });
            }
        });
        addModal.present();
        // let prompt = this.alertCtrl.create({
        //   title: producto.nombre,
        //   message: "Ingresa la cantidad ",
        //   inputs: [
        //     {
        //       name: 'stock',
        //       placeholder: 'Stock',
        //       type: 'number',
        //       min: 0
        //     },
        //     {
        //       name: 'id',
        //       value: producto.id,
        //       type: 'hidden',
        //       min: 0
        //     },
        //   ],
        //   buttons: [
        //     {
        //       text: 'Cancelar',
        //       handler: data => {
        //       }
        //     },
        //     {
        //       text: 'Guardar',
        //       handler: data => {
        //         let seq = this.items.modificarStock(data.id, data.stock);
        //         seq.subscribe(res=>{
        //           if (this.buscador == "nombre") {
        //             this.saludar();
        //           } else if (this.buscador == "codigo") {
        //             this.buscarCodigo();
        //           }
        //         })
        //       }
        //     }
        //   ]
        // });
        // prompt.present();
    };
    SettingsPage.prototype.desactivarItem = function (producto) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Eliminar este producto?',
            message: 'Está seguro que desea continuar?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        if (producto) {
                            var seq = _this.items.modificarProducto(producto.id, { estado: 0 });
                            seq.subscribe(function (res) {
                                if (_this.buscador == "nombre") {
                                    _this.saludar();
                                }
                                else if (_this.buscador == "codigo") {
                                    _this.buscarCodigo();
                                }
                            });
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    SettingsPage = SettingsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Proyectos\inventarioclient\src\pages\settings\settings.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Inicio</ion-title>\n\n\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content overflow-scroll = " true ">\n\n\n\n\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-2 >\n\n        <form id="container" *ngIf="formCodigo==true" [formGroup]="formCodigo" (ngSubmit)="buscarCodigo()">\n\n          <ion-searchbar style="width: 100%" autofocus formControlName="name" placeholder="Buscar por código">\n\n          </ion-searchbar>\n\n        </form>\n\n\n\n\n\n\n\n\n\n      </ion-col>\n\n      <ion-col col-6>\n\n\n\n        <form id="container" *ngIf="form" [formGroup]="form" (ngSubmit)="saludar()">\n\n          <ion-searchbar autofocus formControlName="name" placeholder="Buscar por nombre">\n\n          </ion-searchbar>\n\n        </form>\n\n      </ion-col>\n\n      <ion-col col-3></ion-col>\n\n    </ion-row>\n\n    <ion-list>\n\n\n\n\n\n    </ion-list>\n\n\n\n    <table style="width: 100%; padding: 10px; border-radius: 25px" border="1">\n\n   \n\n      <tr>\n\n        \n\n        <th style="padding: 5px; text-align: center">Código</th>\n\n        <th style="padding: 5px; text-align: center">Producto</th>\n\n        <th style="padding: 5px; text-align: center">Stock</th>\n\n \n\n        <th style="padding: 5px; text-align: center">Precio</th>\n\n        \n\n        <th style="padding: 5px; text-align: center">Mínimo</th>\n\n        <th style="padding: 5px; text-align: center">Acciones</th>\n\n      </tr>\n\n      <tr *ngFor="let producto of productos">\n\n        <td overflow-scroll = " true " style="padding: 5px; text-align: center">{{producto.codigo}}</td>\n\n        <td style="padding: 5px; text-align: center">{{producto.nombre}}</td>\n\n        <td style="padding: 5px; text-align: center">\n\n            <button ion-button clear>{{producto.stock}} ({{producto.unidad}})</button> </td>\n\n      \n\n        <td style="padding: 5px; text-align: center">${{producto.precio}}</td>\n\n       \n\n        <td style="padding: 5px; text-align: center">{{producto.minimo}}</td>\n\n        <td style="padding: 5px; text-align: center">\n\n          <button ion-button round icon-only small (click)="agregarStock(producto)">\n\n            <ion-icon name="md-add"></ion-icon>\n\n          </button>\n\n          <button ion-button small icon-only color="secondary" (click)="modificarItem(producto)" round>\n\n            <ion-icon name="md-create"></ion-icon>\n\n          </button>\n\n          <button ion-button small icon-only color="light" (click)="listarPrecios(producto)" round>\n\n            <ion-icon name="logo-usd"></ion-icon>\n\n          </button>\n\n          <button ion-button small icon-only color="danger" (click)="desactivarItem(producto)" round>\n\n            <ion-icon name="md-trash"></ion-icon>\n\n          </button>\n\n        </td>\n\n      </tr>\n\n\n\n\n\n    </table>\n\n\n\n\n\n\n\n  </ion-grid>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Proyectos\inventarioclient\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["c" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* Items */]])
    ], SettingsPage);
    return SettingsPage;
    var SettingsPage_1;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=5.js.map