//Build the editable list
jviz.modules.editableList.prototype.build = function()
{
  //Build the main container
  jviz.dom.append(this._parent, { id: this._id, class: this._class });

  //Build the table
  jviz.dom.append(this._id, { id: this._table.id, class: this._table.class });

  //Return this
  return this;
};
