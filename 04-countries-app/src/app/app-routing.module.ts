import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ByCapitalComponent } from "./country/pages/by-capital/by-capital.component";
import { ByCountryComponent } from "./country/pages/by-country/by-country.component";
import { ByRegionComponent } from "./country/pages/by-region/by-region.component";
import { CountryItemComponent } from "./country/pages/country-item/country-item.component";

const routes: Routes = [
    {
        path: "",
        component: ByCountryComponent,
        pathMatch: "full"
    }, {
        path: "region",
        component: ByRegionComponent
    }, {
        path: "capital",
        component: ByCapitalComponent
    }, {	
        path: "pais/:id",
        component: CountryItemComponent
    }, {	
        //Si la ruta esta equivocada, redirige a la ruta por defecto
        path: "**",
        redirectTo: ""
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }