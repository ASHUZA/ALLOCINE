import Card from    './Card'

function CardBlock () {

    return (


        <div className="container  Bloque d-flex justify-content-evenly ">
          <div className="row">
                <div className="col-xs-3 col-sm-3 col-12 col-md-3">
                        <Card />
                 </div>
                 <div className="col-xs-3 col-sm-3 col-12 col-md-3">
                        <Card />
                 </div>
                 <div className="col-xs-3 col-sm-3 col-12 col-md-3">
                        <Card />
                 </div>
                 <div className="col-xs-3 col-sm-3 col-12 col-md-3">
                        <Card />
                 </div>

                 <div className="col-xs-3 col-sm-3 col-12 col-md-3">
                        <Card />
                 </div>
                
            </div>
        </div>



    );
}

export default CardBlock;