<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Tính diện tích và chu vi hình tròn</title>
	<link rel="stylesheet" type="text/css" href="Tinh_Cv_va_Dt_Hinh_Tron.css">
</head>
<body>
<?php
    $bk=isset( $_POST['bankinh']) ? $_POST['bankinh'] : '';
    const PI ='3.1415';
    $dienTich='';
    if(is_numeric($bk))
    {
        $dienTich=($bk*$bk)*PI;
    }
    $chuVi='';
    if(is_numeric($bk))
    {
        $chuVi=($bk*2)*PI;
    }
    ?>
	<div id="wrap">
		<h1>Diện Tích và Chu Vi Hình Tròn</h1>
		<form method="post" >
			<p>
				<label for="txtWidth">Bán kính:</label>
				<input type="text" name="bankinh" id="bk"value="<?php echo $bk ?>">
			</p>
			<p>
				<label for="txtHeight">Diện tích:</label>
				<input type="text" name="txtdt" id="dt" readonly value="<?php echo $dienTich ?>">
			</p>
			<p>
				<label for="txtArea">Chu vi:</label>
				<input type="text" name="txtcv" id="cv" readonly value="<?php echo $chuVi ?>">
			</p>
			<p class="button">
				<input type="submit" name="btnCvDt" value="Tính" >
			</p>
		</form>
	</div>
    
</body>
</html>