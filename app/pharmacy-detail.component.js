"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var pharmacy_1 = require('./pharmacy');
var pharmacies_service_1 = require('./pharmacies.service');
var PharmacyDetailComponent = (function () {
    function PharmacyDetailComponent(pharmaciesService, route, location) {
        this.pharmaciesService = pharmaciesService;
        this.route = route;
        this.location = location;
    }
    PharmacyDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.pharmaciesService.getPharmacy(id)
                .then(function (pharmacy) { return _this.pharmacy = pharmacy; });
        });
    };
    PharmacyDetailComponent.prototype.save = function () {
        var _this = this;
        this.pharmaciesService.update(this.pharmacy)
            .then(function () { return _this.goBack(); });
    };
    PharmacyDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', pharmacy_1.Pharmacy)
    ], PharmacyDetailComponent.prototype, "pharmacy", void 0);
    PharmacyDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-pharmacy-detail',
            templateUrl: 'pharmacy-detail.component.html',
            styleUrls: ['pharmacy-detail.component.css']
        }), 
        __metadata('design:paramtypes', [pharmacies_service_1.PharmaciesService, router_1.ActivatedRoute, common_1.Location])
    ], PharmacyDetailComponent);
    return PharmacyDetailComponent;
}());
exports.PharmacyDetailComponent = PharmacyDetailComponent;
//# sourceMappingURL=pharmacy-detail.component.js.map