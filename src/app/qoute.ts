export class Qoute {
    
    showDescription:boolean

    constructor( public type:string, public name :string ,public description :string ,completeDate:Date ) 
    {
     this.showDescription=false
    }
}

