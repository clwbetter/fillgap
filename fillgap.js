/*             - Water Filling Problem -
 *
 * Imagine we have several columns of bricks forming a
 * wall-like structure just like this,:
 *
 *	 1 2 3 4 5 6 7 8 9 a b c d e f
 *    +-+     +-+       +-+       +-+
 *    +-+ +-+-+-+ +-+ +-+-+     +-+-+
 *    +-+ +-+-+-+ +-+-+-+-+   +-+-+-+
 *    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  -----------------------------------Ground
 *                fig. 1
 *
 * into which we can pour water.
 *
 * Now given an array of how high each column is, could
 * you calculate how many water we can pour into gaps of
 * this structure?
 *
 * For example, the structure above could be represented
 * with such an array:
 *    [4,1,3,3,4,1,3,2,3,4,1,1,2,3,4]
 *
 * and of course here the answer would be 21.
 *
 * You should implement the fillGap() function, which
 * takes in an array representing bricks, and gives out
 * how many water we can pour in it.
 *
 *
 * This quest comes with a simple test suite, so that you
 * can easily check your answer just by execting this file.
 *
 */

function fillGap(bricks) {

    var waterResult = 0;
    var maxHeight = Math.max.apply(null,bricks);
    var matrix = [];
    for (i = 0;i<maxHeight;i++){
        var eachLevel = [];
        for(j = 0;j < bricks.length;j++){
            var a = (bricks[j] - i) > 0 ? 1 : 0;
            eachLevel.push(a);
        }
        matrix.push(eachLevel);
    }
    console.log(matrix);
    var zeroNum = function(target){
        result = 0;
        for(i = 0;i < target.length;i++){
            if (target[i] == 0){
                result++;
            }
        }
        return result;
    };
    var missWater = function(target){
        var result = 0;
        var lNum,rNum;
        for(i = 0;i<target.length;i++){
            if(target[i] == 1){
                lNum = i;
                break;
            }
        }
        for(j = target.length - 1;j>=0;j--){
            if(target[j] == 1){
                rNum = target.length - 1 - j;
                break;
            }
        }
        result = lNum + rNum;
        return result;
    };
    for (c = 0;c<matrix.length;c++){
        var dWater = zeroNum(matrix[c]) - missWater(matrix[c]);
        waterResult += dWater;
    }
    return waterResult;
    /*
     if (bricks instanceof Array){
     var waterResult = 0;
     var watering = function(le,re){
     var flag = false;
     var dick;
     //find dick
     for (i = le + 1;i < re;i++){
     if(bricks[i]>=bricks[le] || bricks[i]>=bricks[re]){
     flag = true;
     dick = i;
     }
     }
     if(flag){   //there is a bigger dick between le and re
     watering(dick,re);
     watering(le,dick);
     }else{      //there is no bigger dick between le and re , start watering
     var dWater = 0;
     if ( (re-le) > 1){
     var smallerDick = Math.min(bricks[le],bricks[re]);
     var dickSum = 0;
     for (j = le + 1 ; j < re;j++){
     dickSum+= bricks[j];
     }
     dWater = (re - le - 1) * smallerDick - dickSum;
     }
     waterResult += dWater;
     }
     };
     watering(0,bricks.length - 1);
     console.log(waterResult);
     return waterResult;
     }else{
     return "滚";
     }
     */
};






// WARN: Don't touch things below me.
function expect(reality, expectation) {
    if (reality != expectation) {
        console.error("[FAIL] expect " + expectation + " while got " + reality);
    }
    else {
        console.log("[PASS]");
    }
}


expect(
    fillGap([1,3]),
0);

expect(
    fillGap([1, 0, 1]),
1);

expect(
    fillGap([3, 0, 2]),
2);

expect(
    fillGap([4,5,2,3,3,2,3,3,1,5,3,3,3,4]),
21);