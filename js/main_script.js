
//Validasi input kosong
$.fn.validateEmpty = function () {
    var form = this;

    form.on('submit', function (event) {
        event.preventDefault();
        var inputan = form.find("input,select");
        // console.log(inputan);

        inputan.each(function(index, el) {
            if ($(el).val() == "") {
                alert('Anda harus mengisi data dengan lengkap !');
                return false;
            }
            else{
                form.off('submit').trigger('submit');
            }
        });
    });
}

//Menampilkan preview dan info gambar
$.fn.uploadImage = function () { //extending jquery
	this.change(function(event) {
    	if(this.files.length > 0){
    		console.log(this.files[0]);
 			var name = this.files[0].name;
 			var size = this.files[0].size;

 			var ukuran = "";
 			if (size >= 1000000 ) { //MB
 				size = Math.ceil(size/1000000); 
 				ukuran = size + "MB"; 
 			} 
 			else if (size >= 1000) { //KB
 				size = Math.ceil(size/1000);
 				ukuran = size + "KB";
 			}
 			else if(size < 1000){
 				ukuran = size + "Byte";
 			}
 			
 			$("#file_info").html(`
 				<p>Nama File : `+name+`</p>
 				<p>Ukuran File : `+ukuran+`</p>
 				`
 			);
    		
    		if (this.files && this.files[0]) {
    		  var reader = new FileReader();

    		  reader.onload = function(e) {
    		    $('#preview').show();
    		    $('#preview img').attr('src', e.target.result);
    		  }

    		  reader.readAsDataURL(this.files[0]);
    		}
    	}
	});
}