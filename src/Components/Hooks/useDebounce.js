function useDebounce(e, delay = 2000){
    let timerId;
    return (...args)=> {
        console.log(...args);
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            e(...args);
        },delay);
    }
}

export default useDebounce;