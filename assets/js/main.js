$(document).ready(function () {

    function sweetAlert(icon,title,text) {
        Swal.fire({
            icon: icon,
            title: title,
            text: text,
          })
      }
    
    $("#firstSelect").prop("disabled",true);
    $("#firstSelect2").prop("disabled",true);
    $("#sonuc").css("display", "none");
    
    var data1="";
    var data2="";
    var select ="";

    $("#select").click(function (e) { 
        e.preventDefault();
        
        
        select = $("#select").val();

        if(select=="1"){
 
            $("#car").css("display", "unset");
            $("#motobike").css("display", "none");
        }
        else if(select=="2")
        {
  
            $("#car").css("display", "none");
            $("#motobike").css("display", "unset");
        }
        else if(select=="0")
        {
            console.log("Boş");
        }
    });
    
    
    
   

    function hesapla(data1,data2){
        var kmBasiUcret = data2 / data1;
        $("#sonuc").css("display", "block");
        $(".gidilenYol").text(data1+" KM Yol gidildi.");
        $(".kmUcreti").text("KM Başı Ödenen Ücret: "+kmBasiUcret+" TL");

        
   }

    $("#send").click(function (e) { 
        data1 = $("#data1").val();
        data2 = $("#data2").val();
        e.preventDefault();
        select = $("#select").val();
        

        if(select=="1"){
            sweetAlert("success","Başarılı","Hesaplama Yapılmıştır...")
            $(".whatSelected").text("Araç Tipi: Araba");
            hesapla(data1,data2);
        }
        else if(select=="2")
        {
            sweetAlert("success","Başarılı","Hesaplama Yapılmıştır...")
            $(".whatSelected").text("Araç Tipi: Motosiklet");
            hesapla(data1,data2);
        }
        else
        {
            sweetAlert("error","Hata","Lütfen Araç Tipi Seçiniz!...")
        }
    });
    
});