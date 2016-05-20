#### Reducers
* Reducers take a state and an action, please default 
` = (state = {}, action = null) => {`
* There should be one reducer per root node in the State
* Reducer should use a switch to handle actions of interest ( unless you know how to do pattern matching, then teach me )
* Actions, again, are specified by **_constants_** found in /src/constants file
* State is **_IMMUTABLE_** so **_ALWAYS_** return a new object, either by using
    * ` return {...state, isExpanded: !item.isExpanded}` [using spread operator](http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html) or
    * `return Object.assign({}, state, isExpanded: !item.isExpanded)`
* **_ALWAYS_** return state as the last line or as the default of the switch.  This is so if an action doesn't meet your list state will return state
* Reducers should subsequently be exported from the **index.js** file