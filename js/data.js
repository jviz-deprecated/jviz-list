//Display the provided data
jviz.modules.editableList.prototype.data = function(data)
{
  //Check for undefined data
  if(typeof data === 'undefined'){ return this._dats.src; }

  //Check the data
  if(jviz.is.array(data) === false){ data = [ data ]; }

  //Reset the container
  jviz.dom.html('', this._table.id);

  //Initialize the active counter
  this._data.active = Array.apply(null, Array(this._data.src.length)).map(function(v){ return true; });

  //Display all data
  for(var i = 0; i < data.length; i++)
  {
    //Get the id
    var id = this._row.id + '-' + i;

    //Add the row
    jviz.dom.append({ _tag: 'div', id: id, class: this._row.class }, this._table.id);

    //Display the new element
    this.display(data[i], i, false);
  }

  //Add the events
  for(var i = 0; i < data.length; i++)
  {
    //Add the events
    this.btnEvents(i, false);
  }

  //Save the data
  this._data.src = data;
};

//Get a data element
jviz.modules.editableList.prototype.element = function(index)
{
  //Check the index
  if(typeof index === 'undefined'){ return this._data.src; }

  //Return the data index
  return this._data.src[index];
};
