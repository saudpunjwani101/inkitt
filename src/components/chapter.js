import React, {Component} from 'react';
import {Text, ListView,View, ScrollView} from 'react-native'

import htmlToElement from '../helper/htmlToElement';
import getChapters from '../Apis/getBookChapter';

class Chapter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chapter: [],
      element: null
    }
    this.startHtmlRender = this.startHtmlRender.bind(this)
  }

  componentWillMount()  {
    let chapter = getChapters()
    .then(res=>res.json())
    .then(json => {
      this.setState({
        chapter: json.response
      })
    })

    Promise.resolve(chapter)
    .then(()=>this.startHtmlRender(this.state.chapter))
  }

  render() {
    if (this.state.element) {
      return (
        <ScrollView
          children={this.state.element}
          style={{margin:25}}>
        </ScrollView>
      )
    }
    return <View />;
  }

  startHtmlRender(chapter) {
    if (chapter.length==0) return
    if (this.renderingHtml) return

    this.renderingHtml = true
    htmlToElement(chapter.text, (err, element) => {
      this.renderingHtml = false

      if (err) return console.error(err)

      this.setState({element})
    })
  }
}

export default Chapter;
