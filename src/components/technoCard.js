const TechnoCard = (props) => {
    const { techno } = props;
    return (
        <div className="card style-techno-card">
            <div key={techno.technoid}>
                <h4 className="text-center">{techno.name}</h4>
                <h4 className="text-center">Categorie</h4>
                <p className="text-center">{techno.categorie}</p>
                <h4 className="text-center">Description</h4>
                <p className="text-center">{techno.description}</p>
            </div>
        </div>
    )

}
export default TechnoCard;