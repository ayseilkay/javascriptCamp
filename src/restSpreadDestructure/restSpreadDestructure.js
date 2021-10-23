/** var, let, const  -->var keywordunu pure javascriptte kullanıyoruz, let esmascript ile birlikte gelmiştir.Bundan sonra let kullanıcaz.Javascript file based bazlı bir  programlama dilidir.Dosyanız yukardan asgıya taranır. */


// let sayi1=10;
//  sayi1="ayseilkay"
//  let student={
//      id:1,name:"ayse"
//  }
// console.log(student)

// function save(ogrenci) {
//     console.log(ogrenci)
// }
// save(student)
// function save(ogrenci,puan=100) {
//     console.log(ogrenci.name + ":" + puan)
// }
// save(student,58) /**puanı göndermezsen default olarak 100 ü alır. gönderirsen 58 'i alır. */
// function save(puan=100,ogrenci) {
//         console.log(ogrenci.name + ":" + puan)
//     }
//     save(undefined,student) 

    // let student =["Ayse İlkay","Ali Birinci","İkra","Abdullah Tunahan"]
    // console.log(student)
    // let students2=[student,{id:1,name:"ayse"},"İzmir",{city:"İstanbul"}]
    // console.log(students2)

    /**rest ---> geriye kalan parametreler demektir.(...rest) ..>rest parammeter ismni veriyoruz.*/
    /** ...products bir arraydir aslında */
    let showProducts= function(id,...products) {
        console.log(id)
        console.log(products)
    }
    // console.log(typeof showProducts) /**function */

    // showProducts(1,"ayse","ilkay","abdullah","a","b","c")

    /******************************************** */
    //spread kelime anlamı ayrıstırmak demektir.Bir arrayi parametre gibi virgul ile ayırmaya yarıyor.
    let points=[1,2,3,4,56,67]
    console.log(Math.max(...points))
    console.log(..."ABC","D",..."EFG","H")


    //DESTRUCTURING
// Elinizindeki arrayin değerlerini değişkenlere atamak demektir.

let populations=[10000,20000,3000,[40000,100000]]// her değeri bir degiskene atamak istiyorum.

let [small,medium,high,[veryHigh,maximum]]=populations
console.log(veryHigh)



function someFunction([small1],number) {/**bana bir array gelicek.arraydeki gelen ilk degeri bir degiskene atayacayım. */
    console.log(small1)
}
someFunction(populations)

// *******************************************************************

let category={id:1,name:"icecek"}

console.log(category.id)
console.log(category["name"])

let{id,name}=category
console.log(id)

// *********************************************************************