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
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        template: "\n        \n\t\t<ul class=\"heroes\">\n\t\t\t<li *ngFor=\"let hero of heroes\"\n\t\t\t\t[class.selected]=\"hero === selectedHero\"\n\t\t\t\t(click)=\"onSelect(hero)\">\n\t\t\t\t<span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t<hero-detail [hero]=\"selectedhero\"></hero-detail>\n\t\t",
        styles: ["\n\t\t\t.selected{\n\t\t\t\tbackground-color: red !important;\n\t\t\t\tcolor: white;\n\t\t\t}\n\t\t\t.heroes{\n\t\t\t\tmargin: 0 0 2em 0;\n\t\t\t\tlist-style-type: none;\n\t\t\t\tpadding: 0;\n\t\t\t\twidth: 15em;\n\t\t\t}\n\t\t\t.heroes li {\n\t\t\t\tcursor: pointer;\n\t\t\t\tposition: relative;\n\t\t\t\tleft: 0;\n\t\t\t\tbackground-color:#EEE;\n\t\t\t\tmargin: .5em;\n\t\t\t\tpadding: .3em 0;\n\t\t\t\theight: 1.6em;\n\t\t\t\tborder-radius: 4px;\n\t\t\t}\n\t\t\t.heroes li.selected:hover {\n\t\t\t\tbackground-color: #BBD8DC ! important;\n\t\t\t\tcolor: white;\n\t\t\t}\n\t\t\t.heroes li:hover {\n\t\t\t\tcolor: #607D8B;\n\t\t\t\tbackground-color: #DDD;\n\t\t\t\tleft: .1em;\n\t\t\t}\n\t\t\t.heroes .text {\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -3px;\n\t\t\t}\n\t\t\t.heroes .badge {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfont-size: small;\n\t\t\t\tcolor: white;\n\t\t\t\tpadding: 0.8em 0.7em 0 0.7em;\n\t\t\t\tbackground-color: #607D8B;\n\t\t\t\tline-height: 1em;\n\t\t\t\tposition: relative;\n\t\t\t\tleft: -1px;\n\t\t\t\ttop: -4px;\n\t\t\t\theight: 1.8em;\n\t\t\t\tmargin-right: .8em;\n\t\t\t\tborder-radius: 4px 0 0 4px;\n\t\t\t}\n\t\t"],
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map