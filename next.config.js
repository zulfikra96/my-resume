const fs = require("fs")
module.exports = {
    env:{
        jquery:fs.readFileSync("./public/js/core/jquery.3.2.1.min.js").toString(),
        popperJs:fs.readFileSync("./public/js/core/popper.min.js").toString(),
        bootstrapJs:fs.readFileSync("./public/js/core/bootstrap.min.js").toString(),
        uiKitJs:fs.readFileSync("./public/js/now-ui-kit.js").toString(),
        aosJs:fs.readFileSync("./public/js/aos.js").toString(),
        mainJs:fs.readFileSync("./public/js/main.js").toString(),
    }
}