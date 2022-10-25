import TechnoCard from "../components/technoCard";

const AllTechnos = (props) => {
    const { technos, handleDelete } = props;
    console.log('les technos ajouter depuis le formulaire sont:', technos);
    return (
        <div className="container add-techno">
            <h1>La liste de mes technologies</h1>
            <div className="techno-liste">
                {
                    technos.map(techno => (
                        <TechnoCard techno={techno} key={techno.technoid} handleDelete={handleDelete} />
                    ))
                }
            </div>
        </div>
    )
}

export default AllTechnos;