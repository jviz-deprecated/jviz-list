//Display the provided data
jviz.modules.editableList.prototype.data = function(data)
{
  //Check for undefined data
  if(typeof data === 'undefined'){ var data = this._data.src; }

  //Check the data
  if(jviz.is.array(data) === false){ data = [ data ]; }

  //Save the data
  this._data.src = data;

  //Return this
  return this;
};

//Get the actual data
jviz.modules.editableList.prototype.getData = function(index)
{
  //Check the index
  if(typeof index === 'undefined'){ return this._data.src; }

  //Return the data index
  return this._data.src[index];
};
