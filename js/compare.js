
function loadData1(){
	var product1=document.getElementById("product1").value;
	var product2=document.getElementById("product2").value;
	var image1=document.getElementById("image1");
	var brand1=document.getElementById("brand1");
	var model1=document.getElementById("model1");
	var type1=document.getElementById("type1");
	var color1=document.getElementById("color1");
	var ton1=document.getElementById("ton1");
	var eer1=document.getElementById("eer1");
	var price1=document.getElementById("price1");
	
	
	if(product1==product2){
		alert("PLEASE CHOOSE DIFFRENT ITEM");
		image1.src="";
		brand1.innerHTML="&nbsp;";
		model1.innerHTML="&nbsp;";
		type1.innerHTML="&nbsp;";
		color1.innerHTML="&nbsp;";
		ton1.innerHTML="&nbsp;";
		eer1.innerHTML="&nbsp;";
		price1.innerHTML="&nbsp;";
		document.getElementById("product1").selectedIndex="0";
	}
	else{
		if(product1 == "Select Product"){
			image1.src="";
			brand1.innerHTML="&nbsp;";
			model1.innerHTML="&nbsp;";
			type1.innerHTML="&nbsp;";
			color1.innerHTML="&nbsp;";
			ton1.innerHTML="&nbsp;";
			eer1.innerHTML="&nbsp;";
			price1.innerHTML="&nbsp;";
		}
		/*Split-AC - Mitsubishi*/
		if(product1 == "1 Ton Inverter Series HJ35VA"){
			image1.src="../Picture/Products-image/Spilit-AC-Products-image/Products/spilitAC-1.png";
			brand1.innerHTML="Mitsubishi";
			model1.innerHTML="HJ35VA";
			type1.innerHTML="Wall Mounted Split AC";
			color1.innerHTML="White";
			ton1.innerHTML="1 Ton";
			eer1.innerHTML="9.4-2.75 Btu/W-h-W/W";
			price1.innerHTML="Rs. 81,000/-";
		}
		if(product1=="1.5 Ton Inverter Series HJ50VA"){
			image1.src="../Picture/Products-image/Spilit-AC-Products-image/Products/spilitAC-10.png";
			brand1.innerHTML="Mitsubishi";
			model1.innerHTML="HJ50VA";
			type1.innerHTML="Wall Mounted Split AC";
			color1.innerHTML="Offwhite";
			ton1.innerHTML="1.5 Ton";
			eer1.innerHTML="7.51 Btu/W-h-W/W";
			price1.innerHTML="Rs. 104,000/-"
		}
		if(product1=="2 Ton Inverter Series HJ71VA"){
			image1.src="../Picture/Products-image/Spilit-AC-Products-image/Products/spilitAC-11.png";
			brand1.innerHTML="Mitsubishi";
			model1.innerHTML="HJ71VA";
			type1.innerHTML="Wall Mounted Split AC";
			color1.innerHTML="White";
			ton1.innerHTML="2 Ton";
			eer1.innerHTML="6.4-2.40 Btu/W-h-W/W";
			price1.innerHTML="Rs. 148,000/-"
		}
		
		/*Cassette-AC - Mitsubishi*/	
		if(product1=="FDTC25VF"){
			image1.src="../Picture/Products-image/Cassette-AC-Products-image/products/01.png";
			brand1.innerHTML="Mitsubishi";
			model1.innerHTML="FDTC25VF";
			type1.innerHTML="Ceiling Cassette AC";
			color1.innerHTML="White";
			ton1.innerHTML="3.5 Ton";
			eer1.innerHTML="8.2-3.45 Btu/W-h-W/W";
			price1.innerHTML="Rs. 127,600/-"
		}
		if(product1=="FDTW56KXE6F VRF 2-Way"){
			image1.src="../Picture/Products-image/Cassette-AC-Products-image/Products/02.png";
			brand1.innerHTML="Mitsubishi";
			model1.innerHTML="FDTW56KXE6F";
			type1.innerHTML="Ceiling Cassette AC";
			color1.innerHTML="White";
			ton1.innerHTML="4.0 Ton";
			eer1.innerHTML="7.3-2.9 Btu/W-h-W/W";
			price1.innerHTML="Rs. 85,300/-"
		}
		if(product1=="FDTC45KXE6F VRF Compact"){
			image1.src="../Picture/Products-image/Cassette-AC-Products-image/Products/03.png";
			brand1.innerHTML="Mitsubishi";
			model1.innerHTML="FDTC45KXE6F";
			type1.innerHTML="Ceiling Cassette AC";
			color1.innerHTML="White";
			ton1.innerHTML="3.7 Ton";
			eer1.innerHTML="6.9-4.1 Btu/W-h-W/W";
			price1.innerHTML="Rs. 80,400/-"
		}
		
		/*Split-AC - Carrier*/	
		if(product1=="CACI12OC3I6 1 Ton"){
			image1.src="../Picture/Products-image/Spilit-AC-Products-image/Products/spilitAC-4.png";
			brand1.innerHTML="Carrier";
			model1.innerHTML="CACI12OC3I6";
			type1.innerHTML="Wall Mounted Split AC";
			color1.innerHTML="Grey";
			ton1.innerHTML="1 Ton";
			eer1.innerHTML="8.1-3.85 Btu/W-h-W/W";
			price1.innerHTML="Rs. 146,300/-"
		}
		if(product1=="CACS18SU3C3 1.5 Ton"){
			image1.src="../Picture/Products-image/Spilit-AC-Products-image/Products/spilitAC-5.png";
			brand1.innerHTML="Carrier";
			model1.innerHTML="CACS18SU3C3";
			type1.innerHTML="Wall Mounted Split AC";
			color1.innerHTML="White";
			ton1.innerHTML="1.5 Ton";
			eer1.innerHTML="6.4-4.2 Btu/W-h-W/W";
			price1.innerHTML="Rs. 156,800/-"
		}
		if(product1=="Durakool Star 42KGL 012T 1 Ton"){
			image1.src="../Picture/Products-image/Spilit-AC-Products-image/Products/spilitAC-6.png";
			brand1.innerHTML="Carrier";
			model1.innerHTML="Durakool Star 42KGL 012T";
			type1.innerHTML="Wall Mounted Split AC";
			color1.innerHTML="White";
			ton1.innerHTML="1 Ton";
			eer1.innerHTML="7.2-5.2 Btu/W-h-W/W";
			price1.innerHTML="Rs. 164,686/-"
		}
		
		/*Cassette-AC - Carrier*/
		if(product1=="3.0HP A5CK 28E/A5LC 28C"){
			image1.src="../Picture/Products-image/Cassette-AC-Products-image/Products/04.png";
			brand1.innerHTML="Carrier";
			model1.innerHTML="28E/A5LC";
			type1.innerHTML="Ceiling Cassette AC";
			color1.innerHTML="White";
			ton1.innerHTML="3.1 Ton";
			eer1.innerHTML="7.2-3.45 Btu/W-h-W/W";
			price1.innerHTML="Rs. 87,600/-"
		}
		if(product1=="2.5HP A5CK 25E/A5LC 20C"){
			image1.src="../Picture/Products-image/Cassette-AC-Products-image/Products/05.png";
			brand1.innerHTML="Carrier";
			model1.innerHTML="A5CK 25E/A5LC";
			type1.innerHTML="Ceiling Cassette AC";
			color1.innerHTML="White";
			ton1.innerHTML="2.9 Ton";
			eer1.innerHTML="5.3-2.8 Btu/W-h-W/W";
			price1.innerHTML="Rs. 89,600/-"
		}
		if(product1=="2.0HP A5CKY 20E/A5LCY 20C"){
			image1.src="../Picture/Products-image/Cassette-AC-Products-image/Products/06.png";
			brand1.innerHTML="Carrier";
			model1.innerHTML="A5CKY 20E/A5LCY";
			type1.innerHTML="Ceiling Cassette AC";
			color1.innerHTML="White";
			ton1.innerHTML="1.5 Ton";
			eer1.innerHTML="6.3-2.8 Btu/W-h-W/W";
			price1.innerHTML="Rs. 219,900/-"
		}
	}
}
function loadData2(){
	var product1=document.getElementById("product1").value;
	var product2=document.getElementById("product2").value;
	var image2=document.getElementById("image2");
	var brand2=document.getElementById("brand2");
	var model2=document.getElementById("model2");
	var type2=document.getElementById("type2");
	var color2=document.getElementById("color2");
	var ton2=document.getElementById("ton2");
	var eer2=document.getElementById("eer2");
	var price2=document.getElementById("price2");
	if(product1==product2){
		alert("PLEASE CHOOSE DIFFRENT ITEM");
		image2.src="";
		brand2.innerHTML="&nbsp;";
		model2.innerHTML="&nbsp;";
		type2.innerHTML="&nbsp;"
		;color2.innerHTML="&nbsp;";
		ton2.innerHTML="&nbsp;";
		eer2.innerHTML="&nbsp;";
		price2.innerHTML="&nbsp;";
		document.getElementById("product2").selectedIndex="0";
	}
	else{
		/*Split-AC - Mitsubishi*/
		if(product2 == "Select Product"){
			image2.src="";
			brand2.innerHTML="&nbsp;";
			model2.innerHTML="&nbsp;";
			type2.innerHTML="&nbsp;";
			color2.innerHTML="&nbsp;";
			ton2.innerHTML="&nbsp;";
			eer2.innerHTML="&nbsp;";
			price2.innerHTML="&nbsp;";
		}
		
		if(product2=="1 Ton Inverter Series HJ35VA"){
			image2.src="../Picture/Products-image/Spilit-AC-Products-image/Products/spilitAC-1.png";
			brand2.innerHTML="Mitsubishi";
			model2.innerHTML="HJ35VA";
			type2.innerHTML="Wall Mounted Split AC";
			color2.innerHTML="White";
			ton2.innerHTML="1 Ton";
			eer2.innerHTML="9.4-2.75 Btu/W-h-W/W";
			price2.innerHTML="Rs. 81,000/-";
		}
		if(product2=="1.5 Ton Inverter Series HJ50VA"){
			image2.src="../Picture/Products-image/Spilit-AC-Products-image/Products/spilitAC-10.png";
			brand2.innerHTML="Mitsubishi";
			model2.innerHTML="HJ50VA";
			type2.innerHTML="Wall Mounted Split AC";
			color2.innerHTML="Offwhite";
			ton2.innerHTML="1.5 Ton";
			eer2.innerHTML="7.52 Btu/W-h-W/W";
			price2.innerHTML="Rs. 204,000/-";
		}
		if(product2=="2 Ton Inverter Series HJ71VA"){
			image2.src="../Picture/Products-image/Spilit-AC-Products-image/Products/spilitAC-11.png";
			brand2.innerHTML="Mitsubishi";
			model2.innerHTML="HJ72VA";
			type2.innerHTML="Wall Mounted Split AC";
			color2.innerHTML="White";
			ton2.innerHTML="2 Ton";
			eer2.innerHTML="6.4-2.40 Btu/W-h-W/W";
			price2.innerHTML="Rs. 248,000/-";
		}
		
		/*Cassette-AC - Mitsubishi*/	
		if(product2=="FDTC25VF"){
			image2.src="../Picture/Products-image/Cassette-AC-Products-image/products/01.png";
			brand2.innerHTML="Mitsubishi";
			model2.innerHTML="FDTC25VF";
			type2.innerHTML="Ceiling Cassette AC";
			color2.innerHTML="White";ton2.innerHTML="3.5 Ton";
			eer2.innerHTML="8.2-3.45 Btu/W-h-W/W";
			price2.innerHTML="Rs. 227,600/-";
		}
		if(product2=="FDTW56KXE6F VRF 2-Way"){
			image2.src="../Picture/Products-image/Cassette-AC-Products-image/products/02.png";
			brand2.innerHTML="Mitsubishi";
			model2.innerHTML="FDTW56KXE6F";
			type2.innerHTML="Ceiling Cassette AC";
			color2.innerHTML="White";
			ton2.innerHTML="4.0 Ton";
			eer2.innerHTML="7.3-2.9 Btu/W-h-W/W";
			price2.innerHTML="Rs. 85,300/-"
		}
		if(product2=="FDTC45KXE6F VRF Compact"){
			image2.src="../Picture/Products-image/Cassette-AC-Products-image/Products/03.png";
			brand2.innerHTML="Mitsubishi";
			model2.innerHTML="FDTC45KXE6F";
			type2.innerHTML="Ceiling Cassette AC";
			color2.innerHTML="White";
			ton2.innerHTML="3.7 Ton";
			eer2.innerHTML="6.9-4.2 Btu/W-h-W/W";
			price2.innerHTML="Rs. 80,400/-"
		}
		
		/*Split-AC - Carrier*/	
		if(product2=="CACI12OC3I6 1 Ton"){
			image2.src="../Picture/Products-image/Spilit-AC-Products-image/Products/spilitAC-4.png";
			brand2.innerHTML="Carrier";
			model2.innerHTML="CACI22OC3I6";
			type2.innerHTML="Wall Mounted Split AC";
			color2.innerHTML="Grey";
			ton2.innerHTML="2 Ton";
			eer2.innerHTML="8.2-3.85 Btu/W-h-W/W";
			price2.innerHTML="Rs. 246,300/-"
		}
		if(product2=="CACS18SU3C3 1.5 Ton"){
			image2.src="../Picture/Products-image/Spilit-AC-Products-image/Products/spilitAC-5.png";
			brand2.innerHTML="Carrier";
			model2.innerHTML="CACS28SU3C3";
			type2.innerHTML="Wall Mounted Split AC";
			color2.innerHTML="White";
			ton2.innerHTML="2 Ton";
			eer2.innerHTML="6.4-4.2 Btu/W-h-W/W";
			price2.innerHTML="Rs. 256,800/-"
		}
		if(product2=="Durakool Star 42KGL 012T 1 Ton"){
			image2.src="../Picture/Products-image/Spilit-AC-Products-image/Products/spilitAC-6.png";
			brand2.innerHTML="Carrier";
			model2.innerHTML="42KGL 022T";
			type2.innerHTML="Wall Mounted Split AC";
			color2.innerHTML="White";
			ton2.innerHTML="2 Ton";
			eer2.innerHTML="7.2-5.2 Btu/W-h-W/W";
			price2.innerHTML="Rs. 264,686/-"
		}
		
		/*Cassette-AC - Carrier*/
		if(product2=="3.0HP A5CK 28E/A5LC 28C"){
			image2.src="../Picture/Products-image/Cassette-AC-Products-image/Products/04.png";
			brand2.innerHTML="Carrier";
			model2.innerHTML="28E/A5LC";
			type2.innerHTML="Ceiling Cassette AC";
			color2.innerHTML="White";
			ton2.innerHTML="3.2 Ton";
			eer2.innerHTML="7.2-3.45 Btu/W-h-W/W";
			price2.innerHTML="Rs. 87,600/-"
		}
		if(product2=="2.5HP A5CK 25E/A5LC 20C"){
			image2.src="../Picture/Products-image/Cassette-AC-Products-image/Products/05.png";
			brand2.innerHTML="Carrier";
			model2.innerHTML="A5CK 25E/A5LC";
			type2.innerHTML="Ceiling Cassette AC";
			color2.innerHTML="White";
			ton2.innerHTML="2.9 Ton";
			eer2.innerHTML="5.3-2.8 Btu/W-h-W/W";
			price2.innerHTML="Rs. 89,600/-"
		}
		if(product2=="2.0HP A5CKY 20E/A5LCY 20C"){
			image2.src="../Picture/Products-image/Cassette-AC-Products-image/Products/06.png";
			brand2.innerHTML="Carrier";
			model2.innerHTML="A5CKY 20E/A5LCY";
			type2.innerHTML="Ceiling Cassette AC";
			color2.innerHTML="White";
			ton2.innerHTML="2.5 Ton";
			eer2.innerHTML="6.3-2.8 Btu/W-h-W/W";
			price2.innerHTML="Rs. 229,900/-"
		}
	}
}
