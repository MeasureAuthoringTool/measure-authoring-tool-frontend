import React from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';

const StyledReactQuill = styled(ReactQuill).attrs({
  className: 'ds-u-fill--background',
})``;

class MeasureDetailsRichTextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    const modules = {
      toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ size: ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ script: 'sub' }, { script: 'super' }],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link'],
        ['clean'],
      ],
    };

    const formats = [
      'header',
      'bold', 'italic', 'underline', 'strike',
      'list', 'bullet', 'indent',
      'script',
      'link',
    ];


    return (
      <StyledReactQuill
        placeholder="Enter Text"
        theme="snow"
        modules={modules}
        formats={formats}
        value={this.state.text}
        onChange={this.onChange}
      />
    );
  }
}

export default MeasureDetailsRichTextEditor;
