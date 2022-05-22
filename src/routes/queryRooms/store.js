import { observable, action} from 'mobx'

class Store {
    @observable num = 1
    @action
    setNum(num) {
        this.num = num
    }
}

export default new Store()