
let datawhatsnew;
let data;
let count1;
dataherko();
dataherko1();
  async function dataherko(){
  try{
    let datas = await fetch('https://ajio-clone-full.herokuapp.com/productApi/women/productjeans');
    let dataheroku = await datas.json();
  
    data = dataheroku;
    //console.log(data);
    count1 = data.length;
    displayProduct(data);
  }
  catch(e){
    console.log(e.message);
  }
}
async function dataherko1(){
  try{
    let datas = await fetch('https://ajio-clone-full.herokuapp.com/productApi/women/productjeans')
    let dataheroku1 = await datas.json();
  
    datawhatsnew = dataheroku1;
    //console.log(data);
    // count1 = data.length;
    // displayProduct(data);
  }
  catch(e){
    console.log(e.message);
  }
  }
var scselect = document.getElementById("scselect");
var scjsgrid1 = document.getElementById("scjsgrid");


try {
    scselect.onchange = () => {
        //console.log("check");
        if (scselect.value === "Relevance") { 
            data = data.sort((a, b) => a.type > b.type ? 1 : b.type > a.type ? -1 : 0);
            scjsgrid1.innerHTML ="";
            displayProduct(data);
           // console.log("ggg")
        }
       else if(scselect.value === "Price(highest first)") {
            data.sort((a, b) => b.price - a.price);
            scjsgrid1.innerHTML = "";
            displayProduct(data);
        }
        else if (scselect.value === "Price(lowest first)") {
            data.sort((a, b) => a.price - b.price);
            scjsgrid1.innerHTML = "";
            displayProduct(data);
        }
        else if (scselect.value === "Discount") {
            data.sort((a, b) => b.discount - a.discount);
            scjsgrid1.innerHTML = "";
            displayProduct(data);
        }
        else if (scselect.value === "What's New") { 
            scjsgrid1.innerHTML = "";
            displayProduct(datawhatsnew);
        };

    };
} catch (err) {
    console.log("errorfound:", err);
};

function displayProduct(data) {
  
  let count12 = document.getElementById("count1");
  count12.innerText = count1 + "  Items Found";
    data.forEach((data1) => {

        let div1 = document.createElement("div");
        
        let mainDiv = document.createElement("div");

        var img1 = document.createElement("img");
        img1.setAttribute("id", "img1grid5");
        img1.src = data1.imgsrc;
        img1.style.width = "303px"
        
        let quickView = document.createElement("div");
        quickView.setAttribute("id", "scquickView");
        quickView.innerText = "QUICKVIEW";
        
        let imgandquick = document.createElement("div");
        imgandquick.append(img1, quickView);

        let brand = document.createElement("div");
        brand.innerText = data1.brand;
        brand.style.color = "#b19975";
        brand.style.fontWeight = "600";
        brand.style.fontSize= "13px";

        let type = document.createElement("div");
        type.innerText = data1.type;
        type.style.fontSize = "13px";
        type.style.overflow = "hidden";

        let divmid = document.createElement("div");


        let price = document.createElement("span");
        price.innerText = "Rs. " + data1.price +"  ";
        price.style.fontSize = "14px"
        price.style.fontWeight = "bold";
        price.style.marginRight = "5px";
        let op = document.createElement("span");
        op.innerText = "Rs. " + data1.op;
        op.style.textDecoration = "line-through";
        op.style.fontSize = "14px";
        op.style.marginRight = "5px";

        let discount = document.createElement("span");
        discount.innerText ="(" + data1.discount + "% off)";
        discount.style.color = "#b19975";
        discount.style.fontSize = "14px";

        divmid.append(price, op, discount);
        divmid.style.display = "flex";
        divmid.style.justifyContent="center"


        var bbsmain = document.createElement("div");
        bbsmain.setAttribute("id","grid5bbsmain")
        bbsmain.style.display = "flex";
        bbsmain.style.justifyContent = "center";
        bbsmain.style.backgroundColor = "#E8F8FF";
        bbsmain.style.width = "303px";
        bbsmain.style.padding = "2.5px 4px"

        let img2 = document.createElement("img");
        img2.src = "/Images/prodimg/pricelogo.svg"
        img2.style.width = "17px";
        img2.style.height = "12px";
        img2.style.marginTop = "5px";
        
        let bbsdiv = document.createElement("div");
        bbsdiv.innerText = data1.bbs;
        bbsdiv.style.fontSize = "13px"
        bbsdiv.style.fontWeight = "bold";
       
        bbsmain.style.width = "303px";

        bbsmain.append(img2, bbsdiv);
       


        div1.append(brand, type, divmid, bbsmain);
        div1.style.textAlign = "center";

        mainDiv.style.width = "303px";
        mainDiv.append(imgandquick, div1);

        let prodData = {
           data1,
        }
        mainDiv.onclick = () =>{

            showSingleProd(prodData);
            
        }
        const hoveringfunc = () => {
            quickView.style.display = "block";
        }
        const hoveringfunc1 = () => {
            quickView.style.display = "none";
        }
        mainDiv.addEventListener("mouseenter", hoveringfunc);
        
        mainDiv.addEventListener("mouseleave",hoveringfunc1);
        scjsgrid1.style.gridTemplateColumns = "auto auto auto";
        scjsgrid1.append(mainDiv);

    });
}
let grid3 = () => {
    //console.log("grid3 check");
    scjsgrid1.innerHTML = "";
    scjsgrid1.style.gridTemplateColumns = "auto auto auto";
    try {
        scselect.onchange = () => {
            //console.log("check");
            if (scselect.value === "Relevance") { 
                data = data.sort((a, b) => a.type > b.type ? 1 : b.type > a.type ? -1 : 0);
                scjsgrid1.innerHTML ="";
                displayProduct(data);
               // console.log("ggg")
            }
           else if(scselect.value === "Price(highest first)") {
                data.sort((a, b) => b.price - a.price);
                scjsgrid1.innerHTML = "";
                displayProduct(data);
            }
            else if (scselect.value === "Price(lowest first)") {
                data.sort((a, b) => a.price - b.price);
                scjsgrid1.innerHTML = "";
                displayProduct(data);
            }
            else if (scselect.value === "Discount") {
                data.sort((a, b) => b.discount - a.discount);
                scjsgrid1.innerHTML = "";
                displayProduct(data);
            }
            else if (scselect.value === "What's New") { 
              scjsgrid1.innerHTML = "";
             // console.log(datawhatsnew);
              displayProduct(datawhatsnew);
            };
    
        };
    } catch (err) {
        console.log("errorfound:", err);
    };
    

    displayProduct(data);

}

let grid5 = () => {
    console.log("grid5 check")
    scjsgrid1.innerHTML = "";
    scjsgrid1.style.display = "grid";
    scjsgrid1.style.gridTemplateColumns = "auto auto auto auto auto";
    scjsgrid1.style.gridGap = "12px";
    
function displayProduct(data){
    
  let count12 = document.getElementById("count1");
  count12.innerText = count1 + "  Items Found";
        data.forEach((data1) => {
    
            let div1 = document.createElement("div");
            
            let mainDiv = document.createElement("div");
    
            var img1 = document.createElement("img");
            img1.setAttribute("id", "img1grid5");
            img1.src = data1.imgsrc;
            img1.style.width = "174px";
            
            let quickView = document.createElement("div");
            quickView.setAttribute("id", "scquickView");
            quickView.innerText = "QUICKVIEW";
            
            let imgandquick = document.createElement("div");
            imgandquick.append(img1, quickView);
    
            let brand = document.createElement("div");
            brand.innerText = data1.brand;
            brand.style.color = "#b19975";
            brand.style.fontWeight = "600";
            brand.style.fontSize= "13px";
    
            let type = document.createElement("div");
            type.innerText = data1.type;
            type.style.fontSize = "12px";
            type.style.overflow = "hidden";
    
            let divmid = document.createElement("div");
    
    
            let price = document.createElement("span");
            price.innerText = "Rs. " + data1.price +"  ";
            price.style.fontSize = "12px"
            price.style.fontWeight = "bold";
            price.style.marginRight = "5px";
            let op = document.createElement("span");
            op.innerText = "Rs. " + data1.op;
            op.style.textDecoration = "line-through";
            op.style.fontSize = "12px";
            op.style.marginRight = "5px";
    
            let discount = document.createElement("span");
            discount.innerText ="(" + data1.discount + "% off)";
            discount.style.color = "#b19975";
            discount.style.fontSize = "12px";
    
            divmid.append(price, op, discount);
            divmid.style.display = "flex";
            divmid.style.justifyContent="center"
    
    
            var bbsmain = document.createElement("div");
            bbsmain.setAttribute("id","grid5bbsmain")
            bbsmain.style.display = "flex";
            bbsmain.style.justifyContent = "center";
            bbsmain.style.backgroundColor = "#E8F8FF";
            bbsmain.style.width = "174px";
            bbsmain.style.padding = "2.5px 4px"
    
            let img2 = document.createElement("img");
            img2.src = "/Images/prodimg/pricelogo.svg"
            img2.style.width = "15px";
            img2.style.height = "9px";
            img2.style.marginTop = "5px";
    
            let bbsdiv = document.createElement("div");
            bbsdiv.innerText = data1.bbs;
            bbsdiv.style.fontSize = "11px"
            bbsdiv.style.fontWeight = "bold";

            bbsmain.style.width = "174px";
           
            bbsmain.append(img2, bbsdiv);
           
    
    
            div1.append(brand, type, divmid, bbsmain);
            div1.style.textAlign = "center";
    
            mainDiv.append(imgandquick, div1);
    
            let prodData = {
               data1,
            }
            mainDiv.onclick = () =>{
    
                showSingleProd(prodData);
                
            }
    
            const hoveringfunc = () => {
                quickView.style.display = "block";
            }
            const hoveringfunc1 = () => {
                quickView.style.display = "none";
            }
            mainDiv.addEventListener("mouseenter", hoveringfunc);
            
            mainDiv.addEventListener("mouseleave",hoveringfunc1);
    
            scjsgrid1.append(mainDiv);
          
        });
    }
    
    displayProduct(data);
    try {
        scselect.onchange = () => {
            //console.log("check");
            if (scselect.value === "Relevance") { 
                data = data.sort((a, b) => a.type > b.type ? 1 : b.type > a.type ? -1 : 0);
                scjsgrid1.innerHTML ="";
                displayProduct(data);
               // console.log("ggg")
            }
           else if(scselect.value === "Price(highest first)") {
                data.sort((a, b) => b.price - a.price);
                scjsgrid1.innerHTML = "";
                displayProduct(data);
            }
            else if (scselect.value === "Price(lowest first)") {
                data.sort((a, b) => a.price - b.price);
                scjsgrid1.innerHTML = "";
                displayProduct(data);
            }
            else if (scselect.value === "Discount") {
                data.sort((a, b) => b.discount - a.discount);
                scjsgrid1.innerHTML = "";
                displayProduct(data);
            }
            else if (scselect.value === "What's New") { 
                scjsgrid1.innerHTML = "";
                displayProduct(datawhatsnew);
            };
    
        };
    } catch (err) {
        console.log("errorfound:", err);
    };

}
//main working grid  5 over

//displayProduct(data);


   // refine by functionality

       var screfineid = document.getElementById("screfineid");
       var screfinelistmain1 = document.getElementById("screfinelistmain1");
       var count = 0;
  
   
var refine = () => {
    
    //console.log("refine");
    var div = document.createElement("div");

    div.innerHTML = `<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Gender</div>
</div>
<div id="scgendercat">

<input type="checkbox" name="Men" checked  id="">
<label for="">Men(40)</label>
</div>
<!-- gender finish -->
<div class="screfineline"></div>


<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Category</div>
</div>
<div id="sccatcat">

    <input type="checkbox" name="Jackets&Coats" checked  id="">
    <label for="">Jackets&Coats(20)</label>
    </div>
    <!-- category finish -->
<div class="screfineline"></div>



<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Price</div>
</div>
<div id="scpricecat">

  

    <div>
    <input type="checkbox" name="Price501"onclick="under1000(data)" id="under1000">
    <label for="">Rs.0-1000</label>
    </div>

    <div>
    <input type="checkbox" name="Price1001"  onclick="under1000to1500(data)" id="">
    <label for="">Rs.1001-1500</label>
    </div>

    <div>
    <input type="checkbox" name="Price1501"  onclick="under1500to2000(data)" id="">
    <label for="">Rs.1501-2000</label>
    </div>

    <div>
    <input type="checkbox" name="Price2001" onclick="under2000above(data)" id="">
    <label for="">Rs.2000&above</label>
    </div>

    </div>
    <!-- price finish -->
<div class="screfineline"></div>



<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Brands</div>
</div>
<div id="scbrandcat">

    <div>
    <input type="checkbox" name="LEVIS"  onclick="john(data)"  id="">
    <label for="">LEVIS</label>
    </div>

    <div>
    <input type="checkbox" name="Outryt"    onclick="campus(data)" id="">
    <label for="">Outryt</label>
    </div>

    <div>
    <input type="checkbox" name="DNMX"   onclick="us(data)"  id="">
    <label for="">DNMX</label>
    </div>

    <div>
    <input type="checkbox" name="ORCHID BLUES"  onclick="tbase(data)"   id="">
    <label for="">ORCHID BLUES</label>
    </div>

    <div>
    <input type="checkbox" name="DENIZEN WOMENS"   onclick="columbia(data)"    id="">
    <label for="">DENIZEN WOMENS</label>
    </div>

    <div>
    <input type="checkbox" name="Dolce Crudo" onclick="nike(data)" id="">
    <label for="">Dolce Crudo</label>
    </div>

</div>
<!-- brand cat over -->
<div class="screfineline"></div>

<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Discount</div>
</div>

<div id="scdiscountcat">

    <div>
    <input type="checkbox" name="0to20"  onclick="under0to20(data)" id="" >
    <label for="">0-20%</label>
    </div>  
    
    <div>
    <input type="checkbox" name="21to30"   onclick="under20to30(data)" id="">
    <label for="">21-30%</label>
    </div>  

    <div>
    <input type="checkbox" name="31to40"   onclick="under30to40(data)" id="">
    <label for="">31-40%</label>
    </div>     

    <div>
    <input type="checkbox" name="41to50"  onclick="under40to50(data)"  id="">
    <label for="">41-50%</label>
    </div>  

    <div>
    <input type="checkbox" name="51to80"   onclick="under50to80(data)"  id="">
    <label for="">51-80%</label>
    </div>  

</div>
<!-- discount cat over -->
<div class="screfineline"></div>


<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Occasion</div>
</div>
<div id="scoccasioncat">

    <div>
    <input type="checkbox" name="Active" id="">
    <label for="">Active</label>
    </div>

    <div>
    <input type="checkbox" name="Casual" id="">
    <label for="">Casual</label>
    </div>

    <div>
    <input type="checkbox" name="Special Occasion" id="">
    <label for="">Special Occasion</label>
    </div>

    <div>
    <input type="checkbox" name="Universal" id="">
    <label for="">Universal</label>
    </div>   

</div>
<!-- occasion cat over -->

<div class="screfineline"></div>


<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Colors</div>
</div>

<div id="sccolors">

    <div class="fifty" id="fiftybeige"  ></div>
    <div class="fiftycolor">Beige</div>
    
    <div class="fifty" id="fiftyblack"></div>
    <div class="fiftycolor">Black</div>
    
    <div class="fifty" id="fiftyblue" ></div>
    <div class="fiftycolor" >Blue</div>
    
    <div class="fifty" id="fiftybronze"></div>
    <div class="fiftycolor" >Bronze</div>
    
    <div class="fifty"  id="fiftybrown"></div>
    <div class="fiftycolor">Brown</div>
    
    </div>
    <!-- colors cat over -->
<div class="screfineline"></div>


<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Size & Fit</div>
</div>

<div id="scsizefitcat">

    <div>    
    <input type="checkbox" name="XXS" id="">
    <label for="">XXS</label>
    </div>

    <div>
    <input type="checkbox" name="XS" id="">
    <label for="">XS</label>
    </div>
    
    <div>
    <input type="checkbox" name="S" id="">
    <label for="">S</label>
    </div>
    
    <div>
    <input type="checkbox" name="M" id="">
    <label for="">M</label>
    </div>
    
    <div>
    <input type="checkbox" name="L" id="">
    <label for="">L</label>
    </div>
    

</div>
<!-- size cat over -->

<div class="screfineline"></div>



<div class="screfine" id="screfinemorefilters1">

    <p>More Filters<p>
        
    <img
    class="screfineimg"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlFJyXnlww4XPP-vQQ3PNh7_y8LMYuUMXhx7LxZobswW6Cm2GlzebSYWWpMqebE3OPBA&usqp=CAU"
      alt=""
    />
</div>
<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Sleeve</div>
</div>

<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Pattern</div>
</div>

<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Feature</div>
</div>

<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Sport</div>
</div>

<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Character</div>
</div>


<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Collar</div>
</div>

<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Shape</div>
</div>

<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Fabric</div>
</div>
`
    count++;
    if (count % 2 === 0) {
        
        screfinelistmain1.appendChild(div);

    } else if(count % 2 !== 0) {
        
        screfinelistmain1.innerHTML = "";
      
    }
}  
   screfineid.addEventListener("click", refine);
     //sorting display

   //price sort
    //under1000.addEventListener("click", under1000);
async function under1000api(gender,type) {
  try {
    const underapi = await fetch(`http://localhost:2222/filterbyprice/under1000/${gender}/${type}`);

    const dataapiunder1000 = await underapi.json();
    console.log(dataapiunder1000);
  }
  catch (err) {
    console.log(err);
  }
}

let countunder1000 = 0;
   
function under1000(data) {
  under1000api(data[0].gender,data[0].producttype);
     if (countunder1000 % 2 == 0) {
        countunder1000++;
       data.sort((a, b) => a.price - b.price);
       let arr1 = [];
       data.forEach((element) => {
         if (element.price < 1000) {
           arr1.push(element);
         }
       });
       scjsgrid1.innerHTML = "";
       displayProduct(arr1);
     } else {
        countunder1000++;
       scjsgrid1.innerHTML = "";
       displayProduct(datawhatsnew);
     }
    }
    
    //from1001 to 1500

    let countunder1000to1500 = 0;
   let  under1000to1500 = (data) => {
    
     if (countunder1000to1500 % 2 == 0) {
        countunder1000to1500++;
       data.sort((a, b) => a.price - b.price);
       let arr1 = [];
       data.forEach((element) => {
         if (element.price >= 1000 && element.price <=1500) {
            arr1.push(element);
         }
       });

     
       scjsgrid1.innerHTML = "";
       displayProduct(arr1);
     } else {
        countunder1000to1500++;
       scjsgrid1.innerHTML = "";
       displayProduct(datawhatsnew);
     }
    }
    

    let countunder1500to2000 = 0;
    let  under1500to2000= (data) => {
     
      if (countunder1500to2000 % 2 == 0) {
        countunder1500to2000++;
        data.sort((a, b) => a.price - b.price);
        let arr1 = [];
        data.forEach((element) => {
          if (element.price >= 1500 && element.price <=2000) {
             arr1.push(element);
          }
        });
 
      
        scjsgrid1.innerHTML = "";
        displayProduct(arr1);
      } else {
        countunder1500to2000++;
        scjsgrid1.innerHTML = "";
        displayProduct(datawhatsnew);
      }
     }
     

     let countunder2000above = 0;
    let  under2000above= (data) => {
     
      if (countunder2000above % 2 == 0) {
        countunder2000above++;
        data.sort((a, b) => a.price - b.price);
        let arr1 = [];
        data.forEach((element) => {
          if (element.price > 2000) {
             arr1.push(element);
          }
        });
 
      
        scjsgrid1.innerHTML = "";
        displayProduct(arr1);
      } else {
        countunder2000above++;
        scjsgrid1.innerHTML = "";
        displayProduct(datawhatsnew);
      }
     }
   // discount filters
   
   let count0to20 = 0;
   let  under0to20= (data) => {
    
     if (count0to20 % 2 == 0) {
        count0to20++;
       data.sort((a, b) => a.discount - b.discount);
       let arr1 = [];
       data.forEach((element) => {
         if (element.discount >=0  && element.discount <= 20) {
            arr1.push(element);
         }
       });

     
       scjsgrid1.innerHTML = "";
       displayProduct(arr1);
     } else {
        count0to20++;
       scjsgrid1.innerHTML = "";
       displayProduct(datawhatsnew);
     }
}
    
let coun20to30 = 0;
let  under20to30= (data) => {
 
  if (coun20to30 % 2 == 0) {
    coun20to30++;
    data.sort((a, b) => a.discount - b.discount);
    let arr1 = [];
    data.forEach((element) => {
      if (element.discount >20  && element.discount <= 30) {
         arr1.push(element);
      }
    });

  
    scjsgrid1.innerHTML = "";
    displayProduct(arr1);
  } else {
    coun20to30++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
 }


 let coun30to40 = 0;
let  under30to40= (data) => {
 
  if (coun30to40 % 2 == 0) {
    coun30to40++;
    data.sort((a, b) => a.discount - b.discount);
    let arr1 = [];
    data.forEach((element) => {
      if (element.discount >30  && element.discount <= 40) {
         arr1.push(element);
      }
    });
    scjsgrid1.innerHTML = "";
    displayProduct(arr1);
  } else {
    coun30to40++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
}
 
let coun40to50 = 0;
let  under40to50= (data) => {
 
  if (coun40to50 % 2 == 0) {
    coun40to50++;
    data.sort((a, b) => a.discount - b.discount);
    let arr1 = [];
    data.forEach((element) => {
      if (element.discount >40  && element.discount <= 50) {
         arr1.push(element);
      }
    });

  
    scjsgrid1.innerHTML = "";
    displayProduct(arr1);
  } else {
    coun40to50++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
}
 
let coun50to80 = 0;
let  under50to80= (data) => {
 
  if (coun50to80 % 2 == 0) {
    coun50to80++;
    data.sort((a, b) => a.discount - b.discount);
    let arr1 = [];
    data.forEach((element) => {
      if (element.discount >50  && element.discount <= 80) {
         arr1.push(element);
      }
    });
    scjsgrid1.innerHTML = "";
    displayProduct(arr1);
  } else {
    coun50to80++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
 }
//filter by brand
let john1 = 0;
let  john= (data) => {
 
  if (john1 % 2 == 0) {
    john1++;
    let arr1 = [];
    data.forEach((element) => {
      if (element.brand ==="LEVIS") {
         arr1.push(element);
      }
    });
    scjsgrid1.innerHTML = "";
    displayProduct(arr1);
  } else {
    john1++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
}
 
let campus1 = 0;
let  campus= (data) => {
 
  if (campus1 % 2 == 0) {
    campus1++;
    let arr1 = [];
    data.forEach((element) => {
      if (element.brand ==="Outryt") {
         arr1.push(element);
      }
    });
    scjsgrid1.innerHTML = "";
    displayProduct(arr1);
  } else {
    campus1++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
}
 
let us1 = 0;
let  us= (data) => {
 
  if (us1 % 2 == 0) {
    us1++;
    let arr1 = [];
    data.forEach((element) => {
      if (element.brand ==="DNMX" ) {
         arr1.push(element);
      }
    });
    scjsgrid1.innerHTML = "";
    displayProduct(arr1);
  } else {
    us1++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
 }
let tbase1 = 0;
let  tbase= (data) => {
 
  if (tbase1 % 2 == 0) {
    tbase1++;
    let arr1 = [];
    data.forEach((element) => {
      if (element.brand ==="ORCHID BLUES") {
         arr1.push(element);
      }
    });
    scjsgrid1.innerHTML = "";
    displayProduct(arr1);
  } else {
    tbase1++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
}
 
let columbia1 = 0;
let  columbia= (data) => {
 
  if (columbia1 % 2 == 0) {
    columbia1++;
    let arr1 = [];
    data.forEach((element) => {
      if (element.brand ==="DENIZEN WOMENS") {
         arr1.push(element);
      }
    });
    scjsgrid1.innerHTML = "";
    displayProduct(arr1);
  } else {
    columbia1++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
 }

 let nike1 = 0;
let  nike= (data) => {
 
  if (nike1 % 2 == 0) {
    nike1++;
    let arr1 = [];
    data.forEach((element) => {
      if (element.brand ==="Dolce Crudo" ) {
         arr1.push(element);
      }
    });
    scjsgrid1.innerHTML = "";
    displayProduct(arr1);
  } else {
    nike1++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
 }


const showSingleProd = (prodData) => {

    localStorage.setItem("clickeproduct", JSON.stringify(prodData));
    window.location.href = "/EachProduct/one_Product.html"
};
