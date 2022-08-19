import { Formik, Field, Form } from 'formik';
import '../styles/Formulario.css';
import * as Yup from 'yup';
import emailjs from 'emailjs-com'

const Formulario = () => {

    function enviarEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_yaxcjw5', 'template_sd726h1', e.target, 'WtWC_jshAxsOlwLuT').then(res=>{
        alert("Se ha enviado el formulario");
        console.log(res);
        function resetForm(){
            document.getElementById("formulario").reset();
        }
        resetForm();

    })
}
    

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
                .min(3,'El nombre es muy corto')
                .max(30,'El nombre es muy largo')
                .required('El nombre es requerido'),
        email: Yup.string()
                  .email('El email no es valido')
                  .required('El email es requerido'),
        telefono: Yup.number()
                     .integer('El telefono debe ser un numero entero')
                     .positive('Numero no valido'),
        
        comentarios: Yup.string()
                       .required('Los comentarios sobre su problema electrico son requeridos')
                       .min(2,'Los comentarios son muy cortos')
                       .max(50,'Los comentarios son muy largos')
    })

   
  return (
    <div>
        <Formik
        initialValues={{
            nombre: '',
            email: '',
            telefono: '',
            
            comentarios: ''
        }}
       
        
    
        validationSchema={nuevoClienteSchema}
        >
            {({errors, touched}) => {

                return (
            <Form 
            onSubmit={enviarEmail}
            className='form'
            id='formulario'
            >
                
                <Field
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre:"
                    className="form-input"
                />
                {errors.nombre && touched.nombre ? (
                    <div className="error">{errors.nombre}</div>
                     ) : null}
                
                <Field
                    type="number"
                    id="telefono"
                    name="telefono"
                    placeholder="Numero Telefonico:"
                    className="form-input"
                />
                 
               
                <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Correo:"
                    className="form-input"
                />
                {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                     ) : null}
               
                <Field
                    type="text"
                    id="comentarios"
                    name="comentarios"
                    placeholder="Comentarios:"
                    className="form-input"
                />                
                <input type="submit" value="Enviar" className="form-submit"/>
            </Form>
          )}}

        </Formik>
      
    </div>
  )
}

export default Formulario
