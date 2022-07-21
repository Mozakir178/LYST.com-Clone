
const getData = async(url)=>{
    try{
        let res = await fetch(url);
        let data = res.json();
        console.log(data);
    }
    catch(err){
        console.log("err",err);
    }
}

export {getData};
const appendData = (data,bmain)=>{
    bmain.innerHTML = null;
    data.forEach((ele)=>{
        let div = document.createElement("div");
       
        let img = document.createElement("img");
        
    })
}