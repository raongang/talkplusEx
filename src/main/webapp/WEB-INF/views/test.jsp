<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="stylesheet" href="./index.css" />
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />
        <title>Base64 File Upload</title>
       	<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
       	
    </head>

    <body>
        <div style="margin: 24px">
            <h2>Upload Image</h2>
        </div>
        
        <div style="margin:16px; padding:16px">
        	<input class="form-control form-control-lg selectAvatar" id="selectAvatar" type="file" />
        </div>
        
        <div class="container">
        	<div class="row">
        		<div class="col">
        			<h6>Image Preview:</h6>
        			<img class="img" id="avatar" />
        		</div>
        		
        		<div class="col">
        			<h6>Base64 Output</h6>
        			<textarea id="textArea" rows="30" cols="50"></textarea>
        		</div>
        	</div>
        </div>

    </body>
    <script  src="/resources/js/index2.js"></script>
</html>