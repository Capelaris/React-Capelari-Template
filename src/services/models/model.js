import { lowerCase } from "lodash";

class Model {
    _primary_key = 'id';

    _fields = [];

    _table = '';

    _create_timestamp = 'created_at';
    _update_timestamp = 'updated_at';

    key = '';

    _parse(values = {}) {
        let field_names = [...this._fields, ...[this._primary_key, this._create_timestamp, this._update_timestamp]];

        Object.keys(values).forEach(field_name => {
            if (lowerCase(field_names).includes(lowerCase(field_name))) {
                this[lowerCase(field_name).replace(/\s/g, '_')] = values[field_name];
            }
        });

        this._generateRandomKey();
    }

    _generateRandomKey() {
        this.key = (Math.random() + 1).toString(36).substring(3);
    }
}

export default Model;