//Save the element
jviz.modules.editableList.prototype.save = function(index, obj)
{
  //Check the index
  if(typeof index === 'undefined'){ return; }

  //Check the object
  if(typeof obj === 'undefined'){ return; }

  //Save the element of the list
  this._data.src[index] = jviz.misc.extend(this._data.src[index], obj);

  //Update the element
  this.display(this._data.src[index], index, false);

  //Add the events
  this.btnEvents(index, false);
};
