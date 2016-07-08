### Start me up!

    git clone git@bitbucket.org:mnv_tech/sls_frontend.git
    must use node >= 4.0
    cd sls_frontend
    npm install
    npm start
    navigate in browser to localhost:8080

### RUN ALL THE THINGS VIA DOCKER

    [ ! -d sls_frontend ] && git clone git@bitbucket.org:mnv_tech/sls_frontend.git
    [ ! -d sls_course_builder_api ] && git clone git@bitbucket.org:mnv_tech/sls_course_builder_api.git
    cd sls_frontend && make docker-build-node docker-build
    cd dockerNginx && docker-compose up -d
    open http://localhost:10080
    open http://localhost:10080/api

### Overview
#### React/Redux
* This application is built using react and redux
* The following will detail the data as it flows through the different pieces
* The pieces will be described in detail below

#### Data Flow

* The central premise of react and redux as well is to have a unidirectional data flow.  Redux makes it cyclical but it's still one way
* Data starts with at the Store, sometimes referred to as state.  It's a circle so the beginning spot is kind of arbitrary, none the less
* The store will be empty (unless you set some initial state) The first component that will be rendered will be of a type called Container
Component
    * Container Components
        * Container Components are charged with retrieving the state that that particular component hierarchy needs to display, form the store. The CC queryies the store for the specific state and transforms it if necessary.
        * If the CC finds that the store does not have the desired data, it is responsible for dispatching an action to retrieve the data, then it proceeds
        * CC then hands the data to the next component in the hierarchy.
        * The next component will be a "simple" or "dumb" or just "component" component
    * "Simple" Components
        * SC receive data from their parent. In this case the CC
        * The SC has three jobs
            * First to simply render that data accordingly
            * Second to pass data to it's children
             * Third is to dispatch any actions that result form dom elements it has rendered
         * When there is some interaction with the dom elements that the SC has rendered it will dispatch an action
    * Actions
        * An Action i a very simple javascript object that has a type and generally some data
        * We generally call an action factory to dispatch the action so we can add the data and whatever meta data we need
        * Actions are also used for async calls
            * Requests for data are made from the Container Component.
            * They are made by calling an action factory and passing the expected data, but also an object that specifies some api date (endpoint, method, headers, etc)
            * The action is picked up by the middleware and a "request pending" action is fired so you can put up a little spinny thing
            * When the promise ( thunk actually ) resolves another action will be fired, either success or failure with the corresponding data
    * Reducers
        * The job of the reducer is to take new data and update ( immutably ) the store
        * The reducer is/acts as a switch statement that filters ( on action.type ) for the actions that it is interested in.
        * When an action that concerns this reducer is received the reducer forwards it to a handler
        * The action generally has data in it, but sometimes just the fact that an action has been fired is the data it's self e.g. LOGIN_REQUEST_PENDING -> show spinny thing
        * The handlers receive a copy of the slice of the store that they are concerned with as well as the action.
        * They then decide what changes they would like to make to the store and do so but IMMUTABLY
        * The patterns for immutably updating the store are shown below under reducers
    * Store
        * Often the reducers are referred to as the store.  But technically they are the updating methods for the store
        * You do not interact with the store through any other means.  I mention it here seperately just to complete the chain
        * When the store is updated, the Container Components that are mapped to the slice of store that has changed are notified and they get the new state.  They pass that state down to the components and the cycle begins again




### Sections

#### Actions
* Actions are really action factories that return an action ( simple anon obj )
* Action **_type_** is required and should be a **_constant_** from the /src/constants file
* Actions should subsequently be exported from the **index.js** file

#### Components
* Except in special cases (explained subsequently), components should be simple anonymous functions
* The format is as follows I will explain line by line
    * ```export default ({index, title, summary, assignments, id, isExpanded, onChapterClick}) => (
        <li>
            <ChapterTitle index={index} title={title} id={id} onChapterClick={onChapterClick} />
            {isExpanded ? <div className="">
                <p>{summary}</p>
                <Assignments id={id} />
            </div>: null}
        </li>)
    * `export default ({index, title, summary, assignments, id, isExpanded, onChapterClick}) => (`
        * Here we export a function that takes a destucturing of state and actions from the parent
        * The very last parameter is an action
        * These properties and actions are available to the component
    * `<li className='someClass'>`
        * Simple html element except that instead of using class attr it uses className attr because class is reserved word in js
    * `<ChapterTitle index={index} title={title} id={id} onChapterClick={onChapterClick} />`
        * Here is another one of our components.
        * We are passing it several pieces of state that we received form our parent.
        * This is how state and actions are handed down. From container element to all subsequent children
        * This ChapterTitle component will look very similar to ours, except it will only have access to the state that we specify here
        * It in turn may pass some of this state to it's children
        * You can pass all the properties of an object to a component using destructuring if you like as so
            * `<ChapterTitle index={index} title={title} id={id} onChapterClick={onChapterClick}  {...someObjectPasseFromParent}/>`
        * As you can see this could become very verbose which is a good argument for using multiple Container elements that handle state for just a little part of the ui
    * `  {isExpanded ? <div className="">`
        * Here we use some logic.  Very little logic is allowed in the JSX.  And for conditionals you must use the terinary form like this.  You also must surround with curlies
        * if you want to do just if, rather than if then then return null rather that "" in the second position
    * ` <p>{summary}</p>`
        * Here we simply display a piece of text we received as a property
    * The rest is standard fair just closing up our html
* There is another syntax which is used, while it is slightly more verbose it affords us the opportunity to write some javascript before we get to the JSX
    * ```export default ({index, title, summary, assignments, id, isExpanded, onChapterClick}) => {
        console.log('I have arrived!!!');
        return (
            <li>
            </li>
        )}

    * This is fairly self explanatory

##### Special Components
* Some components will need to retrieve data from the server before rendering.  As I think that I will wrap this up in the container I will forgo documentation right now, but the Course component is doing it now

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

#### Api Middleware
* The api middleware listens to all actions ( much as the reducers do ) and when it sees an action that has the special property ( symbol actually ) Symbol('Call API') it knows that this is an api call.  If it does not find this property it mearly calls next(action) and passes it down the line
* the call_api object has meta data about the api being called. The are
    * method -> "POST", "GET"
    * endpoint -> the endpoint to hit ( the base url is specified in the config )
    * schema -> this is then name of the schema that is associated with the entityType beleow
        * I don't like this and will refactor so entityType or schema will suffice for both
    * entityType -> this is the "type" of the node on the store that will be updated by this call
    * types -> here you will register the three actions to be called
        * '[COURSE]_REQUEST' -> so 'COURSE_REQUEST' but the COURSE part will change for each api call
        * '[COURSE]_SUCCESS'
        * '[COURSE]_FAILURE'
        * you must list them in this order ( request, success, failure )
        * I do not like this and will refactor it so your actions consist of the entityType + 'REQUEST' etc so you never have to worry about this, but till then, worry
        * authenticated -> not currently implemented ( but the code is there ) I'm sure we'll want it
    * method, entityType, types, authenticated

##### Testing
* Test directory structure should mirror src directory
* To run tests,
    * In a console nav to the root dir where package.json lives
    * Type npm test
    * Tests will be run in Watch mode you can ctrl c to get out it
* The libraries used are
    * Mocha -install globally unless this is offensive to you in which case I understand and will fix it
    * [Chai](http://chaijs.com/api/bdd/)  (should) ( link to api )
    * [Enzyme](http://airbnb.io/enzyme/docs/api/shallow.html) ( link to api )
       *Enzyme is used for testing react components.
       *It is not necessary when testing pure functions
* Please follow the when… it.... Should… format that is already present in the existing tests.
