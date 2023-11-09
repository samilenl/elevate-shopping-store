import shopData from "../shopData.json"

const getProductByName = (value) => {

    const results = []

    for (const data in shopData){

        const nestedData = (shopData[data])
        
        for (const nestedObject in nestedData){
            
            const products = nestedData[nestedObject]
            
            for (let i=0; i<products.length; i++){
                const itemName = products[i].name.toLowerCase()
                const searchValue = value.toLowerCase()
                if (itemName.includes(searchValue)){
                    results.push(products[i])
                }

            }

        }

    }

    return results
}

export default getProductByName