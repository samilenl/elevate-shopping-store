import shopData from "../shopData.json"

const getProductById = (productId) => {
    for (const data in shopData){

        const nestedData = (shopData[data])
        
        for (const nestedObject in nestedData){
            
            const products = nestedData[nestedObject]
            
            for (let i=0; i<products.length; i++){
                if (products[i].id === productId){
                    return products[i]
                }

            }

        }

    }
}

export default getProductById