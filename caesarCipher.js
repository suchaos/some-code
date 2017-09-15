var lower = 'abcdefghijklmnopqrstuvwxyz'
/*
单个字母向右移动 shitf 个位置
*/
var shiftOneLetter = function(letter, shift) {
    var s = letter.toLowerCase()
    var index = lower.indexOf(s)
    if (index > -1) {
        if (index + shift >= 26) {
            s = lower[index + shift - 26]
        } else {
            s = lower[index + shift]
        }
    }
    return s
}
/*
对字符串 string 进行凯撒加密 -- 每个字母向右移动 shift
*/
var caesarCipher = function(string, shift) {
    var s = string.toLowerCase()
    var result = ''
    for (var i = 0; i < s.length; i++) {
        result += shiftOneLetter(s[i], shift)
    }
    return result
}
/*
对字符串 string 进行凯撒解密 -- 返回26种结果
*/
var decodeCaesar = function(string) {
    var s = string.toLowerCase()
    var result = []
    for (var i = 0; i < 26; i++) {
        result[i] = caesarCipher(s, i)
    }
    return result
}

var string = "VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX"
//result[23] = "sometimes i want to chat with you,but i have no reason to chat with you"
var result = decodeCaesar(string)
