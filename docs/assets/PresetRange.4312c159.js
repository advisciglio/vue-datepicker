import{r,t as n,c as p,s}from"./vue-datepicker.es.97d71807.js";import{_ as m,f as g,I as o,C as f,o as i,c as D,b as v,r as h}from"./app.decdb781.js";function l(a){r(1,arguments);var e=n(a),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}function u(a){r(1,arguments);var e=n(a);return e.setDate(1),e.setHours(0,0,0,0),e}function k(a){r(1,arguments);var e=n(a),t=e.getFullYear();return e.setFullYear(t+1,0,0),e.setHours(23,59,59,999),e}function w(a){r(1,arguments);var e=n(a),t=new Date(0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}const _=g({components:{Datepicker:p},setup(){const a=o(),e=f(),t=o([{label:"Today",range:[new Date,new Date]},{label:"This month",range:[u(new Date),l(new Date)]},{label:"Last month",range:[u(s(new Date,1)),l(s(new Date,1))]},{label:"This year",range:[w(new Date),k(new Date)]}]);return{date:a,dark:e,presetRanges:t}}}),Y={class:"demo-wrap"};function b(a,e,t,F,M,H){const d=h("Datepicker");return i(),D("div",Y,[v(d,{modelValue:a.date,"onUpdate:modelValue":e[0]||(e[0]=c=>a.date=c),placeholder:"Select Date",dark:a.dark,range:"","preset-ranges":a.presetRanges},null,8,["modelValue","dark","preset-ranges"])])}var V=m(_,[["render",b],["__file","PresetRange.vue"]]);export{V as default};