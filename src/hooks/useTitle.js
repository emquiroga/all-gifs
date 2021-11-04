const { useEffect, useRef } = require("react");

export const useTitle = ({title}) => {
    const prevTitle = useRef(document.title)
    useEffect(() => {
        const previousTitle = prevTitle.current;
        document.title = `${title} - GifHub`
        return () => {document.title = previousTitle}
    }, [title]) 
}
