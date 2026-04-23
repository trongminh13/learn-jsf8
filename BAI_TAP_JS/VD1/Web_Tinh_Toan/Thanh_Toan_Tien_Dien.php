<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Tính diện tích hình chữ nhật</title>
	<link rel="stylesheet" type="text/css" href="Thanh_Toan_Tien_Dien.css">
</head>
<body>
<?php
    // $ch=$_POST['chuho'];
    // $csc=$_POST['chiSoCu'];
    // $csm=$_POST['chiSoMoi'];
    // $dg=$_POST['dongia'];
    // $Tinh_Tien=($csm-$csc)*$dg;
	$ch=isset( $_POST['chuho']) ? $_POST['chuho'] : '';
	$csc=isset( $_POST['chiSoCu']) ? $_POST['chiSoCu'] : '';
	$csm=isset( $_POST['chiSoMoi']) ? $_POST['chiSoMoi'] : '';
	$dg=isset( $_POST['dongia']) ? $_POST['dongia'] : '';
	$Tinh_Tien='';
    if(is_numeric($csc)&&is_numeric($csm)&&is_numeric($dg))
    {
        $Tinh_Tien=($csm-$csc)*$dg;
    }
    ?>
	<div id="wrap">
		<h1>THANH TOÁN TIỀN ĐIỆN</h1>
		<form method="post" >
			<p>
				<label for="txtCh">Tên chủ hộ:</label>
				<input type="textField" name="chuho" id="txtCh"value="<?php echo $ch ?>">
			</p>
			<p>
				<label for="txtHeight">Chỉ số cũ:</label>
				<input type="text" name="chiSoCu" id="txtCu" value="<?php echo $csc ?>">
			</p>
            <p>
				<label for="txtHeight">Chỉ số mới:</label>
				<input type="text" name="chiSoMoi" id="txtMoi" value="<?php echo $csm ?>">
			</p>
            <p>
				<label for="txtHeight">Đơn giá:</label>
				<input type="text" name="dongia" id="txtdg" value="<?php echo $dg ?>">
			</p>
			<p>
				<label for="txtArea">Số tiền thanh toán:</label>
				<input type="text" name="txtArea" id="txtArea" readonly value="<?php echo $Tinh_Tien ?>">
			</p>
			<p class="button">
				<input type="submit" name="btnCalc" value="Tính" >
			</p>
		</form>
	</div>
    
</body>
</html>