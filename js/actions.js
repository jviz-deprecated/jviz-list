//Edit an element
jviz.modules.editableList.prototype.edit = function(index)
{
  //Check the index
  if(typeof index === 'undefined'){ return this; }

  //Update the row
  this.row(index, true);

  //Return this
  return this;
};

//Save the element
jviz.modules.editableList.prototype.save = function(index, obj)
{
  //Check the index
  if(typeof index === 'undefined'){ return this; }

  //Check the object
  if(typeof obj === 'undefined'){ return this; }

  //Save the element of the list
  this._data.src[index] = jviz.object.extend(this._data.src[index], obj);

  //Update the row
  this.row(index, false);

  //Return this
  return this;
};

//Remove an element from the list
jviz.modules.editableList.prototype.delete = function(index)
{
  //Check the index
  if(typeof index === 'undefined'){ return; }

  //Parse the index
  index = parseInt(index);

  //Check the index value
  if(index < 0 || index >= this._data.src.length){ return; }

  //Remove from the data source
  var removed = this._data.src.splice(index, 1);

  //Update the data length
  this._data.length = this._data.src.length;

  //Display the new data
  this.draw();

  //Return the removed element
  return removed;
};

//Cancel the element edit
jviz.modules.editableList.prototype.cancel = function(index)
{
  //Check the index
  if(typeof index === 'undefined'){ return this; }

  //Update the row
  this.row(index, false);

  //Return this
  return this;
};
