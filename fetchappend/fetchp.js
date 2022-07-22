
const getData = async(url)=>{
    try{
        let res = await fetch(url);
        let data =await  res.json();
        let Data=data.BrowswAndShop 
        if(!Data){
            Data = data.Trendinspire
        }
        console.log(Data);
         return Data;
    }
    catch(err){
        console.log("err",err);
    }
}


const appendData = (Data,bmain)=>{
    bmain.innerHTML = null;
    Data.forEach((ele)=>{
        let div = document.createElement("div");
       
        let img = document.createElement("img");
        img.src = ele.image;

        let Title = document.createElement("p");
        Title.innerText = ele.title;
        Title.setAttribute('class','productTitle')

        let Detail = document.createElement("p");
        Detail.innerText = ele.detail;
        Detail.setAttribute("class",'productDetail')

        let shopbtn = document.createElement('button');
        shopbtn.innerHTML = `Shop Now   <i class="fa-solid fa-angle-right"></i>`
        shopbtn.setAttribute("id",'shopBtn')

        div.append(img,Title,Detail,shopbtn);
        bmain.append(div);
    })
}

const appendTrending = (Data,trending)=>{
    trending.innerHTML = null;
    Data.forEach((ele)=>{
        let div = document.createElement("div");
       
        let img = document.createElement("img");
        img.src = ele.image;

        let Title = document.createElement("p");
        Title.innerText = ele.title;
        Title.setAttribute('class','productTitle')

        let Detail = document.createElement("p");
        Detail.innerText = ele.detail;
        Detail.setAttribute("class",'productDetail')

        let shopbtn = document.createElement('button');
        shopbtn.innerHTML = `Shop Now   <i class="fa-solid fa-angle-right"></i>`
        shopbtn.setAttribute("id",'shopBtn')

        div.append(img,Title,Detail,shopbtn);
        trending.append(div);
    })
}
export {getData, appendData, appendTrending}