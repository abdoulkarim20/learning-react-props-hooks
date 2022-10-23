import { useState } from "react";

const AddTechno = (props) => {
    const [techno, setTechno] = useState({
        name: '',
        categorie: '',
        description: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTechno({ ...techno, [name]: value })
    }
    /*On utiliser la destructuring pour passer les props*/
    const { handleAddTechno } = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTechno(techno)
        setTechno({
            name: '',
            categorie: '',
            description: ''
        })
    }
    return (
        <div className="container add-techno">
            <h1 className="text-center">Je suis le formulaire pour ajouter une technologie a apprendre</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-control col-md-6 my-2">
                    <label htmlFor="techno-name" className="form-label">Nom de la technologie</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={techno.name}
                        onChange={(e) => handleChange(e)}
                        id="techno-name"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="form-control col-md-6 my-2">
                    <label htmlFor="techno-categorie" className="form-label">Technologie categorie</label>
                    <select
                        className="form-select "
                        aria-label="Default select example"
                        type="text"
                        name="categorie"
                        value={techno.categorie}
                        onChange={(e) => handleChange(e)}
                        id="techno-categorie"
                        aria-describedby="emailHelp"
                    >
                        <option value="Front End">Front End</option>
                        <option value="Back End">Back End</option>
                        <option value="Full Stack">Full Stack</option>
                    </select>
                </div>
                <div className="form-control my-2">
                    <label htmlFor="techno-description">Description</label>
                    <textarea
                        className="form-control"
                        placeholder="Description de votre maniere d'apprendre"
                        id="techno-description"
                        type="text"
                        name="description"
                        value={techno.description}
                        onChange={(e) => handleChange(e)}
                    >

                    </textarea>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Enregistrer</button>
                </div>
            </form>
        </div>
    )
}
export default AddTechno;