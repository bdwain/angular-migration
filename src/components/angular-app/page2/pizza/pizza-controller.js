import lodash from 'lodash';

class Controller{
  getArray(){
    return _.range(this.count);
  }
}

export default Controller;