module.exports = function check(str, bracketsConfig) {
  const arr = str.split('');	
	let openPos;   

	for (let i = 0; i < arr.length; i++) {

		 bracketsConfig.forEach((item, index) => {
			  if (item[0] === arr[i]) {
					openPos = index;                             
			  }            
		 }); 

		 if (!openPos && openPos != 0) {
			  return false;
		 }

		 const closePos = arr.indexOf(bracketsConfig[openPos][1], i + 1);
		 if (closePos === -1) {
			  return false;
		 }

		 if (closePos === i + 1) {
			  arr.splice(i, 2);
			  
			  return check(arr.join(''), bracketsConfig);            
		 }
	}       
	
	return arr.length === 0;
}
