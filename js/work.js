var urlWeb, email1, timeRequest, sensi=0;
var formdata = {
    input1:"",
    input2:"",
    input3:"",
    input4:""
};
    function submit(){
    
        urlWeb = document.getElementById("urlWebFl").value;
        email1 = document.getElementById("emailRp").value;
        timeRequest = parseFloat(document.getElementById("timeRequest").value);
        sensi = parseFloat(document.getElementById("sensi").value);   
        formInput();
        checkInput();
        viewcode();

}
    function formInput(){
        var formdata = {
            input1: urlWeb,
            input2: email1,
            input3: timeRequest,
            input4: sensi,
        };
        console.log(formdata);
    }

    function checkInput(){
        if (urlWeb==0){
            document.getElementById("errorUrl").style.display="block";
        }
        else console.log(urlWeb);
    }

    
    function viewcode(){
        var url="https://thegioididong.com";//Remember, same domain
        var iframe=document.createElement("iframe");
        iframe.onload=function()
        {
            console.log(iframe.contentWindow.document.body.innerHTML);
        }
        iframe.src=url;
        iframe.style.display="none";
        document.body.appendChild(iframe);
    }


    