var bonjour = require('bonjour')()
bonjour.find({ type: 'http' }, function (service) {
    console.log(service)
    console.log('Found an Device:', service.name, service.referer.address, service.txt)
})