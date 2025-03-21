export class custObservable{
    subscribers = []
    constructor(sub:any){
        sub(this)
    }
    subscribe(method){
        this.subscribers.push(method)
    }
}