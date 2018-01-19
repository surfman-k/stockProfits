var assert = require("chai").assert;
var maxProfit = require("../stocks");

describe("Stock Trading Profit", function() {
  it("should return a value if a profit can be made.", function() {
    var prices = [45, 24, 35, 31, 40, 38, 11];
    var result = maxProfit(prices);
    assert.isAbove(result, 0, "");
  });
  
  it("should return -1 if a profit cannot be made.", function(){
  	var prices = [50, 45, 40, 35, 30, 25];
  	var result = maxProfit(prices);
  	assert.isBelow(result, 0, "");
  });
});
