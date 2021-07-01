//problem-1:You are provided with a number, "N". Find its factorial

let factorial = (n)=>{
 if(n==1 || n==0){
     return 1;
 }
 else
 return n*factorial(n-1);
}

factorial(5)

//problem-2:You are given with a number "N", find its cube.
let cube = (m)=>{
    return m*m*m;
}
cube(2)

//problem-3:The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the
//triangle. You are provided with the side "a". Find the area of the equilateral triangle.

let area = (a)=>{
    return (((Math.sqrt(3))*(a*a))/4).toFixed(2);
}
area(20)

//problem-4:You will be provided with a number. Print the number of days in the month
//corresponding to that number.

let printNoDays = (n)=>{
    if(!(n>0 && n<=12)){
    console.log("Enter valid range between 1 - 12")
    }else if(n== 2){
        return 28;
    }else{
        if(n%2==0){
            return 30
        }else{
            return 31
        }
    }

    }
printNoDays(9)

//problem-5: You are given with a number A i.e. the temperature in Celcius. Write a program to
//convert this into Fahrenheit
let tempConverter =(c)=>{
    return c*9/5+32
}
tempConverter(12)

//problem-6:Write a code to get an integer N and print the sum of values from 1 to N.
let sum = (n)=>{
    return (n*(n+1))/2
}
sum(10)

//problem-7:You are provided with a number "N", Find the Nth term of the series: 1 , 4, 9, 16, 25,
//36, 49, 64, 81, .......
//problem-8Let "A" be a string. Remove all the whitespaces and find it's length.

let str = (c)=>{
    console.log(c)
  let string=  c.replace(/\s+/g, '');;
  console.log(string.lenght)
}
str("hello world")

//problem-9You are given the coefficients of a quadratic equation in order A, B & C.
// Where A is the coefficient of X2, B is the coefficient of X and C is the constant
// term in the most simplified form.

let roots=(a, b, c)=>{
    let x = ((-b + (Math.sqrt((b*b )- (4*a*c))))/2*a).toFixed(2)
    let x_ = ((-b - (Math.sqrt((b*b)-(4*a*c))))/2*a).toFixed(2)
    console.log(`x =${x}, x=${x_}`)
}

roots(1,5,6)

//problem-10:Loki wants to steal the tesseract but in order to do so, he has to rearrange the elements
// in an array in a specific manner which is mentioned in a clue. The clue says ‘cursed
// are the odd and sorted are the even’. Loki manages to decode the clue which translates
// to “sort the even positioned elements of an array, starting from the element at index 0,
// in ascending order”. Manipulate the array so as to help Loki steal the tesseract.


/*Given an array of N elements.find the number of occurences of each character and
print it in the decreasing order of occurences, if 2 or more number occurs the same
number of times, print the numbers in decreasing order.*/

let printElements = ()=>{
    let arr =[1,1,2,2,3,4,4];
    let pointer = arr[0];
    for(i=0;i<arr.length;i++)
        if(pointer == arr[i]){

        }
}


//problem12:Simi is learning about palindromic numbers. Her teacher gave him the task to count
// all palindromic numbers present in that range.Simi has told you about this and want
// your help. You design an algorithm in order to help simi.

	function createPalindrome(input, b, isOdd)
	{
		let n = input;
		let palin = input;

	
		if (isOdd == 1)
			n = parseInt(n / b, 10);

			while (n > 0)
		{
			palin = palin * b + (n % b);
			n = parseInt(n / b, 10);
		}
		return palin;
	}

	 function createPalindrome(input, b, isOdd)
    {
        let n = input;
        let palin = input;
 
            if (isOdd == 1)
            n = parseInt(n / b, 10);
 
        
        while (n > 0)
        {
            palin = palin * b + (n % b);
            n = parseInt(n / b, 10);
        }
        return palin;
    }
 
  
    function generatePalindromes(n)
    {
        let number;
 
      
        for (let j = 0; j < 2; j++)
        {
 
            
            let i = 1;
            while ((number = createPalindrome(i, 10, j % 2)) < n)
            {
                document.write(number + " ");
                i++;
            }
        }
    }
     
    let n = 104;
    generatePalindromes(n);

    //problem-13Ajay is given a series(In example).he gone through the series but unable to understand
// it properly,he has hired you.Your task is to understand the series and print the series
// 2,6,12,20,30... .You are given with a number ‘n’. Find the nth number of series.

let series=(n)=>{
    let s = 0;
    for(i=0;i<=n;i++){
        s= i+(i*i);
    }
    return s;
}
series(5)

