import './services.css'
import { GiBrain } from 'react-icons/gi'

const Services = () => {
    return (
        <section id='services'>
        <div className='container services_container'>
            <h1>Services</h1>
            <div className="services_cards">
                <article className="card">
                   <GiBrain className='card_icon'/>
                    <h3>Machine Learning</h3>
                    <p>Ei ole ketään joka rakastaa itse kipua, joka etsii sitä ja haluaa sitä vain siksi, koska se on kipua...</p>
                </article>
                <article className="card">
                    <GiBrain className='card_icon'/>
                    <h3>Game development</h3>
                    <p>Ei ole ketään joka rakastaa itse kipua, joka etsii sitä ja haluaa sitä vain siksi, koska se on kipua...</p>
                </article>
                <article className="card">
                    <GiBrain className='card_icon'/>
                    <h3>Data analytics</h3>
                    <p>Ei ole ketään joka rakastaa itse kipua, joka etsii sitä ja haluaa sitä vain siksi, koska se on kipua...</p>
                </article>
                <article className="card">
                    <GiBrain className='card_icon'/>
                    <h3>Automation</h3>
                    <p>Ei ole ketään joka rakastaa itse kipua, joka etsii sitä ja haluaa sitä vain siksi, koska se on kipua...</p>
                </article>

            </div>
            </div>
        </section>
    )
}

export default Services