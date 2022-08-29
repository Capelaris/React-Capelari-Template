import { default as Model } from './model';

class User extends Model {
    _primary_key = 'usu_codigo';

    _table = 'usuarios';

    _create_timestamp = 'usu_cadastro';
    _update_timestamp = 'usu_atualizado';

    _fields = [
        'usu_codigo',
        'usu_email',
        'usu_login',
        'usu_senha',
        'pes_codigo',
        'usu_remember_token',
        'usu_cadastro',
        'usu_atualizado',
        'emp_codigo',
        'pes_razao',
        'pes_fantasia',
        'usu_permissoes',
    ];

    constructor(values = {}) {
        super();
        this._parse(values);
    }
}

export default User;