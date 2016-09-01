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

  //Display the new data
  this.data(this._data.src);

  //Return the removed element
  return removed;
};
