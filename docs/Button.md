`Button` (component)
====================

A wrapper class around the CMS Button. This wrapper allows a label, icon, iconSide button type,
and button variant to be passed to the component.

Props
-----

### `disabled`

Disables the button if true

type: `bool`
defaultValue: `false`


### `icon`

The font awesome icon to be displayed, none will be displayed if this value is empty

type: `string`
defaultValue: `''`


### `iconSide`

The side the icon should be displayed on, right by default. Should be either left or right

type: `enum('left'|'right')`
defaultValue: `'left'`


### `label` (required)

The label for the button

type: `string`


### `onClick` (required)

The onClick handler

type: `func`


### `type`

The type of the button, should be either button or  submit. By default it is button.

type: `enum('button'|'submit')`
defaultValue: `'button'`


### `variation`

type: `enum('primary'|'danger'|'success'|'transparent')`
defaultValue: `''`

