# editable-list

A module to build an editable list

## Install

Use `jviz` to install this module on your project:

```
jviz install jviz-editable-list
```

## Options

### data

An array that will be used as the data to be displayed on the list. Each element of the array must be an object where each key is a cell on the list.

```javascript
jviz.modules.editableList({
  data: [
    { name: 'John', age: 26, city: 'San Francisco', country: 'EEUU' },
    { name: 'Susan', age: 24, city: 'New York', country: 'EEUU' },
    { name: 'Steve', age: 30, city: 'Tokyo', country: 'Japan' }
  ]
});
```

### columns

An array with the columns to display on the list.

```javascript
jviz.modules.editableList({
  columns: [
    { key: 'name' , editable: false }
  ]
});
```

Each element of the array must be an object with the following keys:

- `key`: (**mandatory**) a string with the key of the `data` which value will be displayed on this column.
- `editable`: a boolean to set if the data of this column is editable or not. Default value: `true`.
- `helper`: a string that will be displayed on the bottom of the input at the edit mode.


### info

An object with the information about the column info. The column info is the first cell of each element of the list, and provides information about the element.

```javascript
jviz.modules.editableList({
  info:
  {
    //Enable the column info
    visible: true,

    //Set the title for each element
    title: function(el, index){ return el.title; },

    //Set the detail of the element
    detail: function(el, index){ return 'This is the element ' + index + ' of my list.'; }
  }
});
```

This option accepts the following keys:

#### visible

A boolean to set if the info cell is visible or not. The default value is `false`.

#### title

A string or function with the title of the element. If a function si passed, this will be called with the following arguments:

- `el`: an object with the data of the actual element.
- `index`: an integer with the order of the element on the list.

#### detail

(Optionally) A string or function with the detail of the element. If a function is passed, this will be called with the same arguments of the `title` key.

## API

### cancel(index)

Cancel the edition of one element of the list.

```javascript
//Edit the first element
list.edit(0);

//Cancel the edition of the first element and restore the values
list.cancel(0);
```
This method accepts the following arguments:

- `index`: the number of the element of the list.

### delete(index)

Delete an element from the list.

```javascript
//Delete the first element of the list
list.delete(0);
```

This method accepts the following arguments:

- `index`: the number of the element of the list that will be deleted.

### edit(index)

Edit the content of an element of the list.

```javascript
//Set an element of the list as editable
list.edit(0);
```

This method accepts the following arguments:

- `index`: the number of the element of the list.


### save(index, obj)

Update an element of the list.

```javascript
list.save(0, { key1: 'value1', key2: 'value2' });
```

This method accepts the following arguments:

- `index`: the number of the element of the list.
- `obj`: an object with the data that will be updated on the element of the list.
