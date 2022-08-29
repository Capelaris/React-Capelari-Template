module.exports = {
    root: true,
    extends: '@react-native-community',
    plugins: ['import', 'react-hooks'],
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                alias: {
                    _assets: './src/assets',
                    _components: './src/components',
                    _atoms: './src/components/atoms',
                    _helpers: "./src/helpers",
                    _scenes: './src/scenes',
                    _services: './src/services',
                    _styles: './src/styles',
                    _validates: './src/validates',
                    _utils: './src/utils',
                },
            },
        },
    },
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};