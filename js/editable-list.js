//Editable list module
jviz.modules.editableList = function(opt)
{
  //Check the options
  if(typeof opt === 'undefined'){ var opt = {}; }

  //Save the component id
  this._id = (typeof opt.id === 'undefined') ? jviz.misc.getID({ prefix: 'editablelist-', length: 5 }) : opt.id;

  //Save the component class name
  this._class = (typeof opt.class === 'undefined') ? 'jviz-modules-editable-list' : opt.class;

  //Save the parent element
  this._parent = opt.parent;

  //Save the list title
  this._title = (typeof opt.title === 'undefined') ? '' : opt.title;

  //Check for editable list
  this._editable = (typeof opt.editable === 'undefined') ? true : opt.editable;

  //Data
  this._data = {};
  this._data.src = (typeof opt.data === 'undefined') ? [] : opt.data; //Data source
  this._data.length = 0; //Data length
  this._data.active = []; //Active rows

  //Columns list
  this._columns = {};
  this._columns.src = (typeof opt.columns === 'undefined') ? [] : opt.columns; //Columns source
  this._columns.length = 0; //Number of columns

  //Check the info
  if(typeof opt.info !== 'object'){ opt.info = {}; }

  //Data info
  this._info = {}; //Column info
  this._info.visible = (typeof opt.info.visible === 'boolean') ? opt.info.visible : false; //Element info is visible
  this._info.title = (typeof opt.info.title !== 'undefined') ? opt.info.title : ''; //Element info title
  this._info.detail = (typeof opt.info.detail !== 'undefined') ? opt.info.detail : ''; //Element info detail

  //Table object
  this._table = {};
  this._table.id = this._id + '-table'; //Table ID
  this._table.class = this._class + '-table'; //Table class

  //Row
  this._row = {};
  this._row.id = this._id + '-row-{index}'; //Row ID
  this._row.class = this._class + '-row'; //Row class

  //Cell
  this._cell = {};
  this._cell.id = this._id + '-cell-{index}-{column}'; //Cell ID template
  this._cell.class = this._class + '-cell'; //Cell class

  //Input
  this._input = {};
  this._input.id = this._id + '-input-{index}-{column}'; //Input ID
  this._input.class = this._class + '-input'; //Input class

  //Input option
  this._input.option = {};
  this._input.option.id = this._input.id + '-{option}'; //Option ID template

  //Helper
  this._helper = {};
  this._helper.id = this._id + '-helper-{index}-{column}'; //Helper ID template
  this._helper.class = this._class + '-helper'; //Helper class

  //Value
  this._value = {};
  this._value.id = this._id + '-value-{index}-{column}'; //Value ID template
  this._value.class = this._class + '-value'; //Value class

  //Title
  this._title = {};
  this._title.id = this._id + '-title-{index}'; //Title ID template
  this._title.class = this._class + '-title'; //Title class

  //Detail
  this._detail = {};
  this._detail.id = this._id + '-detail-{index}'; //Detail ID template
  this._detail.class = this._class + '-detail'; //Detail class

  //Button
  this._btn = {};
  this._btn.id = this._id + '-btn'; //Button ID
  this._btn.class = this._class + '-btn'; //Button class

  //Edit button
  this._btn.edit = {}; //Edit button
  this._btn.edit.text = 'Edit'; //Edit button title
  this._btn.edit.id = this._btn.id + '-edit-{index}'; //Edit button id
  this._btn.edit.class = this._btn.class + '--edit'; //Edit button class

  //Delete button
  this._btn.delete = {};
  this._btn.delete.text = 'Delete'; //Delete button title
  this._btn.delete.id = this._btn.id + '-delete-{index}'; //Delete button id
  this._btn.delete.class = this._btn.class + '-delete'; //Delete button class

  //Save button
  this._btn.save = {};
  this._btn.save.text = 'Save'; //Save button title
  this._btn.save.id = this._btn.id + '-save-{index}'; //Save button id
  this._btn.save.class = this._btn.class + '--save'; //Save button class

  //Cancel button
  this._btn.cancel = {};
  this._btn.cancel.text = 'Cancel'; //Cancel button title
  this._btn.cancel.id = this._btn.id + '-cancel-{index}'; //Cancel button id
  this._btn.cancel.class = this._btn.class + '--cancel'; //Cancel button class

  //Events object
  this._events = new jviz.commons.events();

  //Build the editable list
  this.build();

  //Parse the columns
  this.columns(this._columns.src);

  //Parse the data
  this.data(this._data.src);

  //Display the data
  this.draw();

  //Return this
  return this;
};

//On method
jviz.modules.editableList.prototype.on = function(name, listener){ return this._events.add(name, listener); };
