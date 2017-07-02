import entities from 'entities';
import React from 'react';
import {Text} from 'react-native';

import styles from '../components/styles';

const PARAGRAPH_BREAK = '\n\n';

export default function domToElement(dom, parent) {
  if (!dom) return null

  return dom.map((node, index, list) => {

    if (node.type == 'text') {
      return (
        <Text key={index} style={parent ? styles[parent.name] : null}>
          {entities.decodeHTML(node.data)}
        </Text>
      )
    }

    if (node.type == 'tag') {
      return (
        <Text key={index}>
          {domToElement(node.children, node)}
          {node.name == 'p' && index < list.length-1 ? PARAGRAPH_BREAK : null}
        </Text>
      )
    }

  })
}
