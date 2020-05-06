$("#driveDown").click(e=>{

 	var link = $("#linkDrive");
 	if(link.val() == null || link.val() == ""){
 		$(".statusMsg").html("Form Kosong!");
 		$(".imgPreview").hide();
 		$("#submitBtn").prop("disabled", true);
 	} if (link.val() != null || link.val() != ""){
 		var validasiID = "https://drive.google.com/uc?export=view&amp;id=";
 		link.attr("disabled", true);
 		$("#submitBtn").prop("disabled", false);
 		$(".statusMsg").html(link.val());
 		var imageID = link.val().substr(33);
 		var webLink = validasiID + imageID;
 		var tmplView = "<img class='imgView' src=" + webLink + ">";
 		$(".imgPreview").show("slow");
 		$(".prev").append(tmplView);
 		$("#driveDown").hide();
 	} if(link.val().length != 66 ){
 		$(".imgPreview").hide("slow");
 		swal("Oops!","Masukan link yang valid!","error");
 		link.attr("disabled", false);
 		$("#driveDown").show();
 		$(".prev").html("");
 		$("#submitBtn").prop("disabled", true);
 	}
 });


$("#submitBtn").click(e=>{
	e.preventDefault();
	var d = new Date();
	var timee = d.toLocaleString();
	var link = $(".imgView").attr("src");
	var product = $("#namaProduk").val();
	var price = $("#hargaProduk").val();
	var deskripsi = $("#descProduct").val();
	if($("#linkDrive").val() == "" || $("#linkDrive").val() == null && product == "" || product == "" && price == "" || deskripsi == ""){
		swal("Warning!","Form wajib diisi semua!","warning");
		$("#submitBtn").prop("disabled", true);
	} else if($("#linkDrive").val().length == 66) {
		$("#submitBtn").prop("disabled", false);
	axios.post('https://sheetdb.io/api/v1/g72p1gt6kj7pa',{

        "data": {
        	"Timestamp":timee,
        	"Gambar":link,
        	"Nama": product,
        	"Harga": price,
        	"Deskripsi":deskripsi,
        	"Stock":"",
        	"Tokopedia":"",
        	"Bukalapak":"",
        	"Shopee":""
        	}

    }).then( response => {
        console.log(response.data);
        swal("Berhasil!","Ok berhasil!","success");

        setTimeout( wait => {
        	location.reload();
        }, 5000);

    });

	}

});
    
