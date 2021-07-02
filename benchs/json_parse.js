const bench = require('nanobench')

const STR_EXAMPLE = '{ "value": 300, "holder": "It\'s an example Holder", "transaction" : "AAAAAAAAAAAAAAAAAAAAAAA" }';
const OBJ_EXAMPLE = JSON.parse(STR_EXAMPLE)

module.exports = () => {
    bench('JSON Parse', function (b) {
        
        for (var i = 0; i < 200000; i++) {
            JSON.parse(STR_EXAMPLE)
        }
        
        b.end()
    })

    bench('JSON Stringfy', function (b) {
        
        for (var i = 0; i < 200000; i++) {
            JSON.stringify(OBJ_EXAMPLE)
        }
        
        b.end()
    })
}