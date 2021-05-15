import '../scss/InputSearch.scss';


const InputSearch = (props) => {

  // onChange={searchmovies}
  return (


    <>


<div className="InputSearch">
<input className="c-checkbox" type="checkbox" id="checkbox"/>
<div className="c-formContainer">
  <form className="c-form" action="">
    <input className="c-form__input" placeholder="" type="text"  />
    <label className="c-form__buttonLabel" for="checkbox">
      <button className="c-form__button" type="button">Chercher</button>
    </label>
    <label className="c-form__toggle" for="checkbox" data-title="Chercher un film"></label>
  </form>
</div>
</div>
    </>

  );
}
export default InputSearch;

