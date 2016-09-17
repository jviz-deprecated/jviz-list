//Build the editable list
jviz.modules.editableList.prototype.build = function()
{
  //Build the main container
  jviz.dom.append(this._parent, { _tag: 'div', id: this._id, class: this._class });

  //Build the table
  jviz.dom.append(this._id, { _tag: 'div', id: this._table.id, class: this._table.class });

  //Parse the columns
  this.columns(this._columns.src);

  //Get the data
  if(typeof this._data.ajax.url === 'string'){ return this.ajax(this._data.ajax); }

  //Display the data
  return this.data(this._data.src);
};
