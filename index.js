module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
  },
  plugins: ['jest'],
  globals: {
    _: false,
    I18n: false,
    t: false,
    $: false,
  },
  rules: {
    'no-console': 0,
    'no-param-reassign': 0,
    'valid-jsdoc': 0,
    'spaced-comment': 0,
    'key-spacing': 0,
    'padded-blocks': 0,
    'react/react-in-jsx-scope': 0,
    'comma-dangle': [1, 'always-multiline'],
    'no-multi-spaces': 0,
    'max-len': 0,
    'prefer-template': 0,
    'react/jsx-boolean-value': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-eval': 0,
    curly: 0,
    'react/sort-comp': 0,
    'react/prop-types': 0,
    'react/no-danger': 0,
    'react/no-children-prop': 0,
    'react/prefer-stateless-function': [
      0,
      {
        ignorePureComponents: true
      }
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'import/extensions': 0,
    'import/no-unresolved': [
      2,
      {
        ignore: ['~.+'],
      },
    ],
    'arrow-parens': [1, 'as-needed'],
    'new-cap': 0,
    'no-unused-vars': [
      1,
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
};
