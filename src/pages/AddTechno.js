const AddTechno = (props) => {
    /*On utiliser la destructuring pour passer les props*/
    const { handleAddTechno } = props;
    const techno = {
        name: "REACT",
        categorie: "Front End",
        description: "Objectif devenir MERN STACK"
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTechno(techno)
    }
    return (
        <div className="add-techno">
            <h1 className="text-center">Je suis le formulaire pour ajouter une technologie a apprendre</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-control col-md-6 my-2">
                    <label for="techno-name" className="form-label">Nom de la technologie</label>
                    <input type="email" className="form-control" id="techno-name" aria-describedby="emailHelp" />
                </div>
                <div className="form-control col-md-6 my-2">
                    <select className="">

                    </select>
                </div>
                <div className="form-control my-2">
                    <textarea>

                    </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default AddTechno;