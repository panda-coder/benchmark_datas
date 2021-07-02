const bench = require('nanobench')
const simdjson = require('simdjson');

const STR_EXAMPLE = '{ "value": 300, "holder": "It\'s an example Holder", "transaction" : "AAAAAAAAAAAAAAAAAAAAAAA" }';

module.exports = () => {
    bench('Simdjson JSON Parse', function (b) {
        
        for (var i = 0; i < 200000; i++) {
            simdjson.parse(STR_EXAMPLE)
        }
        
        b.end()
    })

}