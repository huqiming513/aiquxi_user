/**
 * Created by Administrator on 2017/12/19 0019.
 */
// window.base.setLocalStorage("account","");
// window.base.setLocalStorage("token","")
var account = window.base.getLocalStorage("account");
var token = window.base.getLocalStorage("token");
console.log(account);
console.log(token);
if ((account =="")&&(token =="")){
//提示登录
    var wapContent = template("nologin");
    $("#order_process").html(wapContent);
    $("#order_finish").html(wapContent);
}else{
    var addorder={
        url:'api/order/get/',
        type:'get',
        data:"",
        tokenFlag:true,
        sCallback:function(orderres){
            if(orderres.msg==undefined){
                console.log(orderres);
                data=orderres
                tprocess = template("order_process_tem",{"data":data})
                $("#order_process").html(tprocess)
                tfinish = template("order_finish_tem",{"data":data})
                $("#order_finish").html(tfinish)
//                        window.base.deleteLocalStorage("address")
//                        window.base.setLocalStorage("address",res)


            }else {
                console.log(res.msg)
            }
        },
        eCallback:function(e){
            //  showTip(e)
        }
    };
    window.base.getData(addorder);


}

function cancel(id) {
    var addorder={
        url:'api/order/cancel',
        type:'post',
        data:{"id":id},
        tokenFlag:true,
        sCallback:function(res){
            if(res.msg=="ok"){
                console.log(res);
                window.location.reload(true)

            }else {
                myalert(res.msg)
            }
        },
        eCallback:function(e){
            //  showTip(e)
        }
    };
    window.base.getData(addorder);


}
function getnewdata() {

}


window.onscroll = function (){
    var marginBot = 0;
    if (document.documentElement.scrollTop){
        var X=document.documentElement.scrollHeight;
        var Y=document.documentElement.scrollTop+document.body.scrollTop;
        var Z=document.documentElement.clientHeight;
        marginBot=X-Y-Z;
    } else {
        var J=document.body.scrollHeight;
        var I=document.body.scrollTop;
        var K=document.body.clientHeight;
        marginBot=J-I-K;
    }
    if(marginBot<=0) {

    }
}
