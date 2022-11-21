import './studies.css'

const Studies = () => {
    return (
        <section id="studies">

            <div className='container studies_container'>
                <h1>Studies</h1>
                <div className='studies_flex'>
                    <div className='studies_image'>
                        <h1>Aqui va una immagen</h1>
                    </div>
                    <div className='studies_list'>
                        <div className='studies_list_element'>
                            <h3>Curso</h3>
                            <h4>Detalles</h4>
                        </div>
                        <div className='studies_list_element'>
                            <h3>Curso</h3>
                            <h4>Detalles</h4>
                        </div>
                        <div className='studies_list_element'>
                            <h3>Curso</h3>
                            <h4>Detalles</h4>
                        </div>
                        <div className='studies_list_element'>
                            <h3>Curso</h3>
                            <h4>Detalles</h4>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Studies