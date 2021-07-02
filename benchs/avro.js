const bench = require('nanobench')

const avro = require('avro-js');


type = avro.parse({
    name: 'TRANSACTION',
    type: 'record',
    fields: [
        {name: 'value', type: "double"},
        {name: 'holder', type: 'string'},
        {name: 'transaction', type: 'string'}
    ]
});

const TRANSACTION = { "value": 300, "holder": "It\'s an example Holder", "transaction" : "AAAAAAAAAAAAAAAAAAAAAAA" };


module.exports = () => {
    bench('AVRO to Buffer', function (b) {
        for (var i = 0; i < 200000; i++) {
            type.toBuffer(TRANSACTION)
        }
  
        b.end()
    })

    bench('AVRO from Buffer', function (b) {
        const buf = type.toBuffer(TRANSACTION)

        for (var i = 0; i < 200000; i++) {
            type.fromBuffer(buf)
        }
        
        b.end()
    })
}