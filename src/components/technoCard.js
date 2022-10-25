const TechnoCard = (props) => {
    const { techno, handleDelete } = props;
    return (
        <div className="card style-techno-card">
            <div key={techno.technoid}>
                <h4 className="text-center">{techno.name}</h4>
                <h4 className="text-center">Categorie</h4>
                <p className="text-center">{techno.categorie}</p>
                <h4 className="text-center">Description</h4>
                <p className="text-center">{techno.description}</p>
                <div className="container-delete-btn">
                    <button className="btn-delete" onClick={() => handleDelete(techno.technoid)}>Delete</button>
                </div>
            </div>
        </div>
    )

}
export default TechnoCard;

/*React Prop drilling*/