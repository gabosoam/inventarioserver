webpackJsonp([6],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]
            ]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, items, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.alertCtrl = alertCtrl;
        this.currentItems = [];
        this.form2 = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.validador = false;
        this.form = formBuilder.group({
            codigo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            tipo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            marca: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            categoria: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            precio: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            stock: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            minimo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            unidad: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            estado: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
        this.obtenerMarcas();
        this.obtenerCategorias();
    }
    SearchPage_1 = SearchPage;
    SearchPage.prototype.saludar = function () {
        var _this = this;
        var seq = this.items.buscarProducto(this.form2.value.name).share();
        seq.subscribe(function (res) {
            if (res.length == 1) {
                _this.validador = true;
                _this.idProducto = res[0].id;
                _this.form.setValue({
                    codigo: res[0].codigo,
                    nombre: res[0].nombre,
                    tipo: res[0].tipo,
                    marca: res[0].marca.id,
                    categoria: res[0].categoria.id,
                    precio: res[0].precio,
                    stock: res[0].stock,
                    minimo: res[0].minimo,
                    unidad: res[0].unidad,
                    estado: res[0].estado,
                });
            }
            else {
                _this.form.reset();
                _this.validador = false;
            }
        }, function (err) {
            _this.validador == false;
            var alert = _this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'Existió un error ',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    SearchPage.prototype.registrar = function () {
        var _this = this;
        if (this.validador) {
            var seq_1 = this.items.modificarProducto(this.idProducto, this.form.value);
            seq_1.subscribe(function (res) {
                var alert = _this.alertCtrl.create({
                    title: 'Éxito!',
                    subTitle: 'Se modificó el producto satisfactoriamente',
                    buttons: ['OK']
                });
                alert.present();
                _this.navCtrl.push(SearchPage_1);
            }, function (err) {
                console.error('ERROR', err);
            });
        }
        else {
            if (!this.form.valid) {
                return;
            }
            var seq = this.items.crearProducto(this.form.value).share();
            seq.subscribe(function (res) {
                var alert = _this.alertCtrl.create({
                    title: 'Éxito!',
                    subTitle: 'Se guardo el producto satisfactoriamente',
                    buttons: ['OK']
                });
                alert.present();
                _this.navCtrl.push(SearchPage_1);
            }, function (err) {
                var alert = _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: 'Existió un error ',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
    };
    /**
     * Perform a service for the proper items.
     */
    SearchPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.currentItems = this.items.query({
            name: val
        });
    };
    SearchPage.prototype.buscar = function (cosa) {
        console.log(cosa);
        var alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: 'error',
            buttons: ['OK']
        });
        alert.present();
    };
    SearchPage.prototype.obtenerMarcas = function () {
        var _this = this;
        this.items.obtenerMarcas().subscribe(function (marcas) {
            _this.marcas = marcas;
        });
    };
    SearchPage.prototype.obtenerCategorias = function () {
        var _this = this;
        this.items.obtenerCategorias().subscribe(function (categorias) {
            _this.categorias = categorias;
        });
    };
    /**
     * Navigate to the detail page for this item.
     */
    SearchPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    SearchPage = SearchPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Proyectos\inventarioclient\src\pages\search\search.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Productos</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n\n\n        <ion-card>\n\n          <form id="container" *ngIf="form2" [formGroup]="form2" (ngSubmit)="saludar()">\n\n            <ion-item id="rounded">\n\n              <ion-input [(ngModel)]="cbxProducto" autofocus type="text" placeholder="Código del producto" formControlName="name"></ion-input>\n\n            </ion-item>\n\n\n\n          </form>\n\n          <hr>\n\n\n\n          <ion-list>\n\n            <form id="container" *ngIf="form" [formGroup]="form" (ngSubmit)="registrar()">\n\n\n\n              <ion-row>\n\n                <ion-col col-3>\n\n                  <ion-item>\n\n                    <ion-label floating>Código</ion-label>\n\n                    <ion-input autofocus formControlName="codigo" type="text" (keypress)="buscar(this)"></ion-input>\n\n                  </ion-item>\n\n\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                  <ion-item>\n\n                    <ion-label floating>Nombre</ion-label>\n\n                    <ion-input type="text" formControlName="nombre"></ion-input>\n\n                  </ion-item>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                  <ion-item>\n\n                    <ion-label floating>Unidad</ion-label>\n\n                    <ion-input type="text" formControlName="unidad"></ion-input>\n\n                  </ion-item>\n\n\n\n                </ion-col>\n\n\n\n                <ion-col col-3>\n\n                  <ion-item>\n\n                    <ion-label floating>Precio venta</ion-label>\n\n                    <ion-input type="number" formControlName="precio"></ion-input>\n\n                  </ion-item>\n\n\n\n\n\n                </ion-col>\n\n\n\n                <ion-col col-3>\n\n                  <ion-item>\n\n                    <ion-label floating>Estado</ion-label>\n\n                    <ion-select formControlName="estado">\n\n                      <ion-option selected value="1">ACTIVO</ion-option>\n\n                      <ion-option value="0">INACTIVO</ion-option>\n\n                    </ion-select>\n\n                  </ion-item>\n\n\n\n                </ion-col>\n\n\n\n                <ion-col col-3>\n\n                  <ion-item>\n\n                    <ion-label floating>Tipo</ion-label>\n\n                    <ion-select formControlName="tipo">\n\n                      <ion-option selected value="unidad">Unidad</ion-option>\n\n                      <ion-option value="granel">Al granel</ion-option>\n\n                    </ion-select>\n\n                  </ion-item>\n\n\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                  <ion-item>\n\n                    <ion-label floating>Marca</ion-label>\n\n                    <ion-select formControlName="marca">\n\n                      <ion-option *ngFor="let marca of marcas" value={{marca.id}}>{{marca.nombre}}</ion-option>\n\n\n\n                    </ion-select>\n\n                  </ion-item>\n\n\n\n                </ion-col>\n\n\n\n                <ion-col col-3>\n\n                  <ion-item>\n\n                    <ion-label floating>Categoría</ion-label>\n\n                    <ion-select formControlName="categoria">\n\n                      <ion-option *ngFor="let categoria of categorias" value="{{categoria.id}}">{{categoria.nombre}}</ion-option>\n\n\n\n                    </ion-select>\n\n                  </ion-item>\n\n\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                  <ion-item>\n\n                    <ion-label floating>Existencia actual</ion-label>\n\n                    <ion-input type="number" formControlName="stock"></ion-input>\n\n                  </ion-item>\n\n\n\n                </ion-col>\n\n\n\n                <ion-col col-3>\n\n                  <ion-item>\n\n                    <ion-label floating>Existencia mínima</ion-label>\n\n                    <ion-input type="number" formControlName="minimo"></ion-input>\n\n                  </ion-item>\n\n\n\n                </ion-col>\n\n\n\n\n\n\n\n\n\n              </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n            </form>\n\n            <hr>\n\n            <ion-col col-3>\n\n              <button ion-button (click)="registrar()">Guardar</button>\n\n            </ion-col>\n\n\n\n          </ion-list>\n\n          <div padding>\n\n\n\n          </div>\n\n\n\n        </ion-card>\n\n\n\n\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Proyectos\inventarioclient\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Items */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SearchPage);
    return SearchPage;
    var SearchPage_1;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=6.js.map