import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";

const routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'counter',
        loadChildren: () => import('./counter/counter.module').then((m) => m.CounterModule),
    },
    {
        path:'posts',
        loadChildren: () => import('./posts/posts.module').then((m)=>m.PostsModule),
    }
]

@NgModule({
    imports:[ RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}