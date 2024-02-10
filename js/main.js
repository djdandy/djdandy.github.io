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
