//Parse the columns list
jviz.modules.editableList.prototype.columns = function(list)
{
  //Check for array
  if(jviz.is.array(list) === false){ list = [ list ]; }

  //Parse all the columns
  list.map(function(el, index)
  {
    //Check the key
    if(typeof el.key === 'undefined'){ throw new Error('No key on column ' + index); } 
    //Inpiut type
    if(typeof el.type === 'undefined'){ el.type = 'text'; }

    //Options
    if(typeof el.options === 'undefined'){ el.options = []; }

    //Check for editable
    if(typeof el.editable === 'undefined'){ el.editable = true; }

    //Check the detail function/string
    if(typeof el.detail === 'undefined'){ el.detail = ''; }

    //Check the column input helper
    if(typeof el.helper === 'undefined'){ el.helper = ''; }

    //Return the element
    return el;
  });

  //Save the columns
  this._columns.src = list;
};
