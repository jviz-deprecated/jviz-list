//Parse the columns list
jviz.modules.editableList.prototype.columns = function(list)
{
  //Check for array
  if(jviz.is.array(list) === false){ list = [ list ]; }

  //Parse all the columns
  list.map(function(el, index)
  {
    //Check for editable
    if(typeof el.editable === 'undefined'){ el.editable = true; }

    //Return the element
    return el;
  });

  //Save the columns
  this._columns.src = list;
};
