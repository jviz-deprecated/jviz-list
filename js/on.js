//Register events
jviz.modules.editableList.prototype.on = function(name, cb)
{
  //Check the name
  if(typeof name === 'undefined'){ return; }

  //Check the callback function
  if(typeof cb !== 'function'){ return; }

  //Register the new event
  this._events[name] = cb;
};

//Call the events
jviz.modules.editableList.prototype.onCall = function(name)
{
  //Check the event
  if(typeof this._events[name] !== 'function'){ return; }

  //Initialize the arguments array
  var args = [];

  //Read all the arguments
  for(var i = 1; i < arguments.length; i++){ args.push(arguments[i]); }

  //Call the event
  var out = this._events[name].apply(null, args);

  //Check for not boolean
  if(typeof out !== 'boolean'){ return true; }

  //Default, return the boolean
  return out;
};
