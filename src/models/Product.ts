export class Product {
    constructor(
        public prd_id: number,
        public title: string,
        public description: string,
        public price: string,
        public company: string,
        public img: string,
        ) 
        {
        this.prd_id = prd_id
        this.description = description
        this.title = title
        this.company = company
        this.price = price
        this.img = img
    }
}