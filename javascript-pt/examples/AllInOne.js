// CData sample

<!--//--><![CDATA[//><!--
//--><!]]>

// Arrow functions, https://strongloop.com/strongblog/an-introduction-to-javascript-es6-arrow-functions/

var func = function (parameters) { return expression; }
var func = () => { return 1; }
var func = () => 1

var func = function (a) { return a * 2; }
var func = (a) => { return a * 2; }
var func = (a) => a * 2
var func = a => a * 2

var func = function (a, b) { return a * b; }
var func = (a, b) => { return a * b; }
var func = (a, b) => a * b

var func = function () { return arguments[0]; }
var func = (...args) => args[0]

// Template strings

var url = buildURL`http://msdn.microsoft.com/${lang}/${a}/${b}`;
var greeting = `\`Yo\` World!`;
console.log(html`<b>${username} says</b>: "${tag}"`);

// var, let, const

var c = 10;
{
    const c = 2; // At this point, c = 2.
} // At this point, c = 10.

const name = "Thomas Jefferson";
const answer = 42, numpages = 10;
const myarray = new Array();

function foo () {
    typeof bar;
    let bar = 'baz';
}
foo();

if (x) {
  let foo;
}

