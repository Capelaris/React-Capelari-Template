import * as React from 'react';
import { User } from '../models';
import * as Storage from '../storage';

export const UserContext = React.createContext({
    user: null,
});

const getCacheUser = async () => {
    let userJson = await Storage.getData('cacheUser');

    let user = null;
    if (userJson !== null && userJson !== '' && userJson) {
        user = JSON.parse(userJson);
    }

    return user;
}

class UserContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.updateUser = async () => {
            let data = await getCacheUser();
            let logged = !data || data == null ? false : true;
            let user = !data || data == null ? null : new User(data);
            
            if (logged) {
                //user['usu_permissoes'] = await this.getUserPermissions(user['usu_codigo']);
            }

            this.setState({
                user    : user,
                isLogged: logged,
            });
        }

        /*this.getUserPermissions = async (usu_codigo) => {
            let permissions = [];
            
            if (usu_codigo == 0) {
                permissions = [
                    'prod.todas_maquinas',
                    'prod.visualizar_layout',
                    'prod.cancelar_processo',
                    'prod.atender_processo',
                    'prod.visualizar_paletizacao',
                    'prod.alterar_paletizacao',
                    'prod.abrir_solicitacao',
                    'prod.trocar_de_maquina',
                    'prod.iniciar_processo',
                    'prod.alterar_fila',
                    'prod.iniciar_qualquer_fila',
                    'mobile.modulo_recebimento',
                    'mobile.modulo_manutencao',
                    'mobile.modulo_inspecao_veicular',
                    'mobile.modulo_estoque_reservado',
                    'mobile.alterar_servidor',
                    'mobile.modulo_estoque_produtos',
                ];
            } else {
                let response = await Usuarios.buscaPermissoes(usu_codigo);

                if (response.status == 200) {
                    permissions = response.data.result[0];
                }
            }

            return permissions;
        }*/

        this.tryLogin = async (email, password) => {
            let user = null;
            let error = null;
            
            /*let response = await User.tryLogin(email, password);
            if (response.status == 200) {
                let json = response.data.result[0];
                if (json.error == 'false') {
                    user = new User(json.data);
                    await Storage.setData('cacheUser', JSON.stringify(user));
                } else {
                    error = json.error_type;
                }
            }*/

            this.setState({
                user    : !user || user == null ? null : user,
                isLogged: !user || user == null ? false : true,
            });

            return error;
        }

        this.logout = async () => {
            await this.setState({
                user    : {},
                isLogged: false,
            });

            await Storage.setData('cacheUser', '');
        }

        this.state = {
            user     : {},
            isLogged : false,
            functions: {
                updateUser        : this.updateUser,
                //getUserPermissions: this.getUserPermissions,
                tryLogin          : this.tryLogin,
                logout            : this.logout,
            }
        }
    }

    componentDidMount() {
        this.updateUser();
    }

    render() {
        return (
            <UserContext.Provider
                value={this.state}
            >
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserContextProvider;