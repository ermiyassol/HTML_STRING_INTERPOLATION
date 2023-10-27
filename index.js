const jsdom = require('jsdom');
const { JSDOM } = jsdom;

function htmlToObject(html) {
  const dom = new JSDOM(`<!DOCTYPE html><body>${html}</body>`);
  const document = dom.window.document;
  return document.getElementById('txtGrossPay').value;
}

// Usage example
const htmlContent = `<!DOCTYPE HTML>
<html>
<!-- InstanceBegin template="/Templates/advert.dwt" codeOutsideHTMLIsLocked="false" -->

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- InstanceBeginEditable name="doctitle" -->
	<title>Gross Pay Calculator</title>
	<!-- InstanceEndEditable -->
	<!-- InstanceBeginEditable name="head" -->
	<meta name="Keywords" content="Calculator, gross pay, Kenya">
	<meta name="Description" content="Gross Pay Calculator">
	<script src="../shared/openwin.js"></script>
	<!-- InstanceEndEditable -->
	<link href="../styles/main.css" rel="stylesheet" type="text/css">
	<link href="../menu/resp_menu.css" rel="stylesheet" type="text/css">
	<link href="../menu/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	<link href="../graphics/favicon.ico" rel="icon" type="image/x-icon">
	<script src="../shared/menu.js"></script>
	<script>
		function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
	</script>
	<!-- InstanceParam name="onload" type="text" value="initMenu()" -->
	<!-- InstanceParam name="onunload" type="text" value="" -->
</head>

<body onLoad="initMenu()" onUnload="">
	<div id="container">
		<div id="header"><a
				href="../index.htm"><img src="../graphics/logo.png" alt="Aren Software's Logo" border="0" width="100" height="36" class="img.logo"></a>
				<form class="form_menu" name="frmMenu" id="frmMenu" action="">
					<select name="selectMenu" onchange="setMenu()">
            <option selected="selected">Kenya</option>
            <option>Uganda</option>
            <option>Tanzania</option>
         </select>
				</form>
		</div>
		<div id="nav">
			<div class="topnav" id="myTopnav">
				<div class="dropdown">
					<button class="dropbtn">Software <i class="fa fa-caret-down"></i> </button>
					<div class="dropdown-content"> <a href="../payroll/payroll.htm">Aren Payroll</a> <a
							href="../payroll/register.htm">Aren Register</a> <a href="../payroll/features.htm">Product
							Comparison</a> <a href="../payroll/prices.htm">Prices</a> <a
							href="../payroll/whatsnew80.htm">What's New</a> </div>
				</div>
				<div class="dropdown">
					<button class="dropbtn">Downloads <i class="fa fa-caret-down"></i> </button>
					<div class="dropdown-content"> <a href="../payroll/download80.htm">Downloads</a><a
							href="../payroll/upgrade70.htm">Upgrades</a> </div>
				</div>
				<div class="dropdown">
					<button class="dropbtn">Services <i class="fa fa-caret-down"></i> </button>
					<div class="dropdown-content"> <a href="../payroll/bureau.htm">Bureau Service</a> </div>
				</div>
				<div class="dropdown">
					<button class="dropbtn">Calculators <i class="fa fa-caret-down"></i> </button>
					<div class="dropdown-content"> <a href="deducalc.htm">Net Pay </a> <a href="grosscalc.htm">Gross
							Pay</a> <a href="payecalc.htm">PAYE</a> <a href="loancalc.htm">Loan Repayment</a> <a
							href="../investments/tbills.htm">Investments</a> </div>
				</div>
				<a href="../payroll/taxrates.htm">Tax Rates</a>
				<div class="dropdown">
					<button class="dropbtn">About Us <i class="fa fa-caret-down"></i> </button>
					<div class="dropdown-content"> <a href="../company/about.htm">About Us</a> <a
							href="../company/contacts.htm">Contact Us</a> <a href="../company/clients.php">Clients</a>
					</div>
				</div>
				<div class="dropdown">
					<button class="dropbtn">Feedback <i class="fa fa-caret-down"></i> </button>
					<div class="dropdown-content"> <a href="../feedback/emailform.php">Email Us</a> <a
							href="../feedback/quoteform.php">Request a Quote</a> <a href="../feedback/demoform.php">Book
							a Demo</a> </div>
				</div>
				<a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
			</div>
		</div>
		<div id="text">
			<!-- InstanceBeginEditable name="Content" -->
			<form name="frmResults" id="frmResults" method="post" action="grossprn.php" target="ResultsWnd">
				<table width="250" align="center" cellpadding="3" cellspacing="3" rules="none" class="results">
					<tr>
						<th height="40" colspan="2" valign="top">GROSS PAY CALCULATOR<br>
                  Jul-Dec 2023</th>
					</tr>
					<tr>
						<td valign="top"><b>Net Pay</b></td>
						<td align="right" valign="top"><b> 200,000.00</b>
							<input type="hidden" name="txtNetPay" id="txtNetPay" value="200000"></td>
					</tr>
					<tr>
						<td valign="top">PAYE</td>
						<td align="right" valign="top">77,023.78
							<input type="hidden" name="txtPaye" id="txtPaye" value="77023.78"></td>
					</tr>
					<tr>
						<td valign="top">NSSF (Tier I) </td>
						<td align="right" valign="top">360.00
							<input type="hidden" name="txtNssf1" id="txtNssf1" value="360"></td>
					</tr>
					<tr>
						<td valign="top">NSSF (Tier II)</td>
						<td align="right" valign="top">
							720.00<input type="hidden" name="txtNssf2" id="txtNssf2" value=720></td>
					</tr>
					<tr>
						<td valign="top">NHIF</td>
						<td align="right" valign="top">1,700.00
							<input type="hidden" name="txtNhif" id="txtNhif" value="1700"></td>
					</tr>
					<tr>
						<td valign="top">Housing Levy</td>
						<td align="right" valign="top">4,261.00
							<input type="hidden" name="txtHseLevy" id="txtHseLevy" value="4261"></td>
					</tr>
					<tr>
						<td valign="top"><b>Gross Pay</b></td>
						<td align="right" valign="top"><b> 284,064.78 </b>
							<input type="hidden" name="txtGrossPay" id="txtGrossPay" value="284064.78"></td>
					</tr>
					<tr>
						<td colspan="2" valign="top">
							<hr class="separator">
						</td>
					</tr>
					<tr>
						<td valign="top">Allowable Deductions </td>
						<td align="right" valign="top">1,080.00
							<input type="hidden" name="txtNssf" id="txtNssf" value="1080"></td>
					</tr>
					<tr>
						<td height="30" valign="top">Taxable Pay </td>
						<td height="30" align="right" valign="top">282,984.78
							<input type="hidden" name="txtTaxablePay" id="txtTaxablePay" value="282984.78"></td>
					</tr>
					<tr>
						<td colspan="2" align="right" valign="top"><a href="#"
								onClick="openResultsWnd(); document.frmResults.submit();">Print</a> | <a
								href="grosscalc.htm">New Calculation</a></td>
					</tr>
				</table>
			</form>
			<!-- InstanceEndEditable -->
		</div>
		<div id="advert"> <span class="style1">
      <script>
		var num = Math.random();
		if (num < 0.1)
			{
			document.write("Try out Aren Payroll 8.0 for free. Download a copy ");
			document.write("<a href='../payroll/download80.htm'>here</a>.");
			}
		</script> 
      </span> </div>
		<div id="footer">
			<div class="section group">
				<div class="col span_1_of_3"> Copyright &copy;
					<script>
						document.write(new Date().getFullYear())
					</script>
					Aren Software Ltd </div>
				<div class="col span_1_of_3">Titan Complex, Chaka Road, Nairobi<br>
         0722 861553, 0733&nbsp;861553 </div>
					<div class="col span_1_of_3">
						<!-- InstanceBeginEditable name="LastModified" -->Last Updated: 5 August 2023
						<!-- InstanceEndEditable -->
					</div>
				</div>
			</div>
		</div>
</body>
<!-- InstanceEnd -->

</html>`;
const obj = htmlToObject(htmlContent);
console.log(obj); // this is gross value