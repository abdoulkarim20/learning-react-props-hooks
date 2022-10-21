const AddTechno = () => {
    return (
        <div className="add-techno">
            <h1>Je suis le formulaire pour ajouter une technologie a apprendre</h1>
            <form>
                <label htmlFor="techno-name">Nom de la technologie</label><br />
                <input name="techno-name" id="techno-name" placeholder="techno-name" /><br/>
                <label htmlFor="tech-categore">Categorie de la technologe</label><br />
                <select name="techno-categorie" id="tech-categore">
                    <option>Selectionner une categorie</option>
                    <option value="Front">Front</option>
                    <option value="Back">Back</option>
                    <option value="FullStack">FullStack</option>
                    <option value="Autre">Autre</option>
                </select><br/>
                <label htmlFor="techno-description"></label>Description de la technologie<br />
                <textarea name="techno-description" id="techno-description">

                </textarea><br/>
                <button>Annuler</button>
                <button>Enregistrer</button>
            </form>
        </div>
    )
}
export default AddTechno;