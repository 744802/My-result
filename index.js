function result()
 {
     //Nithin
     var student= {

        NITHIN : 
        {
            sem1: "70",
            sem2: "80",
            sem3: "80" 
        },
        SUBHAJIT :
        {
            sem1: "100",
            sem2: "100",
            sem3: "100"
        },
        NIVESH:
        {
            sem1: "91",
            sem2: "92",
            sem3: "93" 
        },
        DARSHAN :
        {
            sem1: "05",
            sem2: "02",
            sem3: "34"
        }
    }

    var studentname=document.getElementById("studentname").value;
    var input=studentname.toUpperCase();
    var definition=student[input];
    var output=document.getElementById("output");
    
    if(definition==undefined)
     {
        output.innerHTML='<hr> There is no information of the student.<hr> ';
     }
     else 
     {
        output.innerHTML="<hr>Sem1 score is :.<hr>" +definition.sem1+"<hr> Sem2 score is:.<hr>"  +definition.sem2+"<hr> Sem3 score is:.<hr>"  +definition.sem3;
        
     }
    };

