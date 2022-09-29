$(function(){
    
    //待办事项
    //1.游戏结束的判定 
    //2.重新开始游戏

    //隐藏游戏结束提示
    var gameOverWarn=$('.main .gamebody .gameOverWarn');
    gameOverWarn.hide();

    //获得重新开始游戏和返回游戏的按钮
    var resetGameButton=$('.resetButton');
    var resumeGameButton=$('.resumeButton');

    //记录最高分
    let highscore=0;
    //记录现在分数
    let curscore=0;
    //开始游戏
    initGame();
    const __matrix_m__=4;
    const __matrix_n__=4;
    //记录是否生成新的元素
    var needNewNumber=false;

    function initGame(){
        
        //当前积分设为0
        curscore=0;
        //生成两个数字
        GenerateNumber();
        GenerateNumber();
        //更新现在的分数
        updateScore();
        //给各自刷色
        refreshColor();
    }
    
    
    //游戏的主流程：检查键盘输入（上，下，左，右）
    $('body').keydown(function(e){
        var ipt=e.keyCode;
        console.log({ipt});
        needNewNumber=false;
        switch(ipt){
            case 37:
                move('left');
                break;
            case 38:
                move('up');
                break;
            case 39:
                move('right');
                break;
            case 40:
                move('down');
                break;
        }
        if(needNewNumber){
            GenerateNumber();
        }
        updateScore();
        refreshColor();

        if(isGameOver()){
            GameOver();
            // repeatGame();
        }
    })
    //点击重新开始游戏
    resetGameButton.click(repeatGame);
    resumeGameButton.click(resumeGame);


    //整体向不同方向移动
    function move(direction){
        console.log("move:"+direction);
        var nonEmptyItems=getAllNonEmptyItems();
        if(direction=='left' || direction=='up'){
            for(var i=0;i<nonEmptyItems.length;i++){
                itemMove(nonEmptyItems.eq(i),direction);
            }
        }else if(direction=='right' || direction=='down'){
            for(var i=nonEmptyItems.length-1;i>=0;i--){
                itemMove(nonEmptyItems.eq(i),direction);
            }
        }
    }

    //一个item向direction方向移动
    function itemMove(nonEmptyItem,direction){
        //console.log("itemMove:",nonEmptyItem,direction);
        var sideItem=getSideItem(nonEmptyItem,direction);
        //已经在边缘上无需移动
        if(sideItem.length==0){
            // console.log("已经在边缘上无需移动");
            return
        //下一位置上的数字和此数字一样
        }else if(sideItem.html()==nonEmptyItem.html()){
            // console.log("下一位置上的数字和此数字一样");
            var calcVal=sideItem.html()*2;
            sideItem.html(calcVal);
            nonEmptyItem.html('').removeClass('nonEmptyitem').addClass('Emptyitem');
            needNewNumber=true;
        //下一位置为空
        }else if(sideItem.html()==""){
            // console.log("下一位置为空");
            sideItem.html(nonEmptyItem.html()).removeClass('Emptyitem').addClass('nonEmptyitem');
            nonEmptyItem.html('').removeClass('nonEmptyitem').addClass('Emptyitem');
            itemMove(sideItem,direction);
            needNewNumber=true;
        //下一位置上的数字和此数字不一样，无需移动    
        }else if(sideItem.html()!=nonEmptyItem.html()){
            // console.log("下一位置上的数字和此数字不一样，无需移动");
            return
        }
    }
    //游戏结束后弹窗重新开始游戏界面
    function GameOver(){
        var gameOverWarn=$('.main .gamebody .gameOverWarn');
        gameOverWarn.show();

    }

    //重新开始游戏
    function repeatGame(){
        resumeGame();
        var nonEmptyItems=getAllNonEmptyItems();
        for(var i=0;i<nonEmptyItems.length;i++){
            nonEmptyItems.eq(i).html('').removeClass('nonEmptyitem').addClass('Emptyitem');
        }
        initGame();
    }

    //返回游戏
    function resumeGame(){
        gameOverWarn.hide();
    }


    //判断游戏是否结束
    function isGameOver(){
        var emptyItems=getAllEmptyItems();
        if(emptyItems.length>0){
            return false;
        }

        var nonEmptyItems=getAllNonEmptyItems();
        for(var i=0;i<nonEmptyItems.length;i++){
            var downItem=getSideItem(nonEmptyItems.eq(i),'down');
            if(downItem.html()==nonEmptyItems.eq(i).html()){
                return false;
            }
            var rightItem=getSideItem(nonEmptyItems.eq(i),'right');
            if(rightItem.html()==nonEmptyItems.eq(i).html()){
                return false;
            }
        }
        return true;
    }


    //更新现在的分数
    function updateScore(){
        $('.main .gamebody .currentScore p').html(curscore);
        if(curscore>highscore){
            $('.main .gamebody .maxScore p').html(curscore);
            highscore=curscore;
        }
    }

    //在空格上生成一个数字
    function GenerateNumber(){
        const numvalid=[2,2,4];
        var newRndNum=numvalid[getRandom(0,2)];
        curscore+=newRndNum;
        var emptyitem=getOneEmptyItem();
        emptyitem.html(newRndNum).removeClass('Emptyitem').addClass('nonEmptyitem');
    }

    //返回下一位置的item
    function getSideItem(nonEmptyItem,direction){
        var x=nonEmptyItem.attr('x')-0;
        var y=nonEmptyItem.attr('y')-0;
        if(direction=='down'){
            x+=1;
        }else if(direction=='up'){
            x-=1;
        }else if(direction=='right'){
            y+=1;
        }else if(direction=='left'){
            y-=1;
        }
        return $('.gamebody .items .x'+x+'y'+y);
    }

    //随机返回一个空item，若没有则返回空
    function getOneEmptyItem(){
        var emptyitems=getAllEmptyItems();
        if(!emptyitems.length)return emptyitems;
        var emptyitem=emptyitems.eq(getRandom(0,emptyitems.length-1));
        return emptyitem;
    }

    //返回所有空item，若没有则返回空
    function getAllEmptyItems(){
        var emptyitems=$('.gamebody .items .Emptyitem');
        return emptyitems;
    }

    //返回所有有数字item，若没有则返回空
    function getAllNonEmptyItems(){
        var nonEmptyitems=$('.gamebody .items .nonEmptyitem');
        return nonEmptyitems;
    }

    //生成包括[min,max]的随机数
    function getRandom(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }


    //刷新颜色
    function refreshColor(){
        var items=$('.gamebody .items .item');
        for(var i=0;i<items.length;i++){
            switch(items.eq(i).html()){
                case '':
                    items.eq(i).css('background-color','#CCC1B2');
                    break;
                case '2':
                    items.eq(i).css('background-color','#EFE5DA');
                    break;
                case '4':
                    items.eq(i).css('background-color','#ECE0C8');
                    break;
                case '8':
                    items.eq(i).css('background-color','#F1B179');
                    break;
                case '16':
                    items.eq(i).css('background-color','#F1A27E');
                    break;
                case '32':
                    items.eq(i).css('background-color','#FF654E');
                    break;
                case '64':
                    items.eq(i).css('background-color','#F65B42');
                    break;
                case '128':
                    items.eq(i).css('background-color','#F8CF6D');
                    break;
                case '256':
                    items.eq(i).css('background-color','#EFCA62');
                    break;
                case '512':
                    items.eq(i).css('background-color','#F5CA00');
                    break;
                case '1024':
                    items.eq(i).css('background-color','#EDC241');
                    break;
                case '2048':
                    items.eq(i).css('background-color','#AC8ABC');
                    break;
                default:
                    items.eq(i).css('background-color','#CCC1B2');
            }
        }
    }


});