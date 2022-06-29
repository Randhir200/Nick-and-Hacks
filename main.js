function runProgram(input) {
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for(let t=0;t<tc;t++){
       let n = +input[line].trim();
       line++
       //400/10
       let s = 1
       var x=check(n);
       function check(x){
         while(x>=9){
            x=x/10
          }
          return x;
       }
       while(n>1){
         
          if(x==1){
              n = n/10
              x = check(n)
          }else{
              n = n/20//10
              x = check(n)
          }
       }
       if(n==1){
           console.log("Yes")
       }else{
           console.log("No")
       }
       function solve(n){
           if(n%20==0||n%10==0||n==1)
           {return "Yes"}
           else{return "No"}
       }
  
      // console.log(solve(n))
    }
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  