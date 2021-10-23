let Products=[
    {id:1,name:"telephone",unitPrice:19000},
    {id:2,name:"laptop",unitPrice:55000},
    {id:3,name:"machine",unitPrice:40000},
    {id:4,name:"macbook",unitPrice:15000},
    {id:5,name:"iphone telephone",unitPrice:30000},
]

// map arrayi gexiyor. o an gezdigi elemana product diyor.her elemanı için gezdginde console.log yazdır diyoruz.
console.log("<ul>")
Products.map(product=>console.log(`<li>${product.name}</li>`))
console.log("</ul>")

// elimizdeki araryi filtreleyip yeni bir array olusturur.
let filteredProducts = Products.filter(product=>product.unitPrice>20000)
console.log(filteredProducts)
//reduce ; 0 baslangıc noktası demektir.
let cartTotal= Products.reduce((acc,product) => acc + product.unitPrice,0)
console.log(cartTotal)

let cartTotal2= Products
                .filter(p=>p.unitPrice>19000)
                .map(p=>{
                    p.unitPrice=p.unitPrice*1.18
                    return p
                })
                .reduce((acc,p)=> acc+p.unitPrice,0)

console.log(cartTotal2)