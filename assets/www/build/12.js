webpackJsonp([12],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCreatePageModule", function() { return ItemCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_create__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemCreatePageModule = (function () {
    function ItemCreatePageModule() {
    }
    ItemCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__item_create__["a" /* ItemCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__item_create__["a" /* ItemCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__item_create__["a" /* ItemCreatePage */]
            ]
        })
    ], ItemCreatePageModule);
    return ItemCreatePageModule;
}());

//# sourceMappingURL=item-create.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(116);
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





var ItemCreatePage = (function () {
    function ItemCreatePage(navCtrl, navParams, viewCtrl, formBuilder, camera, items) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.items = items;
        this.obtenerMarcas();
        this.obtenerCategorias();
        this.producto = navParams.get('producto');
        this.form = formBuilder.group({
            id: [this.producto.id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            codigo: [this.producto.codigo, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            nombre: [this.producto.nombre, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            precio: [this.producto.precio, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            estado: [this.producto.estado, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            tipo: [this.producto.tipo, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            marca: [this.producto.marca.id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            categoria: [this.producto.categoria.id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            minimo: [this.producto.minimo, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            unidad: [this.producto.unidad, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    ItemCreatePage.prototype.ionViewDidLoad = function () {
    };
    ItemCreatePage.prototype.obtenerMarcas = function () {
        var _this = this;
        this.items.obtenerMarcas().subscribe(function (marcas) {
            _this.marcas = marcas;
        });
    };
    ItemCreatePage.prototype.obtenerCategorias = function () {
        var _this = this;
        this.items.obtenerCategorias().subscribe(function (categorias) {
            _this.categorias = categorias;
        });
    };
    ItemCreatePage.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                _this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ItemCreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    ItemCreatePage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    ItemCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    ItemCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], ItemCreatePage.prototype, "fileInput", void 0);
    ItemCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-create',template:/*ion-inline-start:"C:\Proyectos\inventarioclient\src\pages\item-create\item-create.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ producto.nombre }}</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'CANCEL_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'DONE_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n\n\n\n\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label fixed>Código</ion-label>\n\n        <ion-input disabled autofocus type="text" formControlName="codigo"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Nombre</ion-label>\n\n        <ion-input type="text" formControlName="nombre"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Unidad</ion-label>\n\n        <ion-input type="text" formControlName="unidad"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Precio</ion-label>\n\n        <ion-input type="number" formControlName="precio"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label fixed>Tipo</ion-label>\n\n        <ion-select formControlName="tipo">\n\n          <ion-option selected value="unidad">UNIDAD</ion-option>\n\n          <ion-option value="granel">AL GRANEL</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Marca</ion-label>\n\n        <ion-select formControlName="marca">\n\n          <ion-option *ngFor="let marca of marcas" value={{marca.id}}>{{marca.nombre}}</ion-option>\n\n\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>Categoría</ion-label>\n\n        <ion-select formControlName="categoria">\n\n          <ion-option *ngFor="let categoria of categorias" value="{{categoria.id}}">{{categoria.nombre}}</ion-option>\n\n\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Mínimo</ion-label>\n\n        <ion-input type="number" formControlName="minimo"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Proyectos\inventarioclient\src\pages\item-create\item-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* Items */]])
    ], ItemCreatePage);
    return ItemCreatePage;
}());

//# sourceMappingURL=item-create.js.map

/***/ })

});
//# sourceMappingURL=12.js.map