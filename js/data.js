//Display the provided data
jviz.modules.editableList.prototype.data = function(list)
{
  //Check for undefined list
  if(typeof list === 'undefined'){ return this._data.src; }

  //Check the data
  if(jviz.is.array(list) === false){ list = [ list ]; }

  //Save the data list
  this._data.src = list;

  //Save the number of data elements
  this._data.length = this._data.src.length;

  //Return this
  return this;
};

//Get an element
jviz.modules.editableList.prototype.element = function(index)
{
  //Check the index
  if(typeof index === 'undefined'){ return this._data.src; }

  //Return the data index
  return this._data.src[index];
};
