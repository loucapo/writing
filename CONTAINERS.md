#### Containers
* A container's job is to get all the state from the store and all the actions that it's slice of the ui cares about and then hand it to the simple components
* There is a very helpful factory that handles most of it.
* Pass the library
    * _(optional)_ An array of the root level store items you need as strings
    * _(optional)_ A transform function to refine the data from the store
    * _(optional)_ A mapDispatchToProps
        * `function mapDispatchToProps(dispatch) {
             return bindActionCreators({ onChapterClick:expandChapter }, dispatch)
          }`

* Then pass the top level component to the result
    * `export default container(['chapters', 'assignments'], transform, mapDispatchToProps)(Assignments);`
    
##### CombineRouters
* In the index.js file you will find a function called **combineReducers** which takes a hash with a key for every root node in your store
* For each root node 
    * Either assign a reducer
        * Reducer will receive this root store node as it's **_state_** parameter 
    * Or the following function `(state = {}) => state`
        * This will just always return the store node unaltered
* If you add a new root node to the store and do not provide the above you will get an error