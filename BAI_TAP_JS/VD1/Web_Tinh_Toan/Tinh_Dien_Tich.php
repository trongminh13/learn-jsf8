<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Tính diện tích hình chữ nhật</title>
	<link rel="stylesheet" type="text/css" href="Tinh_Dien_Tich.css">
</head>
<body>
<?php
    $dai=isset($_POST['txtWidth']) ? $_POST['txtWidth'] : '';
    $rong=isset($_POST['txtHeight']) ? $_POST['txtHeight'] : '';
    $dienTich='';
    if(is_numeric($dai) && is_numeric($rong))
    {
        $dienTich=$dai*$rong;
    }
    ?>
	<div id="wrap">
		<h1>DIỆN TÍCH HÌNH CHỮ NHẬT</h1>
		<form method="post" >
			<p>
				<label for="txtWidth">Chiều dài:</label>
				<input type="text" name="txtWidth" id="txtWidth"value="<?php echo $dai ?>">
			</p>
			<p>
				<label for="txtHeight">Chiều rộng:</label>
				<input type="text" name="txtHeight" id="txtHeight" value="<?php echo $rong ?>">
			</p>
			<p>
				<label for="txtArea">Diện tích:</label>
				<input type="text" name="txtArea" id="txtArea" readonly value="<?php echo $dienTich ?>">
			</p>
			<p class="button">
				<input type="submit" name="btnCalc" value="Tính" >
			</p>
		</form>
	</div>
    
</body>
</html>