var Item = require('../model/item.js');
var mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/gun-inventory');

var guns =[ 
    new Item({
    brand: "Glock",
    model: "glock 43",
    cartridge: "9mm",
    imageURL: "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/1/_/1_5_110.jpg",
    price: 599,
    featured: true

}),
new Item({
    brand: "Glock",
    model: "glock 19",
    cartridge: "9mm",
    imageURL: "https://cdn11.bigcommerce.com/s-7c2jlxhfym/images/stencil/1280x1280/products/13935/35625/Glock-19-Gen5-Law-Enforcement-Pricing-PA195S202-764503037245_image1__91386.1584562211__05730.1584721088.jpg?c=2",
    price: 569,
    featured: true

}),

 new Item({
    brand: "FN",
    model: "FN 509 Tactical",
    cartridge: "9mm",
    imageURL: "https://palmettostatearmory.com/media/catalog/product/f/n/fn_509_tactical_rotators_3-24_round.jpg",
    price: 869,
    featured: true

}),

new Item({
    brand: "Sig Sauer",
    model: "p320",
    cartridge: "9mm",
    imageURL: "https://cdn11.bigcommerce.com/s-7c2jlxhfym/images/stencil/1280x1280/products/12759/35520/sig-sauer-l320f-45-bss-p320-full-size-45-acp-handgun-with-night-sights__32962.1572885207__98161.1581703893.jpg?c=2",
    price: 669,
    featured: true

}),


new Item({
    brand: "Benelli",
    model: "M4 Tactical Shotgun",
    cartridge: "12gauge",
    imageURL: "https://cdn11.bigcommerce.com/s-9j9zreeu/images/stencil/1280x1280/products/62694/193478/41RuB85rzFL._AC__-_2020-02-07T154721.968__88066.1581112046.jpg?c=2?imbypass=on",
    price: 1669,
    featured: false

}),

new Item({
    brand: "Remington",
    model: "Versa Max Sportsman",
    cartridge: "12guage",
    imageURL: "https://www.ganderoutdoors.com/dw/image/v2/BCJK_PRD/on/demandware.static/-/Sites-global-master-catalog/default/dwd7825283/images/large/210931_2.jpg?sw=1350&sh=1000&sm=fit",
    price: 1669,
    featured: false

}),


    new Item({
    brand: "Beretta",
    model: "a300",
    cartridge: "12guage",
    imageURL: "https://www.sportsmans.com/medias/beretta-a300-semi-auto-shotgun-1298354-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDcxNzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDkxL2hkMC84OTU0MjA3MzM4NTI2LmpwZ3xhY2E3YmRkMzY5YzI5ODk1MDlmNzJkNTE4OTQ1NTE2ZGIwOGExYjVlZjgwZDc0Y2I2MjNiNzVkNmZiMjNkMWQz",
    price: 1369,
    featured: false

}),






    new Item({
    brand: "Remington",
    model: "Model 870 Express",
    cartridge: "12gauge",
    imageURL: "https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw85009c54/large/10-0110993.jpg?sw=800&sh=800",
    price: 569,
    featured: false

}),





    new Item({
    brand: "Ruger",
    model: "AR-556",
    cartridge: ".223/5.56 NATO",
    imageURL: "https://www.ruger.com/productImages/8500/detail/1.jpg",
    price: 669,
    featured: false

}),






    new Item({
    brand: "Smith & Wesson",
    model: "M&P 15 Sport",
    cartridge: ".223/5.56 NATO",
    imageURL: "https://snwcdnprod.azureedge.net/sites/default/files/styles/product_main/public/firearms/images/10202_01_lg_0.jpg?itok=lPA1ZDlv",
    price: 769,
    featured: false

}),






    new Item({
    brand: "Barrett",
    model: "M82A1",
    cartridge: ".50 BMG",
    imageURL: "https://modernwarriors.com/wp-content/uploads/2014/12/Barrett82A1-1a.jpg",
    price: 2669,
    featured: false

}),




    new Item({
    brand: "Heckler & Koch",
    model: "MR556-A1",
    cartridge: "5.56 NATO",
    imageURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhAQExMVFRIWFxIWGBIYFhcVFhgYFxcWFxYYGBcYICkgGh8lGxUVITMhJSo3Li4uGB8zODMsOCguLysBCgoKDg0OGhAQGjIlHyUvLy0tLS01LS0tLy8tLS0tLS0tLS8tKy0tLS0tLSstKy0tLS0tLS0tKy01LSstLS0tLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQEDCAL/xABKEAABAwICBgMLCQYDCQAAAAABAAIDBBESIQUGEzFBUQcicRQVMlJTYYGRkqHRFiMkQmJyk7HSM0OjssHhCILwFzRUc4OUorPx/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EABwRAQEAAwEBAQEAAAAAAAAAAAABAhESITFBE//aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEXDnAZnIIK21L13nqNJT00l9i8zbJpa0GPZOORIFzkCDfiFZS8212npxVyVUZjZLtXubJGxoksSQQXW64I4O5Derg1Z1+ppKaB9TUQRTuxB7MQaAWki5BPVBABzO82QTJFHm68aNO6sh3E2xi+XAjgfNvK+jrro/P6XFkAfCHHgOZHEcOKzcbqt+i0J1z0f/AMXDvA8MW7b8vPuXA100fl9LhzxDwxw58r8OfBNw1W/RRx2vWjhb6XFnnv3fe8X0rh2vujBf6bBkAbbRt8+A5kcRw4puGqkiKOHXzRl7d20+8N/aNt23v4P2ty4GvujMvpsGd/3jcrc+V+HPgm4aqSIo18vtGb+7YN2Lwxfst432d65OvujM/pkGWH64N78uduPLim4aqSIo38vNGbu7YN+H9o23bfxftblwNftGZfTIc8R8MZW58r8OfBNw1UlRRk9IGi7X7sh3A+GL58Lc/NvXEvSDosYvpsBtYZPBvccLbxzI3JuGqiPRtrnU1WkJ6WUlzQyZxJxb45Gtu2+QHWOQ83JWqvNdNp2oikM8bo2PBJbsw1riCb2fbOQcSHX3blf2qmkn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AJROV5TbJdMB2mKAXvWMNt4DQbety6H6y6NAv3Q8/dY34lVRhOOYc2yH15j811QNyd2O/L+yj+cV3XqDoyr2SwufC2QwPc5zZn2F3CzHNDd/1eXBTRVr0AVOLRZZxjnmZ6wyQfzqylcmk27ERFrBERAREQEREBERAREQEREBERAREQEREBabWjVqCvjZFPiGB4kY9hDXNcARcXBG4kWI4rcogilBqHTxSRyGSZ4jcHNjc5uDENxsAOQ7eKlaIskkNiIi0EREBarWnSXc1LPMDZwbZv33dVnvIPoW1UT6Q9CVdXDEymMXVcXuZIXNx5Wbhc0G1ru3i27kspFPhd9FAZHsjb4TnNaO1xDR7yuvSeja+mLu6KGQRg/tGHaNtzLmXHrIW86MpIZ6yB2NthicGki+INOEEcwc/QFx5v66bXPR07Y444m+CxrWjsaAB+S7kRd3MVcdPFDtNHNf5OZh9tr4vzkarHWg190cajR1bEBd2yc9g5vjtIz/AMmNQeVA751p4OA9Rbb8wsenyJB4EX9eE/mu2pFsBH1SW+gG7PddfMwtIeTs/aHx/JBcn+HKv/3+lJzvFKB7TH/kxXWvMPRHpfubS1MSbMnDoHf9Sxb/ABWsHpXp5AREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAWC7Q1MZW1Bgi27b4Ztm3aC4sbOtfcT61nIgIiICFEQeTtc9Ddy1dXSgZMecA+yLOj/hPiHbdaF4xMa7xeqfzH+vOrn6fNClr6evaMiNm8/aYHPZ62GX2GhV7qxqTW1rnCCEmB3795wRDiCHHN1j4oOYQRzG4YZGkhzSHhw3g3uCOxwXrXVHTba2jpqttvnGNLgM8LxlI30ODh6FBtVehilgDX1bzUv37MXjhG7LCDifu4m3mVl0lLHExscbGsY0WDGtDWgeYDIIO5ERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREGPXUMUzdnLGyRl2uwvaHNu03abHkQsgBEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q==",
    price: 2599,
    featured: false

})

];



var done = 0;
for (var i = 0; i < guns.length; i++){
    guns[i].save(function(err, result){
        done++;
        if(done === guns.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}