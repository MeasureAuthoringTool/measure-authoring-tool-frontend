`CQLEditor` (component)
=======================

A component for the CQL Editor. This component will load all attributes, datatypes, functions,
keywords, timings, and unitsand create their shortcut keys. It will also create the CQL Theme
and apply it to the editor. Definitions, functions, parameters, valuesets, and codes can be
passed to this component to be put into shortcut keys. Also, errors and warnings
can be passed to do this component to render them as glyphs in the margin.

Props
-----

### `codes`

A list of strings that are the code identifiers. This component will not do any
formatting of the identifier.Meaning that if the identifier should be quoted, then pass
the quoted identifier to this prop.

type: `arrayOf[object Object]`
defaultValue: `[]`


### `definitions`

A list of strings that are the definition identifiers. This component will not do any
formatting of the identifier.Meaning that if the identifier should be quoted, then pass
the quoted identifier to this prop.

type: `arrayOf[object Object]`
defaultValue: `[]`


### `doNotShowGlyphs`

A boolean flag which will tell the component to render the glyphs or not.
By default this value is false.

type: `bool`
defaultValue: `false`


### `errors`

A list of errors, which should have objects that have a start line, end line, start column,
end column, and message. The errors will be marked in the margin using a glyph.

type: `array`
defaultValue: `[]`


### `functions`

A list of strings that are the function identifiers. This component will not do any
formatting of the identifier. Meaning that if the identifier should be quoted, then pass
the quoted identifier to this prop. However, this component will add the parenthesis to the
identifier.

type: `arrayOf[object Object]`
defaultValue: `[]`


### `parameters`

A list of strings that are the parameter identifiers. This component will not do any
formatting of the identifier.Meaning that if the identifier should be quoted, then pass
the quoted identifier to this prop.

type: `arrayOf[object Object]`
defaultValue: `[]`


### `readOnly`

A boolean flag which will render the editor in a readonly state or not.
By default this value is false. Ifthe component is read only, it will not create the
shortcut keys. However, it will create the new theme,do syntax highlighting, and show
glyphs for errors and warnings.

type: `bool`
defaultValue: `false`


### `value`

The initial value of the editor. By default this value is an empty string.

type: `string`
defaultValue: `''`


### `valuesets`

A list of strings that are the valueset identifiers. This component will not do any
formatting of the identifier.Meaning that if the identifier should be quoted, then pass
the quoted identifier to this prop.

type: `arrayOf[object Object]`
defaultValue: `[]`


### `warnings`

A list of warning, which should have objects that have a start line, end line, start column,
end column, and message. The errors will be marked in the margin using a glyph.

type: `array`
defaultValue: `[]`

