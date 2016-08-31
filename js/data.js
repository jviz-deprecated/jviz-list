//Display the provided data
jviz.modules.editableList.prototype.data = function(data)
{
  //Check the data
  if(jviz.is.array(data) === false){ data = [ data ]; }

  //Save this
  var self = this;

  //Reset the container
  jviz.dom.html('', this._table.id);

  //Initialize the active counter
  this._data.active = Array.apply(null, Array(this._data.src.length)).map(function(v){ return true; });

  //Display all data
  data.forEach(function(el, index)
  {
    //Get the id
    var id = self._row.id + '-' + index;

    //Add the row
    jviz.dom.append({ _tag: 'div', id: id, class: self._row.class }, self._table.id);

    //Display the new element
    self.display(el, index, false);
  });

  //Save the data
  this._data.src = data;
};
