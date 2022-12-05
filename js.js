let a= 0;
var menu_bye=0;
var NAME_MENU=null;
var MENU_ID_SEARCH=-1;
function onclick_menu() {
   // If the menudocument.getElementById("navigation_nenu").style.display = "block";
   
    if(a==0){
        a= 1;
        document.getElementById("navigation_nenu").style.display = "block";
       
    }else{
        a= 0; 
        document.getElementById("navigation_nenu").style.display = "none";
    }

  }

  /// danh sach ban
  var arr_table=[];
  function add_table(){
    let link_table = document.getElementById("link_table").value;
    let name_table = document.getElementById("link_table").value;

    arr_table.push({
        link_table,
        name_table,
    })
  }
  var data_arr_table = "";
  for (let i = 0; i < 9; i++) {

    data_arr_table += " <a id='link_table' href='./page4.html'>";
    if(i==0 || i==3|| i==4 || i==6|| i==8){
        data_arr_table +="<div class='item-1'> Bàn"+i+"T1 </div>";
    }else{
        data_arr_table +="<div class='item-1 item-2'>Bàn"+i+"T1 </div>";
    }
    
    data_arr_table += "</a >";
}


try {
    document.getElementById("main_table").innerHTML =  data_arr_table;
  } catch (exceptionVar) {
   
  }

////////////////mảng menu/////////////////////
var arr_menu=[{hinh:'./img/Rectangle25.png' ,ten:'Espresso sữa đá',icon:'./img/icon _plus_.png'},
{hinh:'./img/Rectangle26.png' ,ten:'Espresso đá ',icon:'./img/icon _plus_.png'},
{hinh:'./img/Rectangle27.png' ,ten:'Amerricano',icon:'./img/icon _plus_.png'},
{hinh:'./img/Rectangle28.png' ,ten:'Ice latte - Passio ',icon:'./img/icon _plus_.png'},
{hinh:'./img/Rectangle29.png' ,ten:'Hot americano ',icon:'./img/icon _plus_.png'},
{hinh:'./img/Rectangle30.png' ,ten:'White coffe',icon:'./img/icon _plus_.png'},{hinh:'./img/Rectangle30.png' ,ten:'White coffe',icon:'./img/icon _plus_.png'}


];
/*let hinh ='./img/Rectangle25.png';
let ten ='Espresso sữa đá';
let icon= './img/icon _plus_.png';
arr_menu.push({
  hinh,
  ten,
  icon,
})
*/
// mảng sản phẩm bên menu
var arr_menu_tam="";

for(var i=0; i <arr_menu.length;i++){
      
        arr_menu_tam+= "<div class='row1'>";

        arr_menu_tam +="  <div class='row1_img'>";

        arr_menu_tam+="  <img src="+arr_menu[i].hinh+" alt=''></img>";

        arr_menu_tam +="</div >";


        arr_menu_tam+=" <div class='row1_information'>";

        arr_menu_tam+=" <div class='name'>"+arr_menu[i].ten+" </div>";
        arr_menu_tam+="  <div id='click_choos_page5' onclick='click_choos_page5("+i+")' class='choosw'><img src='"+arr_menu[i].icon+"' alt=''></div>";
        

        arr_menu_tam +="</div >";


        arr_menu_tam +="</div >";
    


      

}
try{
    document.getElementById("main_ds_menu").innerHTML =  arr_menu_tam;
}catch(e){

}



// mang sản phẩm bên tùy chọn
var arr_menu_option_tam="";

for(var i=0; i <arr_menu.length;i++){
      
    arr_menu_option_tam+= "<div class='row1'>";

    arr_menu_option_tam +="  <div class='row1_img'>";

    arr_menu_option_tam+="  <img src="+arr_menu[i].hinh+" alt=''></img>";

    arr_menu_option_tam +="</div >";


    arr_menu_option_tam+=" <div class='row1_information'>";

    arr_menu_option_tam+=" <div class='name'>"+arr_menu[i].ten+" </div>";
        arr_menu_option_tam+="  <div id='delete_product' onclick='delete_product("+i+")' class='choosw'><img src='./img/icon _close outline_.png' alt=''></div>";
        

        arr_menu_option_tam +="</div >";


        arr_menu_option_tam +="</div >";
    


      

}
arr_menu_option_tam+= "<div style = 'background:#ffffff;    position: relative;'; class='row1'>";

    arr_menu_option_tam +="  <div onclick='add_product()' style = 'width:100px;height:100px;position: absolute;top :50%;left :50%;    transform: translate(-50%, -50%); ';  class='row1_img'>";

    arr_menu_option_tam+="  <img  src='./img/icon _plus_.png' alt=''></img>";

    arr_menu_option_tam +="</div >";


   

        arr_menu_option_tam +="</div >";
    


try {
    document.getElementById("main_ds_menu_option").innerHTML =  arr_menu_option_tam;
} catch (error) {
    
}




// hàm tìm kiếm menu
function ock_searh(){
    let a=  document.getElementById("text_searh").value;
    var arr_menu_tam="";

    for(var i=0; i <arr_menu.length;i++){
          
           if(arr_menu[i].ten==a){
            MENU_ID_SEARCH=1;
            arr_menu_tam+= "<div class='row1'>";
    
            arr_menu_tam +="  <div class='row1_img'>";
    
            arr_menu_tam+="  <img src="+arr_menu[i].hinh+" alt=''></img>";
    
            arr_menu_tam +="</div >";
    
    
            arr_menu_tam+=" <div class='row1_information'>";
    
            arr_menu_tam+=" <div class='name'>"+arr_menu[i].ten+" </div>";
            arr_menu_tam+="  <div id='click_choos_page5' onclick='click_choos_page5("+i+")' class='choosw'><img src='"+arr_menu[i].icon+"' alt=''></div>";
            
    
            arr_menu_tam +="</div >";
    
    
            arr_menu_tam +="</div >";
        
           }else{
            MENU_ID_SEARCH=-1
           }
    
    
          
    
    }
   
    
    try {
        document.getElementById("main_ds_menu").innerHTML =  arr_menu_tam;
    } catch (error) {
        
    }
    
}

// hàm tìm kiếm tuy chọn
function ock_searh_tuychon(){
    let a=  document.getElementById("text_searh_tuychon").value;
    var arr_menu_option_tam="";

    for(var i=0; i <arr_menu.length;i++){
          
           if(arr_menu[i].ten==a){
            MENU_ID_SEARCH=1;
            arr_menu_option_tam+= "<div class='row1'>";
    
            arr_menu_option_tam +="  <div class='row1_img'>";
    
            arr_menu_option_tam+="  <img src="+arr_menu[i].hinh+" alt=''></img>";
    
            arr_menu_option_tam +="</div >";
    
    
            arr_menu_option_tam+=" <div class='row1_information'>";
    
            arr_menu_option_tam+=" <div class='name'>"+arr_menu[i].ten+" </div>";
            arr_menu_option_tam+="  <div id='delete_product' onclick='delete_product("+i+")' class='choosw'><img src='./img/icon _close outline_.png' alt=''></div>";
        
            arr_menu_option_tam +="</div >";
    
    
            arr_menu_option_tam +="</div >";
        
           }else{
            MENU_ID_SEARCH=-1
           }
    
    
          
    
    }
   
    
    try {
        document.getElementById("main_ds_menu_option").innerHTML =  arr_menu_option_tam;
    } catch (error) {
        
    }
   
    
}

/// hàm xóa san phẩm bên tùy chọn

function delete_product(i){
   
    
    arr_menu.splice(i, 1);
  
  // mang menu tùy chọn
var arr_menu_option_tam="";

for(var i=0; i <arr_menu.length;i++){
      
    arr_menu_option_tam+= "<div class='row1'>";

    arr_menu_option_tam +="  <div class='row1_img'>";

    arr_menu_option_tam+="  <img src="+arr_menu[i].hinh+" alt=''></img>";

    arr_menu_option_tam +="</div >";


    arr_menu_option_tam+=" <div class='row1_information'>";

    arr_menu_option_tam+=" <div class='name'>"+arr_menu[i].ten+" </div>";
        arr_menu_option_tam+="  <div id='delete_product' onclick='delete_product("+i+")' class='choosw'><img src='./img/icon _close outline_.png' alt=''></div>";
        

        arr_menu_option_tam +="</div >";


        arr_menu_option_tam +="</div >";
    


      

}

document.getElementById("main_ds_menu_option").innerHTML =  arr_menu_option_tam;

    
}


// hàm chuyển qua thanh toán
function click_choos_page5(i){
    NAME_MENU= arr_menu[i].ten
    
  
  // location.href = "./page7.html";
 
  
 
}

function thanhtoan(){
    alert(NAME_MENU)
}

// đăng xuát
function dangxuat(){
    location.href = "./page1.html";
}

function add_product(){
    let hinh ='./img/Rectangle25.png';
    let ten ='Sữa chua';
    let icon= './img/icon _plus_.png';
    arr_menu.push({
      hinh,
      ten,
      icon,
    })
    var arr_menu_option_tam="";

for(var i=0; i <arr_menu.length;i++){
      
    arr_menu_option_tam+= "<div class='row1'>";

    arr_menu_option_tam +="  <div class='row1_img'>";

    arr_menu_option_tam+="  <img src="+arr_menu[i].hinh+" alt=''></img>";

    arr_menu_option_tam +="</div >";


    arr_menu_option_tam+=" <div class='row1_information'>";

    arr_menu_option_tam+=" <div class='name'>"+arr_menu[i].ten+" </div>";
        arr_menu_option_tam+="  <div id='delete_product' onclick='delete_product("+i+")' class='choosw'><img src='./img/icon _close outline_.png' alt=''></div>";
        

        arr_menu_option_tam +="</div >";


        arr_menu_option_tam +="</div >";
    


      

}
arr_menu_option_tam+= "<div style = 'background:#ffffff;    position: relative;'; class='row1'>";

    arr_menu_option_tam +="  <div onclick='add_product()' style = 'width:100px;height:100px;position: absolute;top :50%;left :50%;    transform: translate(-50%, -50%); ';  class='row1_img'>";

    arr_menu_option_tam+="  <img  src='./img/icon _plus_.png' alt=''></img>";

    arr_menu_option_tam +="</div >";


   

        arr_menu_option_tam +="</div >";
    


try {
    document.getElementById("main_ds_menu_option").innerHTML =  arr_menu_option_tam;
} catch (error) {
    
}
}