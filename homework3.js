
const f1 = function(a,b) {
		   return a+b 
		}
		
const f2 = function(){
	  	   return "5"
		}

const f3 = function(a,b) {
		   return (a + " " + b)
		}

const f4 = function(a,b,c) {
		s1 = a.toString(10);
		s2 = b.toString(10);
		s3 = c.toString(10);
		   return Math.max(s1.length, s2.length, s3.length)
		}
const f5 = function(a,b) {
		if(a===b){
		   return 0
		} else if (a>b) {
		   return 1
		} else if (a<b) {
		   return -1
		}
		}
const multiply = function(a,b) {
		   return a*b
		}

const divide = function(a,b) {
		   return a/b
		}
const triangleArea = function(base, height) {
		const product =  multiply(base, height);
		   return divide(product, 2)
		}
const numLength = function(a) {
		const n = a.toString(10);
		   return n.length
		}
const f6 = function(a,b,c){
		d = (a+b).length
		if(d>c){	
		   return 1 
		} else {
		   return -1
		}
        } 
const runStuff = function(a,b,c) {
		if(a === "rectangle") {
			return multiply(b,c)
		}   else if(a === "triangle") {
			return triangleArea(b,c)
		}   else {
			return -1
		}
        }
		

		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		