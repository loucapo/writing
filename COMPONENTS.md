#### Components
* Except in special cases (explained subsequently), components should be simple anonymous functions
* The format is as follows I will explain line by line
    * ```
export default ({index, title, summary, assignments, id, isExpanded, onChapterClick}) => (
        <li>
            <ChapterTitle index={index} title={title} id={id} onChapterClick={onChapterClick} />
            {isExpanded ? <div className="">
                <p>{summary}</p>
                <Assignments id={id} /> 
            </div>: null}
        </li>
    );
```
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
    * ```
    export default ({index, title, summary, assignments, id, isExpanded, onChapterClick}) => {
        console.log('I have arrived!!!');
        return (
            <li>
            </li>
        )
    }
```
    * This is fairly self explanatory

#### Special Components
* Some components will need to retrieve data from the server before rendering.  As I think that I will wrap this up in the container I will forgo documentation right now, but the Course component is doing it now
