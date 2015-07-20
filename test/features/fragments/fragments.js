/*global element,by*/
var byString = function (object, fragmentName)
{
    'use strict';
    if (!fragmentName || !fragmentName.replace) {
        return null;
    }
    fragmentName = fragmentName.replace(/\[(\w+)\]/g, '($1)');
    fragmentName = fragmentName.replace(/^\./, '');
    var a = fragmentName.split('.');
    while (a.length) {
        var n = a.shift();
        var arrayExpr = n.match(/(\w+)\(([^)]*)\)/);
        if (arrayExpr) {
            object = object[arrayExpr[1]](arrayExpr[2]);
        } else if (n in object) {
            object = object[n];
        } else {
            throw new Error('Undefined fragment "' + n + '" in "' + fragmentName + '"');
        }
    }
    return object;
};

var fragments = function (text)
{
    'use strict';

    var mapping = {
        name: element.bind(null, by.id('name')),
        quantity: element.bind(null, by.id('quantity')),
        price: element.bind(null, by.id('price')),
        nextButton: element.bind(null, by.id('nextButton')),
        successAlert: element.bind(null, by.css('.alert-success')),
        dangerAlert: element.bind(null, by.css('.alert-danger')),
        cost: element.bind(null, by.id('cost'))
    };

    return byString(mapping, text);
};

module.exports = fragments;
