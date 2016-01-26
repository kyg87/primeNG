/// <reference path="../../typedefinition/primeui.d.ts" />
System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var InputTextarea;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputTextarea = (function () {
                function InputTextarea(el) {
                    this.el = el;
                    this.initialized = false;
                }
                InputTextarea.prototype.ngOnInit = function () {
                    jQuery(this.el.nativeElement).puiinputtextarea({
                        autoResize: this.autoResize
                    });
                    this.initialized = true;
                };
                InputTextarea.prototype.ngOnChanges = function (changes) {
                    if (this.initialized) {
                        for (var key in changes) {
                            jQuery(this.el.nativeElement).puiinputtextarea('option', key, changes[key].currentValue);
                        }
                    }
                };
                InputTextarea.prototype.ngOnDestroy = function () {
                    jQuery(this.el.nativeElement).puiinputtextarea('destroy');
                    this.initialized = false;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], InputTextarea.prototype, "autoResize", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], InputTextarea.prototype, "disabled", void 0);
                InputTextarea = __decorate([
                    core_1.Directive({
                        selector: '[pInputTextarea]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], InputTextarea);
                return InputTextarea;
            })();
            exports_1("InputTextarea", InputTextarea);
        }
    }
});
//# sourceMappingURL=inputtextarea.js.map