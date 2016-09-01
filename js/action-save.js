//Save the element
jviz.modules.editableList.prototype.save = function(index, obj)
{
  //Check the index
  if(typeof index === 'undefined'){ return; }

  //Check the object
  if(typeof obj === 'undefined'){ return; }

  //Save the element of the list
  this._data.src[index] = jviz.utils.extend(this._data.src[index], obj);

  //Update the element
  this.display(this._data.src[index], index, false);
};
