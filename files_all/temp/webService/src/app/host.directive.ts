import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[host]',
    standalone:true
})
export class HostDirective{
    constructor(public viewRef:ViewContainerRef){
        
    }
}