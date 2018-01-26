webpackJsonp([10],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_master__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListMasterPageModule = (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=list-master.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_printer__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListMasterPage = (function () {
    function ListMasterPage(navCtrl, formBuilder, items, modalCtrl, alertCtrl, printer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.printer = printer;
        this.factura = { id: 0 };
        this.currentItems = this.items.query();
        this.form = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.refrescar();
        //this.print()
    }
    ListMasterPage.prototype.refrescar = function () {
        var _this = this;
        var data = [];
        this.detalles = data;
        this.items.crearFactura().subscribe(function (res) {
            _this.factura = _this.items.factura;
            _this.items.obtenerDetalles(_this.factura.id).subscribe(function (res) {
                _this.detalles = res;
                _this.calcularTotal();
            });
            var fecha = new Date(_this.factura.createdAt);
            _this.fecha = fecha.getDay() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
            console.log(_this.fecha);
        });
    };
    /**
     * The view loaded, let's query our items for the list
     */
    ListMasterPage.prototype.ionViewDidLoad = function () {
    };
    ListMasterPage.prototype.iniciar = function () {
        //this.printer.isAvailable().then(this.onSuccess, this.onError);
        console.log(this.printer.isAvailable());
        // let options: PrintOptions = {
        //      name: 'MyDocument',
        //      duplex: true,
        //      landscape: true,
        //      grayscale: true
        //    };
        // this.printer.print('<h1>hello world</h1>', options).then(this.onSuccess, this.onError);
    };
    ListMasterPage.prototype.borrarDetalle = function (detalle) {
        var _this = this;
        this.items.borrarProductoDetalle(detalle).subscribe(function (data) {
            _this.obtenerDetalles();
        });
    };
    ListMasterPage.prototype.onSuccess = function () {
        // console.log('bien');
    };
    ListMasterPage.prototype.openOther = function () {
        //I called Api using service
        var scope = this;
        setTimeout(function () { scope.print(); }, 1000);
    };
    ListMasterPage.prototype.calcular = function () {
        this.vuelto = (this.recibido - this.total).toFixed(2);
    };
    ListMasterPage.prototype.print = function () {
        var contenido = document.getElementById('boleta').innerHTML;
        var contenidoOriginal = document.body.innerHTML;
        document.body.innerHTML = contenido;
        window.print();
        window.close();
        document.body.innerHTML = contenidoOriginal;
    };
    ListMasterPage.prototype.onError = function () {
        // console.log('mal');
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    ListMasterPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.items.add(item);
            }
        });
        addModal.present();
    };
    ListMasterPage.prototype.crearFactura = function (factura) {
        this.factura = factura;
    };
    ListMasterPage.prototype.cambiarCliente = function () {
        //console.log(this.cliente)
        this.items.modificarCliente(this.cliente, this.factura.id);
    };
    ListMasterPage.prototype.obtenerDetalles = function () {
        var _this = this;
        this.items.obtenerDetalles(this.factura.id).subscribe(function (res) {
            _this.detalles = res;
            _this.calcularTotal();
        });
    };
    ListMasterPage.prototype.calcularTotal = function () {
        var detalle = this.detalles;
        var aux = 0.00;
        for (var index = 0; index < detalle.length; index++) {
            aux += parseFloat(detalle[index].rawtotal);
        }
        this.total = 0.00;
        this.total = aux.toFixed(2);
    };
    ListMasterPage.prototype.saludar = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        var seq = this.items.obtenerProducto(this.form.value);
        seq.subscribe(function (res) {
            if (res.length == 1) {
                switch (res[0].tipo) {
                    case 'unidad':
                        if (res[0].stock >= 1) {
                            _this.items.generarIngreso(_this.factura.id, 1, res[0].id, res[0].precio).subscribe(function (resp) {
                                _this.obtenerDetalles();
                                _this.cbxProducto = '';
                            });
                        }
                        else {
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Error!',
                                subTitle: JSON.stringify('No hay stock : ' + _this.form.value.name),
                                buttons: ['OK']
                            });
                            alert_1.present();
                        }
                        break;
                    case 'granel':
                        var prompt_1 = _this.alertCtrl.create({
                            title: 'Venta en granel - ' + res[0].nombre,
                            message: "Ingrese la cantidad igual o inferior a: " + res[0].stock,
                            inputs: [
                                {
                                    name: 'producto',
                                    placeholder: 'Producto',
                                    type: 'hidden',
                                    value: res[0].id,
                                    disabled: true,
                                },
                                {
                                    name: 'cantidad',
                                    placeholder: 'Cantidad',
                                    type: 'number',
                                    min: 0.1,
                                    max: res[0].stock,
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    handler: function (data) {
                                        // console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Vender',
                                    handler: function (data) {
                                        var precio = data.cantidad * res[0].precio;
                                        _this.items.generarIngreso(_this.factura.id, data.cantidad, res[0].id, res[0].precio).subscribe(function (resp) {
                                            _this.obtenerDetalles();
                                            _this.cbxProducto = '';
                                        });
                                    }
                                }
                            ]
                        });
                        prompt_1.present();
                        break;
                }
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: JSON.stringify('No existe el producto con el código: ' + _this.form.value.name),
                    buttons: ['OK']
                });
                alert_2.present();
            }
        }, function (err) {
            console.error('ERROR', err);
        });
    };
    /**
     * Delete an item from the list of items.
     */
    ListMasterPage.prototype.deleteItem = function (item) {
        this.items.delete(item);
    };
    /**
     * Navigate to the detail page for this item.
     */
    ListMasterPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    ListMasterPage.prototype.comprobante = function () {
        if (this.total == 0) {
            var alert_3 = this.alertCtrl.create({
                title: 'Alerta!',
                subTitle: JSON.stringify('No se puede imprimir un comprobante sin detalle '),
                buttons: ['OK']
            });
            alert_3.present();
        }
        else {
            this.print();
            this.refrescar();
            // this.navCtrl.push(Tab1Root);
            // this.navCtrl.remove
        }
    };
    ListMasterPage.prototype.sincomprobante = function () {
        if (this.total == 0) {
            var alert_4 = this.alertCtrl.create({
                title: 'Alerta!',
                subTitle: JSON.stringify('No se puede imprimir un comprobante sin detalle '),
                buttons: ['OK']
            });
            alert_4.present();
        }
        else {
            this.refrescar();
        }
    };
    ListMasterPage.prototype.cancelar = function () { };
    ListMasterPage.prototype.updateList = function (ev) {
        console.log(ev.target.value);
    };
    ListMasterPage.prototype.buscar = function () {
        var _this = this;
        //  let addModal = this.modalCtrl.create('ItemCreatePage');
        var addModal = this.modalCtrl.create('BuscarproductoPage');
        addModal.onDidDismiss(function (producto) {
            if (producto) {
                switch (producto.tipo) {
                    case 'unidad':
                        var prompt2 = _this.alertCtrl.create({
                            title: producto.nombre,
                            message: "Ingrese la cantidad igual o inferior a: " + producto.stock,
                            inputs: [
                                {
                                    name: 'producto',
                                    placeholder: 'Producto',
                                    type: 'hidden',
                                    value: producto.id,
                                    disabled: true,
                                },
                                {
                                    name: 'cantidad',
                                    placeholder: 'Cantidad',
                                    type: 'number',
                                    min: 0.1,
                                    max: producto.stock,
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    handler: function (data) {
                                        // console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Vender',
                                    handler: function (data) {
                                        alert(JSON.stringify(data));
                                        var precio = data.cantidad * producto.precio;
                                        _this.items.generarIngreso(_this.factura.id, data.cantidad, producto.id, producto.precio).subscribe(function (resp) {
                                            _this.obtenerDetalles();
                                            _this.cbxProducto = '';
                                        });
                                    }
                                }
                            ]
                        });
                        prompt2.present();
                        break;
                    case 'granel':
                        var prompt_2 = _this.alertCtrl.create({
                            title: 'Venta en granel - ' + producto.nombre,
                            message: "Ingrese la cantidad igual o inferior a: " + producto.stock,
                            inputs: [
                                {
                                    name: 'producto',
                                    placeholder: 'Producto',
                                    type: 'hidden',
                                    value: producto.id,
                                    disabled: true,
                                },
                                {
                                    name: 'cantidad',
                                    placeholder: 'Cantidad',
                                    type: 'number',
                                    min: 0.1,
                                    max: producto.stock,
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    handler: function (data) {
                                        // console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Vender',
                                    handler: function (data) {
                                        var precio = data.cantidad * producto.precio;
                                        _this.items.generarIngreso(_this.factura.id, data.cantidad, producto.id, producto.precio).subscribe(function (resp) {
                                            _this.obtenerDetalles();
                                            _this.cbxProducto = '';
                                        });
                                    }
                                }
                            ]
                        });
                        prompt_2.present();
                        break;
                }
            }
        });
        addModal.present();
    };
    ListMasterPage.prototype.cobrar = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Imprimir comprobante?',
            buttons: [
                {
                    text: 'Imprimir comprobante',
                    handler: function () {
                        _this.comprobante();
                    }
                },
                {
                    text: 'Sin comprobante',
                    handler: function () {
                        _this.sincomprobante();
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-master',template:/*ion-inline-start:"C:\Proyectos\inventarioclient\src\pages\list-master\list-master.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Comprobante # {{factura.id}}</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addItem()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n\n\n        <ion-grid>\n\n\n\n\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-12>\n\n                <ion-grid>\n\n\n\n\n\n                  <ion-row>\n\n                    <ion-col col-12>\n\n                      <table style="width: 100%; padding: 10px; border-radius: 25px" border="1">\n\n\n\n                        <tr>\n\n\n\n\n\n                          <td colspan="6" style="padding: 5px; text-align: center">\n\n                            <h1>Total: ${{total}}</h1>\n\n\n\n                          </td>\n\n\n\n                          <td colspan="1" style="padding: 5px; text-align: center">\n\n                            <button ion-button icon-only round (click)="comprobante()">\n\n                              <ion-icon name="ios-print-outline"></ion-icon>\n\n\n\n                            </button>\n\n\n\n                            <button ion-button icon-only round color="secondary" (click)="sincomprobante()">\n\n                              <ion-icon name="ios-remove-circle-outline"></ion-icon>\n\n\n\n                            </button>\n\n                          </td>\n\n\n\n                        </tr>\n\n                        <tr>\n\n                          <td colspan="2">\n\n                            <ion-item>\n\n\n\n                              <ion-select [(ngModel)]="cliente" (ionChange)="cambiarCliente()">\n\n                                <ion-option selected value="1">Venta</ion-option>\n\n                                <ion-option value="2">Consumo interno</ion-option>\n\n                              </ion-select>\n\n                            </ion-item>\n\n                          </td>\n\n                          <td colspan="4">\n\n                            <ion-grid>\n\n                              <ion-row>\n\n                                <ion-col col-11>\n\n                                  <form id="container2" *ngIf="form" [formGroup]="form" (ngSubmit)="saludar()">\n\n                                    <ion-searchbar style="width: 100%" autofocus formControlName="name" placeholder="Ingresar código de barras">\n\n                                    </ion-searchbar>\n\n                                  </form>\n\n\n\n\n\n                                </ion-col>\n\n                                <ion-col col-1>\n\n                                  <button ion-button icon-only round (click)="buscar()">\n\n                                    <ion-icon name="md-search"></ion-icon>\n\n\n\n                                  </button>\n\n\n\n                                </ion-col>\n\n                              </ion-row>\n\n                            </ion-grid>\n\n\n\n                          </td>\n\n                          <td colspan="1" style="max-width: 3cm">\n\n\n\n                            <ion-item>\n\n                              <ion-label>Recibido: $</ion-label>\n\n                              <ion-input large type="number" [(ngModel)]="recibido" (change)="calcular()"></ion-input>\n\n                            </ion-item>\n\n                            <ion-item>\n\n                              <ion-label>Vuelto: $</ion-label>\n\n                              <ion-input type="number" value="0.00" [(ngModel)]="vuelto"></ion-input>\n\n                            </ion-item>\n\n\n\n\n\n\n\n                          </td>\n\n                        </tr>\n\n                        <tr>\n\n                          <th style="padding: 5px; text-align: center">Cantidad</th>\n\n                          <th style="padding: 5px; text-align: center">Código</th>\n\n                          <th style="padding: 5px; text-align: center">Producto</th>\n\n                          <th style="padding: 5px; text-align: center">Unidad</th>\n\n                          <th style="padding: 5px; text-align: center">Unitario</th>\n\n                          <th style="padding: 5px; text-align: center">Total</th>\n\n                          <th style="padding: 5px; text-align: center">Acciones</th>\n\n                        </tr>\n\n                        <tr *ngFor="let detalle of detalles">\n\n                          <td style="padding: 5px; text-align: center">{{detalle.cantidad}}</td>\n\n                          <td style="padding: 5px; text-align: center">{{detalle.rawcodigo}}</td>\n\n                          <td style="padding: 5px; text-align: center">{{detalle.producto}}</td>\n\n                          <td style="padding: 5px; text-align: center">{{detalle.unidad}}</td>\n\n                          <td style="padding: 5px; text-align: center">${{detalle.unitario}}</td>\n\n                          <td style="padding: 5px; text-align: center">${{detalle.total}}</td>\n\n                          <td style="padding: 5px; text-align: center">\n\n\n\n                            <button ion-button small icon-only color="danger" (click)="borrarDetalle(detalle.id)" round>\n\n                              <ion-icon name="md-trash"></ion-icon>\n\n                            </button>\n\n                          </td>\n\n                        </tr>\n\n\n\n\n\n                      </table>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>\n\n              </ion-col>\n\n\n\n\n\n\n\n\n\n\n\n            </ion-row>\n\n\n\n\n\n          </ion-grid>\n\n        </ion-grid>\n\n\n\n\n\n\n\n\n\n\n\n\n\n      </ion-col>\n\n\n\n\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n\n\n  <!-- align to the bottom of the page -->\n\n  <!-- <div style="position: absolute; bottom: 0px; width: 100%">\n\n          <div style="text-align: center">\n\n            <p>Bottom</p>\n\n          </div>\n\n      </div> -->\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n<div style="visibility: hidden" id="boleta" style=" border: 1; font-size: 8; border-color: black">\n\n\n\n\n\n  <h1>COMERCIAL HERAS</h1>\n\n  <h2>Ventas al por mayor y menor</h2>\n\n  <h2>\n\n    <strong>Comprebante:</strong> # {{factura.id}}</h2>\n\n  <h2>Fecha: {{fecha}}</h2>\n\n\n\n\n\n  <hr>\n\n\n\n\n\n\n\n\n\n  <table style="width: 100%">\n\n    <tr>\n\n      <th style="text-align: center; padding: 2px">\n\n        <h1>Cant.</h1>\n\n      </th>\n\n      <th style="text-align: center; padding: 2px">\n\n        <h1>Producto</h1>\n\n      </th>\n\n      <th style="text-align: center; padding: 2px">\n\n        <h1>Unit.</h1>\n\n      </th>\n\n      <th style="text-align: center; padding: 2px">\n\n        <h1>Total</h1>\n\n      </th>\n\n\n\n    </tr>\n\n\n\n    <tr *ngFor="let detalle of detalles">\n\n      <td style="text-align: center; padding: 2px">\n\n        <h2>{{detalle.cantidad}}</h2>\n\n      </td>\n\n      <td style="text-align: left; padding: 2px;">\n\n        <h2>{{detalle.producto}}</h2>\n\n      </td>\n\n      <td style="text-align: center; padding: 2px">\n\n        <h2>${{detalle.unitario}}</h2>\n\n      </td>\n\n      <td style="text-align: center; padding: 2px">\n\n        <h2>${{detalle.total}}</h2>\n\n      </td>\n\n\n\n\n\n    </tr>\n\n\n\n\n\n  </table>\n\n  <hr>\n\n\n\n\n\n  <div style="text-align: right">\n\n    <h1>TOTAL: ${{total}}</h1>\n\n  </div>\n\n  <hr>\n\n  <h2 style="text-align: center">***ES UN PLACER SERVIRLE***</h2>\n\n  <h4 style="text-align: center">Este comprobante no tiene validez tributaria</h4>\n\n\n\n\n\n\n\n</div>\n\n\n\n\n\n<script>\n\n\n\n  function saludar() {\n\n    alert(saludar);\n\n  }\n\n  function PrintElem(elem) {\n\n    var mywindow = window.open(\'\', \'PRINT\', \'height=400,width=600\');\n\n\n\n    mywindow.document.write(\'<html><head><title>\' + document.title + \'</title>\');\n\n    mywindow.document.write(\'</head><body >\');\n\n    mywindow.document.write(\'<h1>\' + document.title + \'</h1>\');\n\n    mywindow.document.write(document.getElementById(elem).innerHTML);\n\n    mywindow.document.write(\'</body></html>\');\n\n\n\n    mywindow.document.close(); // necessary for IE >= 10\n\n    mywindow.focus(); // necessary for IE >= 10*/\n\n\n\n    mywindow.print();\n\n    mywindow.close();\n\n\n\n    return true;\n\n  }\n\n\n\n</script>'/*ion-inline-end:"C:\Proyectos\inventarioclient\src\pages\list-master\list-master.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* Items */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_printer__["a" /* Printer */]])
    ], ListMasterPage);
    return ListMasterPage;
}());

//# sourceMappingURL=list-master.js.map

/***/ })

});
//# sourceMappingURL=10.js.map