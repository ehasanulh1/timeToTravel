import { useEffect } from 'react';

const useTitle = title => {

    useEffect(()=>{
        document.title = `${title} - Time To Travel`
    },[title]);
};

export default useTitle;