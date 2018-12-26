/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    var allEmails = [];
    var len = emails.length;
    for(let i=0; i<len; i++){
        let check = emails[i].substring(0,emails[i].indexOf('@'));
        check = check.replace(/[.]/g, '')
        while(check.includes('+')){
           check=check.match(/(.*)[+]/g)
           check=check[0].substring(0,check[0].length-1)
        }
       check=check+emails[i].substring(emails[i].indexOf('@'))
        if(!allEmails.includes(check))  allEmails.push(check);
    }
    return allEmails.length;
};

