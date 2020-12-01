$(function () { 
    const king ="It me";
    const answers = $("#answer");
    const open = $("#open1");
    const strNoSpace = ["KHÔNG BAO GIÒ BỎ CUỘC","Hà Nội","TOM AND JERRY","FAN TM","1998","UNETI","WAINII","DEV","Mit Tơ Mao"];
    let totalMoney = 2000;
    const money = [50,100,150,200,250,300,400,500];
    // const strNoSpace = str_ans.split(" ").join("");
    for(let i = 0 ; i < strNoSpace.length; i++)
    {
        answers.append(`<div class='col-4'>
                            <div class="ochu__item">
                            <div class="dapan">
                                <span>${strNoSpace[i]}</span>
                            </div>
                            <div class="lopman">
                                <span>?</span>
                            </div>
                            </div>
                        </div>`);
    }
    // 
     const itemAnswer = $(".ochu__item");
    // $.each(itemAnswer, function (i, item) { 
    //     item.addEventListener("click",function () { 
    //         $(this).find(".lopman").addClass("hide");
    //      });
    // });

    // 

    // $("#random").on("click",function(e){
    //     e.preventDefault();
    //     const index = randomCrossword(strNoSpace.length);
    //     $(itemAnswer[index]).find(".lopman").addClass("hide");
    // });

    // 

    printTotal(totalMoney);

    // 
    showNumber("#number",8,money);
    showMoney("#list-money",money);

    let indexAns = 0;
    const listNum = $("#number li a");
    $.each(listNum, function (i, item) { 
        item.addEventListener("click",function () { 
            // $(this).find(".lopman").addClass("hide");
            const id = $(this).attr('data-id');
            $(this).addClass("active");

            // ẩn số tiền đã chọn
            $("#"+id).parent().addClass("active");
            // open.addClass("active");
            // console.log(id);
           
            let playMoney = parseInt(id.split("_").join(""))
            totalMoney -= playMoney;
            printTotal(totalMoney);
            // 
            $("#popup-money").addClass("active");
            setTimeout(() => {
                $("#popup-money .popup_s .lopman").addClass("active");
            }, 500);
            setTimeout(() => {
                $("#popup-money").removeClass("active");
                $("#popup-money .popup_s .lopman").removeClass("active");

            }, 1200);
            displayMoney("#sotien",playMoney);

            // Show SO o

            $(".so_o").html(i+1);
            // Hien Dap An

            setTimeout(() => {
                $(itemAnswer[indexAns]).find(".lopman").addClass("hide");
                indexAns++;
            }, 1700);
            
         })
    });

    // 

    $(".popup-money").on("click",function(){
        $(this).find(".lopman").addClass("active")
    })
    
    // open.on("click",function(){
    //     $(itemAnswer[indexAns]).find(".lopman").addClass("hide")
    //     indexAns++;
    // })
    $("#chot").on("click",function(){
        $(".theend").removeClass("hide");
    });
    $(".closeAns").on("click",function(){
        $(".theend").addClass("hide")
    });
    // 

    const inputA = $("#input");
    inputA.on("keypress",function(e){
        if(e.keyCode === 13)
        {
            $("#popup_answer").addClass("active");
            setTimeout(() => { 
                $("#popup_answer .popup_s .lopman").addClass("active"); 
                $("#dapan-cuoi").html(king);
            }, 1000);
            setTimeout(() => {
                $("#popup_answer").removeClass("active");  
                $(".popup_win").addClass("active");
            }, 2000);
            if($(this).val() === king)
            {
                $("#feeling").html("Chúc Mừng Bạn Đã Trả Lời Đúng");

                $(".theend").addClass("hide");
                setTimeout(() => {
                    $(".theme").addClass("active");
                }, 1000);
                $(".show-all").addClass("active");
                $("#i-da").html(king);
                $("#m-end").html(totalMoney);
                $("._2").html(king);
            }
            else{
                $("#feeling").html("Sai Rồi :(((");
                $(".theend").addClass("hide");
                $(".money").children().html(0);

            }
        }      
    });


    // Show Tat Ca ItemAnswer
    
    $("#show-all").on("click",function(){
        for(let i = 0 ; i < itemAnswer.length ; i++){
            $(itemAnswer[i]).find(".lopman").addClass("hide");
        }
    });

    // Close Modal

    $("#close-modal").on("click",function () { 
        $(".popup_win").removeClass("active");
     });


 });



function randomCrossword(n) { 
     return [...Array(n).keys()].sort((a, b) => Math.random() - 0.5).slice(0, n);
}
function showNumber(selector,n,arr){
    const abc = randomCrossword(arr.length);
    for(let i = 0 ; i < abc.length ; i++)
    {

        $(selector).append(`<li><a href="#"  data-id="_${arr[abc[i]]}">${i+1}</a></li>`);
    }
}

function showMoney(selector,arr){
    for(let i = 0 ; i < arr.length ; i++)
    {
        $(selector).append(`<li><span id="_${arr[i]}">${arr[i]}</span></li>`);
    }
}


function printTotal(money) { 
    $(".money").children().html(money);
 }

 function displayMoney(selector , money){

    $(selector).html(money);

 }



