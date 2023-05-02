<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>

	<link rel="stylesheet" type="text/css" href="/resources/css/style.css">
	<link rel="stylesheet" type="text/css" href="/resources/css/_reset.css">
	<link rel="stylesheet" type="text/css" href="/resources/css/_common.css">

	<script src="https://code.jquery.com/jquery-1.12.4.min.js"
	integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
	<script src="https://asset.talkplus.io/talkplus-js-0.3.9.js"></script>
	<script  src="/resources/js/index.js"></script>
	
	<title>TalkPlus Sample APP</title>
	
</head>
<body>
<div class="wrap">
	<section class="menu-section">
		<h1>
			<a href="https://www.talkplus.io/intro/" target="_blank">
				<img class="logo_image" src="/resources/images/logo.svg" alt="logo" />
			</a>
		</h1>
		<div class="user-box">
			<img class="user-img" src="/resources/images/user_0.png" alt="user image" />
			<div class="name"> <!-- addClass : active -->
				<input type="text" value="제임스" />
			</div>
			<a href="javascript:void(0);" class="btn-alter"></a>
		</div>
		<nav class="menu">
			<ul>
				<li class="active"><a href="javascript:void(0);">소셜채팅</a></li>
				<!-- <li><a href="javascript:void(0);">게임/방송채팅</a></li> -->
			</ul>
		</nav>
		<!-- resource btns	-->
		<ul class="resource-box">
			<%--
			<li><a href="javascript:void(0);" class="btn" /><img src="/resources/images/icon_resource1.png" />Resource</a></li>
			<li><a href="javascript:void(0);" class="btn" /><img src="/resources/images/icon_resource2.png" />Resource</a></li>
			 --%>
		</ul>
	
	</section>
	
	
	<main class="chat-wrap">
		<div class="chat-wrap-inner">
			<div class="chat-container">
				<h2 class="chat-title">톡플러스</h2>
				<!-- chat-area -->
				<div class="chat-area" id="chatView">
					<div class="date"></div>
					<div class="notibox">
						<span>채팅방 운영정책 및 공지를 입력할 수 있는 영역입니다</span>
					</div>
					
					<div class="message-area">
					</div>
				</div><!-- chat-area -->			
			
				<!-- message-write-area -->
				<div class="message-write-area">
					<div class="message-write-inner">
						<div class="btn-attach">
							<a href="javascript:void(0);" onclick="showAttechFilebox(this);"></a>
						</div>
						<div class="attach-box">
							<ul>
								<li>
									<a class="attach pic" href="javascript:void(0);" onclick="selectFile(this);">사진첨부</a>
									<input type="file" class="attach_pic" id="attach_pic" name="attach_file" style="display: none;">
								</li>
								<li>
									<a class="attach video"  href="javascript:void(0);" onclick="selectFile(this);">동영상 첨부</a>
									<input type="file" id="attach_video" name="attach_file" style="display: none;">
								</li>
								<li>
									<a class="attach file"  href="javascript:void(0);" onclick="selectFile(this);">파일첨부</a>
									<input type="file" id="attach_file" name="attach_file" style="display: none;">
								</li>
							</ul>
						</div>
						<div class="write-box">
							<input type="text" class="enterMessage" placeholder="메시지를 입력해주세요.">
						</div>
						<a class="btn-send" id="btnEnterMessage" href="javascript:void(0);">전송</a>
					</div>
				</div>
				<!-- //message-write-area -->
			</div>
		</div>
	</main>
</div>

</body>
</html>
