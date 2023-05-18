function Bookmark(){
    return (
        <div id="myLinks">
            <div className="addOrRemove">
                <button type='button' id="addLinkBtn">+</button>
                <button type='button' id="removeLinkBtn">−</button>
            </div>
            <div className="addLink">
                <form className="addLinkForm">
                    <input type="textarea" placeholder="Title" id="formTitle" />
                    <input type="textarea" placeholder="URL" id="formURL" />
                    <button type='button' id="addFormBtn">Add</button>
                </form>
            </div>
            <div id="allLinks"></div>
        </div>
    )
}

export default Bookmark