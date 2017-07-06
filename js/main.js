/**
 * OicCalculator (Angular Controller)
 * By Kevin Segal @TheInnovatorsAgency, 3/3/2016
 * Version 2.0
 */

/*global moment*/

// Main app
function OicCalculatorCtrl($scope) {
  
    // Init moment for date parsing/setting/calculation
    moment().format();
  
    // primary functions
    $scope.calculate = function() {
        $scope.resultIncome = oicCalculator.resultIncome($scope);
        $scope.resultEquity = oicCalculator.resultEquity($scope);
        $scope.resultAssets = oicCalculator.resultAssets($scope);
        
          $scope.debtAmount1 = oicCalculator.resultDebtAmount1($scope);
          $scope.debtAmount2 = oicCalculator.resultDebtAmount2($scope);
          $scope.debtAmount3 = oicCalculator.resultDebtAmount3($scope);
            $scope.resultDebtTotal = oicCalculator.resultDebtTotal($scope);
        
          $scope.resultExpireDate = oicCalculator.resultExpireDate($scope);
          $scope.resultExpireDate2 = oicCalculator.resultExpireDate2($scope);
          $scope.resultExpireDate3 = oicCalculator.resultExpireDate3($scope);
          
          $scope.resultMonthsLeft = oicCalculator.resultMonthsLeft($scope);
          $scope.resultMonthsLeft2 = oicCalculator.resultMonthsLeft2($scope);
          $scope.resultMonthsLeft3 = oicCalculator.resultMonthsLeft3($scope);
          
        $scope.resultLongestStatute = Math.max($scope.resultMonthsLeft, $scope.resultMonthsLeft2, $scope.resultMonthsLeft3);
        
        $scope.resultdebtDateRej = oicCalculator.debtDateRej($scope);
        $scope.resultdebtDateBank = oicCalculator.debtDateBank($scope);
        $scope.resultdebtDateCDP = oicCalculator.debtDateCDP($scope);
        
        $scope.resultAddMonths = $scope.resultdebtDateRej + $scope.resultdebtDateBank + $scope.resultdebtDateCDP;
        
        $scope.resultTotalAddMonths = $scope.resultLongestStatute*1 + $scope.resultAddMonths*1;
        
        $scope.resultMaxExpirationDate = moment(Math.max($scope.resultExpireDate, $scope.resultExpireDate2, $scope.resultExpireDate3)).add($scope.resultAddMonths, 'months').format('MMMM Do, YYYY');
       
        $scope.resultMaxPayAmount = $scope.resultIncome*$scope.resultTotalAddMonths;
        $scope.resultPayAmount = oicCalculator.resultPayAmount($scope);
        $scope.resultDebtLessAssets = $scope.resultDebtTotal - $scope.resultAssets;
        $scope.resultTitle = oicCalculator.resultTitle($scope);
        $scope.resultCopy = oicCalculator.resultCopy($scope);
        $scope.resultDownPayment = ($scope.resultPayAmount) * 0.2;
        $scope.resultPayments = ($scope.resultPayAmount - $scope.resultDownPayment) / 5;
    };
}

// The Calculator
var oicCalculator = (function() {

    var result = {};
    
    result.resultIncome = function(scope) {
      if (typeof scope.resultIncome !== 'undefined') {
        var resultIncome = scope.assetIncome;
        return resultIncome;
      } else {
        return 0;
      }
    };
    
    // returns taxpayer's home equity (user input - 20%)
    result.resultEquity = function(scope) {
        if (typeof scope.assetEquity !== 'undefined') {
            var resultEquity = scope.assetEquity * 0.8;
            return resultEquity;
        } else {
            return 0;
        }
    };

    // returns taxpayer's total assets (home equity from above + user input)
    result.resultAssets = function(scope) {
        if (typeof scope.assetQuickSale !== 'undefined') {
            var resultAssets = (scope.assetQuickSale * 1) + (scope.resultEquity * 1);
            return resultAssets;
        } else {
            return 0;
        }
    };
    
    result.resultDebtAmount1 = function(scope) {
      if (typeof scope.debtAmount !== 'undefined') {
            return scope.debtAmount;
        } else {
              return 0;
        }
    };
    
    result.resultDebtAmount2 = function(scope) {
      if (typeof scope.debtAmount2 !== 'undefined') {
            return scope.debtAmount2;
        } else {
            return 0;
        }
    };
    
    result.resultDebtAmount3 = function(scope) {
      if (typeof scope.debtAmount3 !== 'undefined') {
            return scope.debtAmount3;
        } else {
            return 0;
        }
    };
    
    
    // returns total IRS debt (from user input fields)
    result.resultDebtTotal = function(scope) {
        var debtTotalAmount = scope.debtAmount1 + scope.debtAmount2 + scope.debtAmount3;
        if (typeof debtTotalAmount !== 'undefined') {
            return debtTotalAmount;
        } else {
            return 0;
        }
    };
   
    // #1 returns expiration date of top/most recent IRS assessment date (user input+10years)
    result.resultExpireDate = function(scope) {
        if (typeof scope.debtDate !== 'undefined') {
            var debtDate = moment(scope.debtDate);
            var expirationDate = debtDate.add(10, 'years');
            var resultExpireDate = expirationDate;
            return resultExpireDate;
        } else {
            return 0;
        }
    };
    
      // #2 returns expiration date of top/most recent IRS assessment date (user input+10years)
      result.resultExpireDate2 = function(scope) {
          if (typeof scope.debtaddDate2 !== 'undefined') {
              var debtaddDate2 = moment(scope.debtaddDate2);
              var expirationDate2 = debtaddDate2.add(10, 'years');
              var resultExpireDate2 = expirationDate2;
              return resultExpireDate2;
          } else {
              return 0;
          }
      };
      
      // #3 returns expiration date of top/most recent IRS assessment date (user input+10years)
      result.resultExpireDate3 = function(scope) {
          if (typeof scope.debtaddDate3 !== 'undefined') {
              var debtaddDate3 = moment(scope.debtaddDate3);
              var expirationDate3 = debtaddDate3.add(10, 'years');
              var resultExpireDate3 = expirationDate3;
              return resultExpireDate3;
          } else {
              return 0;
          }
      };
      
    
    // #1 returns month count from current date to expiration date
    result.resultMonthsLeft = function(scope) {
        if (typeof scope.debtDate !== 'undefined') {
            var debtDate = moment(scope.debtDate).add(10, 'years');
            var resultMonthsLeft = moment().diff(debtDate, 'months');
            return Math.round(resultMonthsLeft*-1);
            //return Math.round((resultMonthsLeft*-1)/30.417);
        } else {
            return 0;
        }
    };
    
      // #2 returns month count from current date to expiration date
      result.resultMonthsLeft2 = function(scope) {
          if (typeof scope.debtaddDate2 !== 'undefined') {
              var debtaddDate2 = moment(scope.debtaddDate2).add(10, 'years');
              var resultMonthsLeft2 = moment().diff(debtaddDate2, 'months');
              return Math.round(resultMonthsLeft2*-1);
              //return Math.round((resultMonthsLeft2*-1)/30.417);
          } else {
              return 0;
          }
      };
      
      // #3 returns month count from current date to expiration date
      result.resultMonthsLeft3 = function(scope) {
          if (typeof scope.debtaddDate3 !== 'undefined') {
              var debtaddDate3 = moment(scope.debtaddDate3).add(10, 'years');
              var resultMonthsLeft3 = moment().diff(debtaddDate3, 'months');
              return Math.round(resultMonthsLeft3*-1);
              //return Math.round((resultMonthsLeft3*-1)/30.417);
          } else {
              return 0;
          }
      };
  
    
    // result of offer in compromise rejection
    result.debtDateRej = function(scope) {
      if (typeof scope.debtDateRej !== 'undefined') {
            var debtDateRej = scope.debtDateRej;
            return debtDateRej;
        } else {
          return 0;
        }
    };
    
    // result of bankruptcy
    result.debtDateBank = function(scope) {
      if (typeof scope.debtDateBank !== 'undefined') {
            var debtDateBank = scope.debtDateBank + 6;
            return debtDateBank;
        } else {
          return 0;
        }
    };
    
    // result debt date CDP
    result.debtDateCDP = function(scope) {
      if (typeof scope.debtDateCDP !== 'undefined') {
            var debtDateCDP = scope.debtDateCDP;
            return debtDateCDP;
        } else {
          return 0;
        }
    };
    
    // resulting total of additional months
    result.resultAddMonths = function(scope) {
        var resultAddMonths = scope.debtDateRej + scope.debtDateBank + scope.debtDateCDP;
        return resultAddMonths;
    };
    
    result.resultMaxExpirationDate = function(scope) {
      var maxExp = Math.max(scope.resultExpireDate, scope.resultExpireDate2, scope.resultExpireDate3);
      var timeadded = scope.resultAddMonths;
      return moment(maxExp, moment.ISO_8601).add(timeadded, 'months').format("MMMM Do, YYYY");
    };
    
    // returns max possible total of taxpayer payments to IRS (monthly available income * [number of months left + additional months])
    result.resultMaxPayAmount = function(scope) {
      var addMonths = scope.resultAddMonths;
      var maxMonths = scope.resultMonthsLeft;
      if (typeof scope.addMonths !== 'undefined') {
        var resultAddedMonths = scope.assetIncome*((maxMonths*1)+(addMonths*1));
        return resultAddedMonths;
      } else {
        var resultNoAdd = scope.assetIncome*(maxMonths*1);
        return resultNoAdd;
      }
    };
    
    // returns offer pay amount (monthly available income * 12)
    result.resultPayAmount = function(scope) {
        if (typeof scope.assetIncome !== 'undefined') {
            var resultPayAmount = scope.assetIncome*12;
            return resultPayAmount;
        } else {
            return 0;
        }
    };
    
    // returns the response for form submit (either success or fail)
    result.resultTitle = function(scope) {
        if (scope.resultDebtLessAssets > scope.resultMaxPayAmount) {
            $('#resultBox').removeClass('fail').addClass('success');
            $('#resultCalculations').removeClass('hide');
            return scope.resultTitle = 'The Taxpayer MAY qualify for an Offer in Compromise.';
        } else {
            $('#resultBox').removeClass('success').addClass('fail');
            $('#resultCalculations').addClass('hide');
            return scope.resultTitle = 'The Taxpayer DOES NOT qualify for an Offer in Compromise.';
        }
    };
    
    // returns the response message for form submit (either success or fail)
    result.resultCopy = function(scope) {
        if (scope.resultDebtLessAssets > scope.resultMaxPayAmount) {
            return scope.resultCopy = 'You may qualify for an Offer in Comrpomise';
        } else {
            return scope.resultCopy = 'You do not qualify for an offer at this time.';
        }
    };
    
    return result;
}());
