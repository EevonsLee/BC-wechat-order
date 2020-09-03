export default {
    _store:{},
    $on(event,cb){
        if(!this._store[event]){
            this._store[event]=[cb]
        }else{
            this._store[event].push(cb)
        }
    },
    $emit(event,...arg){
        this._store[event]&&this._store[event].forEach((cb) => {
                cb(...arg)
        });
    },
    delete(event){
        delete this._store[event]
    }
}