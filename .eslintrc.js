module.exports = {
  extends: ['plugin:vue/strongly-recommended', 'plugin:prettier/recommended', 'vue-global-api'],
  // add your custom rules here
  rules: {
    // ...other codes
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-indent': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-template-shadow': 'off'
  }
};
