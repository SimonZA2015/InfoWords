import Constructor from "../data/Functions/Constructor";
import GetStringsBase from "../data/Functions/GetStringsBase";

let store = {

    rerender: () => {},

    input2: GetStringsBase(0),
    //offline text input
    input: ['Привет, как дела?', 'Hello, How do u do?'],

    dispatch(active) {
      switch (active.type) {
          case 'GET-RESULT':
              alert(this.input2)
              return(Constructor(this.input));

          case 'GET-WORDS':
              this.input = GetStringsBase(active.text);
              this.rerender();
              break

          default:
              break
      }
    },

    observer(subscriber) {
        this.rerender = subscriber();
        subscriber();
    },
};

window.store = store;


export default store;