import React from 'react'
const useOutsideFocus = (ref, stateSetter) => {
    React.useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                stateSetter(null)
            }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
              document.removeEventListener("mousedown", handleClickOutside);
              // remove listener on cleanup
          };
    },[])
}

export default useOutsideFocus