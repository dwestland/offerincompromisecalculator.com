function OicCalculatorCtrl(t){moment().format(),t.calculate=function(){t.resultIncome=oicCalculator.resultIncome(t),t.resultEquity=oicCalculator.resultEquity(t),t.resultAssets=oicCalculator.resultAssets(t),t.debtAmount1=oicCalculator.resultDebtAmount1(t),t.debtAmount2=oicCalculator.resultDebtAmount2(t),t.debtAmount3=oicCalculator.resultDebtAmount3(t),t.resultDebtTotal=oicCalculator.resultDebtTotal(t),t.resultExpireDate=oicCalculator.resultExpireDate(t),t.resultExpireDate2=oicCalculator.resultExpireDate2(t),t.resultExpireDate3=oicCalculator.resultExpireDate3(t),t.resultMonthsLeft=oicCalculator.resultMonthsLeft(t),t.resultMonthsLeft2=oicCalculator.resultMonthsLeft2(t),t.resultMonthsLeft3=oicCalculator.resultMonthsLeft3(t),t.resultLongestStatute=Math.max(t.resultMonthsLeft,t.resultMonthsLeft2,t.resultMonthsLeft3),t.resultdebtDateRej=oicCalculator.debtDateRej(t),t.resultdebtDateBank=oicCalculator.debtDateBank(t),t.resultdebtDateCDP=oicCalculator.debtDateCDP(t),t.resultAddMonths=t.resultdebtDateRej+t.resultdebtDateBank+t.resultdebtDateCDP,t.resultTotalAddMonths=1*t.resultLongestStatute+1*t.resultAddMonths,t.resultMaxExpirationDate=moment(Math.max(t.resultExpireDate,t.resultExpireDate2,t.resultExpireDate3)).add(t.resultAddMonths,"months").format("MMMM Do, YYYY"),t.resultMaxPayAmount=t.resultIncome*t.resultTotalAddMonths,t.resultPayAmount=oicCalculator.resultPayAmount(t),t.resultDebtLessAssets=t.resultDebtTotal-t.resultAssets,t.resultTitle=oicCalculator.resultTitle(t),t.resultCopy=oicCalculator.resultCopy(t),t.resultDownPayment=.2*t.resultPayAmount,t.resultPayments=(t.resultPayAmount-t.resultDownPayment)/5}}var oicCalculator=function(){var t={};return t.resultIncome=function(t){if("undefined"!=typeof t.resultIncome){var e=t.assetIncome;return e}return 0},t.resultEquity=function(t){if("undefined"!=typeof t.assetEquity){var e=.8*t.assetEquity;return e}return 0},t.resultAssets=function(t){if("undefined"!=typeof t.assetQuickSale){var e=1*t.assetQuickSale+1*t.resultEquity;return e}return 0},t.resultDebtAmount1=function(t){return"undefined"!=typeof t.debtAmount?t.debtAmount:0},t.resultDebtAmount2=function(t){return"undefined"!=typeof t.debtAmount2?t.debtAmount2:0},t.resultDebtAmount3=function(t){return"undefined"!=typeof t.debtAmount3?t.debtAmount3:0},t.resultDebtTotal=function(t){var e=t.debtAmount1+t.debtAmount2+t.debtAmount3;return"undefined"!=typeof e?e:0},t.resultExpireDate=function(t){if("undefined"!=typeof t.debtDate){var e=moment(t.debtDate),r=e.add(10,"years"),u=r;return u}return 0},t.resultExpireDate2=function(t){if("undefined"!=typeof t.debtaddDate2){var e=moment(t.debtaddDate2),r=e.add(10,"years"),u=r;return u}return 0},t.resultExpireDate3=function(t){if("undefined"!=typeof t.debtaddDate3){var e=moment(t.debtaddDate3),r=e.add(10,"years"),u=r;return u}return 0},t.resultMonthsLeft=function(t){if("undefined"!=typeof t.debtDate){var e=moment(t.debtDate).add(10,"years"),r=moment().diff(e,"months");return Math.round(-1*r)}return 0},t.resultMonthsLeft2=function(t){if("undefined"!=typeof t.debtaddDate2){var e=moment(t.debtaddDate2).add(10,"years"),r=moment().diff(e,"months");return Math.round(-1*r)}return 0},t.resultMonthsLeft3=function(t){if("undefined"!=typeof t.debtaddDate3){var e=moment(t.debtaddDate3).add(10,"years"),r=moment().diff(e,"months");return Math.round(-1*r)}return 0},t.debtDateRej=function(t){if("undefined"!=typeof t.debtDateRej){var e=t.debtDateRej;return e}return 0},t.debtDateBank=function(t){if("undefined"!=typeof t.debtDateBank){var e=t.debtDateBank+6;return e}return 0},t.debtDateCDP=function(t){if("undefined"!=typeof t.debtDateCDP){var e=t.debtDateCDP;return e}return 0},t.resultAddMonths=function(t){var e=t.debtDateRej+t.debtDateBank+t.debtDateCDP;return e},t.resultMaxExpirationDate=function(t){var e=Math.max(t.resultExpireDate,t.resultExpireDate2,t.resultExpireDate3),r=t.resultAddMonths;return moment(e,moment.ISO_8601).add(r,"months").format("MMMM Do, YYYY")},t.resultMaxPayAmount=function(t){var e=t.resultAddMonths,r=t.resultMonthsLeft;if("undefined"!=typeof t.addMonths){var u=t.assetIncome*(1*r+1*e);return u}var n=t.assetIncome*(1*r);return n},t.resultPayAmount=function(t){if("undefined"!=typeof t.assetIncome){var e=12*t.assetIncome;return e}return 0},t.resultTitle=function(t){return t.resultDebtLessAssets>t.resultMaxPayAmount?($("#resultBox").removeClass("fail").addClass("success"),$("#resultCalculations").removeClass("hide"),t.resultTitle="The Taxpayer MAY qualify for an Offer in Compromise."):($("#resultBox").removeClass("success").addClass("fail"),$("#resultCalculations").addClass("hide"),t.resultTitle="The Taxpayer DOES NOT qualify for an Offer in Compromise.")},t.resultCopy=function(t){return t.resultDebtLessAssets>t.resultMaxPayAmount?t.resultCopy="You may qualify for an Offer in Comrpomise":t.resultCopy="You do not qualify for an offer at this time."},t}();
//# sourceMappingURL=./main-min.js.map