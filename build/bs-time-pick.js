!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(){"use strict";var e=angular.module("bs-time-pick",[]);e.directive("bsTimePick",["$filter",function(e){var t=/(1[0-2]|[1-9]):([0-5][0-9])\s*(pm|PM|am|AM)/;return{restrict:"A",require:"ngModel",link:function(r,n,a,i){function o(e,t){return e=parseInt(e),"AM"==t&&12==e?"0":"PM"==t&&12>e?e+12+"":e+""}function u(e){var r=i.$modelValue||new Date,a=t.exec(e);return a&&a[0]===e?(c=!1,new Date(r.getFullYear(),r.getMonth(),r.getDate(),o(a[1],a[3].toUpperCase()),a[2])):(c=!0,n.val(""),l(4,5,300),i.$modelValue)}function s(t){return c?"":e("date")(t,"h:mm a")}function l(e,t,r){n.css("position","relative");for(var a=1;e>=a;a++)n.animate({left:-1*t},r/e/4).animate({left:t},r/e/2).animate({left:0},r/e/4)}var c=!1;i.$parsers.push(u),i.$formatters.push(s)}}}])}]);