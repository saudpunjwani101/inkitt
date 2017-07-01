import {StyleSheet} from 'react-native';

let fontSize = 18;

let boldStyle = {fontWeight: '500', fontSize:fontSize}
let italicStyle = {fontStyle: 'italic', fontSize:fontSize}
let codeStyle = {fontFamily: 'Menlo', fontSize:fontSize}

export default StyleSheet.create({
  p: {fontSize:18},
  b: boldStyle,
  strong: boldStyle,
  i: italicStyle,
  em: italicStyle,
  pre: codeStyle,
  code: codeStyle,
  a: {
    fontWeight: '500',
    color: '#007AFF',
  },
})
