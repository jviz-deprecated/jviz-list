//Editable list module
jviz.modules.editableList = function(opt)
{
  //Check the options
  if(typeof opt === 'undefined'){ var opt = {}; }

  //Save the component id
  this._id = (typeof opt.id === 'undefined') ? jviz.utils.getID({ prefix: 'editablelist-', length: 5 }) : opt.id;

  //Save the component class name
  this._class = (typeof opt.class === 'undefined') ? 'jviz-modules-editable-list' : opt.class;

  //Save the parent element
  this._parent = opt.parent;

  //Save the list title
  this._title = (typeof opt.title === 'undefined') ? '' : opt.title;

  //Data
  this._data = {};
  this._data.ajax = (typeof opt.ajax === 'undefined') ? {} : opt.ajax;
  this._data.src = (typeof opt.data === 'undefined') ? [] : opt.data;
  this._data.active = []; //Active rows

  //Columns list
  this._columns = {};
  this._columns.src = (typeof opt.columns === 'undefined') ? [] : opt.columns; //Columns source
  this._columns.info = {}; //Column info
  this._columns.info.active = false; //Column info is active
  this._columns.info.title = ''; //Column info title
  this._columns.info.detail = ''; //Column info detail

  //Check if is enabled
  if(typeof opt.columnInfo !== 'undefined')
  {
    //Save active
    if(typeof opt.columnInfo.active === 'boolean'){ this._columns.info.active = opt.columnInfo.active; }

    //Save the column info title
    if(typeof opt.columnInfo.title !== 'undefined'){ this._columns.info.title = opt.columnInfo.title; }

    //Save the column info description
    if(typeof opt.columnInfo.detail !== 'undefined'){ this._columns.info.detail = opt.columnInfo.detail; }
  }

  //Table object
  this._table = {};
  this._table.id = this._id + '-table'; //Table ID
  this._table.class = this._class + '-table'; //Table class

  //Row
  this._row = {};
  this._row.id = this._id + '-row'; //Row ID
  this._row.class = this._class + '-row'; //Row class

  //Cell
  this._cell = {};
  this._cell.id = this._id + '-cell'; //Cell ID
  this._cell.class = this._class + '-cell'; //Cell class

  //Input
  this._input = {};
  this._input.id = this._id + '-input'; //Input ID
  this._input.class = this._class + '-input'; //Input class

  //Text type
  this._text = {};
  this._text.title = this._class + '-title'; //Title text class
  this._text.value = this._class + '-value'; //Value text class
  this._text.detail = this._class + '-detail'; //Detail text class

  //Events object
  this._events = {};

  //Build the editable list
  this.build();

  //Return this
  return this;
};
