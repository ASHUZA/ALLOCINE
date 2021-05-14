import '../scss/InputSearch.scss';


const InputSearch = (props) => {


  return (


    <>



<input className="c-checkbox" type="checkbox" id="checkbox"/>
<div className="c-formContainer">
  <form className="c-form" action="">
    <input className="c-form__input" placeholder="E-mail" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required/>
    <label className="c-form__buttonLabel" for="checkbox">
      <button className="c-form__button" type="button">Send</button>
    </label>
    <label className="c-form__toggle" for="checkbox" data-title="Notify me"></label>
  </form>
</div>
    </>

  );
}
export default InputSearch;

