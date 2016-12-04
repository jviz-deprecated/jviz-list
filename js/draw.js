//Draw the list
jviz.modules.editableList.prototype.draw = function()
{
  //Reset the container
  jviz.dom.html(this._table.id, '');

  //Check the data length
  if(this._data.length === 0){ return this; }

  //Update the data active
  this._data.active = [];

  //Save this
  var self = this;

  //Read all the data
  this._data.src.forEach(function(el, index)
  {
    //Get the row id
    var row_id = self._row.id.replace('{index}', index);

    //Add the row
    jviz.dom.append(self._table.id, { id: row_id, class: self._row.class });

    //Display the row
    self.row(index, false);

    //Continue
    return true;
  });

  //Return this
  return this;
};

//Clear the list
jviz.modules.editableList.prototype.clear = function()
{
  //Clear the full list
  jviz.dom.html(this._table.id, '');

  //Return this
  return this;
};
