const appendAndDelete = (s, t, k) => {
    if(s === t){
        return 'Yes';
    }
    if(s[0] !== t[0] ) {
        return 'No';
    }

    if(s.length < t.length) {
        return 'No'
    }
    const arr = [];
    for(let i = 0; i<s.length; i++){
        if(s[i] === t[i]){
            arr.push(s[i])
        } else {
            break
        }
    }
    const common = arr.join('');
    const deleteFromS = s.split(common)[1];
    const appendToT = t.split(common)[1];
    const totalOp = deleteFromS.length + appendToT.length;
    if(totalOp > k) {
        return 'No'
    } else {
        return 'Yes'
    }
}

module.exports = appendAndDelete;
