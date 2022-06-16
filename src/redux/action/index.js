
//  add the item to cart

 export const addCart = (Product) =>{
    //  console.log(Product)
     return {
         type:"ADDITEM",
         Payload: Product
     }

 }
 //  Delet the item to cart
 export const DelCart = (Product) =>{
    return {
        type:"DELETEM",
        Payload: Product
    }

}