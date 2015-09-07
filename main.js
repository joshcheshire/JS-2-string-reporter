var input= prompt("Enter any word!")

var name= 'snake'

var info= " you entered " + name +	
	"\n There are " + name.length + " characters in your word." +
	"\n The third letter is " + name.charAt(2) + 
	"\n Lowercase " + name.toLowerCase() +
	"\n Uppercase " + name.toUpperCase() +
	"\n I have wanted a " + name + " since I was a little boy" +
	"\n Subword " + name.substring(1,4)

alert(info)

