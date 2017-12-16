handlebars.registerHelper('getMode', function (s) {
    s = path.basename(s)
    s = s.substring(s.indexOf('-') + 1, s.lastIndexOf('.'))
    s = s.split('-')[1]
    return (modeNames[s] || s)
})
