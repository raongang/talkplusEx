

const APP_ID = '3ee30362-8459-4ff8-b69c-091be04cfd7a';
//const APP_ID='a277db9b-1280-4eda-a84a-333941a8b8c8';
const DEMO_CHANNEL_ID = 'test3';

//참여자 샘플.
const avatarUser = [
	{username : '제임스', image : '/resources/images/user_0.png'},
	{username : '팀', image    : '/resources/images/user_1.png'},
	{username : '에이미', image  : '/resources/images/user_2.png'},
	{username : '엠마', image   : '/resources/images/user_3.png'},
	{username : '니콜', image   : '/resources/images/user_4.png'},
	{username : '대니얼', image  : '/resources/images/user_5.png'},
	{username : '토마스', image  : '/resources/images/user_6.png'},
	{username : '마이클', image  : '/resources/images/user_7.png'},
	{username : '잭슨', image   : '/resources/images/user_8.png'},
	{username : '마일로', image  : '/resources/images/user_9.png'},
	{username : '조이', image   : '/resources/images/user_10.png'},
	{username : '제이미', image  : '/resources/images/user_11.png'},
	{username : '조지', image   : '/resources/images/user_12.png'},
	{username : '케이트', image  : '/resources/images/user_13.png'},
	{username : '아이반', image  : '/resources/images/user_14.png'},
	{username : '칼', image    : '/resources/images/user_15.png'},
	{username : '릴리', image   : '/resources/images/user_16.png'},
	{username : '제시카', image  : '/resources/images/user_17.png'},
	{username : '윌리엄', image  : '/resources/images/user_18.png'},
	{username : '스칼렛', image  : '/resources/images/user_19.png'},

];

let client;
let loginUserInfo = {};




const avatarhtml = function (message) {
	let pick = Math.floor(Math.random() * avatarUser.length);
	if (!message.profileImageUrl){
		message.profileImageUrl = avatarUser[pick].image;
	}
	let template = '';
	if (!message.fileUrl) {
		template = `
		<div class="message-list avatar">
			<div class="avatar-image"><img src="${message.profileImageUrl}" /></div>
			<div class="message-box">
				<div class="avatar-name">${message.username}</div>
				<div class="message-time">
					<div class="message-text">${message.text}</div>
					<div class="timestamps">${new Date(message.createdAt).toLocaleTimeString()}</div>
				</div>
			</div>
		</div>`;
	} else {
		if (message.data.fileTypeLabel === 'video'){
			template =
				`<div class="message-list avatar">
				<div class="avatar-image"><img src="${message.profileImageUrl}" /></div>
				<div class="message-box">
					<div class="avatar-name">${message.username}</div>
					<div class="message-time">
						<div class="file-area video">
							<video width="304" controls>
								<source src="${message.fileUrl}" type="video/mp4">
							</video>
						</div>
						<div class="timestamps">${new Date(message.createdAt).toLocaleTimeString()}</div>
					</div>
				</div>
			</div>`;
		} else if (message.data.fileTypeLabel === 'image') {
			template =
				`<div class="message-list avatar">
				<div class="avatar-image"><img src="${message.profileImageUrl}" /></div>
				<div class="message-box">
					<div class="avatar-name">${message.username}</div>
					<div class="message-time">
						<div class="file-area picture">
							<a href="${message.fileUrl}" target="_blank"><img src="${message.fileUrl}"/></a>
						</div>
						<div class="timestamps">${new Date(message.createdAt).toLocaleTimeString()}</div>
					</div>
				</div>
			</div>`;
		} else {
			template =
			`<div class="message-list avatar">
				<div class="avatar-image"><img src="${message.profileImageUrl}" /></div>
				<div class="message-box">
					<div class="avatar-name">${message.username}</div>
					<div class="message-time">
						<div class="file-area file">
							<a href="${message.fileUrl}" target="_blank">
								<sapn class="fileName">${message.data.fileNameLabel}</sapn>
								<sapn class="fileSize">용량 : ${message.data.fileSizeLabel} Byte</sapn>
								<sapn class="filedown"></sapn>
							</a>
						</div>
						<div class="timestamps">${new Date(message.createdAt).toLocaleTimeString()}</div>
					</div>
				</div>
			</div>`;
		}
	}
	return template;
};



const addMessagehtml = function (message) {
	return `
    <div class="message-list wirter">
		<div class="message-box">
			<div class="message-time">
				<div class="timestamps">${new Date(message.createdAt).toLocaleTimeString()}</div>
				<div class="message-text">${message.text}</div>
			</div>
		</div>
	</div>`;
};

const addFilePicturehtml = function (message) {
	return `
    <div class="message-list wirter">
		<div class="message-box">
			<div class="message-time">
				<div class="timestamps">${new Date(message.createdAt).toLocaleTimeString()}</div>
				<div class="file-area picture">
					<a href="${message.fileUrl}" target="_blank"><img src="${message.fileUrl}" /></a>
				</div>
			</div>
		</div>
	</div>`;
};

const addFileVideohtml = function (message) {
	return `
    <div class="message-list wirter">
		<div class="message-box">
			<div class="message-time">
				<div class="file-area video">
					<div class="timestamps">${new Date(message.createdAt).toLocaleTimeString()}</div>
					<video width="304" controls>
						<source src="${message.fileUrl}" type="video/mp4">
					</video>
				</div>
			</div>
		</div>
	</div>`;
};

const addFilehtml = function (message) {
	return `
    <div class="message-list wirter">
		<div class="message-box">
			<div class="message-time">
				<div class="timestamps">${new Date(message.createdAt).toLocaleTimeString()}</div>
				<div class="file-area file">
					<a href="${message.fileUrl}" target="_blank">
						<sapn class="fileName">${message.data.fileNameLabel}</sapn>
						<sapn class="fileSize">용량 : ${message.data.fileSizeLabel} Byte</sapn>
						<sapn class="filedown"></sapn>
					</a>
				</div>
			</div>
		</div>
	</div>`;
};


$(document).ready(function () {
	//$('.chat-title').text(DEMO_CHANNEL_ID);
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth() + 1;
	const date = today.getDate();
	const dateText = `${year}년 ${month >= 10 ? month : '0' + month}월 ${date >= 10 ? date : '0' + date}일`;
	$('.chat-area .date').text(dateText);

	client = new TalkPlus.Client({appId: APP_ID});

	client.on('event', function (payload) {
		if (payload.type === 'message') {
			addMessage(payload.message);
		}
	});
	setupUsernameInputEventListener();
	sendMessageInputListener();
	sendMessageBtnListener();

	$("#attach_pic").on('change',function(event){ //파일첨부 이벤트
	 sendFileImage(event);
	});
	
});


//파일첨부
function selectFile(obj){
	$(obj).siblings("input[name^=attach_file]").val(null);
	$(obj).siblings("input[name^=attach_file]").click();
}


//파일 박스 뷰잉
function showAttechFilebox(obj) {
	
	$(obj).addClass('active');
	$(obj).closest('.message-write-inner').find('.attach-box').addClass('active');
	
	$(obj).on('focusout', function () {
		$(this).removeClass('active');
		$(this).closest('.message-write-inner').find('.attach-box').removeClass('active');
	});
}

function sendFileImage(event){
	const file = event.target.files[0];
	
	//추가로 체크할 사항 : 파일확장자, 파일 사이즈등(15mb) 
	
	
	convertBase64(file)
	.then((imgBase64)=>{
		console.log(imgBase64);
		let imgFile = dataURLtoFile(imgBase64,'TalkPlusSampleImage');
		let imgFileSize = String(imgFile.size);
		//console.log(imgFile);
		//console.log(imgFileSize);
		client.sendMessage({
			channelId: DEMO_CHANNEL_ID,
			type: 'text',
			text: '',
			data: { 'fileSizeLabel': imgFileSize, 'fileNameLabel': imgFile.name, fileTypeLabel: 'image' },
			file: imgFile,
		}, function (err, data) {
			if (err) {
				return alert(err);
			}
			let html = '';
			html = addFilePicturehtml(data.message);
			$('.message-area').append(html);
			scrollDown();
		});
		
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



function setupUsernameInputEventListener() {
	// login anonymously
	let pick = Math.floor(Math.random() * avatarUser.length);
	client.loginAnonymous({userId: generateRandomId(), username: avatarUser[pick].username, profileImageUrl: avatarUser[pick].image}, function (errResp, data) {
		loginUserInfo = data.user;

		$('.user-box .user-img').attr('src', loginUserInfo.profileImageUrl);
		$('.user-box .name input').val(loginUserInfo.username);

		//user name 변경.
		changeUserName(loginUserInfo);


		if (errResp) {
			return alert(JSON.stringify(errResp));
		}
		// join demo channel
		client.joinChannel({channelId: DEMO_CHANNEL_ID}, function (errResp, data) {
			if (errResp) {
				if (errResp.code === '2003') { // if channel not found, create it
					client.createChannel({
						channelId: DEMO_CHANNEL_ID,
						name: DEMO_CHANNEL_ID,
						type: 'super_public',
						members: []
					}, function (errResp, data) {
						if (errResp) {
							return alert(JSON.stringify(errResp));
						}
					});
				} else if (errResp.code === '2008') { // if user already had joined channel before, don't worry about error
					// don't handle
				} else {
					return alert(JSON.stringify(errResp));
				}
			}

			client.getMessages({channelId: DEMO_CHANNEL_ID}, function (errResp, data) {
				if (errResp) {
					return alert(JSON.stringify(errResp));
				}
				populateChatWindowWithMessages(data.messages);
			});
		});
	});
 }

//닉네임 변경
function changeUserName(loginUserInfo){
	
	$(".btn-alter").on("click",function(e){
		$(this).closest('.user-box').find('.name').addClass('active');
		$(this).closest('.user-box').find('.name input').focus();		
	});
	$(".user-box .name input").on("focusout",function(e){
		let newUserName = $(this).closest('.user-box').find('.name input').val();
		if (newUserName !== loginUserInfo.username){
			client.updateUser({
				username: newUserName,
			});
		}
		$(this).closest('.user-box').find('.name').removeClass('active');		
	});
}

function sendMessageInputListener() {
	
	$(".enterMessage").on("keypress", function(e){
		if ($('.enterMessage').val() !== ''){
			if (e.keyCode === 13) {
				e.preventDefault();
				const messageText = $('.enterMessage').val();
				$('.enterMessage').val('');
				addMessageText(messageText);
			}
		}
	});
}

function sendMessageBtnListener() {
	
	$("#btnEnterMessage").on("click",function(e){
		e.preventDefault();
		if ($('.enterMessage').val() !== '') {
			const messageText = $('.enterMessage').val();
			$('.enterMessage').val('');
			addMessageText(messageText);
		}
	});
	
}

function populateChatWindowWithMessages(messages) {
	let customMessages = messages.slice(-8, messages.length);
	for (let i = customMessages.length - 1; i >= 0; i--) {
		const message = messages[i];
		let html = '';
		html = avatarhtml(message);
		$('.message-area').append(html);
	}
	scrollDown();
}

function addMessageText(messageText) {
	client.sendMessage({channelId: DEMO_CHANNEL_ID, type: 'text', text: messageText}, function (err, data) {
		if (err) {
			return alert(err);
		}
		let html = '';
		html = addMessagehtml(data.message);
		$('.message-area').append(html);
		scrollDown();
	});
}

function addMessage(message) {
	let html = '';
	html = avatarhtml(message);
	$('.message-area').append(html);
	scrollDown();
}

function generateRandomString() {
	return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
}

function generateRandomId() {
	return generateRandomString() + '-' + generateRandomString() + '-' + generateRandomString();
}

function scrollDown() {
	$('#chatView').scrollTop($('#chatView')[0].scrollHeight);
}


function b64toBlob (b64Data, contentType = '', sliceSize = 512) {
	const byteCharacters = atob(b64Data);
	const byteArrays = [];

	for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		const slice = byteCharacters.slice(offset, offset + sliceSize);

		const byteNumbers = new Array(slice.length);
		for (let i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i);
		}

		const byteArray = new Uint8Array(byteNumbers);
		byteArrays.push(byteArray);
	}

	const blob = new Blob(byteArrays, { type: contentType });
	return blob;
}

function dataURLtoFile (dataurl, fileName) {
	var arr = dataurl.split(','),
			mime = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]),
			n = bstr.length,
			u8arr = new Uint8Array(n);

	while(n--){
			u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], fileName, {type:mime});
}


