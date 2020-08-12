import React from 'react';
import '../components/styles/InsigniaNueva.css'
import Navbar from '../components/Navbar.jsx'
import LogoHeader from '../imagenes/customLogo.png'
import Insignia from '../components/Insignia.jsx'
import InsigniaFormulario from '../components/InsigniaFormulario';

class InsigniaNueva extends React.Component{
    state ={
        form: {
            firstName:'',
            lastName:'',
            ocupacion:'',
            email:'',
            twitter:'',
        }
    }

    handleChange = e =>{
        const nextForm = this.state.form
        nextForm [e.target.name] = e.target.value
        this.setState({
            form: nextForm,
        })
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className='header'>
                    <img className='img-fluid' src={LogoHeader} alt='Logo'/>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Insignia 
                                  firstName={this.state.form.firstName}
                                  lastName={this.state.form.lastName}
                                  ocupacion={this.state.form.ocupacion}
                                  email={this.state.form.email}
                                  twitter={this.state.form.twitter}
                                  URLAvatar='https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14042.jpg'

                            />
                        </div>

                        <div className='col-6'>
                            <InsigniaFormulario onChange={this.handleChange} formValues={this.state.form}/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default InsigniaNueva;