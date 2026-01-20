export  function ButtonDemo() {
    function handleDoubleClick() {
        window.open(`mobile-1.png`, `Mobile Image`, `width=600,height=400`);
    }
    function handleContextMenu() {
        document.oncontextmenu=()=>{
            alert("Right click disabled");
            return false;}
        // e.preventDefault();// Prevent the default context menu

        // alert("Right click is disabled on this page.");
    }
    function handleSelection() {
        document.onselectstart=()=>{
            alert("Text selection disabled");
            return false;}
    }
    return (
        <div>
            <h3>Button Event Demo</h3>
            <h1 style={{ userSelect: "none" }}>HIGHLY CONFIDENTIAL</h1>
            <p onSelectStart={handleSelection}> Right  click not allowed</p>
            <img src="mobile-1.png" alt="Mobile" onDoubleClick={handleDoubleClick}  onContextMenu={handleContextMenu} />

        </div>
    );
}