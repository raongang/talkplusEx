$(document).ready(function(){
	$("#selectAvatar").on('change',function(e){
		 uploadImage(e);
	});
});

function uploadImage(event){
	const file = event.target.files[0];
	
	//체크해야 할 사항. 파일 확장자 , 파일 사이즈.
	convertBase64(file)
	.then((base64)=>{
		//console.log(result);
		$("#avatar").attr("src",base64);
		$("#textArea").html(base64);
	})
	.catch((err)=>{
		alert(err);
	})
}

function convertBase64(file){
	return new Promise((resolve,reject)=>{
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
	    fileReader.onload = () => { resolve(fileReader.result); };
	    fileReader.onerror = (error) => { reject(error); };
	});
}

/*
const avatar = document.getElementById("avatar");
const textArea = document.getElementById("textArea");

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const uploadImage = async (event) => {
  const file = event.target.files[0];
  const base64 = await convertBase64(file);
  avatar.src = base64;
  textArea.innerText = base64;
};
*/

