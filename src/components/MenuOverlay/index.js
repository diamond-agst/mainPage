import React, {useRef, useState, useEffect} from "react";
import "./styles.scss"

function MenuOverlay({items, setCur, setMenu, fiat}) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setMenu(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside, {passive: true});
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside, {passive: true});
      };
    }, [ref]);
  }
    const [search, setSearch] = useState('')
    function getListCurImg(cur) {
        const imgId = items.find((item) => 
            item.shortName === cur
        )
          try { return `https://gw.indacoin.io/api/v1/Data/Currencies/${imgId.id}/Icon` }
          catch (err) { return null }
      }
      function itemsMenu() {
        return items.filter(item => {
          return item.shortName.toLowerCase().includes(search.toLowerCase())
        })
      }
  return (
    <div ref={wrapperRef} className="menuBlock">
        <h1 className="headingMenu">Select fiat currency</h1>
        <div className="searchBlock">
            <p>Search</p>
            <input onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <div className="menuList" style={!fiat ? itemsMenu().length > 42 ? {height: "80%"}: null : null}>
            {itemsMenu().map(item => {
                return(
                    <div onClick={() => {
                        setCur(item.shortName)
                        setMenu(false)
                        }} style={{display: "flex", cursor: "pointer"}}>
                        <img alt="" className="curImageMenu" width={24} height={24} src={getListCurImg(item.shortName)} style={{marginRight: 8}}/>
                        <p>{item.shortName}</p>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default MenuOverlay;
