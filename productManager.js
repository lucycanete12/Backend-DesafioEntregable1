class productManager {
    constructor(){
        this.#products=[]
        this.nextId = 1
    }


    getProducts=() => {
        return this.#products
    }
    generateIds = () => {
        const counter = this.products.length
        if(counter === 0){
            return 1
        }
        else {
            return (this.#products[counter -1].id)+1
        }
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.error("Ingrese todos los datos del product")
            return
        }
        else {
            const productfiltrado = this.products.find(element=>element.code === code)
            const id = this.generateIds();
            if (!productfiltrado){
                const newproduct = {
                    id,
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                }
                return this.products.push(newproduct)
            }
            else{
                console.error("El codigo del producto ya existe")
            }
        }
    }

    getProductById = (id) => {
        const productencontrado = this.products.find(element => element.id == id)
        if(!productencontrado) 
        {
            console.error("NOT FOUND")
            return 
        }
        else{
            return productencontrado
        }
    }
}

const productmanager = new productManager();
productmanager.addProduct("product1","description1",14,"url","code1",300)
productmanager.addProduct("product2","description2",15,"url","code2",200)
productmanager.addProduct("product3","description3",20,"url","code3",900)
productmanager.addProduct("product4","description4",26,"url","code4",700)
productmanager.addProduct("product5","description5",19,"url","code5",200)
productmanager.addProduct("product6","description6",30,"url","code6",300) 

console.log(productmanager.getProducts())
console.log(productmanager.getProductById(2))