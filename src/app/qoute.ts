export class Qoute {
    
    showDescription:boolean

    constructor( public id: number, public type :string, public name :string ,public description :string , public completeDate:Date ) 
    {
     this.showDescription=false
    }
}

