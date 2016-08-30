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

  //Group
  this._group = {};
  this._group.id = this._id + '-group'; //Group ID
  this._group.class = this._class + '-group'; //Group class
  this._group.title = this._group.class + '-title'; //Group title class
  this._group.detail = this._group.class + '-detail'; //Group detail class
  this._group.helper = this._group.class + '-helper'; //Group helper class

  //Input
  this._input = {};
  this._input.id = this._id + '-input'; //Input ID
  this._input.class = this._class + '-input'; //Input class

  //Events object
  this._events = {};

  //Build the editable list
  this.build();

  //Return this
  return this;
};
