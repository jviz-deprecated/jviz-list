# jviz-editable-list

A module to build an editable list

## Options

### columnInfo

An object with the information about the column info. The column info is the first cell of each element of the list, that provides information about the element.

```javascript
jviz.modules.editableList({
  columnInfo:
  {
    //Enable the column info
    active: true,

    //Set the title for each element
    title: function(el, index){ return el.title; },

    //Set the detail of the element
    detail: function(el, index){ return 'This is the element ' + index + ' of my list.'; }
  }
});
```

This option accepts the following keys:

#### active

A boolean to set if the info cell is enabled or disabled. The default value is `false`.

#### title

A string or function with the title of the element. If a function si passed, this will be called with the following arguments:

- `el`: an object with the data of the actual element.
- `index`: an integer with the order of the element on the list.

#### detail

(Optionally) A string or function with the detail of the element. If a function is passed, this will be called with the same arguments of the `title` key.
