
const getData = async(url)=>{
    try{
        let res = await fetch(url);
        let data = res.json();
        console.log(data);
        appendData(data);
    }
    catch(err){
        console.log("err",err);
    }
}


const appendData = (data,bmain)=>{
    bmain.innerHTML = null;
    data.forEach((ele)=>{
        let div = document.createElement("div");
       
        let img = document.createElement("img");
        img.src = ele.image;

        let Title = document.createElement("h4");
        Title.innerText = ele.title;

        let Detail = document.createElement("p");
        Detail.innerText = ele.detail;

        div.append(img,Title,Detail);
        bmain.append(div);
    })
}
export {getData, appendData}