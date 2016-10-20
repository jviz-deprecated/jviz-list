//Build the editable list
jviz.modules.editableList.prototype.build = function()
{
  //Build the main container
  jviz.dom.append(this._parent, { id: this._id, class: this._class });

  //Build the table
  jviz.dom.append(this._id, { id: this._table.id, class: this._table.class });

  //Parse the columns
  this.columns();

  //Get the data
  if(typeof this._data.ajax.url === 'string'){ return this.ajax(this._data.ajax); }

  //Parse the data
  this.data();

  //Display the data
  return this.draw();
};
