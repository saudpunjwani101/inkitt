import domToElement from './domToElement';
import htmlparser from 'htmlparser2';
import React from 'react';

export default function(rawHtml, done) {
  var handler = new htmlparser.DomHandler(function (err, dom) {
    if (err) done(err)
    done(null, domToElement(dom))
  })

  var parser = new htmlparser.Parser(handler)
  parser.write(rawHtml)
  parser.done()
}
