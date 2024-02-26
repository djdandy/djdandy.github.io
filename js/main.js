function DepthFunction() {
  var S = document.getElementById("AD_SVol").value;
  var V = document.getElementById("AD_AVol").value;
  var N = document.getElementById("AD_ANum").value;
  var C = document.getElementById("AD_Conical").value;
  if (C==15) {
	var x = ((parseFloat(S)-parseFloat(V)*parseFloat(N))-400);
	if (x>=1500) {
		var X = Math.floor(((0.006*x-8.7638)+23));
		document.getElementById("depthprint").innerHTML = "Aspiration depth should be set to " + String(X) +" mm.";
	} else {
		document.getElementById("depthprint").innerHTML = "Aspiration depth should be set to 1.5 mm.";
	}
  } else if (C==50) {
	var y = ((parseFloat(S)-parseFloat(V)*parseFloat(N))-3000);
	if (y>=3300) {
		var Y = Math.floor(((0.002*y-6.2216)+17));
		document.getElementById("depthprint").innerHTML = "Aspiration depth should be set to " + String(Y) +" mm.";
	} else {
		document.getElementById("depthprint").innerHTML = "Aspiration depth should be set to 1.5 mm.";
	}
  }
}

function FreezeDryFunction() {
  var V = document.getElementById("FD_Vol").value;
  if (V<=50) {
	document.getElementById("FreezeDryTime").innerHTML = "It will take 20 minutes to freeze and 30 minutes to SpeedVac " + String(V) + " µL."
  } else if (V<101) {
	document.getElementById("FreezeDryTime").innerHTML = "It will take 20 minutes to freeze and 1 hour to SpeedVac " + String(V) + " µL."
  } else if (V<201) {
	document.getElementById("FreezeDryTime").innerHTML = "It will take 30 minutes to freeze and 1 hour and 30 minutes to SpeedVac " + String(V) + " µL."
  } else if (V<301) {
	document.getElementById("FreezeDryTime").innerHTML = "It will take 30 minutes to freeze and 2 hours to SpeedVac " + String(V) + " µL."
  } else if (V<501) {
	document.getElementById("FreezeDryTime").innerHTML = "It will take 30 minutes to freeze and 2 hours and 30 minutes to SpeedVac " + String(V) + " µL."
  } else if (V<751) {
	document.getElementById("FreezeDryTime").innerHTML = "It will take 45 minutes to freeze and 3 hours to SpeedVac " + String(V) + " µL."
  } else if (V<1001) {
	document.getElementById("FreezeDryTime").innerHTML = "It will take 45 minutes to freeze and 4 hours to SpeedVac " + String(V) + " µL."
  } else {
	document.getElementById("FreezeDryTime").innerHTML = "See a supervisor for recommended freezing and drying times."
  }
}

function nmolFunction() {
  var nmol = document.getElementById("nmol").value;
  var yes = document.getElementById("nDesiredV").checked;
  var S = document.getElementById("nSMol").value;
  var V = document.getElementById("nAVol").value;
  var N = document.getElementById("nANum").value;
  var x = (parseFloat(nmol)/(parseFloat(S)/1000));
  if (yes==true) {
	document.getElementById("nmolSize").innerHTML = String(Math.round(x*parseFloat(N)*10)/10) + " µL stock + " + String(Math.round(((parseFloat(V)*parseFloat(N))-(x*parseFloat(N)))*10)/10) + " µL solvent. Aliquots are " + String(parseFloat(V)) + " µL.";
  } else {
	if (x>30) {
		document.getElementById("nmolSize").innerHTML = String(Math.round(x*10)/10) + " µL stock per aliquot.";
	} else {
		document.getElementById("nmolSize").innerHTML = String(Math.round(x*parseFloat(N)*10)/10) + " µL stock + " + String(Math.round(((30*parseFloat(N))-(x*parseFloat(N)))*10)/10) + " µL solvent. Aliquots are 30 µL.";
	}
  }
}

function mgNETFunction() {
  var mgNET = document.getElementById("mgNET").value;
  var MW = document.getElementById("mgSMW").value;
  var yes = document.getElementById("mgDesiredV").checked;
  var S = document.getElementById("mgSMol").value;
  var V = document.getElementById("mgAVol").value;
  var N = document.getElementById("mgANum").value;
  var x = ((parseFloat(mgNET)*Math.pow(10,9))/(parseFloat(S)*parseFloat(MW)));
  if (yes==true) {
	document.getElementById("mgNETSize").innerHTML = String(Math.round(x*parseFloat(N)*10)/10) + " µL stock + " + String(Math.round(((parseFloat(V)*parseFloat(N))-(x*parseFloat(N)))*10)/10) + " µL solvent. Aliquots are " + String(parseFloat(V)) + " µL.";
  } else {
	if (x>30) {
		document.getElementById("mgNETSize").innerHTML = String(Math.round(x*10)/10) + " µL stock per aliquot.";
	} else {
		document.getElementById("mgNETSize").innerHTML = String(Math.round(x*parseFloat(N)*10)/10) + " µL stock + " + String(Math.round(((30*parseFloat(N))-(x*parseFloat(N)))*10)/10) + " µL solvent. Aliquots are 30 µL.";
	}
  }
}

function OpentronsEasyPy() {
	var Locations = ["1","2","3","4","5","6","7","8","9","10","11"];
	var TLocation = document.getElementById("TLocation").value;
	var SLocation = document.getElementById("SLocation").value;
	Locations = Locations.filter(function(pos) {
		return pos != TLocation;
	});
	Locations = Locations.filter(function(pos) {
		return pos != SLocation;
	});
	var SSize = document.getElementById("SSize").value;
	var TVol = null;
	var RVol = null;
	var SPos = null;
	var SEq = null;
	if (SSize==15) {
		TVol = 400;
		RVol = 1500;
		SPos = 0;
		SEq = "(0.006*(temp_remain_vol)-8.7638)+23";
	} else {
		TVol = 3000;
		RVol = 3300;
		SPos = 6;
		SEq = "(0.002*(temp_remain_vol)-6.2216)+17";
	}
	var ATray = document.getElementById("ATray").value;
	var TrayName = null;
	if (ATray==24) {
		TrayName = "opentrons_24_tuberack_nest_1.5ml_screwcap"
	} else {
		TrayName = "agilent_54_tuberack_2000ul"
	}
	var Pip = document.getElementById("Pip").value;
	var PipArm = null;
	var PipTip = null;
	if (Pip=="p300") {
		PipArm = "left"
		PipTip = "300ul"
	} else {
		PipArm = "right"
		PipTip = "1000ul"
	}
	var SVolume = document.getElementById("SVolume").value; 
	var Tubes = document.getElementById("Tubes").value;
	var Trays = Math.floor(Tubes/ATray)
	var AVolume = document.getElementById("AVolume").value;
	var OpentronsOutput = "from opentrons import protocol_api\n";
	OpentronsOutput = OpentronsOutput + "\nmetadata = {'apiLevel': '2.12',\n\t    'protocolName': 'Easy Opentrons Python',\n\t    'description': '''Generated Opentrons Python''',\n\t    'author': 'Dylan D.'}\n"
	OpentronsOutput = OpentronsOutput + "\ndef run(protocol: protocol_api.ProtocolContext):\n"
	OpentronsOutput = OpentronsOutput + "\ttiprack_1 = protocol.load_labware('opentrons_96_tiprack_" + PipTip + "', " + TLocation + ")\n"
	OpentronsOutput = OpentronsOutput + "\ttube_rack_1 = protocol.load_labware('opentrons_10_tuberack_falcon_4x50ml_6x15ml_conical', " + SLocation + ")\n"

	var Plates = [];
	for (t=0;t<Trays;t++) {
		var Removed = Locations.shift()
		Plates.push("plate_" + (t+1));
		OpentronsOutput = OpentronsOutput + "\tplate_" + (t+1) + " = protocol.load_labware('" + TrayName + "', " + Removed + ")\n"
	}

	var RemainTubes = Tubes - (ATray * Trays)
	if (RemainTubes !=0) {
		var Removed = Locations.shift()
		Plates.push("plate_" + (t+1));
		OpentronsOutput = OpentronsOutput + "\tplate_" + (t+1) + " = protocol.load_labware('" + TrayName + "', " + Removed + ")\n"
	}
	
	OpentronsOutput = OpentronsOutput + "\t" + Pip + " = protocol.load_instrument('" + Pip + "_single', '" + PipArm + "', tip_racks = [tiprack_1])\n"
	OpentronsOutput = OpentronsOutput + "\n\t" + Pip + ".well_bottom_clearance.dispense = 15\n"
	OpentronsOutput = OpentronsOutput + "\n\tsource = tube_rack_1.wells()[" + SPos + "]\n"
	OpentronsOutput = OpentronsOutput + "\tsource_vol = " + SVolume + "\n"
	OpentronsOutput = OpentronsOutput + "\tremain_vol = source_vol\n"
	OpentronsOutput = OpentronsOutput + "\tamounts = [" + AVolume + "]\n"
	OpentronsOutput = OpentronsOutput + "\n\t" + Pip + ".pick_up_tip()\n"

	for (t=0;t<Trays;t++) {
		var Removed = Plates.shift()
		OpentronsOutput = OpentronsOutput + "\n\tfor i in range(" + ATray + "):\n"
		OpentronsOutput = OpentronsOutput + "\t\tdestination = " + Removed + ".wells()[i]\n"
		OpentronsOutput = OpentronsOutput + "\t\tremain_vol = remain_vol-amounts[0]\n"
		OpentronsOutput = OpentronsOutput + "\t\ttemp_remain_vol = (remain_vol)-" + TVol + "\n"
		OpentronsOutput = OpentronsOutput + "\t\tif temp_remain_vol >= " + RVol + ":\n"
		OpentronsOutput = OpentronsOutput + "\t\t\t" + Pip + ".well_bottom_clearance.aspirate = " + SEq + "\n"
		OpentronsOutput = OpentronsOutput + "\t\telse:\n"
		OpentronsOutput = OpentronsOutput + "\t\t\t" + Pip + ".distribute(amounts[0], source, destination, new_tip = 'never', blow_out = True, blowout_location = 'source well')\n"
	}

	if (RemainTubes !=0) {
		var Removed = Plates.shift()
		OpentronsOutput = OpentronsOutput + "\n\tfor i in range(" + RemainTubes + "):\n"
		OpentronsOutput = OpentronsOutput + "\t\tdestination = " + Removed + ".wells()[i]\n"
		OpentronsOutput = OpentronsOutput + "\t\tremain_vol = remain_vol-amounts[0]\n"
		OpentronsOutput = OpentronsOutput + "\t\ttemp_remain_vol = (remain_vol)-" + TVol + "\n"
		OpentronsOutput = OpentronsOutput + "\t\tif temp_remain_vol >= " + RVol + ":\n"
		OpentronsOutput = OpentronsOutput + "\t\t\t" + Pip + ".well_bottom_clearance.aspirate = " + SEq + "\n"
		OpentronsOutput = OpentronsOutput + "\t\telse:\n"
		OpentronsOutput = OpentronsOutput + "\t\t\t" + Pip + ".distribute(amounts[0], source, destination, new_tip = 'never', blow_out = True, blowout_location = 'source well')\n"
	}
		
	document.getElementById("OpentronsOutput").value = OpentronsOutput
}
