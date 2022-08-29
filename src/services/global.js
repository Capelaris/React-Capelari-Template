import * as Storage from './storage';
import * as Network from 'expo-network';

module.exports = {
    App: null,

    url: async () => {
        let configs = JSON.parse(await Storage.getData('cacheConfigurations'));
        return configs.server_method + '://' + configs.server_ip + ':' + configs.server_port + '/datasnap/rest/';
    },

    Modules: {
        GESTAO_QUALIDADE: 'TSMGestaoQualidade',
    },

    FilterType: {
        TEXT : 'text',
        CHECK: 'check',
        DATE : 'date',
    },

    checkInternetConnection: async () => {
        let state = await Network.getNetworkStateAsync();
        return state.isInternetReachable && (state.type == Network.NetworkStateType.WIFI || state.type == Network.NetworkStateType.VPN);
    },

    formatRequestParams: (params) => {
        let param_string = '';
        for(let param in params) {
            param_string = param_string + '/' + encodeURIComponent(params[param]);
        }
        return param_string;
    },

    formatRequestParamsBody: (params) => {
        let body = {_parameters: []};
        for(let param in params) {
            body._parameters.push(params[param]);
        }
        return JSON.stringify(body);
    },

    formatMonetary: (price) => {
        let new_price = (price !== null && price !== undefined ? price : 0.0).toFixed(2);
        return 'R$ ' + new_price.toLocaleString('pt-BR').replace('.', ',');
    },

    formatPoints: (points) => {
        (typeof points === 'string') ? points = parseInt(points) : points = points
        let new_points = (points !== null && points !== undefined ? points : 0.0).toFixed(2);
        return new_points;
    },

    numberWithPoints: (number) => {
        var parts = number.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return parts.join(".");
    },

    /*firebaseApp: () => initializeApp({
        apiKey: "AIzaSyAeCrF6YbVNp0xE_4PldTLWCt92ZcofFTE",
        authDomain: "xpaper-16725.firebaseapp.com",
        projectId: "xpaper-16725",
        storageBucket: "xpaper-16725.appspot.com",
        messagingSenderId: "725110291406",
        appId: "1:725110291406:web:6428b1bc884307bdd9499f",
        measurementId: "G-G92ZF2DV8C"
    }),*/
};