//your JS code here. If required.
const targetelm= document.getElementById("level");
if(targetelm){
	
	let domlevel = 0;
	 let parentelm = targetelm.parentNode;
	
	 while ( parentelm.tagName !== 'HTML') {
      domLevel++;
      alert(domlevel);
	 }
	
}




