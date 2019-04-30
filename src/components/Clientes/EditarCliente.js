import React, {Component, Fragment} from 'react';
import { CLIENTE_QUERY } from '../../queries';
import { Query } from 'react-apollo';
import FormularioEditarCliente from './../Clientes/FormularioEditarCliente'
import { ACTUALIZAR_CLIENTE } from '../../mutations';


class EditarCliente extends Component {
    state = { }
    render() {

        // Tomar el id del contacto a editar
        const { id } = this.props.match.params;

        return (
            <Fragment>
                <h2 className="text-center">Editar Cliente</h2>

                <div className="row justify-content-center">
                    <Query query={CLIENTE_QUERY} variables={{id}} refetchQueries=
                    {ACTUALIZAR_CLIENTE}>
                        {({ loading, error, data, refetch }) => {
                            if(loading) return 'cargando...';
                            if(error) return `Error! ${error.message}`
                            
                            console.log(data.getCliente)
                            return (
                                <FormularioEditarCliente 
                                    cliente={data.getCliente}
                                    refetch={refetch}/>
                            );

                        }}
                    </Query>
                </div>

            </Fragment>

        );
    }


}

export default EditarCliente;