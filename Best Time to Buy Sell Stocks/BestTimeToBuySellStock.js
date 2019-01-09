var maxProfit = function(prices) {
    var len = prices.length;
        var maxprofit = 0;
        var minprice = 9007199254740992
        for (var i = 0; i < len; i++) {
            if (prices[i] < minprice)
                minprice = prices[i];
            else if ((prices[i] - minprice) > maxprofit)
                maxprofit = prices[i] - minprice;
        }        
    return maxprofit
};