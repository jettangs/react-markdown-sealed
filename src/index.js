import React from 'react'
import assign from 'lodash.assign';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './code-block';

export default class Markdown extends React.Component() {
    render() {
        return <ReactMarkdown {...this.props} renderers={assign({}, Markdown.renderers, {CodeBlock: CodeBlock})}/>
    }
}