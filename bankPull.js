
//change the var page = new to this require('webpage').create();
var page = new WebPage(),
  system = require(system);

if(system.args.length < 3) {
  console.log('Address Needed'); //if above var does not get at least two arguments from the WebPage object at declaration
  phantom.exit(;;
}

else {
  console.log('Received Valid Entry')
  page.open(address, function(status) {
    if(status==='success'){//if page open continue
      //page.injectJs('jquery-3.4.1.min.js');//injects jquery
      console.log("Success");
      page.evaluate(function(){
        document.getElemenrById('labelForonlineId1').value = system.args[1];

      }, system);

      phantom.exit();
    }
  })
}
