var page = new WebPage(),
  test = require('system').args

  console.log("failed here");

if(test.args.length < 2) {
  console.log("You need an address")
  phantom.exit()

} else {
  console.log("Assigning argument");
  var address = args[1];
  page.open(address, function(status) {
    console.log("Connecting to page");
    if(status === "success") {
        page.evaluate(function(){
          document.getElementById("labelForonlineId1");
          console.log("Attained Label");
        })
    }
  })

  phantom.exit()

}
