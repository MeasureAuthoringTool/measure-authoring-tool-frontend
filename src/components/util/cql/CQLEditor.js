/* eslint-disable no-bitwise, class-methods-use-this, no-param-reassign, no-useless-escape */
import React from 'react';
import PropTypes from 'prop-types';
import MonacoEditor from 'react-monaco-editor';
import keywords from '../../../constants/keywords';
import functions from '../../../constants/functions';
import units from '../../../constants/units';
import datatypes from '../../../constants/datatypes';
import attributes from '../../../constants/attributes';
import timings from '../../../constants/timings';

let currentCompletionProvider = null;

/**
 * A component for the CQL Editor. This component will load all attributes, datatypes, functions,
 * keywords, timings, and unitsand create their shortcut keys. It will also create the CQL Theme
 * and apply it to the editor. Definitions, functions, parameters, valuesets, and codes can be
 * passed to this component to be put into shortcut keys. Also, errors and warnings
 * can be passed to do this component to render them as glyphs in the margin.
 */
class CQLEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: this.props.value,
    };

    this.onChange = this.onChange.bind(this);
    this.editorDidMount = this.editorDidMount.bind(this);
  }

  onChange(newValue) {
    this.setState({ code: newValue });
  }

  createValuesetCodeSuggestions(monaco) {
    const valuesetsCodes = [];

    if (this.props.valuesets) {
      this.props.valuesets.forEach((v) => {
        const valueset = {
          label: `${v}`,
          insertText: `${v}`,
          kind: monaco.languages.CompletionItemKind.Field,
          sortText: `09${v}`,
        };

        valuesetsCodes.push(valueset);
      });
    }

    if (this.props.codes) {
      this.props.codes.forEach((c) => {
        const code = {
          label: `${c}`,
          insertText: `${c}`,
          sortText: `10${c}`,

          kind: monaco.languages.CompletionItemKind.Field,
        };

        valuesetsCodes.push(code);
      });
    }

    return valuesetsCodes;
  }

  createParameterSuggestions(kind) {
    const parameters = [];
    if (this.props.parameters) {
      this.props.parameters.forEach((p) => {
        const parameter = {
          kind,
          insertText: `${p}`,
          label: `${p}`,
          sortText: `07${p}`,
        };

        parameters.push(parameter);
      });
    }

    return parameters;
  }

  createDefinitionSuggestions(kind) {
    const definitions = [];

    if (this.props.definitions) {
      this.props.definitions.forEach((d) => {
        const dLabel = `${d}`;

        const definition = {
          insertText: dLabel,
          label: dLabel,
          sortText: `03${dLabel}`,
          kind,
        };

        definitions.push(definition);
      });
    }

    return definitions;
  }

  createFunctionSuggestions(kind) {
    functions.forEach((f) => {
      f.kind = kind;
      f.sortText = `04${f.label}`;
    });

    if (this.props.functions) {
      this.props.functions.forEach((f) => {
        const functionLabel = `${f}()`;

        const func = {
          kind,
          insertText: functionLabel,
          label: functionLabel,
          sortText: `04${functionLabel}`,
        };

        functions.push(func);
      });
    }
    return functions;
  }

  createDatatypeSuggestions(kind) {
    datatypes.forEach((d) => {
      d.kind = kind;
      d.label = d.insertText;
      d.sortText = `02${d.label}`;
    });

    return datatypes;
  }

  createKeywordSuggestions(kind) {
    keywords.forEach((k) => {
      k.kind = kind;
      k.sortText = `05${k.label}`;
    });
    return keywords;
  }

  createUnitSuggestions(kind) {
    units.forEach((u) => {
      u.kind = kind;
      u.sortText = `08${u.label}`;
    });
    return units;
  }

  createAttributeSuggestions(kind) {
    attributes.forEach((a) => {
      a.insertText = a.label;
      a.kind = kind;
      a.sortText = `01${a.label}`;
    });

    return attributes;
  }

  createTimingSuggestions(kind) {
    timings.forEach((t) => {
      t.insertText = t.label;
      t.kind = kind;
      t.sortText = `06${t.label}`;
    });

    return timings;
  }

  addParameterShortCutKey(editor, monaco) {
    const parameters = this.createParameterSuggestions();
    editor.addCommand(
      monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_P), () => {
        if (currentCompletionProvider) {
          currentCompletionProvider.dispose();
        }

        currentCompletionProvider = monaco.languages.registerCompletionItemProvider('cql', {
          provideCompletionItems: () => {
            return { suggestions: parameters };
          },
        });

        editor.getAction('editor.action.triggerSuggest').run();
      },
    );
  }

  addDefinitionShortcutKey(editor, monaco) {
    const definitions = this.createDefinitionSuggestions();
    editor.addCommand(
      monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_D), () => {
        if (currentCompletionProvider) {
          currentCompletionProvider.dispose();
        }

        currentCompletionProvider = monaco.languages.registerCompletionItemProvider('cql', {
          provideCompletionItems: () => {
            return { suggestions: definitions };
          },
        });

        editor.getAction('editor.action.triggerSuggest').run();
      },
    );
  }

  addFunctionShortcutKey(editor, monaco) {
    const functionSuggestions = this.createFunctionSuggestions();

    editor.addCommand(
      monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_F), () => {
        if (currentCompletionProvider) {
          currentCompletionProvider.dispose();
        }

        currentCompletionProvider = monaco.languages.registerCompletionItemProvider('cql', {
          provideCompletionItems: () => {
            return { suggestions: functionSuggestions };
          },
        });
        editor.getAction('editor.action.triggerSuggest').run();
      },
    );
  }

  addKeywordShortcutKey(editor, monaco) {
    const keywordSuggestions = this.createKeywordSuggestions();
    editor.addCommand(
      monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_K), () => {
        if (currentCompletionProvider) {
          currentCompletionProvider.dispose();
        }

        currentCompletionProvider = monaco.languages.registerCompletionItemProvider('cql', {
          provideCompletionItems: () => {
            return { suggestions: keywordSuggestions };
          },
        });
        editor.getAction('editor.action.triggerSuggest').run();
      },
    );
  }

  addUnitShortcutKey(editor, monaco) {
    const unitSuggestions = this.createUnitSuggestions();
    editor.addCommand(
      monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_U), () => {
        if (currentCompletionProvider) {
          currentCompletionProvider.dispose();
        }

        currentCompletionProvider = monaco.languages.registerCompletionItemProvider('cql', {
          provideCompletionItems: () => {
            return { suggestions: unitSuggestions };
          },
        });
        editor.getAction('editor.action.triggerSuggest').run();
      },
    );
  }

  addAtrributeShortcutKey(editor, monaco) {
    const attributeSuggestions = this.createAttributeSuggestions();
    editor.addCommand(
      monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_A), () => {
        if (currentCompletionProvider) {
          currentCompletionProvider.dispose();
        }

        currentCompletionProvider = monaco.languages.registerCompletionItemProvider('cql', {
          provideCompletionItems: () => {
            return { suggestions: attributeSuggestions };
          },
        });
        editor.getAction('editor.action.triggerSuggest').run();
      },
    );
  }

  addDatatypeShortcutKey(editor, monaco) {
    const dataTypeSuggestions = this.createDatatypeSuggestions();
    editor.addCommand(
      monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_Y), () => {
        if (currentCompletionProvider) {
          currentCompletionProvider.dispose();
        }

        currentCompletionProvider = monaco.languages.registerCompletionItemProvider('cql', {
          provideCompletionItems: () => {
            return { suggestions: dataTypeSuggestions };
          },
        });
        editor.getAction('editor.action.triggerSuggest').run();
      },
    );
  }

  addValuesetCodeShortcutKey(editor, monaco) {
    const valuesetsCodes = this.createValuesetCodeSuggestions();
    editor.addCommand(
      monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_V), () => {
        if (currentCompletionProvider) {
          currentCompletionProvider.dispose();
        }

        currentCompletionProvider = monaco.languages.registerCompletionItemProvider('cql', {
          provideCompletionItems: () => {
            return { suggestions: valuesetsCodes };
          },
        });
        editor.getAction('editor.action.triggerSuggest').run();
      },
    );
  }

  addTimingShortcutKey(editor, monaco) {
    const timingSuggestions = this.createTimingSuggestions();
    editor.addCommand(
      monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_T), () => {
        if (currentCompletionProvider) {
          currentCompletionProvider.dispose();
        }

        currentCompletionProvider = monaco.languages.registerCompletionItemProvider('cql', {
          provideCompletionItems: () => {
            return { suggestions: timingSuggestions };
          },
        });
        editor.getAction('editor.action.triggerSuggest').run();
      },
    );
  }

  addAllShortcutKey(editor, monaco) {
    const suggestions = [];
    suggestions.push(...this.createValuesetCodeSuggestions(
      monaco.languages.CompletionItemKind.Field,
    ));
    suggestions.push(...this.createParameterSuggestions(
      monaco.languages.CompletionItemKind.Constant,
    ));
    suggestions.push(...this.createDefinitionSuggestions(
      monaco.languages.CompletionItemKind.Variable,
    ));
    suggestions.push(...this.createFunctionSuggestions(
      monaco.languages.CompletionItemKind.Function,
    ));
    suggestions.push(...this.createAttributeSuggestions(
      monaco.languages.CompletionItemKind.Property,
    ));
    suggestions.push(...this.createDatatypeSuggestions(
      monaco.languages.CompletionItemKind.Struct,
    ));
    suggestions.push(...this.createKeywordSuggestions(
      monaco.languages.CompletionItemKind.Keyword,
    ));
    suggestions.push(...this.createTimingSuggestions(
      monaco.languages.CompletionItemKind.Snippet,
    ));

    suggestions.sort((a, b) => {
      return a.sortText.toLowerCase().localeCompare(b.sortText.toLowerCase());
    });

    editor.addCommand(
      monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.Space), () => {
        if (currentCompletionProvider) {
          currentCompletionProvider.dispose();
        }

        currentCompletionProvider = monaco.languages.registerCompletionItemProvider('cql', {
          provideCompletionItems: () => {
            return { suggestions };
          },
        });
        editor.getAction('editor.action.triggerSuggest').run();
      },
    );
  }

  editorDidMount(editor, monaco) {
    editor.focus();

    const keywordMatches = [];
    keywords.forEach(k => keywordMatches.push(k.insertText));
    functions.forEach(f => keywordMatches.push(f.insertText.replace('(', '').replace(')', '')));
    attributes.forEach(a => keywordMatches.push(a.label));

    monaco.languages.register({ id: 'cql' });
    monaco.languages.setMonarchTokensProvider('cql', {
      keywords: keywordMatches,
      operators: [
        '=', '>', '<', '!', '~', '?', '==', '<=', '>=', '!=',
        '+', '-', '*', '/', '&', '^', '%',
      ],
      symbols: /[=><!~?:&|+\-*\/\^%]+/,
      escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
      tokenizer: {
        root: [
          // identifiers and keywords
          [/[a-zA-Z_$][\w$]*/, {
            cases: {
              '@keywords': 'cql-keyword',
            },
          }],
          [/@symbols/, {
            cases: {
              '@operators': 'cql-keyword',
              '@default': '',
            },
          }],
          { include: '@whitespace' },

          [/\d*\.\d+([eE][\-+]?\d+)?/, 'cql-number'],
          [/0[xX][0-9a-fA-F]+/, 'cql-number'],
          [/\d+/, 'cql-number'],

          [/"([^"\\]|\\.)*$/, 'string.invalid'],
          [/"/, { token: 'cql-identifier', bracket: '@open', next: '@string' }],

          [/'[^\\']'/, 'cql-identifier'],
          [/(')(@escapes)(')/, ['cql-identifier', 'string.escape', 'cql-identifier']],
          [/'/, 'string.invalid'],
        ],
        comment: [
          [/[^\/*]+/, 'cql-comment'],
          [/\/\*/, 'cql-comment', '@push'],
          ['\\*/', 'cql-comment', '@pop'],
          [/[\/*]/, 'cql-comment'],
        ],
        string: [
          [/[^\\"]+/, 'cql-identifier'],
          [/@escapes/, 'string.escape'],
          [/\\./, 'string.escape.invalid'],
          [/"/, { token: 'cql-identifier', bracket: '@close', next: '@pop' }],
        ],
        whitespace: [
          [/[ \t\r\n]+/, 'white'],
          [/\/\*/, 'cql-comment', '@comment'],
          [/\/\/.*$/, 'cql-comment'],
        ],
      },
    });

    monaco.editor.defineTheme('cqlTheme', {
      base: 'vs',
      inherit: true,
      rules: [
        { token: 'cql-comment', foreground: '719682' },
        { token: 'cql-keyword', foreground: '7F0055' },
        { token: 'cql-identifier', foreground: '2a00ff' },
        { token: 'cql-number', foreground: '00008b' },
      ],
      colors: {
        'editorError.foreground': '#E31C3D',
        'editorWarning.foreground': '#FDB81E',
        'editorMarkerNavigationWarning.background': '#FDB81E',
        'inputValidation.warningBackground': '#FDB81E',
        'inputValidation.warningBorder': '#FDB81E',
      },
    });
    monaco.editor.setTheme('cqlTheme');

    if (!this.props.readOnly) {
      this.addParameterShortCutKey(editor, monaco);
      this.addDefinitionShortcutKey(editor, monaco);
      this.addFunctionShortcutKey(editor, monaco);
      this.addKeywordShortcutKey(editor, monaco);
      this.addUnitShortcutKey(editor, monaco);
      this.addDatatypeShortcutKey(editor, monaco);
      this.addValuesetCodeShortcutKey(editor, monaco);
      this.addAtrributeShortcutKey(editor, monaco);
      this.addTimingShortcutKey(editor, monaco);
      this.addAllShortcutKey(editor, monaco);
    }


    if (!this.props.doNotShowGlyphs) {
      const decorations = [];
      if (this.props.errors) {
        this.props.errors.forEach((e) => {
          const decoration = {
            range: new monaco.Range(e.startLine, e.startChar, e.endLine, e.endChar),
            options: {
              isWholeLine: true,
              glyphMarginClassName: 'errorGlyph',
              glyphMarginHoverMessage: { value: e.message },
            },
          };

          decorations.push(decoration);
        });
      }

      if (this.props.warnings) {
        this.props.warnings.forEach((e) => {
          const decoration = {
            range: new monaco.Range(e.startLine, e.startChar, e.endLine, e.endChar),
            options: {
              isWholeLine: true,
              glyphMarginClassName: 'warningGlyph',
              glyphMarginHoverMessage: { value: e.message },
            },
          };

          decorations.push(decoration);
        });
      }

      editor.deltaDecorations([], decorations);
    }
  }

  render() {
    const options = {
      minimap: {
        enabled: false,
      },
      glyphMargin: true,
      overviewRulerLanes: -1,
    };

    return (
      <MonacoEditor
        width="600"
        height="800"
        language="cql"
        options={options}
        value={this.state.code}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

CQLEditor.defaultProps = {
  value: '',
  readOnly: false,
  doNotShowGlyphs: false,
  errors: [],
  warnings: [],
  parameters: [],
  definitions: [],
  functions: [],
  valuesets: [],
  codes: [],
};

CQLEditor.propTypes = {
  /**
   * The initial value of the editor. By default this value is an empty string.
   */
  value: PropTypes.string,

  /**
   * A list of errors, which should have objects that have a start line, end line, start column,
   * end column, and message. The errors will be marked in the margin using a glyph.
   */
  errors: PropTypes.array,

  /**
   * A list of warning, which should have objects that have a start line, end line, start column,
   * end column, and message. The errors will be marked in the margin using a glyph.
   */
  warnings: PropTypes.array,

  /**
   * A list of strings that are the definition identifiers. This component will not do any
   * formatting of the identifier.Meaning that if the identifier should be quoted, then pass
   * the quoted identifier to this prop.
   */
  definitions: PropTypes.arrayOf(PropTypes.string),

  /**
   * A list of strings that are the function identifiers. This component will not do any
   * formatting of the identifier. Meaning that if the identifier should be quoted, then pass
   * the quoted identifier to this prop. However, this component will add the parenthesis to the
   * identifier.
   */
  functions: PropTypes.arrayOf(PropTypes.string),

  /**
   * A list of strings that are the parameter identifiers. This component will not do any
   * formatting of the identifier.Meaning that if the identifier should be quoted, then pass
   * the quoted identifier to this prop.
   */
  parameters: PropTypes.arrayOf(PropTypes.string),

  /**
   * A list of strings that are the valueset identifiers. This component will not do any
   * formatting of the identifier.Meaning that if the identifier should be quoted, then pass
   * the quoted identifier to this prop.
   */
  valuesets: PropTypes.arrayOf(PropTypes.string),

  /**
   * A list of strings that are the code identifiers. This component will not do any
   * formatting of the identifier.Meaning that if the identifier should be quoted, then pass
   * the quoted identifier to this prop.
   */
  codes: PropTypes.arrayOf(PropTypes.string),

  /**
   * A boolean flag which will render the editor in a readonly state or not.
   * By default this value is false. Ifthe component is read only, it will not create the
   * shortcut keys. However, it will create the new theme,do syntax highlighting, and show
   * glyphs for errors and warnings.
   */
  readOnly: PropTypes.bool,

  /**
   * A boolean flag which will tell the component to render the glyphs or not.
   * By default this value is false.
   */
  doNotShowGlyphs: PropTypes.bool,
};

export default CQLEditor;
