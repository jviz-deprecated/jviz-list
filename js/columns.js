//Parse the columns list
jviz.modules.editableList.prototype.columns = function(list)
{
  //Check for undefined columns
  if(typeof list === 'undefined'){ return this._columns.src; }

  //Check for array
  if(jviz.is.array(list) === false){ list = [ list ]; }

  //Reset the columns list
  this._columns.src = [];

  //Parse all the columns
  for(var i = 0; i < list.length; i++)
  {
    //Get the element
    var el = list[i];

    //Check the column key
    if(typeof el.key !== 'string'){ continue; }

    //Check the element type
    el.type = (typeof el.tyle === 'string') ? el.type : 'text';

    //Check for editable column
    el.editable = (typeof el.editable === 'boolean') ? el.editable : true;

    //Check the detail function or string
    el.detail = (typeof el.detail !== 'undefined') ? el.detail : '';

    //Checl the helper function or string
    el.helper = (typeof el.helper !== 'undefined') ? el.helper : '';

    //Check the options
    el.options = (typeof el.options !== 'undefined') ? el.options : [];

    //Check for visible column
    el.visible = (typeof el.visible === 'boolean') ? el.visible : true;

    //Save the column
    this._columns.src.push(el);
  }

  //Save the number of columns
  this._columns.length = this._columns.src.length;

  //Return this
  return this;
};
