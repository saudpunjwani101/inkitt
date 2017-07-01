import entities from 'entities';
import React from 'react';
import {Text, StyleSheet} from 'react-native';

import styles from '../components/styles';

let PARAGRAPH_BREAK = '\n\n';

export default function domToElement(dom, parent) {
  if (!dom) return null

  return dom.map((node, index, list) => {

    if (node.type == 'text') {
      console.log(node.data)
      return (
        <Text key={index} style={parent ? styles[parent.name] : null}>
          {entities.decodeHTML(node.data)}
        </Text>
      )
    }

    if (node.type == 'tag') {
      var touchHandler = null
      console.log(node.name)
      return (
        <Text key={index} onPress={touchHandler}>
          {domToElement(node.children, node)}
          {node.name == 'p' && index < list.length-1 ? PARAGRAPH_BREAK : null}
        </Text>
      )
    }

  })
}
