function Account() {
    //creation of account datails
    var AccountDetails=[
        {
            accountNumber: 1000023458,
            cardNumber:123456,
            pin:3245,
            accountBalance:2000,
        },
        {
            accountNumber: 1000023455,
            cardNumber:123789,
            pin:4321,
            accountBalance:2000,
        },
        {
            accountNumber: 10000234577,
            cardNumber:123654,
            pin:7654,
            accountBalance:2000
        },
        {
            accountNumber: 10000234533,
            cardNumber:123777,
            pin:5432,
            accountBalance:2000,
        },
        {
            accountNumber: 10000234544,
            cardNumber:123444,
            pin:9875,
            accountBalance:2000,
        }
    ]
    //creation of bank
      function bank(){
        //creation of ATM
        function ATM(cardNo,pin,balance){
            for(let account of AccountDetails){
            if(cardNo==account.cardNumber ){
               if(pin==account.pin){
                console.log("CurrentBalance: "+account.accountBalance);
                account.accountBalance=account.accountBalance + balance;
                console.log("current Amount:"+ account.accountBalance);
                return ;
               }else{
                console.log("Enter the valid pin");
                return ;
               }
            }else{
                console.log("Enter the valid card number");
                return ;
            }
        }
    }
          //creation of CDM
        function CDM(cardNo,pin,balance){
           
        for(let account of AccountDetails){
            if(cardNo==account.cardNumber ){
               if(pin==account.pin){
                   if(balance<=account.accountBalance){
                       console.log("Withdraw Amount: "+ balance);
                       account.accountBalance=account.accountBalance - balance;
                       console.log("CurrentBalance: "+account.accountBalance);
                       return ;
                   }else{
                    console.log("Insufficient Balance");
                    return ;
                   }
               }else{
                console.log("Enter the valid pin");
                return ;
               }
            }else{
                console.log("Enter the valid card number");
                return ;
            }
         }
        }
       return{
            ATM,CDM
       }; 
    }
    //creation of operation function
      function operation(){
        while(true){
            console.log("1.deposit,2.withdraw");
            let value=prompt("Enter the value");
            if(value==="deposit"){
                let cardno=123456;
                let pin=3245;
                let accountbal=8000;
                bank().ATM(cardno,pin,accountbal);
                break;
            }else if(value==="withdraw"){
                let cardno=123456;
                let pin=3245;
                let accountbal=1000;
                bank().CDM(cardno,pin,accountbal);
                break;
            }else{
                return
            }
        }
      
    }
        return{
            bank,operation
        };
    
}
Account().operation();