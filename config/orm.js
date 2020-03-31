var connection = require("./connection.js");

function objToSql(ob) {

    var arr = [];

    for (var key in ob) {

        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key))

            if (typeOf value === "string" && value.indexOf("") >= 0){
                
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
    }
}
