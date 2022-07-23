const getTrending = async(url)=>{
    try{
        let res = await fetch(url);
        let data =await  res.json();
        let Data=data.Trendinspire
        Data.length=3 
        console.log(Data);
        appendTrending(Data);
    }
    catch(err){
        console.log("err",err);
    }
}
let trending = document.getElementById("trendingInspire");
    const appendTrending = (Data)=>{
        trending.innerHTML = null;
        Data.forEach((ele)=>{
            let div = document.createElement("div");
           
            let img = document.createElement("img");
            img.src = ele.image;
    
            let Title = document.createElement("div");
            Title.innerText = ele.title;
            Title.setAttribute('class','productTitle')
    
            let Detail = document.createElement("div");
            Detail.innerText = ele.detail;
            Detail.setAttribute("class",'productDetail')
    
            let shopbtn = document.createElement('button');
            shopbtn.innerHTML = `Shop Now   <i class="fa-solid fa-angle-right"></i>`
            shopbtn.setAttribute("id",'shopBtn')
    
            div.append(img,Title,Detail,shopbtn);
            trending.append(div);
        })
    }

    const getNextData= async (url)=>{
        try{
            let res = await fetch(url);
            let data =await  res.json();
            let Data=data.Trendinspire
            Data.splice(0,3)
            console.log(Data);
            appendTrending(Data);
        }
        catch(err){
            console.log("err",err);
        }
    }