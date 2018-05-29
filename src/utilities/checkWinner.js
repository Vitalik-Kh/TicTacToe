
const checkWinner = (arr) => {      
    let start = 0, step = 4, length = arr.length;
    const arrVertical = [], arrDiagon = [];
        
    while (start<=2) {
        for (i=start; i<arr.length; i+=3) {
            arrVertical.push(arr[i]);
        }
        start++;
    }
        
    start = 0
    while(start<3) {
        for (i=start; i<length; i+=step) {
            arrDiagon.push(arr[i])
        }
        start+=2;
        step-=2;
        length-=2;
    }
              
    function replacer(match, p1, p2, p3) {
        return [p1, p2, p3].join(' ');
    }
    let strHorizontal, strVertical, strDiagon;
    const reAddSpaces = /(^\w{3,3})(\w{3,3})(\w{3,3}$)/;
    strHorizontal = arr.join('').replace(reAddSpaces, replacer);
    strVertical = arrVertical.join('').replace(reAddSpaces, replacer);
    strDiagon = arrDiagon.join('').replace(reAddSpaces, replacer);
        
    const reWin = /^(?:X{3,3}|O{3,3})|\b(?:X{3,3}|O{3,3})\b|(?:X{3,3}|O{3,3})$/;
    const match = 
        reWin.test(strHorizontal) ||
        reWin.test(strVertical) ||
        reWin.test(strDiagon);
    
    return match;
}

export default checkWinner;