exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var aa = Math.pow(2,bit-1);
    var bb = num & aa;

    if(aa == bb) return 1;

    return 0;

  },

  base10: function(str) {
    return parseInt(str,2);
  },

  convertToBinary: function(num) {
     var a = num.toString(2);
     var res = '';

     for(i=0;i<8-a.length;i++)
     {
        res += '0'
     }

     return res+a;
  },

  retr_dec:function(num) {

    var str = ''+num;
    var index = str.indexOf('.');
    if(index == -1)
    {
      return 0;
    }
    return (str.split('.')[1] || []).length;
  },
  multiply: function(a, b) {
    
    var a1 = this.retr_dec(a);
    var a2 = this.retr_dec(b);
    var f = (a1>a2)?a1:a2;
    var ret = parseFloat((a*b).toFixed(f));
    return ret;
  }
};
