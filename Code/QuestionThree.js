
var ten= new Array();
var even= new Array();
var odd= new Array();


for(var i=1;i<=100;i++)
{

    if(i%10==0)
    {
        ten.push(i);
    }
    else if(i%2==0)
    {
        even.push(i);
        
    }
    else if(i%2!=0)
    {
        odd.push(i);
    }

 
}
console.log(ten);
console.log(even);
console.log(odd);