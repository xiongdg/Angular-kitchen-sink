System.register(["@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var Todos;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Todos = (function () {
                function Todos() {
                }
                Todos = __decorate([
                    core_1.Component({
                        selector: 'Todos',
                        template: "\n        <br/>\n        <br/>\n        <br/>\n        <br/>\n        <Sliderpanel>\n            <div class=\"campaignSlider noScroll\">\n              <Todo1 class=\"page center todo1 selected\">\n                <div class=\"yScroll\">\n                  <hr/>\n                  <h3>To do sample application with remote server save</h3>\n                  <h5>uses your ip address as unique token and keeps data on server for 2 days</h5>\n                  <hr/>\n                  <todo-list>\n                  </todo-list>\n                </div>\n              </Todo1>\n              <Todo2 class=\"page right todo2\">\n                <hr/>\n                <h3>To do remote server statistics</h3>\n                <h5>display your total CRUD operations to remote node server</h5>\n                <hr/>\n              </Todo2>\n            </div>\n          </Sliderpanel>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Todos);
                return Todos;
            }());
            exports_1("Todos", Todos);
        }
    }
});
