# kiss-tpl :kiss:
lightweight, simple and powerful javascript template engine 

verry simple template engine use ES6 - [Template literals](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals) to render all type of pain text (HTML, json, email, code generater etc.)

# Features

- :white_check_mark: nodejs support.
- :white_check_mark: browsers lightweight.
- :white_check_mark: well tested.
- :white_check_mark: supper lightweight.
- :white_check_mark: supper easy.
- :white_check_mark: powerful.
- :white_check_mark: have every things that a template engine need.
- :x: no dependentce required.
- :x: no extra options.
- :x: nothing to learn.

# Install
you can install from `npm` by:

`npm install kiss-tpl --save`

or from github: 

`git clone https://github.com/minhlucvan/kiss-tpl.git`

# usage
Just like template literals, no it's template literals.

```javascript
    
    import kiss from 'kiss-tpl';

    let context = {thing: "world" }; 
    let tpl = ctx => kiss`hello ${ctx.world}`;

    console.log(tpl(context)); // hello world

``` 

pretty easy right!

let me show you something cool

### conditional blocks
there is no `if` - `else` here but you can do this instead.

```javascript

    let context = {isFine: true }; 
    let tpl = ctx => kiss`
        A: hello, how are you today?
        B: hi, ${ctx.isFine ? "oh, I'm fine thank you." : "oh, I feel not verry good."}.
    `;

``` 
es6 is amazing.

### array render
of course there is no `for`, but you can use `map`

```javascript

    let context = {frieds: ["Bob", "julia", "Ren", "Samath"] }; 
    let tpl = ctx => kiss`
        I have many friends like ${ctx.frieds.map((friend) => fried + 'y';)}
    `;

```

### let put a function
you can also put a functuon callback like this.

```javascript

    function plus( one, other ){
        
    }

    let context = {one: 3, other: 1 }; 
    let tpl = ctx => kiss`
        ${ctx.one} + ${ctx.other} = ${plus(ctx.one, ctx.other)} 
    `;

```

thank for reading and happy coding.

# license
[MIT](./LICENSE.md)